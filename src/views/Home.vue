<template>
    <div>
        <div v-if="!waktuSolat && isLoading">
            loading...
        </div>
        <div v-else-if="!waktuSolat && isError">
            error
        </div>
        <div v-else>
            {{zoneName}}
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
            zoneName: '',
            interval: 0, /** 0=today, 1=week, 2=month, 3=year */
            waktuSolat: null,
            zones: json.zones
        }
    },
    mounted() {
        this.getWaktuSolat(this.interval, this.zoneId);

        this.zoneName = this.getZone(this.zoneId).name;
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
        }
    }
}
</script>

<style>

</style>