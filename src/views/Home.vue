<template>
    <div class="p-3 max-width">
        <div v-if="!waktuSolat && isLoading">
            loading...
        </div>
        <div v-else-if="!waktuSolat && isError">
            error
        </div>
        <div v-else>
            <div class="m-1">
                <h2>{{ getZone(zoneId).state }}</h2>
            </div>
            
            <div class="box">
                <b-form-select v-model="zoneId" :options="options" class="mb-4" @change="getWaktuSolat(interval, zoneId)"></b-form-select>

                <div class="px-3">
                    <h4>{{waktuSolat[0].day}}</h4>
                    <p>{{waktuSolat[0].date}}</p>    
                        
                    <div class="d-flex flex-wrap">
                        <div class="box-muted"><b>Imsak</b> {{waktuSolat[0].imsak}}</div>
                        <div class="box-muted"><b>Subuh</b> {{waktuSolat[0].fajr}}</div>
                        <div class="box-muted"><b>Syuruk</b> {{waktuSolat[0].syuruk}}</div>
                        <div class="box-muted"><b>Zuhur</b> {{waktuSolat[0].dhuhr}}</div>
                        <div class="box-muted"><b>Asar</b> {{waktuSolat[0].asr}}</div>
                        <div class="box-muted"><b>Maghrib</b> {{waktuSolat[0].maghrib}}</div>
                        <div class="box-muted"><b>Isyak</b> {{waktuSolat[0].isha}}</div>
                    </div>
                </div>
            </div>

            <!-- <b-table :items="zones"></b-table> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import zoneJson from "@/assets/json/zone.json";
import stateJson from "@/assets/json/state.json";

const $ = axios.create({
    baseURL:'https://www.e-solat.gov.my/index.php?r=esolatApi/'
});

export default {
    data() {
        return {
            isLoading: true,
            isError: false,
            zoneId: 'WLY01',
            interval: 0, /** 0=today, 1=week, 2=month, 3=year */
            waktuSolat: null,
            zones: zoneJson.zones,
            states: stateJson.states,
            options: []
        }
    },
    mounted() {
        this.getWaktuSolat(this.interval, this.zoneId);

        this.populateZoneSelect(this.zones, this.states);
    },
    methods: {
        getZone(id) {
            return this.zones.find(zone => zone.id === id);
        },
        async getWaktuSolat(interval, zone) {
            var period;

            switch(interval) {
                case 0:
                    period = 'today';
                    break;
                case 1:
                    period = 'week';
                    break;
                case 2:
                    period = 'month';
                    break;
                case 3:
                    period = 'year';
                    break;
                default:
                    period = 'today'
            }

            await $.get(`TakwimSolat&period=${period}&zone=${zone}`).then(
                response => {
                    if(response.status == "200" && response.data.status =="OK!") {
                        this.waktuSolat = response.data.prayerTime;
                        this.isLoading = false;
                        this.isError = false;

                        console.log(this.waktuSolat);
                    } else {
                        this.isLoading = false;
                        this.isError = true;
                        window.alert('Error');
                    }
                }
            ).catch(() => {
                this.isLoading = false;
                this.isError = true;
                window.alert('Error');
            });
        },
        populateZoneSelect(zones, states) {
            var options = [];
            var stateZone = [];
            
            for(var i in states) {
                stateZone = [];

                // find better way to filter this
                // this is bad for performance
                for(var j in zones) {
                    if(zones[j].state == states[i]) {
                        stateZone.push({
                            'value': zones[j].id,
                            'text': zones[j].name
                        });
                    }
                }

                options.push({
                    'label': states[i],
                    'options': stateZone
                });
            }
            

            this.options = options;

            console.log(this.options);

            // need to group by state
        }
    }
}
</script>

<style>
.max-width {
    max-width: 980px;
}
.box, .box-muted {
    border-radius: .75em;
    padding: .5em .5em;
    margin: .25em;
    color: #437880;
}

.box {
    background: #fff;
}

.box-muted {
    background: #eff4f5;
}

select {
    background-color: #eff4f5 !important;
    color: #437880 !important;
    border: 2px solid #eff4f5 !important;
    border-radius: .5em !important;
}
</style>