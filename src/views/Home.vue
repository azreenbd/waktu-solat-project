<template>
    <div class="p-3 max-width">
        <div v-if="!waktuSolat && isLoading">
            loading...
        </div>
        <div v-else-if="!waktuSolat && isError">
            error
        </div>
        <div v-else>
            <div class="d-flex align-items-end m-1 mb-3">
                <!-- Custom svg -->
                <svg width="5em" height="5em" class="mr-1" viewBox="0 0 300 375" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;margin-bottom:.08em"><g><g><path d="M57.727,267.729c-2.664,-0 -4.509,-1.333 -5.534,-3.997l-11.145,-28.44c-0.667,-1.794 -0.628,-3.305 0.115,-4.535c0.743,-1.23 2.062,-1.845 3.958,-1.845c1.128,0 2.05,0.269 2.768,0.807c0.717,0.538 1.332,1.55 1.844,3.036l8.455,23.137l8.686,-23.752c0.82,-2.152 2.28,-3.228 4.381,-3.228c2.153,0 3.613,1.076 4.382,3.228l8.685,23.982l8.532,-23.597c0.513,-1.384 1.166,-2.332 1.961,-2.844c0.794,-0.513 1.678,-0.769 2.651,-0.769c1.845,0 3.049,0.653 3.613,1.96c0.564,1.307 0.512,2.78 -0.154,4.42l-11.068,28.44c-1.076,2.664 -2.921,3.997 -5.535,3.997c-2.715,-0 -4.56,-1.333 -5.534,-3.997l-7.84,-20.831l-7.686,20.754c-0.974,2.716 -2.819,4.074 -5.535,4.074Z" style="fill:#fff;fill-rule:nonzero;"/><path d="M120.372,267.883c-2.716,-0 -5.137,-0.526 -7.264,-1.576c-2.126,-1.051 -3.792,-2.473 -4.996,-4.266c-1.204,-1.794 -1.806,-3.818 -1.806,-6.073c-0,-2.767 0.717,-4.957 2.152,-6.571c1.435,-1.615 3.766,-2.78 6.995,-3.498c3.228,-0.717 7.558,-1.076 12.99,-1.076l2.69,0l0,-1.614c0,-2.562 -0.564,-4.407 -1.691,-5.534c-1.127,-1.128 -3.023,-1.691 -5.688,-1.691c-1.486,-0 -3.087,0.179 -4.804,0.538c-1.717,0.358 -3.523,0.973 -5.419,1.844c-1.23,0.564 -2.255,0.628 -3.074,0.193c-0.82,-0.436 -1.371,-1.128 -1.653,-2.076c-0.282,-0.948 -0.231,-1.909 0.154,-2.882c0.384,-0.974 1.165,-1.691 2.344,-2.152c2.357,-0.974 4.625,-1.666 6.803,-2.076c2.177,-0.41 4.163,-0.615 5.957,-0.615c5.483,0 9.556,1.269 12.221,3.805c2.665,2.537 3.997,6.47 3.997,11.799l0,18.447c0,3.28 -1.486,4.92 -4.458,4.92c-3.023,-0 -4.535,-1.64 -4.535,-4.92l-0,-1.691c-0.871,2.101 -2.255,3.754 -4.151,4.958c-1.896,1.204 -4.151,1.807 -6.764,1.807Zm1.999,-6.611c2.51,0 4.599,-0.871 6.264,-2.613c1.665,-1.743 2.498,-3.946 2.498,-6.611l0,-1.691l-2.613,0c-4.817,0 -8.161,0.372 -10.031,1.115c-1.871,0.743 -2.806,2.088 -2.806,4.035c0,1.691 0.59,3.075 1.768,4.151c1.179,1.076 2.819,1.614 4.92,1.614Z" style="fill:#fff;fill-rule:nonzero;"/><path d="M154.807,267.729c-3.177,-0 -4.765,-1.64 -4.765,-4.92l-0,-45.657c-0,-3.229 1.588,-4.843 4.765,-4.843c3.229,0 4.843,1.614 4.843,4.843l-0,28.363l0.154,-0l12.682,-13.375c1.025,-1.024 1.922,-1.819 2.691,-2.382c0.768,-0.564 1.819,-0.846 3.151,-0.846c1.332,0 2.344,0.346 3.036,1.038c0.692,0.692 1.038,1.524 1.038,2.498c-0,0.973 -0.461,1.947 -1.384,2.921l-11.529,12.144l12.836,13.836c0.922,0.974 1.345,1.96 1.268,2.959c-0.077,1 -0.499,1.819 -1.268,2.46c-0.769,0.641 -1.742,0.961 -2.921,0.961c-1.435,-0 -2.575,-0.282 -3.42,-0.846c-0.846,-0.563 -1.781,-1.409 -2.806,-2.536l-13.374,-13.99l-0.154,0l-0,12.452c-0,3.28 -1.614,4.92 -4.843,4.92Z" style="fill:#fff;fill-rule:nonzero;"/><path d="M207.306,267.883c-9.941,-0 -14.912,-4.92 -14.912,-14.759l0,-16.372l-3.997,0c-2.562,0 -3.843,-1.204 -3.843,-3.612c0,-2.409 1.281,-3.613 3.843,-3.613l3.997,-0l0,-6.995c0,-3.228 1.615,-4.842 4.843,-4.842c3.177,-0 4.765,1.614 4.765,4.842l0,6.995l8.148,-0c2.562,-0 3.843,1.204 3.843,3.613c0,2.408 -1.281,3.612 -3.843,3.612l-8.148,0l0,15.834c0,2.46 0.539,4.305 1.615,5.535c1.076,1.23 2.818,1.844 5.226,1.844c0.872,0 1.64,-0.076 2.306,-0.23c0.667,-0.154 1.256,-0.256 1.768,-0.308c0.615,-0.051 1.128,0.141 1.538,0.577c0.409,0.435 0.614,1.319 0.614,2.652c0,1.025 -0.166,1.934 -0.499,2.728c-0.333,0.795 -0.935,1.346 -1.806,1.653c-0.667,0.205 -1.538,0.397 -2.614,0.576c-1.076,0.18 -2.024,0.27 -2.844,0.27Z" style="fill:#fff;fill-rule:nonzero;"/><path d="M233.21,267.883c-9.224,-0 -13.836,-5.176 -13.836,-15.527l-0,-18.601c-0,-3.229 1.588,-4.843 4.766,-4.843c3.228,0 4.842,1.614 4.842,4.843l-0,18.755c-0,2.664 0.538,4.637 1.614,5.918c1.076,1.281 2.793,1.922 5.15,1.922c2.562,-0 4.663,-0.884 6.303,-2.652c1.64,-1.768 2.46,-4.112 2.46,-7.033l-0,-16.91c-0,-3.229 1.588,-4.843 4.765,-4.843c3.229,0 4.843,1.614 4.843,4.843l-0,29.054c-0,3.28 -1.563,4.92 -4.689,4.92c-3.126,-0 -4.689,-1.64 -4.689,-4.92l0,-1.306c-2.511,4.253 -6.354,6.38 -11.529,6.38Z" style="fill:#fff;fill-rule:nonzero;"/><path d="M56.959,344.747c-2.204,0 -4.535,-0.23 -6.995,-0.691c-2.46,-0.462 -4.663,-1.256 -6.61,-2.383c-1.077,-0.615 -1.743,-1.371 -1.999,-2.268c-0.256,-0.897 -0.218,-1.742 0.115,-2.536c0.333,-0.795 0.897,-1.371 1.691,-1.73c0.795,-0.359 1.73,-0.282 2.806,0.231c2.05,0.973 3.971,1.652 5.765,2.037c1.793,0.384 3.561,0.576 5.303,0.576c2.46,0 4.292,-0.423 5.496,-1.268c1.205,-0.846 1.807,-1.96 1.807,-3.344c-0,-2.152 -1.589,-3.535 -4.766,-4.15l-7.686,-1.461c-6.508,-1.23 -9.762,-4.612 -9.762,-10.146c-0,-2.46 0.679,-4.586 2.037,-6.38c1.358,-1.793 3.241,-3.177 5.649,-4.15c2.409,-0.974 5.176,-1.461 8.302,-1.461c4.509,0 8.532,0.999 12.067,2.998c0.974,0.512 1.55,1.217 1.73,2.114c0.179,0.896 0.077,1.742 -0.308,2.536c-0.384,0.794 -0.986,1.358 -1.806,1.691c-0.82,0.333 -1.768,0.244 -2.844,-0.269c-1.588,-0.82 -3.113,-1.409 -4.573,-1.768c-1.461,-0.358 -2.857,-0.538 -4.19,-0.538c-2.51,0 -4.368,0.436 -5.572,1.307c-1.204,0.871 -1.807,2.024 -1.807,3.459c0,2.255 1.461,3.638 4.382,4.151l7.686,1.46c3.331,0.615 5.855,1.742 7.571,3.382c1.717,1.64 2.575,3.843 2.575,6.61c0,3.741 -1.46,6.675 -4.381,8.801c-2.921,2.127 -6.815,3.19 -11.683,3.19Z" style="fill:#fff;fill-rule:nonzero;"/><path d="M97.851,344.747c-3.895,0 -7.277,-0.794 -10.146,-2.383c-2.87,-1.588 -5.099,-3.856 -6.688,-6.802c-1.588,-2.947 -2.383,-6.418 -2.383,-10.415c0,-3.997 0.795,-7.456 2.383,-10.377c1.589,-2.921 3.818,-5.176 6.688,-6.764c2.869,-1.589 6.251,-2.383 10.146,-2.383c3.894,0 7.276,0.794 10.146,2.383c2.869,1.588 5.099,3.843 6.687,6.764c1.589,2.921 2.383,6.38 2.383,10.377c-0,3.997 -0.794,7.468 -2.383,10.415c-1.588,2.946 -3.818,5.214 -6.687,6.802c-2.87,1.589 -6.252,2.383 -10.146,2.383Zm-0,-7.302c2.869,0 5.175,-1.038 6.918,-3.113c1.742,-2.075 2.613,-5.137 2.613,-9.185c-0,-4.1 -0.871,-7.161 -2.613,-9.186c-1.743,-2.024 -4.049,-3.036 -6.918,-3.036c-2.87,0 -5.176,1.012 -6.918,3.036c-1.742,2.025 -2.614,5.086 -2.614,9.186c0,4.048 0.872,7.11 2.614,9.185c1.742,2.075 4.048,3.113 6.918,3.113Z" style="fill:#fff;fill-rule:nonzero;"/><path d="M137.82,344.747c-8.557,0 -12.836,-4.791 -12.836,-14.373l-0,-36.357c-0,-3.229 1.588,-4.843 4.766,-4.843c3.228,0 4.842,1.614 4.842,4.843l0,35.895c0,4.612 1.922,6.918 5.765,6.918c0.41,0 0.794,-0.013 1.153,-0.038c0.359,-0.026 0.717,-0.064 1.076,-0.116c0.717,-0.102 1.204,0.09 1.46,0.577c0.257,0.487 0.385,1.473 0.385,2.959c-0,1.281 -0.256,2.281 -0.769,2.998c-0.512,0.717 -1.358,1.153 -2.536,1.307c-1.077,0.153 -2.178,0.23 -3.306,0.23Z" style="fill:#fff;fill-rule:nonzero;"/><path d="M161.879,344.747c-2.716,0 -5.137,-0.525 -7.264,-1.575c-2.126,-1.051 -3.792,-2.473 -4.996,-4.266c-1.204,-1.794 -1.806,-3.818 -1.806,-6.073c-0,-2.767 0.717,-4.958 2.152,-6.572c1.435,-1.614 3.766,-2.78 6.995,-3.497c3.228,-0.717 7.558,-1.076 12.99,-1.076l2.69,-0l0,-1.614c0,-2.562 -0.564,-4.407 -1.691,-5.535c-1.127,-1.127 -3.023,-1.691 -5.688,-1.691c-1.486,0 -3.087,0.18 -4.804,0.538c-1.717,0.359 -3.523,0.974 -5.419,1.845c-1.23,0.564 -2.255,0.628 -3.075,0.192c-0.819,-0.435 -1.37,-1.127 -1.652,-2.075c-0.282,-0.948 -0.231,-1.909 0.154,-2.882c0.384,-0.974 1.165,-1.691 2.344,-2.153c2.357,-0.973 4.625,-1.665 6.803,-2.075c2.177,-0.41 4.163,-0.615 5.957,-0.615c5.483,0 9.556,1.268 12.221,3.805c2.665,2.536 3.997,6.469 3.997,11.799l0,18.447c0,3.28 -1.486,4.92 -4.458,4.92c-3.023,-0 -4.535,-1.64 -4.535,-4.92l-0,-1.691c-0.871,2.101 -2.255,3.754 -4.151,4.958c-1.896,1.204 -4.151,1.806 -6.764,1.806Zm1.999,-6.61c2.51,-0 4.599,-0.871 6.264,-2.613c1.665,-1.743 2.498,-3.946 2.498,-6.611l0,-1.691l-2.613,0c-4.817,0 -8.161,0.372 -10.031,1.115c-1.871,0.743 -2.806,2.088 -2.806,4.035c0,1.691 0.59,3.075 1.768,4.151c1.179,1.076 2.819,1.614 4.92,1.614Z" style="fill:#fff;fill-rule:nonzero;"/><path d="M208.767,344.747c-9.942,0 -14.912,-4.919 -14.912,-14.758l-0,-16.372l-3.997,0c-2.562,0 -3.843,-1.204 -3.843,-3.613c-0,-2.408 1.281,-3.612 3.843,-3.612l3.997,-0l-0,-6.995c-0,-3.228 1.614,-4.842 4.842,-4.842c3.177,-0 4.766,1.614 4.766,4.842l-0,6.995l8.148,-0c2.562,-0 3.843,1.204 3.843,3.612c-0,2.409 -1.281,3.613 -3.843,3.613l-8.148,0l-0,15.834c-0,2.46 0.538,4.305 1.614,5.534c1.076,1.23 2.818,1.845 5.227,1.845c0.871,0 1.64,-0.077 2.306,-0.23c0.666,-0.154 1.255,-0.257 1.768,-0.308c0.615,-0.051 1.127,0.141 1.537,0.577c0.41,0.435 0.615,1.319 0.615,2.651c-0,1.025 -0.167,1.935 -0.5,2.729c-0.333,0.794 -0.935,1.345 -1.806,1.653c-0.666,0.205 -1.537,0.397 -2.613,0.576c-1.077,0.18 -2.025,0.269 -2.844,0.269Z" style="fill:#fff;fill-rule:nonzero;"/></g><g><path d="M171.05,51.345c-10.297,9.337 -26.238,8.558 -35.576,-1.739c-9.337,-10.297 -8.558,-26.238 1.739,-35.575" style="fill:none;stroke:#fff;stroke-width:15px;"/><path d="M14.392,360.795l0,-126.065c0,0 -3.748,-45.308 25.458,-79.304c13.222,-15.39 27.381,-23.857 62.374,-42.736c36.468,-19.675 47.522,-43.171 47.522,-43.171" style="fill:none;stroke:#fff;stroke-width:15px;"/><path d="M285.608,360.969l-0,-126.065c-0,0 3.748,-45.308 -25.458,-79.304c-13.222,-15.39 -27.381,-23.857 -62.374,-42.736c-36.468,-19.675 -47.522,-43.171 -47.522,-43.171" style="fill:none;stroke:#fff;stroke-width:15px;"/></g></g></svg>

                <h2 class="m-0">{{ getZone(zoneId).state }}</h2>
            </div>
            
            <div class="box">
                <b-form-select v-model="zoneId" :options="options" class="mb-4" @change="getWaktuSolat(interval, zoneId)"></b-form-select>

                <div>
                    <h3>{{ nowSolat.name }}</h3>
                    <p>{{ nowSolat.date }}</p>

                    <h4>{{ translateDay(waktuSolat[0].day) }}</h4>
                    <p>{{ formatDate(waktuSolat[0].date) }}</p>    
                        
                    <div class="d-flex flex-wrap">
                        <div class="sub-box">
                            <div class="mb-3 title">Imsak</div>
                            <div class="lead">{{ formatTime(waktuSolat[0].imsak) }}</div>
                        </div>
                        <div class="sub-box">
                            <div class="mb-3 title">Subuh</div>
                            <div class="lead">{{ formatTime(waktuSolat[0].fajr) }}</div>
                        </div>
                        <div class="sub-box">
                            <div class="mb-3 title">Syuruk</div>
                            <div class="lead">{{ formatTime(waktuSolat[0].syuruk) }}</div>
                        </div>
                        <div class="sub-box">
                            <div class="mb-3 title">Zuhur</div>
                            <div class="lead">{{ formatTime(waktuSolat[0].dhuhr) }}</div>
                        </div>
                        <div class="sub-box">
                            <div class="mb-3 title">Asar</div>
                            <div class="lead">{{ formatTime(waktuSolat[0].asr) }}</div>
                        </div>
                        <div class="sub-box">
                            <div class="mb-3 title">Maghrib</div>
                            <div class="lead">{{ formatTime(waktuSolat[0].maghrib) }}</div>
                        </div>
                        <div class="sub-box">
                            <div class="mb-3 title">Isyak</div>
                            <div class="lead">{{ formatTime(waktuSolat[0].isha) }}</div>
                        </div>
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
            nowSolat: null,
            zones: zoneJson.zones,
            states: stateJson.states,
            options: []
        }
    },
    created() {
        // Page Title
        document.title = 'Waktu Solat by azreenbd';
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
                        
                        // Find current/upcoming prayer time
                        this.nowSolat = this.currentSolat(this.waktuSolat[0]);
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
        },
        translateDay(day) {
            var hari;

            switch(day) {
                case 'Monday':
                    hari = 'Isnin';
                    break;
                case 'Tuesday':
                    hari = 'Selasa';
                    break;
                case 'Wednesday':
                    hari = 'Rabu';
                    break;
                case 'Thursday':
                    hari = 'Khamis';
                    break;
                case 'Friday':
                    hari = 'Jumaat';
                    break;
                case 'Saturday':
                    hari = 'Sabtu';
                    break;
                case 'Sunday':
                    hari = 'Ahad';
                    break;
                default:
                    hari = day;
            }

            return hari;
        },
        formatDate(date, format) {
            var d = date.split("-");
            var newDate;

            switch(format) {
                case 'DD Mon, YYYY':
                    newDate = d[0] + " " + d[1] + ", " + d[2];
                    break;
                case 'DD Mon':
                    newDate = d[0] + " " + d[1];
                    break;
                case 'YYYY':
                    newDate = d[2];
                    break;
                case 'Mon':
                    newDate = d[1];
                    break;
                case 'DD':
                    newDate = d[0];
                    break;
                case 'YY':
                    newDate = d[2];
                    break;
                default:
                    newDate = d[0] + " " + d[1] + ", " + d[2];
            }
            
            return newDate;
        },
        formatTime(time) {
            var t = time.split(":");

            var hours = parseInt(t[0]);
            var minutes = parseInt(t[1]);
            var ampm = hours >= 12 ? 'pm' : 'am';

            hours = hours % 12;
            hours = hours ? hours : 12;
            hours = hours < 10 ? '0'+hours : hours;
            minutes = minutes < 10 ? '0'+minutes : minutes;

            return hours + ":" + minutes + ampm;
        },
        createDateObject(time) {
            var now = new Date();

            var t = time.split(":");

            now.setHours(t[0]);
            now.setMinutes(t[1]);
            now.setSeconds(t[2]);

            return now;
        },
        currentSolat(waktuSolat) {
            /** Current Solat 
             * Will keep display the current solat time after some time before changing to next solat time slot
             * This feature is for user that want to make sure if it is time to solat or unsure if it's already adhan */

            var now = new Date();

            var fajr = this.createDateObject(waktuSolat.fajr);
            var dhuhr = this.createDateObject(waktuSolat.dhuhr);
            var asr = this.createDateObject(waktuSolat.asr);
            var maghrib = this.createDateObject(waktuSolat.maghrib);
            var isha = this.createDateObject(waktuSolat.isha);

            var waktu = [
                { name: 'Now', date: now },
                { name: 'Subuh', date: fajr },
                { name: 'Zohor', date: dhuhr },
                { name: 'Asar', date: asr },
                { name: 'Maghrib', date: maghrib },
                { name: 'Ishak', date: isha }
            ];

            const sortedwaktu = waktu.sort((a, b) => a.date - b.date)

            const nowIndex = sortedwaktu.findIndex(time => time.name == 'Now');

            var nowHours;
            var afterNowHours;
            var beforeNowHours;
            var midNowHours;
            var currentWaktu;

            nowHours = sortedwaktu[nowIndex].date.getHours();
            // now is first element
            if(nowIndex == 0) {
                currentWaktu = sortedwaktu[1];
            }
            // now is last element
            else if(nowIndex == (sortedwaktu.length - 1)) {
                beforeNowHours = sortedwaktu[sortedwaktu.length - 1].date.getHours();

                midNowHours = (beforeNowHours + 22)/2;

                if(nowHours >= midNowHours) {
                    currentWaktu = sortedwaktu[0];
                }
                else {
                    currentWaktu = sortedwaktu[nowIndex - 1];
                }
            }
            else {
                afterNowHours = sortedwaktu[nowIndex + 1].date.getHours();
                beforeNowHours = sortedwaktu[nowIndex - 1].date.getHours();

                midNowHours = (beforeNowHours + afterNowHours)/2;

                if(nowHours >= midNowHours) {
                    currentWaktu = sortedwaktu[nowIndex + 1];
                }
                else {
                    currentWaktu = sortedwaktu[nowIndex - 1];
                }
            }

            return currentWaktu;
        }
    }
}
</script>

<style>
.max-width {
    max-width: 980px;
}
.box, .sub-box {
    border-radius: .75em;
    padding: .75em .75em;
    margin: .25em;
    color: #2f6c77;
}

.box {
    background: #fff;
}

.sub-box {
    background: #eff4f5;
}

.sub-box .title {
    color: #008cff;
    font-weight: 600;
    text-transform: uppercase;
}

.sub-box:first-child {
    margin-left: 0;
}

.sub-box:last-child {
    margin-right: 0;
}

select {
    background-color: #eff4f5 !important;
    color: #2f6c77 !important;
    border: 2px solid #eff4f5 !important;
    border-radius: .5em !important;
}
</style>