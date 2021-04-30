<template>
    <div class="p-3">
        <div v-if="!waktuSolat && isLoading">
            loading...
        </div>
        <div v-else-if="!waktuSolat && isError">
            error
        </div>
        <div v-else>
            

            <h2>{{ getZone(zoneId).state }}</h2>
            <b-form-select v-model="zoneId" :options="options" @change="getWaktuSolat(interval, zoneId)"></b-form-select>

            {{waktuSolat[0].date}}
            {{waktuSolat[0].day}}

            <p>Imsak {{waktuSolat[0].imsak}}</p>
            <p>Subuh {{waktuSolat[0].fajr}}</p>
            <p>Syuruk {{waktuSolat[0].syuruk}}</p>
            <p>Zuhur {{waktuSolat[0].dhuhr}}</p>
            <p>Asar {{waktuSolat[0].asr}}</p>
            <p>Maghrib {{waktuSolat[0].maghrib}}</p>
            <p>Isyak {{waktuSolat[0].isha}}</p>

            <!-- <b-table :items="zones"></b-table> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import json from "@/assets/json/zone.json";

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
            zones: json.zones,
            options: []
        }
    },
    mounted() {
        this.getWaktuSolat(this.interval, this.zoneId);

        this.populateZoneSelect(this.zones);
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
        populateZoneSelect(zones) {
            var options = [];
            
            for(var i in zones) {
                options.push({
                    'value': zones[i].id,
                    'text': zones[i].name
                });
            }
            options.push = {
                    'value': 'asdad',
                    'text': 'afaff'
                };

            this.options = options;
            // need to group by state
        }
    }
}
</script>

<style>
    body {
        background: #EFEFBB;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #D4D3DD, #EFEFBB);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #D4D3DD, #EFEFBB); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }
</style>