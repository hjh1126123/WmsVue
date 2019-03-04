<template>
    <v-container
            fill-height
            fluid
            grid-list-xl
    >
        <v-layout wrap>
            <v-flex
                    md12
                    sm12
                    lg4
            >
                <material-card
                        color="orange"
                        title="Employee Stats"
                        text="New employees on 15th September, 2016"
                >
                    <v-data-table
                            :headers="headers"
                            :items="items"
                            hide-actions
                    >
                        <template
                                slot="headerCell"
                                slot-scope="{ header }"
                        >
              <span
                      class="font-weight-light text-warning text--darken-3"
                      v-text="header.text"/>
                        </template>
                        <template
                                slot="items"
                                slot-scope="{ index, item }"
                        >
                            <td>{{ index + 1 }}</td>
                            <td>{{ item.name }}</td>
                            <td class="text-xs-right">{{ item.salary }}</td>
                            <td class="text-xs-right">{{ item.country }}</td>
                            <td class="text-xs-right">{{ item.city }}</td>
                        </template>
                    </v-data-table>
                </material-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                dailySalesChart: {
                    data: {
                        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                        series: [
                            [12, 17, 7, 17, 23, 18, 38]
                        ]
                    }
                },
                dataCompletedTasksChart: {
                    data: {
                        labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
                        series: [
                            [230, 750, 450, 300, 280, 240, 200, 190]
                        ]
                    },
                },
                emailsSubscriptionChart: {
                    data: {
                        labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
                        series: [
                            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

                        ]
                    },
                    options: {
                        axisX: {
                            showGrid: false
                        },
                        low: 0,
                        high: 1000,
                        chartPadding: {
                            top: 0,
                            right: 5,
                            bottom: 0,
                            left: 0
                        }
                    },
                    responsiveOptions: [
                        ['screen and (max-width: 640px)', {
                            seriesBarDistance: 5,
                            axisX: {
                                labelInterpolationFnc: function (value) {
                                    return value[0]
                                }
                            }
                        }]
                    ]
                },
                headers: [
                    {
                        sortable: false,
                        text: 'ID',
                        value: 'id'
                    },
                    {
                        sortable: false,
                        text: 'Name',
                        value: 'name'
                    },
                    {
                        sortable: false,
                        text: 'Salary',
                        value: 'salary',
                        align: 'right'
                    },
                    {
                        sortable: false,
                        text: 'Country',
                        value: 'country',
                        align: 'right'
                    },
                    {
                        sortable: false,
                        text: 'City',
                        value: 'city',
                        align: 'right'
                    }
                ],
                items: [
                    {
                        name: 'Dakota Rice',
                        country: 'Niger',
                        city: 'Oud-Tunrhout',
                        salary: '$35,738'
                    },
                    {
                        name: 'Minerva Hooper',
                        country: 'Curaçao',
                        city: 'Sinaai-Waas',
                        salary: '$23,738'
                    }, {
                        name: 'Sage Rodriguez',
                        country: 'Netherlands',
                        city: 'Overland Park',
                        salary: '$56,142'
                    }, {
                        name: 'Philip Chanley',
                        country: 'Korea, South',
                        city: 'Gloucester',
                        salary: '$38,735'
                    }, {
                        name: 'Doris Greene',
                        country: 'Malawi',
                        city: 'Feldkirchen in Kārnten',
                        salary: '$63,542'
                    }
                ],
                tabs: 0,
                list: {
                    0: false,
                    1: false,
                    2: false
                }
            }
        },
        methods: {
            complete (index) {
                this.list[index] = !this.list[index]
            }
        }
    }
</script>

<style lang="stylus"></style>