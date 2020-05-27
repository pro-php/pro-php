
    Formio.icons = 'fontawesome';
    Formio.createForm(document.getElementById('formio'), {
        "components": [
            {
                "title": "Page 1",
                "label": "Page 1",
                "type": "panel",
                "key": "page1",
                "components": [
                    {
                        "label": "Select LTD or Individual",
                        "widget": "choicesjs",
                        "tableView": true,
                        "data": {
                            "values": [
                                {
                                    "label": "LTD name",
                                    "value": "select_ltd"
                                },
                                {
                                    "label": "Individual",
                                    "value": "select_individual"
                                }
                            ]
                        },
                        "selectThreshold": 0.3,
                        "key": "selectLtdOrIndividual",
                        "type": "select",
                        "indexeddb": {
                            "filter": {}
                        },
                        "input": true,
                        "defaultValue": "select_ltd"
                    },
                    {
                        "label": "Ltd Name",
                        "placeholder": "Your Ltd Name",
                        "tableView": true,
                        "key": "ltdName",
                        "type": "textfield",
                        "input": true
                    },
                    {
                        "label": "Your Name",
                        "placeholder": "Your full name",
                        "tableView": true,
                        "key": "yourName",
                        "type": "textfield",
                        "input": true
                    }
                ],
                "input": false,
                "tableView": false
            },
            {
                "title": "Page 2",
                "label": "Page 2",
                "type": "panel",
                "key": "page2",
                "components": [
                    {
                        "label": "Columns",
                        "columns": [
                            {
                                "components": [
                                    {
                                        "label": "Street",
                                        "placeholder": "Your street name",
                                        "tableView": true,
                                        "key": "street",
                                        "type": "textfield",
                                        "input": true,
                                        "hideOnChildrenHidden": false
                                    }
                                ],
                                "width": 4,
                                "offset": 0,
                                "push": 0,
                                "pull": 0,
                                "size": "md"
                            },
                            {
                                "components": [
                                    {
                                        "label": "House number",
                                        "placeholder": "Your house number",
                                        "tableView": true,
                                        "key": "houseNumber",
                                        "type": "textfield",
                                        "input": true,
                                        "hideOnChildrenHidden": false
                                    }
                                ],
                                "width": 4,
                                "offset": 0,
                                "push": 0,
                                "pull": 0,
                                "size": "md"
                            },
                            {
                                "components": [
                                    {
                                        "label": "Flat number",
                                        "placeholder": "Your flat number",
                                        "tableView": true,
                                        "key": "flatNumber",
                                        "type": "textfield",
                                        "input": true,
                                        "hideOnChildrenHidden": false
                                    }
                                ],
                                "size": "md",
                                "width": 4,
                                "offset": 0,
                                "push": 0,
                                "pull": 0
                            }
                        ],
                        "tableView": false,
                        "key": "columns",
                        "type": "columns",
                        "input": false
                    }
                ],
                "input": false,
                "tableView": false
            },
            {
                "title": "Page 3",
                "label": "Page 3",
                "type": "panel",
                "key": "page3",
                "components": [
                    {
                        "label": "Name of place",
                        "placeholder": "City or village or etc",
                        "tableView": true,
                        "key": "nameOfPlace",
                        "type": "textfield",
                        "input": true
                    },
                    {
                        "label": "Your area",
                        "placeholder": "Area name",
                        "tableView": true,
                        "key": "yourArea",
                        "type": "textfield",
                        "input": true
                    },
                    {
                        "label": "Your republic",
                        "widget": "choicesjs",
                        "tableView": true,
                        "data": {
                            "values": [
                                {
                                    "label": "Republic 1",
                                    "value": "select_republic1"
                                },
                                {
                                    "label": "Republic 2",
                                    "value": "select_republic2"
                                },
                                {
                                    "label": "Republic 3",
                                    "value": "select_republic3"
                                }
                            ]
                        },
                        "selectThreshold": 0.3,
                        "key": "yourRepublic",
                        "type": "select",
                        "indexeddb": {
                            "filter": {}
                        },
                        "input": true,
                        "defaultValue": "select_republic1"
                    },
                    {
                        "label": "Your district, region",
                        "placeholder": "Your district, region",
                        "tableView": true,
                        "key": "yourDistrictRegion",
                        "type": "textfield",
                        "input": true
                    },
                    {
                        "label": "Your autonomous region",
                        "placeholder": "Your autonomous region",
                        "tableView": true,
                        "key": "yourAutonomousRegion",
                        "type": "textfield",
                        "input": true
                    },
                    {
                        "label": "Your country",
                        "placeholder": "Russia",
                        "disabled": true,
                        "tableView": true,
                        "key": "yourCountry",
                        "type": "textfield",
                        "input": true
                    },
                    {
                        "label": "Your index",
                        "placeholder": "Your index",
                        "inputMask": "999999",
                        "tableView": true,
                        "key": "yourIndex",
                        "type": "textfield",
                        "input": true
                    }
                ],
                "input": false,
                "tableView": false
            }
        ]
    
    }).then(function(form) {
      form.on('submit', function(submission) {
        console.log(submission);
      });
    });
    
