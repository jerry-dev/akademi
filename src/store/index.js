import { createStore } from 'redux';
import actions from './actions.js';

const initialState = {
    overview: [
        { "title": "students", "stat": "932" },
        { "title": "teachers", "stat": "754" },
        { "title": "events", "stat": "40" },
        { "title": "foods", "stat": "32,000" },
    ],
    unpaidstudentintuition: [{
        "name": "Austin Campbell",
        "studentId": 123456780,
        "studentClass": "VII A",
        "studentDebt": "$13,623",
        "studentEmail": "austin.campbell@email.com"
    }, {
        "name": "Brittany Nelson",
        "studentId": 123456781,
        "studentClass": "VII B",
        "studentDebt": "$52,390",
        "studentEmail": "brittany.nelson@email.com"
    }, {
        "name": "Robert Nelson",
        "studentId": 123456782,
        "studentClass": "VII C",
        "studentDebt": "$824",
        "studentEmail": "robert.nelson@email.com"
    }, {
        "name": "Lillian Harris",
        "studentId": 123456783,
        "studentClass": "VII A",
        "studentDebt": "$7,820",
        "studentEmail": "lillian.harris@email.com"
    }, {
        "name": "Anthony Carter",
        "studentId": 123456784,
        "studentClass": "VII B",
        "studentDebt": "$48,105",
        "studentEmail": "anthony.carter@email.com"
    }, {
        "name": "Elizabeth Lewis",
        "studentId": 123456785,
        "studentClass": "VII C",
        "studentDebt": "$98,232",
        "studentEmail": "elizabeth.lewis@email.com"
    }, {
        "name": "Andrew Rogers",
        "studentId": 123456786,
        "studentClass": "VII A",
        "studentDebt": "$47,848",
        "studentEmail": "andrew.rogers@email.com"
    }, {
        "name": "Sarah Carter",
        "studentId": 123456787,
        "studentClass": "VII B",
        "studentDebt": "$70,404",
        "studentEmail": "sarah.carter@email.com"
    }, {
        "name": "Tyler Roberts",
        "studentId": 123456788,
        "studentClass": "VII C",
        "studentDebt": "$20,910",
        "studentEmail": "tyler.roberts@email.com"
    }, {
        "name": "Emma Roberts",
        "studentId": 123456789,
        "studentClass": "VII A",
        "studentDebt": "$52,810",
        "studentEmail": "emma.roberts@email.com"
    }, {
        "name": "Jason Flores",
        "studentId": 123456790,
        "studentClass": "VII B",
        "studentDebt": "$68,994",
        "studentEmail": "jason.flores@email.com"
    }, {
        "name": "Lisa Nelson",
        "studentId": 123456791,
        "studentClass": "VII C",
        "studentDebt": "$31,621",
        "studentEmail": "lisa.nelson@email.com"
    }, {
        "name": "Zachary Young",
        "studentId": 123456792,
        "studentClass": "VII A",
        "studentDebt": "$66,327",
        "studentEmail": "zachary.young@email.com"
    }, {
        "name": "Abigail Gonzalez",
        "studentId": 123456793,
        "studentClass": "VII B",
        "studentDebt": "$53,047",
        "studentEmail": "abigail.gonzalez@email.com"
    }, {
        "name": "Matthew Roberts",
        "studentId": 123456794,
        "studentClass": "VII C",
        "studentDebt": "$14,596",
        "studentEmail": "matthew.roberts@email.com"
    }, {
        "name": "Heather Green",
        "studentId": 123456795,
        "studentClass": "VII A",
        "studentDebt": "$62,305",
        "studentEmail": "heather.green@email.com"
    }, {
        "name": "Kyle Hall",
        "studentId": 123456796,
        "studentClass": "VII B",
        "studentDebt": "$21,188",
        "studentEmail": "kyle.hall@email.com"
    }, {
        "name": "Lisa Rogers",
        "studentId": 123456797,
        "studentClass": "VII C",
        "studentDebt": "$33,548",
        "studentEmail": "lisa.rogers@email.com"
    }, {
        "name": "Alexander Carter",
        "studentId": 123456798,
        "studentClass": "VII A",
        "studentDebt": "$26,287",
        "studentEmail": "alexander.carter@email.com"
    }, {
        "name": "Stephanie Smith",
        "studentId": 123456799,
        "studentClass": "VII B",
        "studentDebt": "$23,713",
        "studentEmail": "stephanie.smith@email.com"
    }, {
        "name": "Anthony Walker",
        "studentId": 123456800,
        "studentClass": "VII C",
        "studentDebt": "$74,148",
        "studentEmail": "anthony.walker@email.com"
    }, {
        "name": "Karen Gonzalez",
        "studentId": 123456801,
        "studentClass": "VII A",
        "studentDebt": "$80,007",
        "studentEmail": "karen.gonzalez@email.com"
    }, {
        "name": "Samuel Rogers",
        "studentId": 123456802,
        "studentClass": "VII B",
        "studentDebt": "$32,075",
        "studentEmail": "samuel.rogers@email.com"
    }, {
        "name": "Elizabeth Gonzalez",
        "studentId": 123456803,
        "studentClass": "VII C",
        "studentDebt": "$77,161",
        "studentEmail": "elizabeth.gonzalez@email.com"
    }, {
        "name": "John Wright",
        "studentId": 123456804,
        "studentClass": "VII A",
        "studentDebt": "$89,423",
        "studentEmail": "john.wright@email.com"
    }, {
        "name": "Ashley Thompson",
        "studentId": 123456805,
        "studentClass": "VII B",
        "studentDebt": "$31,673",
        "studentEmail": "ashley.thompson@email.com"
    }, {
        "name": "Jason Edwards",
        "studentId": 123456806,
        "studentClass": "VII C",
        "studentDebt": "$15,346",
        "studentEmail": "jason.edwards@email.com"
    }, {
        "name": "Linda Green",
        "studentId": 123456807,
        "studentClass": "VII A",
        "studentDebt": "$1,915",
        "studentEmail": "linda.green@email.com"
    }, {
        "name": "Christopher Campbell",
        "studentId": 123456808,
        "studentClass": "VII B",
        "studentDebt": "$89,890",
        "studentEmail": "christopher.campbell@email.com"
    }, {
        "name": "Taylor Rogers",
        "studentId": 123456809,
        "studentClass": "VII C",
        "studentDebt": "$62,832",
        "studentEmail": "taylor.rogers@email.com"
    }, {
        "name": "Ryan Thompson",
        "studentId": 123456810,
        "studentClass": "VII A",
        "studentDebt": "$59,412",
        "studentEmail": "ryan.thompson@email.com"
    }, {
        "name": "Lillian White",
        "studentId": 123456811,
        "studentClass": "VII B",
        "studentDebt": "$77,997",
        "studentEmail": "lillian.white@email.com"
    }, {
        "name": "Daniel Robinson",
        "studentId": 123456812,
        "studentClass": "VII C",
        "studentDebt": "$61,639",
        "studentEmail": "daniel.robinson@email.com"
    }, {
        "name": "Ashley Edwards",
        "studentId": 123456813,
        "studentClass": "VII A",
        "studentDebt": "$15,655",
        "studentEmail": "ashley.edwards@email.com"
    }, {
        "name": "Gabriel Green",
        "studentId": 123456814,
        "studentClass": "VII B",
        "studentDebt": "$37,621",
        "studentEmail": "gabriel.green@email.com"
    }, {
        "name": "Lillian Gonzalez",
        "studentId": 123456815,
        "studentClass": "VII C",
        "studentDebt": "$63,526",
        "studentEmail": "lillian.gonzalez@email.com"
    }, {
        "name": "Jacob Hill",
        "studentId": 123456816,
        "studentClass": "VII A",
        "studentDebt": "$84,035",
        "studentEmail": "jacob.hill@email.com"
    }, {
        "name": "Kayla Perez",
        "studentId": 123456817,
        "studentClass": "VII B",
        "studentDebt": "$26,800",
        "studentEmail": "kayla.perez@email.com"
    }, {
        "name": "William Perez",
        "studentId": 123456818,
        "studentClass": "VII C",
        "studentDebt": "$32,200",
        "studentEmail": "william.perez@email.com"
    }, {
        "name": "Heather Moore",
        "studentId": 123456819,
        "studentClass": "VII A",
        "studentDebt": "$41,444",
        "studentEmail": "heather.moore@email.com"
    }, {
        "name": "Brian Howard",
        "studentId": 123456820,
        "studentClass": "VII B",
        "studentDebt": "$6,901",
        "studentEmail": "brian.howard@email.com"
    }, {
        "name": "Megan Harris",
        "studentId": 123456821,
        "studentClass": "VII C",
        "studentDebt": "$6,069",
        "studentEmail": "megan.harris@email.com"
    }, {
        "name": "David Thompson",
        "studentId": 123456822,
        "studentClass": "VII A",
        "studentDebt": "$10,436",
        "studentEmail": "david.thompson@email.com"
    }, {
        "name": "Kimberly White",
        "studentId": 123456823,
        "studentClass": "VII B",
        "studentDebt": "$83,649",
        "studentEmail": "kimberly.white@email.com"
    }, {
        "name": "Kevin Harris",
        "studentId": 123456824,
        "studentClass": "VII C",
        "studentDebt": "$60,784",
        "studentEmail": "kevin.harris@email.com"
    }, {
        "name": "Sarah Flores",
        "studentId": 123456825,
        "studentClass": "VII A",
        "studentDebt": "$9,367",
        "studentEmail": "sarah.flores@email.com"
    }, {
        "name": "Jack Clark",
        "studentId": 123456826,
        "studentClass": "VII B",
        "studentDebt": "$92,607",
        "studentEmail": "jack.clark@email.com"
    }, {
        "name": "Sarah Cooper",
        "studentId": 123456827,
        "studentClass": "VII C",
        "studentDebt": "$24,873",
        "studentEmail": "sarah.cooper@email.com"
    }, {
        "name": "Robert Hall",
        "studentId": 123456828,
        "studentClass": "VII A",
        "studentDebt": "$65,307",
        "studentEmail": "robert.hall@email.com"
    }, {
        "name": "Hannah Nelson",
        "studentId": 123456829,
        "studentClass": "VII B",
        "studentDebt": "$78,748",
        "studentEmail": "hannah.nelson@email.com"
    }, {
        "name": "Brian Martinez",
        "studentId": 123456830,
        "studentClass": "VII C",
        "studentDebt": "$17,954",
        "studentEmail": "brian.martinez@email.com"
    }, {
        "name": "Lisa Cooper",
        "studentId": 123456831,
        "studentClass": "VII A",
        "studentDebt": "$16,326",
        "studentEmail": "lisa.cooper@email.com"
    }, {
        "name": "James White",
        "studentId": 123456832,
        "studentClass": "VII B",
        "studentDebt": "$6,791",
        "studentEmail": "james.white@email.com"
    }, {
        "name": "Olivia Roberts",
        "studentId": 123456833,
        "studentClass": "VII C",
        "studentDebt": "$2,553",
        "studentEmail": "olivia.roberts@email.com"
    }, {
        "name": "Matthew Hill",
        "studentId": 123456834,
        "studentClass": "VII A",
        "studentDebt": "$48,874",
        "studentEmail": "matthew.hill@email.com"
    }, {
        "name": "Jessica Nelson",
        "studentId": 123456835,
        "studentClass": "VII B",
        "studentDebt": "$70,404",
        "studentEmail": "jessica.nelson@email.com"
    }, {
        "name": "Austin Moore",
        "studentId": 123456836,
        "studentClass": "VII C",
        "studentDebt": "$94,252",
        "studentEmail": "austin.moore@email.com"
    }, {
        "name": "Emily Taylor",
        "studentId": 123456837,
        "studentClass": "VII A",
        "studentDebt": "$30,638",
        "studentEmail": "emily.taylor@email.com"
    }, {
        "name": "Nicholas Moore",
        "studentId": 123456838,
        "studentClass": "VII B",
        "studentDebt": "$11,690",
        "studentEmail": "nicholas.moore@email.com"
    }, {
        "name": "Heather Peterson",
        "studentId": 123456839,
        "studentClass": "VII C",
        "studentDebt": "$57,801",
        "studentEmail": "heather.peterson@email.com"
    }, {
        "name": "James Moore",
        "studentId": 123456840,
        "studentClass": "VII A",
        "studentDebt": "$53,736",
        "studentEmail": "james.moore@email.com"
    }, {
        "name": "Isabella Richardson",
        "studentId": 123456841,
        "studentClass": "VII B",
        "studentDebt": "$99,183",
        "studentEmail": "isabella.richardson@email.com"
    }, {
        "name": "Kevin Taylor",
        "studentId": 123456842,
        "studentClass": "VII C",
        "studentDebt": "$98,995",
        "studentEmail": "kevin.taylor@email.com"
    }, {
        "name": "Abigail Campbell",
        "studentId": 123456843,
        "studentClass": "VII A",
        "studentDebt": "$24,129",
        "studentEmail": "abigail.campbell@email.com"
    }, {
        "name": "Jack Rodriguez",
        "studentId": 123456844,
        "studentClass": "VII B",
        "studentDebt": "$49,995",
        "studentEmail": "jack.rodriguez@email.com"
    }, {
        "name": "Amanda Thompson",
        "studentId": 123456845,
        "studentClass": "VII C",
        "studentDebt": "$31,190",
        "studentEmail": "amanda.thompson@email.com"
    }, {
        "name": "Robert Young",
        "studentId": 123456846,
        "studentClass": "VII A",
        "studentDebt": "$87,624",
        "studentEmail": "robert.young@email.com"
    }, {
        "name": "Hannah Carter",
        "studentId": 123456847,
        "studentClass": "VII B",
        "studentDebt": "$81,607",
        "studentEmail": "hannah.carter@email.com"
    }, {
        "name": "Ryan Roberts",
        "studentId": 123456848,
        "studentClass": "VII C",
        "studentDebt": "$84,069",
        "studentEmail": "ryan.roberts@email.com"
    }, {
        "name": "Brittany Smith",
        "studentId": 123456849,
        "studentClass": "VII A",
        "studentDebt": "$5,408",
        "studentEmail": "brittany.smith@email.com"
    }, {
        "name": "Jonathan Davis",
        "studentId": 123456850,
        "studentClass": "VII B",
        "studentDebt": "$50,341",
        "studentEmail": "jonathan.davis@email.com"
    }, {
        "name": "Megan Carter",
        "studentId": 123456851,
        "studentClass": "VII C",
        "studentDebt": "$18,898",
        "studentEmail": "megan.carter@email.com"
    }, {
        "name": "Ethan Rodriguez",
        "studentId": 123456852,
        "studentClass": "VII A",
        "studentDebt": "$8,695",
        "studentEmail": "ethan.rodriguez@email.com"
    }, {
        "name": "Heather Young",
        "studentId": 123456853,
        "studentClass": "VII B",
        "studentDebt": "$82,836",
        "studentEmail": "heather.young@email.com"
    }, {
        "name": "Gabriel Richardson",
        "studentId": 123456854,
        "studentClass": "VII C",
        "studentDebt": "$95,142",
        "studentEmail": "gabriel.richardson@email.com"
    }, {
        "name": "Amanda Cooper",
        "studentId": 123456855,
        "studentClass": "VII A",
        "studentDebt": "$89,457",
        "studentEmail": "amanda.cooper@email.com"
    }, {
        "name": "Jonathan Robinson",
        "studentId": 123456856,
        "studentClass": "VII B",
        "studentDebt": "$27,694",
        "studentEmail": "jonathan.robinson@email.com"
    }, {
        "name": "Sarah Harris",
        "studentId": 123456857,
        "studentClass": "VII C",
        "studentDebt": "$76,807",
        "studentEmail": "sarah.harris@email.com"
    }, {
        "name": "James Martinez",
        "studentId": 123456858,
        "studentClass": "VII A",
        "studentDebt": "$17,331",
        "studentEmail": "james.martinez@email.com"
    }, {
        "name": "Jennifer Rodriguez",
        "studentId": 123456859,
        "studentClass": "VII B",
        "studentDebt": "$99,626",
        "studentEmail": "jennifer.rodriguez@email.com"
    }, {
        "name": "Alexander Cooper",
        "studentId": 123456860,
        "studentClass": "VII C",
        "studentDebt": "$66,385",
        "studentEmail": "alexander.cooper@email.com"
    }, {
        "name": "Kayla Moore",
        "studentId": 123456861,
        "studentClass": "VII A",
        "studentDebt": "$27,296",
        "studentEmail": "kayla.moore@email.com"
    }, {
        "name": "Isabella Edwards",
        "studentId": 123456862,
        "studentClass": "VII B",
        "studentDebt": "$96,368",
        "studentEmail": "isabella.edwards@email.com"
    }, {
        "name": "Samuel Smith",
        "studentId": 123456863,
        "studentClass": "VII C",
        "studentDebt": "$46,662",
        "studentEmail": "samuel.smith@email.com"
    }, {
        "name": "Sophia Moore",
        "studentId": 123456864,
        "studentClass": "VII A",
        "studentDebt": "$16,474",
        "studentEmail": "sophia.moore@email.com"
    }, {
        "name": "Michael Martinez",
        "studentId": 123456865,
        "studentClass": "VII B",
        "studentDebt": "$37,758",
        "studentEmail": "michael.martinez@email.com"
    }, {
        "name": "Lisa Young",
        "studentId": 123456866,
        "studentClass": "VII C",
        "studentDebt": "$90,891",
        "studentEmail": "lisa.young@email.com"
    }, {
        "name": "William Lewis",
        "studentId": 123456867,
        "studentClass": "VII A",
        "studentDebt": "$86,007",
        "studentEmail": "william.lewis@email.com"
    }, {
        "name": "Alexis Moore",
        "studentId": 123456868,
        "studentClass": "VII B",
        "studentDebt": "$42,834",
        "studentEmail": "alexis.moore@email.com"
    }, {
        "name": "Zachary Walker",
        "studentId": 123456869,
        "studentClass": "VII C",
        "studentDebt": "$82,085",
        "studentEmail": "zachary.walker@email.com"
    }, {
        "name": "Jennifer Wilson",
        "studentId": 123456870,
        "studentClass": "VII A",
        "studentDebt": "$69,874",
        "studentEmail": "jennifer.wilson@email.com"
    }, {
        "name": "Matthew Cooper",
        "studentId": 123456871,
        "studentClass": "VII B",
        "studentDebt": "$70,995",
        "studentEmail": "matthew.cooper@email.com"
    }, {
        "name": "Lillian Peterson",
        "studentId": 123456872,
        "studentClass": "VII C",
        "studentDebt": "$42,145",
        "studentEmail": "lillian.peterson@email.com"
    }, {
        "name": "David Davis",
        "studentId": 123456873,
        "studentClass": "VII A",
        "studentDebt": "$84,561",
        "studentEmail": "david.davis@email.com"
    }, {
        "name": "Lillian Miller",
        "studentId": 123456874,
        "studentClass": "VII B",
        "studentDebt": "$70,123",
        "studentEmail": "lillian.miller@email.com"
    }, {
        "name": "Kevin Hill",
        "studentId": 123456875,
        "studentClass": "VII C",
        "studentDebt": "$2,861",
        "studentEmail": "kevin.hill@email.com"
    }, {
        "name": "Samantha Martinez",
        "studentId": 123456876,
        "studentClass": "VII A",
        "studentDebt": "$72,968",
        "studentEmail": "samantha.martinez@email.com"
    }, {
        "name": "David Howard",
        "studentId": 123456877,
        "studentClass": "VII B",
        "studentDebt": "$14,088",
        "studentEmail": "david.howard@email.com"
    }, {
        "name": "Susan Wilson",
        "studentId": 123456878,
        "studentClass": "VII C",
        "studentDebt": "$53,339",
        "studentEmail": "susan.wilson@email.com"
    }, {
        "name": "Jason Nelson",
        "studentId": 123456879,
        "studentClass": "VII A",
        "studentDebt": "$84,904",
        "studentEmail": "jason.nelson@email.com"
    }],
    students: [{
        "contact": {
            "email": "mark.wilson@email.com",
            "phoneNumber": "+1 212 493 9139"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 12,
                "day": 27
            },
            "sex": "male",
            "parentName": "Amy Wilson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/0.jpg"
        },
        "financialRecords": {
            "debt": "$54,750"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "finance"
        },
        "isOnline": true,
        "studentName": "Mark Wilson",
        "id": 123456000
    }, {
        "contact": {
            "email": "karen.zhang@email.com",
            "phoneNumber": "+1 undefined 509 7165"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 8,
                "day": 4
            },
            "sex": "female",
            "parentName": "Jason Zhang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/0.jpg"
        },
        "financialRecords": {
            "debt": "$92,199"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "Karen Zhang",
        "id": 123456001
    }, {
        "contact": {
            "email": "kevin.braun@email.com",
            "phoneNumber": "+1 201 48 4470"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 10,
                "day": 1
            },
            "sex": "male",
            "parentName": "Isabella Braun",
            "profilePhoto": "https://randomuser.me/api/portraits/men/1.jpg"
        },
        "financialRecords": {
            "debt": "$69,098"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Kevin Braun",
        "id": 123456002
    }, {
        "contact": {
            "email": "kayla.chen@email.com",
            "phoneNumber": "+1 609 299 1724"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 11,
                "day": 26
            },
            "sex": "female",
            "parentName": "Matthew Chen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/1.jpg"
        },
        "financialRecords": {
            "debt": "$5,861"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Kayla Chen",
        "id": 123456003
    }, {
        "contact": {
            "email": "jason.zhang@email.com",
            "phoneNumber": "+1 undefined 24 4873"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 8,
                "day": 20
            },
            "sex": "male",
            "parentName": "Amanda Zhang",
            "profilePhoto": "https://randomuser.me/api/portraits/men/2.jpg"
        },
        "financialRecords": {
            "debt": "$25,547"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Jason Zhang",
        "id": 123456004
    }, {
        "contact": {
            "email": "madison.rodriguez@email.com",
            "phoneNumber": "+1 908 709 5831"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 3,
                "day": 17
            },
            "sex": "female",
            "parentName": "Matthew Rodriguez",
            "profilePhoto": "https://randomuser.me/api/portraits/women/2.jpg"
        },
        "financialRecords": {
            "debt": "$16,112"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "architectural engineering"
        },
        "isOnline": true,
        "studentName": "Madison Rodriguez",
        "id": 123456005
    }, {
        "contact": {
            "email": "jason.davis@email.com",
            "phoneNumber": "+1 201 827 1127"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 4,
                "day": 3
            },
            "sex": "male",
            "parentName": "Angela Davis",
            "profilePhoto": "https://randomuser.me/api/portraits/men/3.jpg"
        },
        "financialRecords": {
            "debt": "$93,198"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Jason Davis",
        "id": 123456006
    }, {
        "contact": {
            "email": "nicole.roberts@email.com",
            "phoneNumber": "+1 732 681 6243"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 8,
                "day": 1
            },
            "sex": "female",
            "parentName": "Christopher Roberts",
            "profilePhoto": "https://randomuser.me/api/portraits/women/3.jpg"
        },
        "financialRecords": {
            "debt": "$57,873"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "mechanical engineering"
        },
        "isOnline": true,
        "studentName": "Nicole Roberts",
        "id": 123456007
    }, {
        "contact": {
            "email": "justin.zhang@email.com",
            "phoneNumber": "+1 732 231 2607"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 5,
                "day": 21
            },
            "sex": "male",
            "parentName": "Kayla Zhang",
            "profilePhoto": "https://randomuser.me/api/portraits/men/4.jpg"
        },
        "financialRecords": {
            "debt": "$78,377"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "Justin Zhang",
        "id": 123456008
    }, {
        "contact": {
            "email": "michelle.schulz@email.com",
            "phoneNumber": "+1 201 991 9497"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 1,
                "day": 20
            },
            "sex": "female",
            "parentName": "Christian Schulz",
            "profilePhoto": "https://randomuser.me/api/portraits/women/4.jpg"
        },
        "financialRecords": {
            "debt": "$66,759"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Michelle Schulz",
        "id": 123456009
    }, {
        "contact": {
            "email": "robert.gonzalez@email.com",
            "phoneNumber": "+1 732 771 2376"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 1,
                "day": 24
            },
            "sex": "male",
            "parentName": "Brittany Gonzalez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/5.jpg"
        },
        "financialRecords": {
            "debt": "$55,158"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "politcal science"
        },
        "isOnline": true,
        "studentName": "Robert Gonzalez",
        "id": 123456010
    }, {
        "contact": {
            "email": "heather.allen@email.com",
            "phoneNumber": "+1 732 356 9113"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 9,
                "day": 15
            },
            "sex": "female",
            "parentName": "Brandon Allen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/5.jpg"
        },
        "financialRecords": {
            "debt": "$64,588"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Heather Allen",
        "id": 123456011
    }, {
        "contact": {
            "email": "brian.adams@email.com",
            "phoneNumber": "+1 609 962 5823"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 10,
                "day": 23
            },
            "sex": "male",
            "parentName": "Brittany Adams",
            "profilePhoto": "https://randomuser.me/api/portraits/men/6.jpg"
        },
        "financialRecords": {
            "debt": "$87,704"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "mechanical engineering"
        },
        "isOnline": false,
        "studentName": "Brian Adams",
        "id": 123456012
    }, {
        "contact": {
            "email": "jennifer.flores@email.com",
            "phoneNumber": "+1 undefined 288 4004"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 9,
                "day": 26
            },
            "sex": "female",
            "parentName": "Christian Flores",
            "profilePhoto": "https://randomuser.me/api/portraits/women/6.jpg"
        },
        "financialRecords": {
            "debt": "$30,281"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Jennifer Flores",
        "id": 123456013
    }, {
        "contact": {
            "email": "brian.schneider@email.com",
            "phoneNumber": "+1 609 299 4780"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 11,
                "day": 19
            },
            "sex": "male",
            "parentName": "Samantha Schneider",
            "profilePhoto": "https://randomuser.me/api/portraits/men/7.jpg"
        },
        "financialRecords": {
            "debt": "$10,034"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "Brian Schneider",
        "id": 123456014
    }, {
        "contact": {
            "email": "kayla.zimmerman@email.com",
            "phoneNumber": "+1 856 607 4960"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 8,
                "day": 30
            },
            "sex": "female",
            "parentName": "Christopher Zimmerman",
            "profilePhoto": "https://randomuser.me/api/portraits/women/7.jpg"
        },
        "financialRecords": {
            "debt": "$7,354"
        },
        "academicRecords": {
            "class": "VII A"
        },
        "isOnline": true,
        "studentName": "Kayla Zimmerman",
        "id": 123456015
    }, {
        "contact": {
            "email": "brandon.roberts@email.com",
            "phoneNumber": "+1 609 756 1027"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 10,
                "day": 18
            },
            "sex": "male",
            "parentName": "Madison Roberts",
            "profilePhoto": "https://randomuser.me/api/portraits/men/8.jpg"
        },
        "financialRecords": {
            "debt": "$27,683"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "Brandon Roberts",
        "id": 123456016
    }, {
        "contact": {
            "email": "linda.rogers@email.com",
            "phoneNumber": "+1 undefined 179 1431"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 6,
                "day": 8
            },
            "sex": "female",
            "parentName": "Christian Rogers",
            "profilePhoto": "https://randomuser.me/api/portraits/women/8.jpg"
        },
        "financialRecords": {
            "debt": "$55,873"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Linda Rogers",
        "id": 123456017
    }, {
        "contact": {
            "email": "michael.thompson@email.com",
            "phoneNumber": "+1 undefined 855 8954"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 11,
                "day": 31
            },
            "sex": "male",
            "parentName": "Karen Thompson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/9.jpg"
        },
        "financialRecords": {
            "debt": "$99,861"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Michael Thompson",
        "id": 123456018
    }, {
        "contact": {
            "email": "sophia.allen@email.com",
            "phoneNumber": "+1 201 378 7852"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 2,
                "day": 3
            },
            "sex": "female",
            "parentName": "Zachary Allen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/9.jpg"
        },
        "financialRecords": {
            "debt": "$34,088"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Sophia Allen",
        "id": 123456019
    }, {
        "contact": {
            "email": "john.lewis@email.com",
            "phoneNumber": "+1 732 743 2131"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 2,
                "day": 14
            },
            "sex": "male",
            "parentName": "Amy Lewis",
            "profilePhoto": "https://randomuser.me/api/portraits/men/10.jpg"
        },
        "financialRecords": {
            "debt": "$98,755"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "John Lewis",
        "id": 123456020
    }, {
        "contact": {
            "email": "angela.miller@email.com",
            "phoneNumber": "+1 undefined 126 7479"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 4,
                "day": 22
            },
            "sex": "female",
            "parentName": "Alexander Miller",
            "profilePhoto": "https://randomuser.me/api/portraits/women/10.jpg"
        },
        "financialRecords": {
            "debt": "$31,372"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "politcal science"
        },
        "isOnline": false,
        "studentName": "Angela Miller",
        "id": 123456021
    }, {
        "contact": {
            "email": "joseph.white@email.com",
            "phoneNumber": "+1 undefined 164 6800"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 1,
                "day": 28
            },
            "sex": "male",
            "parentName": "Lisa White",
            "profilePhoto": "https://randomuser.me/api/portraits/men/11.jpg"
        },
        "financialRecords": {
            "debt": "$25,961"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Joseph White",
        "id": 123456022
    }, {
        "contact": {
            "email": "alexis.walker@email.com",
            "phoneNumber": "+1 856 264 392"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 4,
                "day": 19
            },
            "sex": "female",
            "parentName": "John Walker",
            "profilePhoto": "https://randomuser.me/api/portraits/women/11.jpg"
        },
        "financialRecords": {
            "debt": "$13,844"
        },
        "academicRecords": {
            "class": "VII C"
        },
        "isOnline": true,
        "studentName": "Alexis Walker",
        "id": 123456023
    }, {
        "contact": {
            "email": "joshua.white@email.com",
            "phoneNumber": "+1 201 215 8135"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 5,
                "day": 26
            },
            "sex": "male",
            "parentName": "Melissa White",
            "profilePhoto": "https://randomuser.me/api/portraits/men/12.jpg"
        },
        "financialRecords": {
            "debt": "$60,449"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "politcal science"
        },
        "isOnline": true,
        "studentName": "Joshua White",
        "id": 123456024
    }, {
        "contact": {
            "email": "alexis.hill@email.com",
            "phoneNumber": "+1 609 708 9048"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 2,
                "day": 20
            },
            "sex": "female",
            "parentName": "Mark Hill",
            "profilePhoto": "https://randomuser.me/api/portraits/women/12.jpg"
        },
        "financialRecords": {
            "debt": "$33,749"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Alexis Hill",
        "id": 123456025
    }, {
        "contact": {
            "email": "gabriel.perez@email.com",
            "phoneNumber": "+1 undefined 770 5841"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 9,
                "day": 21
            },
            "sex": "male",
            "parentName": "Ashley Perez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/13.jpg"
        },
        "financialRecords": {
            "debt": "$32,775"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Gabriel Perez",
        "id": 123456026
    }, {
        "contact": {
            "email": "angela.young@email.com",
            "phoneNumber": "+1 201 862 8166"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 5,
                "day": 13
            },
            "sex": "female",
            "parentName": "Matthew Young",
            "profilePhoto": "https://randomuser.me/api/portraits/women/13.jpg"
        },
        "financialRecords": {
            "debt": "$65,260"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "mechanical engineering"
        },
        "isOnline": true,
        "studentName": "Angela Young",
        "id": 123456027
    }, {
        "contact": {
            "email": "christopher.zhang@email.com",
            "phoneNumber": "+1 732 765 9146"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 10,
                "day": 23
            },
            "sex": "male",
            "parentName": "Angela Zhang",
            "profilePhoto": "https://randomuser.me/api/portraits/men/14.jpg"
        },
        "financialRecords": {
            "debt": "$47,499"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "mechanical engineering"
        },
        "isOnline": true,
        "studentName": "Christopher Zhang",
        "id": 123456028
    }, {
        "contact": {
            "email": "kimberly.perez@email.com",
            "phoneNumber": "+1 732 26 8525"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 10,
                "day": 9
            },
            "sex": "female",
            "parentName": "Joshua Perez",
            "profilePhoto": "https://randomuser.me/api/portraits/women/14.jpg"
        },
        "financialRecords": {
            "debt": "$32,918"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "architectural engineering"
        },
        "isOnline": false,
        "studentName": "Kimberly Perez",
        "id": 123456029
    }, {
        "contact": {
            "email": "brandon.nguyen@email.com",
            "phoneNumber": "+1 732 883 6498"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 3,
                "day": 3
            },
            "sex": "male",
            "parentName": "Kimberly Nguyen",
            "profilePhoto": "https://randomuser.me/api/portraits/men/15.jpg"
        },
        "financialRecords": {
            "debt": "$92,076"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "architectural engineering"
        },
        "isOnline": false,
        "studentName": "Brandon Nguyen",
        "id": 123456030
    }, {
        "contact": {
            "email": "heather.fournier@email.com",
            "phoneNumber": "+1 201 678 9783"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 12,
                "day": 5
            },
            "sex": "female",
            "parentName": "Christopher Fournier",
            "profilePhoto": "https://randomuser.me/api/portraits/women/15.jpg"
        },
        "financialRecords": {
            "debt": "$53,879"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Heather Fournier",
        "id": 123456031
    }, {
        "contact": {
            "email": "christopher.dubois@email.com",
            "phoneNumber": "+1 609 110 549"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 10,
                "day": 6
            },
            "sex": "male",
            "parentName": "Lisa Dubois",
            "profilePhoto": "https://randomuser.me/api/portraits/men/16.jpg"
        },
        "financialRecords": {
            "debt": "$16,257"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Christopher Dubois",
        "id": 123456032
    }, {
        "contact": {
            "email": "sarah.carter@email.com",
            "phoneNumber": "+1 856 418 9629"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 6,
                "day": 13
            },
            "sex": "female",
            "parentName": "Nicholas Carter",
            "profilePhoto": "https://randomuser.me/api/portraits/women/16.jpg"
        },
        "financialRecords": {
            "debt": "$56,764"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Sarah Carter",
        "id": 123456033
    }, {
        "contact": {
            "email": "matthew.smith@email.com",
            "phoneNumber": "+1 856 354 5599"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 4,
                "day": 23
            },
            "sex": "male",
            "parentName": "Heather Smith",
            "profilePhoto": "https://randomuser.me/api/portraits/men/17.jpg"
        },
        "financialRecords": {
            "debt": "$92,459"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "mechanical engineering"
        },
        "isOnline": true,
        "studentName": "Matthew Smith",
        "id": 123456034
    }, {
        "contact": {
            "email": "olivia.martinez@email.com",
            "phoneNumber": "+1 201 119 2132"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 4,
                "day": 13
            },
            "sex": "female",
            "parentName": "Jason Martinez",
            "profilePhoto": "https://randomuser.me/api/portraits/women/17.jpg"
        },
        "financialRecords": {
            "debt": "$31,488"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Olivia Martinez",
        "id": 123456035
    }, {
        "contact": {
            "email": "andrew.nelson@email.com",
            "phoneNumber": "+1 908 636 62"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 8,
                "day": 19
            },
            "sex": "male",
            "parentName": "Madison Nelson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/18.jpg"
        },
        "financialRecords": {
            "debt": "$45,236"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "business"
        },
        "isOnline": false,
        "studentName": "Andrew Nelson",
        "id": 123456036
    }, {
        "contact": {
            "email": "amanda.nguyen@email.com",
            "phoneNumber": "+1 201 66 204"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 8,
                "day": 14
            },
            "sex": "female",
            "parentName": "Nathan Nguyen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/18.jpg"
        },
        "financialRecords": {
            "debt": "$47,981"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Amanda Nguyen",
        "id": 123456037
    }, {
        "contact": {
            "email": "zachary.rogers@email.com",
            "phoneNumber": "+1 856 638 7967"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 10,
                "day": 1
            },
            "sex": "male",
            "parentName": "Madison Rogers",
            "profilePhoto": "https://randomuser.me/api/portraits/men/19.jpg"
        },
        "financialRecords": {
            "debt": "$29,247"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "psychology"
        },
        "isOnline": true,
        "studentName": "Zachary Rogers",
        "id": 123456038
    }, {
        "contact": {
            "email": "kimberly.roberts@email.com",
            "phoneNumber": "+1 732 383 8609"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 1,
                "day": 3
            },
            "sex": "female",
            "parentName": "Joseph Roberts",
            "profilePhoto": "https://randomuser.me/api/portraits/women/19.jpg"
        },
        "financialRecords": {
            "debt": "$98,337"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Kimberly Roberts",
        "id": 123456039
    }, {
        "contact": {
            "email": "ryan.peterson@email.com",
            "phoneNumber": "+1 undefined 176 5152"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 9,
                "day": 9
            },
            "sex": "male",
            "parentName": "Elizabeth Peterson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/20.jpg"
        },
        "financialRecords": {
            "debt": "$24,891"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Ryan Peterson",
        "id": 123456040
    }, {
        "contact": {
            "email": "karen.thompson@email.com",
            "phoneNumber": "+1 609 136 1579"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 8,
                "day": 17
            },
            "sex": "female",
            "parentName": "Jonathan Thompson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/20.jpg"
        },
        "financialRecords": {
            "debt": "$2,969"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Karen Thompson",
        "id": 123456041
    }, {
        "contact": {
            "email": "robert.nelson@email.com",
            "phoneNumber": "+1 201 251 9360"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 10,
                "day": 30
            },
            "sex": "male",
            "parentName": "Amy Nelson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/21.jpg"
        },
        "financialRecords": {
            "debt": "$36,463"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Robert Nelson",
        "id": 123456042
    }, {
        "contact": {
            "email": "angela.moore@email.com",
            "phoneNumber": "+1 609 692 5649"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 1,
                "day": 11
            },
            "sex": "female",
            "parentName": "Brandon Moore",
            "profilePhoto": "https://randomuser.me/api/portraits/women/21.jpg"
        },
        "financialRecords": {
            "debt": "$95,944"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "computer science"
        },
        "isOnline": true,
        "studentName": "Angela Moore",
        "id": 123456043
    }, {
        "contact": {
            "email": "matthew.edwards@email.com",
            "phoneNumber": "+1 201 562 850"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 4,
                "day": 18
            },
            "sex": "male",
            "parentName": "Mary Edwards",
            "profilePhoto": "https://randomuser.me/api/portraits/men/22.jpg"
        },
        "financialRecords": {
            "debt": "$68,002"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Matthew Edwards",
        "id": 123456044
    }, {
        "contact": {
            "email": "elizabeth.robinson@email.com",
            "phoneNumber": "+1 609 579 6786"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 2,
                "day": 18
            },
            "sex": "female",
            "parentName": "Austin Robinson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/22.jpg"
        },
        "financialRecords": {
            "debt": "$55,519"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "Elizabeth Robinson",
        "id": 123456045
    }, {
        "contact": {
            "email": "robert.lee@email.com",
            "phoneNumber": "+1 undefined 976 1808"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 1,
                "day": 26
            },
            "sex": "male",
            "parentName": "Lillian Lee",
            "profilePhoto": "https://randomuser.me/api/portraits/men/23.jpg"
        },
        "financialRecords": {
            "debt": "$32,724"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Robert Lee",
        "id": 123456046
    }, {
        "contact": {
            "email": "kimberly.taylor@email.com",
            "phoneNumber": "+1 201 651 9085"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 9,
                "day": 4
            },
            "sex": "female",
            "parentName": "Christian Taylor",
            "profilePhoto": "https://randomuser.me/api/portraits/women/23.jpg"
        },
        "financialRecords": {
            "debt": "$3,899"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "mechanical engineering"
        },
        "isOnline": false,
        "studentName": "Kimberly Taylor",
        "id": 123456047
    }, {
        "contact": {
            "email": "mark.flores@email.com",
            "phoneNumber": "+1 732 171 5205"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 5,
                "day": 28
            },
            "sex": "male",
            "parentName": "Emily Flores",
            "profilePhoto": "https://randomuser.me/api/portraits/men/24.jpg"
        },
        "financialRecords": {
            "debt": "$78,877"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Mark Flores",
        "id": 123456048
    }, {
        "contact": {
            "email": "melissa.ali@email.com",
            "phoneNumber": "+1 732 67 3624"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 7,
                "day": 1
            },
            "sex": "female",
            "parentName": "Christian Ali",
            "profilePhoto": "https://randomuser.me/api/portraits/women/24.jpg"
        },
        "financialRecords": {
            "debt": "$42,839"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Melissa Ali",
        "id": 123456049
    }, {
        "contact": {
            "email": "ryan.dupont@email.com",
            "phoneNumber": "+1 201 770 1780"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 1,
                "day": 26
            },
            "sex": "male",
            "parentName": "Lillian Dupont",
            "profilePhoto": "https://randomuser.me/api/portraits/men/25.jpg"
        },
        "financialRecords": {
            "debt": "$44,254"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Ryan Dupont",
        "id": 123456050
    }, {
        "contact": {
            "email": "mary.fournier@email.com",
            "phoneNumber": "+1 609 821 1491"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 5,
                "day": 21
            },
            "sex": "female",
            "parentName": "Daniel Fournier",
            "profilePhoto": "https://randomuser.me/api/portraits/women/25.jpg"
        },
        "financialRecords": {
            "debt": "$20,869"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "nursing"
        },
        "isOnline": false,
        "studentName": "Mary Fournier",
        "id": 123456051
    }, {
        "contact": {
            "email": "john.wang@email.com",
            "phoneNumber": "+1 732 508 4868"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 2,
                "day": 10
            },
            "sex": "male",
            "parentName": "Melissa Wang",
            "profilePhoto": "https://randomuser.me/api/portraits/men/26.jpg"
        },
        "financialRecords": {
            "debt": "$11,337"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "politcal science"
        },
        "isOnline": false,
        "studentName": "John Wang",
        "id": 123456052
    }, {
        "contact": {
            "email": "linda.thompson@email.com",
            "phoneNumber": "+1 609 393 4243"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 12,
                "day": 3
            },
            "sex": "female",
            "parentName": "Kevin Thompson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/26.jpg"
        },
        "financialRecords": {
            "debt": "$77,205"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Linda Thompson",
        "id": 123456053
    }, {
        "contact": {
            "email": "brian.walker@email.com",
            "phoneNumber": "+1 856 678 3612"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 2,
                "day": 7
            },
            "sex": "male",
            "parentName": "Angela Walker",
            "profilePhoto": "https://randomuser.me/api/portraits/men/27.jpg"
        },
        "financialRecords": {
            "debt": "$90,630"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "finance"
        },
        "isOnline": true,
        "studentName": "Brian Walker",
        "id": 123456054
    }, {
        "contact": {
            "email": "emily.adams@email.com",
            "phoneNumber": "+1 609 743 2194"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 9,
                "day": 18
            },
            "sex": "female",
            "parentName": "Jack Adams",
            "profilePhoto": "https://randomuser.me/api/portraits/women/27.jpg"
        },
        "financialRecords": {
            "debt": "$31,312"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "politcal science"
        },
        "isOnline": false,
        "studentName": "Emily Adams",
        "id": 123456055
    }, {
        "contact": {
            "email": "christian.smith@email.com",
            "phoneNumber": "+1 908 428 1615"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 6,
                "day": 28
            },
            "sex": "male",
            "parentName": "Michelle Smith",
            "profilePhoto": "https://randomuser.me/api/portraits/men/28.jpg"
        },
        "financialRecords": {
            "debt": "$46,333"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "Christian Smith",
        "id": 123456056
    }, {
        "contact": {
            "email": "karen.lavigne@email.com",
            "phoneNumber": "+1 856 501 7558"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 8,
                "day": 29
            },
            "sex": "female",
            "parentName": "Kyle Lavigne",
            "profilePhoto": "https://randomuser.me/api/portraits/women/28.jpg"
        },
        "financialRecords": {
            "debt": "$74,046"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Karen Lavigne",
        "id": 123456057
    }, {
        "contact": {
            "email": "kevin.braun@email.com",
            "phoneNumber": "+1 856 387 8307"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 1,
                "day": 18
            },
            "sex": "male",
            "parentName": "Kayla Braun",
            "profilePhoto": "https://randomuser.me/api/portraits/men/29.jpg"
        },
        "financialRecords": {
            "debt": "$22,826"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Kevin Braun",
        "id": 123456058
    }, {
        "contact": {
            "email": "taylor.wilson@email.com",
            "phoneNumber": "+1 856 20 7085"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 3,
                "day": 6
            },
            "sex": "female",
            "parentName": "Nicholas Wilson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/29.jpg"
        },
        "financialRecords": {
            "debt": "$30,081"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "politcal science"
        },
        "isOnline": true,
        "studentName": "Taylor Wilson",
        "id": 123456059
    }, {
        "contact": {
            "email": "william.peterson@email.com",
            "phoneNumber": "+1 732 728 7550"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 7
            },
            "sex": "male",
            "parentName": "Jennifer Peterson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/30.jpg"
        },
        "financialRecords": {
            "debt": "$86,677"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "William Peterson",
        "id": 123456060
    }, {
        "contact": {
            "email": "kimberly.lee@email.com",
            "phoneNumber": "+1 856 645 4765"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 10,
                "day": 12
            },
            "sex": "female",
            "parentName": "Kyle Lee",
            "profilePhoto": "https://randomuser.me/api/portraits/women/30.jpg"
        },
        "financialRecords": {
            "debt": "$42,832"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Kimberly Lee",
        "id": 123456061
    }, {
        "contact": {
            "email": "joseph.wang@email.com",
            "phoneNumber": "+1 856 362 7823"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 5,
                "day": 6
            },
            "sex": "male",
            "parentName": "Emily Wang",
            "profilePhoto": "https://randomuser.me/api/portraits/men/31.jpg"
        },
        "financialRecords": {
            "debt": "$96,130"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "Joseph Wang",
        "id": 123456062
    }, {
        "contact": {
            "email": "olivia.zimmerman@email.com",
            "phoneNumber": "+1 856 623 1410"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 3,
                "day": 11
            },
            "sex": "female",
            "parentName": "Kevin Zimmerman",
            "profilePhoto": "https://randomuser.me/api/portraits/women/31.jpg"
        },
        "financialRecords": {
            "debt": "$45,072"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Olivia Zimmerman",
        "id": 123456063
    }, {
        "contact": {
            "email": "zachary.robinson@email.com",
            "phoneNumber": "+1 856 916 202"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 10,
                "day": 15
            },
            "sex": "male",
            "parentName": "Brittany Robinson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/32.jpg"
        },
        "financialRecords": {
            "debt": "$16,634"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "mechanical engineering"
        },
        "isOnline": true,
        "studentName": "Zachary Robinson",
        "id": 123456064
    }, {
        "contact": {
            "email": "jessica.davis@email.com",
            "phoneNumber": "+1 201 619 2510"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 1,
                "day": 30
            },
            "sex": "female",
            "parentName": "Christopher Davis",
            "profilePhoto": "https://randomuser.me/api/portraits/women/32.jpg"
        },
        "financialRecords": {
            "debt": "$42,139"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Jessica Davis",
        "id": 123456065
    }, {
        "contact": {
            "email": "jacob.richardson@email.com",
            "phoneNumber": "+1 201 570 7457"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 11,
                "day": 23
            },
            "sex": "male",
            "parentName": "Sophia Richardson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/33.jpg"
        },
        "financialRecords": {
            "debt": "$15,263"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Jacob Richardson",
        "id": 123456066
    }, {
        "contact": {
            "email": "melissa.williams@email.com",
            "phoneNumber": "+1 609 682 9333"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 1,
                "day": 11
            },
            "sex": "female",
            "parentName": "Gabriel Williams",
            "profilePhoto": "https://randomuser.me/api/portraits/women/33.jpg"
        },
        "financialRecords": {
            "debt": "$76,383"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "politcal science"
        },
        "isOnline": false,
        "studentName": "Melissa Williams",
        "id": 123456067
    }, {
        "contact": {
            "email": "matthew.lavigne@email.com",
            "phoneNumber": "+1 201 26 1671"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 3,
                "day": 18
            },
            "sex": "male",
            "parentName": "Brittany Lavigne",
            "profilePhoto": "https://randomuser.me/api/portraits/men/34.jpg"
        },
        "financialRecords": {
            "debt": "$83,865"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "mechanical engineering"
        },
        "isOnline": true,
        "studentName": "Matthew Lavigne",
        "id": 123456068
    }, {
        "contact": {
            "email": "hannah.schneider@email.com",
            "phoneNumber": "+1 609 615 6435"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 12,
                "day": 4
            },
            "sex": "female",
            "parentName": "Jacob Schneider",
            "profilePhoto": "https://randomuser.me/api/portraits/women/34.jpg"
        },
        "financialRecords": {
            "debt": "$37,100"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "electrical engineering"
        },
        "isOnline": true,
        "studentName": "Hannah Schneider",
        "id": 123456069
    }, {
        "contact": {
            "email": "brandon.white@email.com",
            "phoneNumber": "+1 908 217 961"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 9,
                "day": 17
            },
            "sex": "male",
            "parentName": "Linda White",
            "profilePhoto": "https://randomuser.me/api/portraits/men/35.jpg"
        },
        "financialRecords": {
            "debt": "$23,767"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "finance"
        },
        "isOnline": true,
        "studentName": "Brandon White",
        "id": 123456070
    }, {
        "contact": {
            "email": "amy.anderson@email.com",
            "phoneNumber": "+1 201 205 9870"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 6,
                "day": 28
            },
            "sex": "female",
            "parentName": "Jack Anderson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/35.jpg"
        },
        "financialRecords": {
            "debt": "$12,095"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "nursing"
        },
        "isOnline": true,
        "studentName": "Amy Anderson",
        "id": 123456071
    }, {
        "contact": {
            "email": "samuel.harris@email.com",
            "phoneNumber": "+1 201 52 4005"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 6,
                "day": 12
            },
            "sex": "male",
            "parentName": "Karen Harris",
            "profilePhoto": "https://randomuser.me/api/portraits/men/36.jpg"
        },
        "financialRecords": {
            "debt": "$34,575"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "finance"
        },
        "isOnline": true,
        "studentName": "Samuel Harris",
        "id": 123456072
    }, {
        "contact": {
            "email": "emma.ali@email.com",
            "phoneNumber": "+1 732 354 6186"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 1,
                "day": 11
            },
            "sex": "female",
            "parentName": "David Ali",
            "profilePhoto": "https://randomuser.me/api/portraits/women/36.jpg"
        },
        "financialRecords": {
            "debt": "$65,202"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "Emma Ali",
        "id": 123456073
    }, {
        "contact": {
            "email": "michael.young@email.com",
            "phoneNumber": "+1 201 163 1907"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 6,
                "day": 10
            },
            "sex": "male",
            "parentName": "Angela Young",
            "profilePhoto": "https://randomuser.me/api/portraits/men/37.jpg"
        },
        "financialRecords": {
            "debt": "$12,038"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Michael Young",
        "id": 123456074
    }, {
        "contact": {
            "email": "madison.monet@email.com",
            "phoneNumber": "+1 732 459 8984"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 3,
                "day": 31
            },
            "sex": "female",
            "parentName": "Joshua Monet",
            "profilePhoto": "https://randomuser.me/api/portraits/women/37.jpg"
        },
        "financialRecords": {
            "debt": "$63,292"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "mechanical engineering"
        },
        "isOnline": true,
        "studentName": "Madison Monet",
        "id": 123456075
    }, {
        "contact": {
            "email": "samuel.perez@email.com",
            "phoneNumber": "+1 201 634 1840"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 10,
                "day": 31
            },
            "sex": "male",
            "parentName": "Lillian Perez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/38.jpg"
        },
        "financialRecords": {
            "debt": "$25,358"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": true,
        "studentName": "Samuel Perez",
        "id": 123456076
    }, {
        "contact": {
            "email": "kayla.chen@email.com",
            "phoneNumber": "+1 908 701 6714"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 9,
                "day": 16
            },
            "sex": "female",
            "parentName": "Ethan Chen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/38.jpg"
        },
        "financialRecords": {
            "debt": "$97,942"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Kayla Chen",
        "id": 123456077
    }, {
        "contact": {
            "email": "william.bonnet@email.com",
            "phoneNumber": "+1 732 675 7518"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 9,
                "day": 27
            },
            "sex": "male",
            "parentName": "Kimberly Bonnet",
            "profilePhoto": "https://randomuser.me/api/portraits/men/39.jpg"
        },
        "financialRecords": {
            "debt": "$52,186"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "electrical engineering"
        },
        "isOnline": false,
        "studentName": "William Bonnet",
        "id": 123456078
    }, {
        "contact": {
            "email": "ashley.brown@email.com",
            "phoneNumber": "+1 609 567 7491"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 1,
                "day": 3
            },
            "sex": "female",
            "parentName": "Christian Brown",
            "profilePhoto": "https://randomuser.me/api/portraits/women/39.jpg"
        },
        "financialRecords": {
            "debt": "$62,667"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "nursing"
        },
        "isOnline": true,
        "studentName": "Ashley Brown",
        "id": 123456079
    }, {
        "contact": {
            "email": "james.fournier@email.com",
            "phoneNumber": "+1 201 326 5444"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 1,
                "day": 8
            },
            "sex": "male",
            "parentName": "Kayla Fournier",
            "profilePhoto": "https://randomuser.me/api/portraits/men/40.jpg"
        },
        "financialRecords": {
            "debt": "$98,543"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "architectural engineering"
        },
        "isOnline": true,
        "studentName": "James Fournier",
        "id": 123456080
    }, {
        "contact": {
            "email": "lisa.chen@email.com",
            "phoneNumber": "+1 609 327 471"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 11,
                "day": 5
            },
            "sex": "female",
            "parentName": "Jacob Chen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/40.jpg"
        },
        "financialRecords": {
            "debt": "$70,542"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "mechanical engineering"
        },
        "isOnline": false,
        "studentName": "Lisa Chen",
        "id": 123456081
    }, {
        "contact": {
            "email": "thomas.zimmerman@email.com",
            "phoneNumber": "+1 732 328 7136"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 9,
                "day": 14
            },
            "sex": "male",
            "parentName": "Amy Zimmerman",
            "profilePhoto": "https://randomuser.me/api/portraits/men/41.jpg"
        },
        "financialRecords": {
            "debt": "$51,026"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "electrical engineering"
        },
        "isOnline": false,
        "studentName": "Thomas Zimmerman",
        "id": 123456082
    }, {
        "contact": {
            "email": "sophia.richardson@email.com",
            "phoneNumber": "+1 856 234 1784"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 7,
                "day": 1
            },
            "sex": "female",
            "parentName": "Joshua Richardson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/41.jpg"
        },
        "financialRecords": {
            "debt": "$23,251"
        },
        "academicRecords": {
            "class": "VII C"
        },
        "isOnline": true,
        "studentName": "Sophia Richardson",
        "id": 123456083
    }, {
        "contact": {
            "email": "ethan.wilson@email.com",
            "phoneNumber": "+1 908 161 3689"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 11,
                "day": 2
            },
            "sex": "male",
            "parentName": "Amy Wilson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/42.jpg"
        },
        "financialRecords": {
            "debt": "$8,247"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Ethan Wilson",
        "id": 123456084
    }, {
        "contact": {
            "email": "abigail.harris@email.com",
            "phoneNumber": "+1 908 717 6165"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 8,
                "day": 30
            },
            "sex": "female",
            "parentName": "Nicholas Harris",
            "profilePhoto": "https://randomuser.me/api/portraits/women/42.jpg"
        },
        "financialRecords": {
            "debt": "$17,669"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Abigail Harris",
        "id": 123456085
    }, {
        "contact": {
            "email": "nathan.li@email.com",
            "phoneNumber": "+1 732 47 2752"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 3,
                "day": 3
            },
            "sex": "male",
            "parentName": "Stephanie Li",
            "profilePhoto": "https://randomuser.me/api/portraits/men/43.jpg"
        },
        "financialRecords": {
            "debt": "$99,820"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "Nathan Li",
        "id": 123456086
    }, {
        "contact": {
            "email": "emma.scott@email.com",
            "phoneNumber": "+1 201 717 7149"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 8,
                "day": 25
            },
            "sex": "female",
            "parentName": "Jonathan Scott",
            "profilePhoto": "https://randomuser.me/api/portraits/women/43.jpg"
        },
        "financialRecords": {
            "debt": "$15,110"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Emma Scott",
        "id": 123456087
    }, {
        "contact": {
            "email": "daniel.nelson@email.com",
            "phoneNumber": "+1 609 747 5618"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 10,
                "day": 6
            },
            "sex": "male",
            "parentName": "Heather Nelson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/44.jpg"
        },
        "financialRecords": {
            "debt": "$62,168"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Daniel Nelson",
        "id": 123456088
    }, {
        "contact": {
            "email": "kayla.nguyen@email.com",
            "phoneNumber": "+1 609 778 5905"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 8,
                "day": 14
            },
            "sex": "female",
            "parentName": "Joseph Nguyen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/44.jpg"
        },
        "financialRecords": {
            "debt": "$87,759"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "Kayla Nguyen",
        "id": 123456089
    }, {
        "contact": {
            "email": "joseph.harris@email.com",
            "phoneNumber": "+1 856 907 1528"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 4,
                "day": 19
            },
            "sex": "male",
            "parentName": "Nicole Harris",
            "profilePhoto": "https://randomuser.me/api/portraits/men/45.jpg"
        },
        "financialRecords": {
            "debt": "$20,085"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "electrical engineering"
        },
        "isOnline": true,
        "studentName": "Joseph Harris",
        "id": 123456090
    }, {
        "contact": {
            "email": "alexis.wright@email.com",
            "phoneNumber": "+1 732 216 8721"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 6,
                "day": 11
            },
            "sex": "female",
            "parentName": "Kevin Wright",
            "profilePhoto": "https://randomuser.me/api/portraits/women/45.jpg"
        },
        "financialRecords": {
            "debt": "$5,532"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "Alexis Wright",
        "id": 123456091
    }, {
        "contact": {
            "email": "andrew.peterson@email.com",
            "phoneNumber": "+1 undefined 673 8003"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 10,
                "day": 14
            },
            "sex": "male",
            "parentName": "Isabella Peterson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/46.jpg"
        },
        "financialRecords": {
            "debt": "$79,654"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Andrew Peterson",
        "id": 123456092
    }, {
        "contact": {
            "email": "taylor.lavigne@email.com",
            "phoneNumber": "+1 856 291 4815"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 24
            },
            "sex": "female",
            "parentName": "Jason Lavigne",
            "profilePhoto": "https://randomuser.me/api/portraits/women/46.jpg"
        },
        "financialRecords": {
            "debt": "$73,264"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Taylor Lavigne",
        "id": 123456093
    }, {
        "contact": {
            "email": "nicholas.wilson@email.com",
            "phoneNumber": "+1 732 55 5322"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 1,
                "day": 10
            },
            "sex": "male",
            "parentName": "Megan Wilson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/47.jpg"
        },
        "financialRecords": {
            "debt": "$19,651"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "nursing"
        },
        "isOnline": true,
        "studentName": "Nicholas Wilson",
        "id": 123456094
    }, {
        "contact": {
            "email": "emily.hall@email.com",
            "phoneNumber": "+1 856 928 4489"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 7,
                "day": 1
            },
            "sex": "female",
            "parentName": "Andrew Hall",
            "profilePhoto": "https://randomuser.me/api/portraits/women/47.jpg"
        },
        "financialRecords": {
            "debt": "$49,027"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "computer science"
        },
        "isOnline": true,
        "studentName": "Emily Hall",
        "id": 123456095
    }, {
        "contact": {
            "email": "austin.braun@email.com",
            "phoneNumber": "+1 908 970 7273"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 4,
                "day": 28
            },
            "sex": "male",
            "parentName": "Amy Braun",
            "profilePhoto": "https://randomuser.me/api/portraits/men/48.jpg"
        },
        "financialRecords": {
            "debt": "$33,176"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "Austin Braun",
        "id": 123456096
    }, {
        "contact": {
            "email": "heather.monet@email.com",
            "phoneNumber": "+1 201 126 1384"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 8,
                "day": 28
            },
            "sex": "female",
            "parentName": "William Monet",
            "profilePhoto": "https://randomuser.me/api/portraits/women/48.jpg"
        },
        "financialRecords": {
            "debt": "$69,687"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "Heather Monet",
        "id": 123456097
    }, {
        "contact": {
            "email": "mark.taylor@email.com",
            "phoneNumber": "+1 908 610 7385"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 7,
                "day": 6
            },
            "sex": "male",
            "parentName": "Mary Taylor",
            "profilePhoto": "https://randomuser.me/api/portraits/men/49.jpg"
        },
        "financialRecords": {
            "debt": "$2,741"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Mark Taylor",
        "id": 123456098
    }, {
        "contact": {
            "email": "michelle.toussaint@email.com",
            "phoneNumber": "+1 732 239 3487"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 12,
                "day": 6
            },
            "sex": "female",
            "parentName": "Kevin Toussaint",
            "profilePhoto": "https://randomuser.me/api/portraits/women/49.jpg"
        },
        "financialRecords": {
            "debt": "$43,442"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "politcal science"
        },
        "isOnline": false,
        "studentName": "Michelle Toussaint",
        "id": 123456099
    }, {
        "contact": {
            "email": "joshua.roberts@email.com",
            "phoneNumber": "+1 201 382 5139"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 10,
                "day": 11
            },
            "sex": "male",
            "parentName": "Abigail Roberts",
            "profilePhoto": "https://randomuser.me/api/portraits/men/50.jpg"
        },
        "financialRecords": {
            "debt": "$38,145"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Joshua Roberts",
        "id": 123456100
    }, {
        "contact": {
            "email": "stephanie.rogers@email.com",
            "phoneNumber": "+1 908 260 7382"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 7,
                "day": 24
            },
            "sex": "female",
            "parentName": "David Rogers",
            "profilePhoto": "https://randomuser.me/api/portraits/women/50.jpg"
        },
        "financialRecords": {
            "debt": "$99,639"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Stephanie Rogers",
        "id": 123456101
    }, {
        "contact": {
            "email": "tyler.toussaint@email.com",
            "phoneNumber": "+1 201 461 9047"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 3,
                "day": 22
            },
            "sex": "male",
            "parentName": "Kimberly Toussaint",
            "profilePhoto": "https://randomuser.me/api/portraits/men/51.jpg"
        },
        "financialRecords": {
            "debt": "$80,482"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "mechanical engineering"
        },
        "isOnline": true,
        "studentName": "Tyler Toussaint",
        "id": 123456102
    }, {
        "contact": {
            "email": "amy.adams@email.com",
            "phoneNumber": "+1 908 198 9574"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 8,
                "day": 6
            },
            "sex": "female",
            "parentName": "David Adams",
            "profilePhoto": "https://randomuser.me/api/portraits/women/51.jpg"
        },
        "financialRecords": {
            "debt": "$36,452"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "Amy Adams",
        "id": 123456103
    }, {
        "contact": {
            "email": "mark.chen@email.com",
            "phoneNumber": "+1 609 847 3637"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 3,
                "day": 16
            },
            "sex": "male",
            "parentName": "Linda Chen",
            "profilePhoto": "https://randomuser.me/api/portraits/men/52.jpg"
        },
        "financialRecords": {
            "debt": "$84,739"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "biology"
        },
        "isOnline": true,
        "studentName": "Mark Chen",
        "id": 123456104
    }, {
        "contact": {
            "email": "madison.campbell@email.com",
            "phoneNumber": "+1 201 950 7119"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 8,
                "day": 12
            },
            "sex": "female",
            "parentName": "Mark Campbell",
            "profilePhoto": "https://randomuser.me/api/portraits/women/52.jpg"
        },
        "financialRecords": {
            "debt": "$33,929"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "computer science"
        },
        "isOnline": true,
        "studentName": "Madison Campbell",
        "id": 123456105
    }, {
        "contact": {
            "email": "thomas.taylor@email.com",
            "phoneNumber": "+1 undefined 718 4453"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 7,
                "day": 12
            },
            "sex": "male",
            "parentName": "Emily Taylor",
            "profilePhoto": "https://randomuser.me/api/portraits/men/53.jpg"
        },
        "financialRecords": {
            "debt": "$15,086"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "nursing"
        },
        "isOnline": false,
        "studentName": "Thomas Taylor",
        "id": 123456106
    }, {
        "contact": {
            "email": "ashley.wilson@email.com",
            "phoneNumber": "+1 609 666 7890"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 8,
                "day": 27
            },
            "sex": "female",
            "parentName": "Gabriel Wilson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/53.jpg"
        },
        "financialRecords": {
            "debt": "$53,202"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "Ashley Wilson",
        "id": 123456107
    }, {
        "contact": {
            "email": "samuel.lewis@email.com",
            "phoneNumber": "+1 856 297 8202"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 9,
                "day": 19
            },
            "sex": "male",
            "parentName": "Sophia Lewis",
            "profilePhoto": "https://randomuser.me/api/portraits/men/54.jpg"
        },
        "financialRecords": {
            "debt": "$14,008"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "finance"
        },
        "isOnline": true,
        "studentName": "Samuel Lewis",
        "id": 123456108
    }, {
        "contact": {
            "email": "lisa.martinez@email.com",
            "phoneNumber": "+1 609 338 5783"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 11,
                "day": 16
            },
            "sex": "female",
            "parentName": "Samuel Martinez",
            "profilePhoto": "https://randomuser.me/api/portraits/women/54.jpg"
        },
        "financialRecords": {
            "debt": "$11,120"
        },
        "academicRecords": {
            "class": "VII B"
        },
        "isOnline": true,
        "studentName": "Lisa Martinez",
        "id": 123456109
    }, {
        "contact": {
            "email": "gabriel.robinson@email.com",
            "phoneNumber": "+1 732 998 3110"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 18
            },
            "sex": "male",
            "parentName": "Hannah Robinson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/55.jpg"
        },
        "financialRecords": {
            "debt": "$34,242"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "Gabriel Robinson",
        "id": 123456110
    }, {
        "contact": {
            "email": "elizabeth.campbell@email.com",
            "phoneNumber": "+1 732 437 777"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 12,
                "day": 30
            },
            "sex": "female",
            "parentName": "Matthew Campbell",
            "profilePhoto": "https://randomuser.me/api/portraits/women/55.jpg"
        },
        "financialRecords": {
            "debt": "$2,689"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Elizabeth Campbell",
        "id": 123456111
    }, {
        "contact": {
            "email": "gabriel.green@email.com",
            "phoneNumber": "+1 732 92 4985"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 5,
                "day": 30
            },
            "sex": "male",
            "parentName": "Amy Green",
            "profilePhoto": "https://randomuser.me/api/portraits/men/56.jpg"
        },
        "financialRecords": {
            "debt": "$12,015"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "Gabriel Green",
        "id": 123456112
    }, {
        "contact": {
            "email": "sophia.fournier@email.com",
            "phoneNumber": "+1 856 558 4722"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 9,
                "day": 14
            },
            "sex": "female",
            "parentName": "Joshua Fournier",
            "profilePhoto": "https://randomuser.me/api/portraits/women/56.jpg"
        },
        "financialRecords": {
            "debt": "$10,994"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "politcal science"
        },
        "isOnline": true,
        "studentName": "Sophia Fournier",
        "id": 123456113
    }, {
        "contact": {
            "email": "david.ali@email.com",
            "phoneNumber": "+1 856 377 4447"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 1,
                "day": 15
            },
            "sex": "male",
            "parentName": "Brittany Ali",
            "profilePhoto": "https://randomuser.me/api/portraits/men/57.jpg"
        },
        "financialRecords": {
            "debt": "$36,930"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "David Ali",
        "id": 123456114
    }, {
        "contact": {
            "email": "jennifer.rodriguez@email.com",
            "phoneNumber": "+1 undefined 997 5920"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 5,
                "day": 12
            },
            "sex": "female",
            "parentName": "James Rodriguez",
            "profilePhoto": "https://randomuser.me/api/portraits/women/57.jpg"
        },
        "financialRecords": {
            "debt": "$4,016"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "Jennifer Rodriguez",
        "id": 123456115
    }, {
        "contact": {
            "email": "gabriel.rogers@email.com",
            "phoneNumber": "+1 609 758 4385"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 4,
                "day": 25
            },
            "sex": "male",
            "parentName": "Susan Rogers",
            "profilePhoto": "https://randomuser.me/api/portraits/men/58.jpg"
        },
        "financialRecords": {
            "debt": "$96,253"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Gabriel Rogers",
        "id": 123456116
    }, {
        "contact": {
            "email": "susan.fournier@email.com",
            "phoneNumber": "+1 609 39 2877"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 5,
                "day": 8
            },
            "sex": "female",
            "parentName": "Michael Fournier",
            "profilePhoto": "https://randomuser.me/api/portraits/women/58.jpg"
        },
        "financialRecords": {
            "debt": "$24,802"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Susan Fournier",
        "id": 123456117
    }, {
        "contact": {
            "email": "andrew.clark@email.com",
            "phoneNumber": "+1 732 126 4586"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 11,
                "day": 5
            },
            "sex": "male",
            "parentName": "Elizabeth Clark",
            "profilePhoto": "https://randomuser.me/api/portraits/men/59.jpg"
        },
        "financialRecords": {
            "debt": "$26,859"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "Andrew Clark",
        "id": 123456118
    }, {
        "contact": {
            "email": "lisa.müller@email.com",
            "phoneNumber": "+1 201 196 7808"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 7,
                "day": 16
            },
            "sex": "female",
            "parentName": "James Müller",
            "profilePhoto": "https://randomuser.me/api/portraits/women/59.jpg"
        },
        "financialRecords": {
            "debt": "$71,302"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Lisa Müller",
        "id": 123456119
    }, {
        "contact": {
            "email": "john.wilson@email.com",
            "phoneNumber": "+1 undefined 782 7061"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 1,
                "day": 28
            },
            "sex": "male",
            "parentName": "Amy Wilson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/60.jpg"
        },
        "financialRecords": {
            "debt": "$22,767"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "John Wilson",
        "id": 123456120
    }, {
        "contact": {
            "email": "elizabeth.bonnet@email.com",
            "phoneNumber": "+1 undefined 620 1791"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 6,
                "day": 14
            },
            "sex": "female",
            "parentName": "Austin Bonnet",
            "profilePhoto": "https://randomuser.me/api/portraits/women/60.jpg"
        },
        "financialRecords": {
            "debt": "$155"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Elizabeth Bonnet",
        "id": 123456121
    }, {
        "contact": {
            "email": "christopher.martinez@email.com",
            "phoneNumber": "+1 201 988 3277"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 7,
                "day": 22
            },
            "sex": "male",
            "parentName": "Emily Martinez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/61.jpg"
        },
        "financialRecords": {
            "debt": "$52,293"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "politcal science"
        },
        "isOnline": true,
        "studentName": "Christopher Martinez",
        "id": 123456122
    }, {
        "contact": {
            "email": "elizabeth.monet@email.com",
            "phoneNumber": "+1 856 55 8600"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 1,
                "day": 3
            },
            "sex": "female",
            "parentName": "Matthew Monet",
            "profilePhoto": "https://randomuser.me/api/portraits/women/61.jpg"
        },
        "financialRecords": {
            "debt": "$19,279"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "architectural engineering"
        },
        "isOnline": true,
        "studentName": "Elizabeth Monet",
        "id": 123456123
    }, {
        "contact": {
            "email": "james.miller@email.com",
            "phoneNumber": "+1 undefined 136 5834"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 9,
                "day": 13
            },
            "sex": "male",
            "parentName": "Jennifer Miller",
            "profilePhoto": "https://randomuser.me/api/portraits/men/62.jpg"
        },
        "financialRecords": {
            "debt": "$66,604"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "James Miller",
        "id": 123456124
    }, {
        "contact": {
            "email": "lisa.clark@email.com",
            "phoneNumber": "+1 732 364 8932"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 1,
                "day": 30
            },
            "sex": "female",
            "parentName": "Ryan Clark",
            "profilePhoto": "https://randomuser.me/api/portraits/women/62.jpg"
        },
        "financialRecords": {
            "debt": "$47,925"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "finance"
        },
        "isOnline": true,
        "studentName": "Lisa Clark",
        "id": 123456125
    }, {
        "contact": {
            "email": "kevin.monet@email.com",
            "phoneNumber": "+1 732 849 6269"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 4,
                "day": 14
            },
            "sex": "male",
            "parentName": "Jessica Monet",
            "profilePhoto": "https://randomuser.me/api/portraits/men/63.jpg"
        },
        "financialRecords": {
            "debt": "$32,827"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Kevin Monet",
        "id": 123456126
    }, {
        "contact": {
            "email": "patricia.campbell@email.com",
            "phoneNumber": "+1 732 38 288"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 7,
                "day": 13
            },
            "sex": "female",
            "parentName": "Christopher Campbell",
            "profilePhoto": "https://randomuser.me/api/portraits/women/63.jpg"
        },
        "financialRecords": {
            "debt": "$14,510"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": true,
        "studentName": "Patricia Campbell",
        "id": 123456127
    }, {
        "contact": {
            "email": "ryan.lavigne@email.com",
            "phoneNumber": "+1 201 556 492"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 3,
                "day": 3
            },
            "sex": "male",
            "parentName": "Lisa Lavigne",
            "profilePhoto": "https://randomuser.me/api/portraits/men/64.jpg"
        },
        "financialRecords": {
            "debt": "$31,432"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "Ryan Lavigne",
        "id": 123456128
    }, {
        "contact": {
            "email": "sophia.perez@email.com",
            "phoneNumber": "+1 201 432 7199"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 1
            },
            "sex": "female",
            "parentName": "Jonathan Perez",
            "profilePhoto": "https://randomuser.me/api/portraits/women/64.jpg"
        },
        "financialRecords": {
            "debt": "$96,423"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "Sophia Perez",
        "id": 123456129
    }, {
        "contact": {
            "email": "gabriel.hill@email.com",
            "phoneNumber": "+1 908 810 2090"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 5,
                "day": 26
            },
            "sex": "male",
            "parentName": "Ashley Hill",
            "profilePhoto": "https://randomuser.me/api/portraits/men/65.jpg"
        },
        "financialRecords": {
            "debt": "$52,129"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Gabriel Hill",
        "id": 123456130
    }, {
        "contact": {
            "email": "angela.robinson@email.com",
            "phoneNumber": "+1 732 594 8275"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 6,
                "day": 18
            },
            "sex": "female",
            "parentName": "Jason Robinson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/65.jpg"
        },
        "financialRecords": {
            "debt": "$20,513"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "architectural engineering"
        },
        "isOnline": false,
        "studentName": "Angela Robinson",
        "id": 123456131
    }, {
        "contact": {
            "email": "matthew.bonnet@email.com",
            "phoneNumber": "+1 609 751 4412"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 7,
                "day": 30
            },
            "sex": "male",
            "parentName": "Madison Bonnet",
            "profilePhoto": "https://randomuser.me/api/portraits/men/66.jpg"
        },
        "financialRecords": {
            "debt": "$13,274"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "Matthew Bonnet",
        "id": 123456132
    }, {
        "contact": {
            "email": "melissa.wright@email.com",
            "phoneNumber": "+1 908 44 8464"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 6,
                "day": 29
            },
            "sex": "female",
            "parentName": "Zachary Wright",
            "profilePhoto": "https://randomuser.me/api/portraits/women/66.jpg"
        },
        "financialRecords": {
            "debt": "$67,552"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Melissa Wright",
        "id": 123456133
    }, {
        "contact": {
            "email": "tyler.fournier@email.com",
            "phoneNumber": "+1 732 301 3305"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 11,
                "day": 28
            },
            "sex": "male",
            "parentName": "Lillian Fournier",
            "profilePhoto": "https://randomuser.me/api/portraits/men/67.jpg"
        },
        "financialRecords": {
            "debt": "$20,025"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "nursing"
        },
        "isOnline": true,
        "studentName": "Tyler Fournier",
        "id": 123456134
    }, {
        "contact": {
            "email": "karen.howard@email.com",
            "phoneNumber": "+1 856 190 1258"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 2,
                "day": 21
            },
            "sex": "female",
            "parentName": "Alexander Howard",
            "profilePhoto": "https://randomuser.me/api/portraits/women/67.jpg"
        },
        "financialRecords": {
            "debt": "$97,436"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Karen Howard",
        "id": 123456135
    }, {
        "contact": {
            "email": "david.schmidt@email.com",
            "phoneNumber": "+1 908 611 3614"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 5,
                "day": 3
            },
            "sex": "male",
            "parentName": "Emily Schmidt",
            "profilePhoto": "https://randomuser.me/api/portraits/men/68.jpg"
        },
        "financialRecords": {
            "debt": "$18,300"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "David Schmidt",
        "id": 123456136
    }, {
        "contact": {
            "email": "alexis.mitchell@email.com",
            "phoneNumber": "+1 undefined 194 2572"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 2,
                "day": 1
            },
            "sex": "female",
            "parentName": "Ryan Mitchell",
            "profilePhoto": "https://randomuser.me/api/portraits/women/68.jpg"
        },
        "financialRecords": {
            "debt": "$71,658"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "nursing"
        },
        "isOnline": true,
        "studentName": "Alexis Mitchell",
        "id": 123456137
    }, {
        "contact": {
            "email": "david.roberts@email.com",
            "phoneNumber": "+1 908 278 805"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 5,
                "day": 11
            },
            "sex": "male",
            "parentName": "Alexis Roberts",
            "profilePhoto": "https://randomuser.me/api/portraits/men/69.jpg"
        },
        "financialRecords": {
            "debt": "$28,277"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "finance"
        },
        "isOnline": true,
        "studentName": "David Roberts",
        "id": 123456138
    }, {
        "contact": {
            "email": "olivia.moore@email.com",
            "phoneNumber": "+1 609 467 8228"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 1,
                "day": 12
            },
            "sex": "female",
            "parentName": "Tyler Moore",
            "profilePhoto": "https://randomuser.me/api/portraits/women/69.jpg"
        },
        "financialRecords": {
            "debt": "$15,427"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "mechanical engineering"
        },
        "isOnline": false,
        "studentName": "Olivia Moore",
        "id": 123456139
    }, {
        "contact": {
            "email": "brian.garnier@email.com",
            "phoneNumber": "+1 undefined 901 9290"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 1,
                "day": 6
            },
            "sex": "male",
            "parentName": "Jessica Garnier",
            "profilePhoto": "https://randomuser.me/api/portraits/men/70.jpg"
        },
        "financialRecords": {
            "debt": "$24,986"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Brian Garnier",
        "id": 123456140
    }, {
        "contact": {
            "email": "jessica.hall@email.com",
            "phoneNumber": "+1 856 720 7534"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 9,
                "day": 8
            },
            "sex": "female",
            "parentName": "Ryan Hall",
            "profilePhoto": "https://randomuser.me/api/portraits/women/70.jpg"
        },
        "financialRecords": {
            "debt": "$53,799"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "Jessica Hall",
        "id": 123456141
    }, {
        "contact": {
            "email": "matthew.zimmerman@email.com",
            "phoneNumber": "+1 undefined 397 3491"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 12,
                "day": 24
            },
            "sex": "male",
            "parentName": "Linda Zimmerman",
            "profilePhoto": "https://randomuser.me/api/portraits/men/71.jpg"
        },
        "financialRecords": {
            "debt": "$73,515"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Matthew Zimmerman",
        "id": 123456142
    }, {
        "contact": {
            "email": "mary.gonzalez@email.com",
            "phoneNumber": "+1 732 788 6398"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 9,
                "day": 29
            },
            "sex": "female",
            "parentName": "David Gonzalez",
            "profilePhoto": "https://randomuser.me/api/portraits/women/71.jpg"
        },
        "financialRecords": {
            "debt": "$93,975"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "electrical engineering"
        },
        "isOnline": true,
        "studentName": "Mary Gonzalez",
        "id": 123456143
    }, {
        "contact": {
            "email": "nicholas.schmidt@email.com",
            "phoneNumber": "+1 908 387 2892"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 11,
                "day": 4
            },
            "sex": "male",
            "parentName": "Abigail Schmidt",
            "profilePhoto": "https://randomuser.me/api/portraits/men/72.jpg"
        },
        "financialRecords": {
            "debt": "$42,696"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "nursing"
        },
        "isOnline": false,
        "studentName": "Nicholas Schmidt",
        "id": 123456144
    }, {
        "contact": {
            "email": "linda.clark@email.com",
            "phoneNumber": "+1 856 767 3026"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 11,
                "day": 3
            },
            "sex": "female",
            "parentName": "Robert Clark",
            "profilePhoto": "https://randomuser.me/api/portraits/women/72.jpg"
        },
        "financialRecords": {
            "debt": "$66,075"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Linda Clark",
        "id": 123456145
    }, {
        "contact": {
            "email": "justin.campbell@email.com",
            "phoneNumber": "+1 undefined 395 3685"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 8,
                "day": 5
            },
            "sex": "male",
            "parentName": "Linda Campbell",
            "profilePhoto": "https://randomuser.me/api/portraits/men/73.jpg"
        },
        "financialRecords": {
            "debt": "$9,500"
        },
        "academicRecords": {
            "class": "VII C"
        },
        "isOnline": true,
        "studentName": "Justin Campbell",
        "id": 123456146
    }, {
        "contact": {
            "email": "alexis.edwards@email.com",
            "phoneNumber": "+1 732 488 9317"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 10,
                "day": 30
            },
            "sex": "female",
            "parentName": "Nicholas Edwards",
            "profilePhoto": "https://randomuser.me/api/portraits/women/73.jpg"
        },
        "financialRecords": {
            "debt": "$90,888"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "nursing"
        },
        "isOnline": false,
        "studentName": "Alexis Edwards",
        "id": 123456147
    }, {
        "contact": {
            "email": "michael.miller@email.com",
            "phoneNumber": "+1 856 120 1567"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 10,
                "day": 14
            },
            "sex": "male",
            "parentName": "Heather Miller",
            "profilePhoto": "https://randomuser.me/api/portraits/men/74.jpg"
        },
        "financialRecords": {
            "debt": "$24,784"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "biology"
        },
        "isOnline": true,
        "studentName": "Michael Miller",
        "id": 123456148
    }, {
        "contact": {
            "email": "emily.mitchell@email.com",
            "phoneNumber": "+1 609 799 3540"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 2,
                "day": 12
            },
            "sex": "female",
            "parentName": "James Mitchell",
            "profilePhoto": "https://randomuser.me/api/portraits/women/74.jpg"
        },
        "financialRecords": {
            "debt": "$96,721"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Emily Mitchell",
        "id": 123456149
    }, {
        "contact": {
            "email": "brian.wright@email.com",
            "phoneNumber": "+1 undefined 328 1146"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 2,
                "day": 10
            },
            "sex": "male",
            "parentName": "Olivia Wright",
            "profilePhoto": "https://randomuser.me/api/portraits/men/75.jpg"
        },
        "financialRecords": {
            "debt": "$76,218"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "nursing"
        },
        "isOnline": true,
        "studentName": "Brian Wright",
        "id": 123456150
    }, {
        "contact": {
            "email": "heather.smith@email.com",
            "phoneNumber": "+1 609 115 8049"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 9,
                "day": 19
            },
            "sex": "female",
            "parentName": "Justin Smith",
            "profilePhoto": "https://randomuser.me/api/portraits/women/75.jpg"
        },
        "financialRecords": {
            "debt": "$85,468"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Heather Smith",
        "id": 123456151
    }, {
        "contact": {
            "email": "brian.perez@email.com",
            "phoneNumber": "+1 undefined 658 8171"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 4,
                "day": 16
            },
            "sex": "male",
            "parentName": "Jennifer Perez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/76.jpg"
        },
        "financialRecords": {
            "debt": "$78,451"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Brian Perez",
        "id": 123456152
    }, {
        "contact": {
            "email": "stephanie.zhang@email.com",
            "phoneNumber": "+1 609 412 8927"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 3,
                "day": 1
            },
            "sex": "female",
            "parentName": "Joseph Zhang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/76.jpg"
        },
        "financialRecords": {
            "debt": "$2,708"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "architectural engineering"
        },
        "isOnline": true,
        "studentName": "Stephanie Zhang",
        "id": 123456153
    }, {
        "contact": {
            "email": "james.liang@email.com",
            "phoneNumber": "+1 609 428 9167"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 8,
                "day": 16
            },
            "sex": "male",
            "parentName": "Lillian Liang",
            "profilePhoto": "https://randomuser.me/api/portraits/men/77.jpg"
        },
        "financialRecords": {
            "debt": "$61,238"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "James Liang",
        "id": 123456154
    }, {
        "contact": {
            "email": "samantha.baker@email.com",
            "phoneNumber": "+1 undefined 386 2868"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 4,
                "day": 12
            },
            "sex": "female",
            "parentName": "Anthony Baker",
            "profilePhoto": "https://randomuser.me/api/portraits/women/77.jpg"
        },
        "financialRecords": {
            "debt": "$88,341"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Samantha Baker",
        "id": 123456155
    }, {
        "contact": {
            "email": "jacob.dupont@email.com",
            "phoneNumber": "+1 609 57 7788"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 10,
                "day": 1
            },
            "sex": "male",
            "parentName": "Elizabeth Dupont",
            "profilePhoto": "https://randomuser.me/api/portraits/men/78.jpg"
        },
        "financialRecords": {
            "debt": "$85,926"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Jacob Dupont",
        "id": 123456156
    }, {
        "contact": {
            "email": "mary.ali@email.com",
            "phoneNumber": "+1 609 919 2598"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 10,
                "day": 23
            },
            "sex": "female",
            "parentName": "John Ali",
            "profilePhoto": "https://randomuser.me/api/portraits/women/78.jpg"
        },
        "financialRecords": {
            "debt": "$79,237"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Mary Ali",
        "id": 123456157
    }, {
        "contact": {
            "email": "zachary.chen@email.com",
            "phoneNumber": "+1 908 7 2710"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 3,
                "day": 4
            },
            "sex": "male",
            "parentName": "Linda Chen",
            "profilePhoto": "https://randomuser.me/api/portraits/men/79.jpg"
        },
        "financialRecords": {
            "debt": "$11,047"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Zachary Chen",
        "id": 123456158
    }, {
        "contact": {
            "email": "megan.dubois@email.com",
            "phoneNumber": "+1 856 391 2103"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 4
            },
            "sex": "female",
            "parentName": "Christian Dubois",
            "profilePhoto": "https://randomuser.me/api/portraits/women/79.jpg"
        },
        "financialRecords": {
            "debt": "$40,575"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Megan Dubois",
        "id": 123456159
    }, {
        "contact": {
            "email": "joseph.gonzalez@email.com",
            "phoneNumber": "+1 908 86 5152"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 9,
                "day": 6
            },
            "sex": "male",
            "parentName": "Kayla Gonzalez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/80.jpg"
        },
        "financialRecords": {
            "debt": "$92,468"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Joseph Gonzalez",
        "id": 123456160
    }, {
        "contact": {
            "email": "abigail.li@email.com",
            "phoneNumber": "+1 201 187 8372"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 2,
                "day": 17
            },
            "sex": "female",
            "parentName": "Mark Li",
            "profilePhoto": "https://randomuser.me/api/portraits/women/80.jpg"
        },
        "financialRecords": {
            "debt": "$43,211"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "communications"
        },
        "isOnline": true,
        "studentName": "Abigail Li",
        "id": 123456161
    }, {
        "contact": {
            "email": "daniel.garnier@email.com",
            "phoneNumber": "+1 201 496 9370"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 2,
                "day": 14
            },
            "sex": "male",
            "parentName": "Kayla Garnier",
            "profilePhoto": "https://randomuser.me/api/portraits/men/81.jpg"
        },
        "financialRecords": {
            "debt": "$76,454"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Daniel Garnier",
        "id": 123456162
    }, {
        "contact": {
            "email": "sophia.baker@email.com",
            "phoneNumber": "+1 856 780 6411"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 8,
                "day": 30
            },
            "sex": "female",
            "parentName": "Thomas Baker",
            "profilePhoto": "https://randomuser.me/api/portraits/women/81.jpg"
        },
        "financialRecords": {
            "debt": "$239"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "Sophia Baker",
        "id": 123456163
    }, {
        "contact": {
            "email": "kyle.scott@email.com",
            "phoneNumber": "+1 856 514 6334"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 4,
                "day": 18
            },
            "sex": "male",
            "parentName": "Madison Scott",
            "profilePhoto": "https://randomuser.me/api/portraits/men/82.jpg"
        },
        "financialRecords": {
            "debt": "$69,946"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Kyle Scott",
        "id": 123456164
    }, {
        "contact": {
            "email": "emily.zhang@email.com",
            "phoneNumber": "+1 908 466 5165"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 6,
                "day": 9
            },
            "sex": "female",
            "parentName": "Alexander Zhang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/82.jpg"
        },
        "financialRecords": {
            "debt": "$2,909"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "Emily Zhang",
        "id": 123456165
    }, {
        "contact": {
            "email": "andrew.green@email.com",
            "phoneNumber": "+1 732 953 5811"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 7,
                "day": 14
            },
            "sex": "male",
            "parentName": "Michelle Green",
            "profilePhoto": "https://randomuser.me/api/portraits/men/83.jpg"
        },
        "financialRecords": {
            "debt": "$6,059"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Andrew Green",
        "id": 123456166
    }, {
        "contact": {
            "email": "taylor.cooper@email.com",
            "phoneNumber": "+1 856 246 3786"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 2,
                "day": 9
            },
            "sex": "female",
            "parentName": "Matthew Cooper",
            "profilePhoto": "https://randomuser.me/api/portraits/women/83.jpg"
        },
        "financialRecords": {
            "debt": "$72,407"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "electrical engineering"
        },
        "isOnline": true,
        "studentName": "Taylor Cooper",
        "id": 123456167
    }, {
        "contact": {
            "email": "jason.harris@email.com",
            "phoneNumber": "+1 856 221 2269"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 3,
                "day": 4
            },
            "sex": "male",
            "parentName": "Emily Harris",
            "profilePhoto": "https://randomuser.me/api/portraits/men/84.jpg"
        },
        "financialRecords": {
            "debt": "$61,540"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "politcal science"
        },
        "isOnline": false,
        "studentName": "Jason Harris",
        "id": 123456168
    }, {
        "contact": {
            "email": "megan.bonnet@email.com",
            "phoneNumber": "+1 732 113 1236"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 11
            },
            "sex": "female",
            "parentName": "David Bonnet",
            "profilePhoto": "https://randomuser.me/api/portraits/women/84.jpg"
        },
        "financialRecords": {
            "debt": "$69,477"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Megan Bonnet",
        "id": 123456169
    }, {
        "contact": {
            "email": "alexander.dupont@email.com",
            "phoneNumber": "+1 609 283 3212"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 6,
                "day": 31
            },
            "sex": "male",
            "parentName": "Sarah Dupont",
            "profilePhoto": "https://randomuser.me/api/portraits/men/85.jpg"
        },
        "financialRecords": {
            "debt": "$5,197"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "nursing"
        },
        "isOnline": true,
        "studentName": "Alexander Dupont",
        "id": 123456170
    }, {
        "contact": {
            "email": "karen.taylor@email.com",
            "phoneNumber": "+1 undefined 576 1599"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 3,
                "day": 27
            },
            "sex": "female",
            "parentName": "Anthony Taylor",
            "profilePhoto": "https://randomuser.me/api/portraits/women/85.jpg"
        },
        "financialRecords": {
            "debt": "$82,359"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "business"
        },
        "isOnline": false,
        "studentName": "Karen Taylor",
        "id": 123456171
    }, {
        "contact": {
            "email": "nathan.carter@email.com",
            "phoneNumber": "+1 856 583 8380"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 4,
                "day": 2
            },
            "sex": "male",
            "parentName": "Heather Carter",
            "profilePhoto": "https://randomuser.me/api/portraits/men/86.jpg"
        },
        "financialRecords": {
            "debt": "$75,952"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Nathan Carter",
        "id": 123456172
    }, {
        "contact": {
            "email": "samantha.li@email.com",
            "phoneNumber": "+1 609 691 4483"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 4,
                "day": 12
            },
            "sex": "female",
            "parentName": "Christopher Li",
            "profilePhoto": "https://randomuser.me/api/portraits/women/86.jpg"
        },
        "financialRecords": {
            "debt": "$46,784"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "communications"
        },
        "isOnline": true,
        "studentName": "Samantha Li",
        "id": 123456173
    }, {
        "contact": {
            "email": "brandon.rogers@email.com",
            "phoneNumber": "+1 609 390 542"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 1,
                "day": 4
            },
            "sex": "male",
            "parentName": "Kimberly Rogers",
            "profilePhoto": "https://randomuser.me/api/portraits/men/87.jpg"
        },
        "financialRecords": {
            "debt": "$78,595"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "Brandon Rogers",
        "id": 123456174
    }, {
        "contact": {
            "email": "samantha.ali@email.com",
            "phoneNumber": "+1 732 377 7599"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 1,
                "day": 27
            },
            "sex": "female",
            "parentName": "Matthew Ali",
            "profilePhoto": "https://randomuser.me/api/portraits/women/87.jpg"
        },
        "financialRecords": {
            "debt": "$74,997"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "architectural engineering"
        },
        "isOnline": true,
        "studentName": "Samantha Ali",
        "id": 123456175
    }, {
        "contact": {
            "email": "jonathan.baker@email.com",
            "phoneNumber": "+1 201 676 5174"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 7,
                "day": 24
            },
            "sex": "male",
            "parentName": "Kayla Baker",
            "profilePhoto": "https://randomuser.me/api/portraits/men/88.jpg"
        },
        "financialRecords": {
            "debt": "$76,426"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "Jonathan Baker",
        "id": 123456176
    }, {
        "contact": {
            "email": "lisa.bonnet@email.com",
            "phoneNumber": "+1 undefined 609 17"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 7,
                "day": 27
            },
            "sex": "female",
            "parentName": "Kyle Bonnet",
            "profilePhoto": "https://randomuser.me/api/portraits/women/88.jpg"
        },
        "financialRecords": {
            "debt": "$32,029"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "nursing"
        },
        "isOnline": true,
        "studentName": "Lisa Bonnet",
        "id": 123456177
    }, {
        "contact": {
            "email": "anthony.howard@email.com",
            "phoneNumber": "+1 856 204 8988"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 2,
                "day": 1
            },
            "sex": "male",
            "parentName": "Emily Howard",
            "profilePhoto": "https://randomuser.me/api/portraits/men/89.jpg"
        },
        "financialRecords": {
            "debt": "$85,427"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Anthony Howard",
        "id": 123456178
    }, {
        "contact": {
            "email": "nicole.wang@email.com",
            "phoneNumber": "+1 856 601 1445"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 3,
                "day": 16
            },
            "sex": "female",
            "parentName": "Matthew Wang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/89.jpg"
        },
        "financialRecords": {
            "debt": "$59,521"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "Nicole Wang",
        "id": 123456179
    }, {
        "contact": {
            "email": "jack.thompson@email.com",
            "phoneNumber": "+1 856 903 8417"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 1,
                "day": 27
            },
            "sex": "male",
            "parentName": "Amanda Thompson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/90.jpg"
        },
        "financialRecords": {
            "debt": "$85,561"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "communications"
        },
        "isOnline": true,
        "studentName": "Jack Thompson",
        "id": 123456180
    }, {
        "contact": {
            "email": "amanda.fournier@email.com",
            "phoneNumber": "+1 609 652 3369"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 8,
                "day": 4
            },
            "sex": "female",
            "parentName": "Alexander Fournier",
            "profilePhoto": "https://randomuser.me/api/portraits/women/90.jpg"
        },
        "financialRecords": {
            "debt": "$76,912"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "Amanda Fournier",
        "id": 123456181
    }, {
        "contact": {
            "email": "alexander.walker@email.com",
            "phoneNumber": "+1 856 544 4067"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 6,
                "day": 17
            },
            "sex": "male",
            "parentName": "Brittany Walker",
            "profilePhoto": "https://randomuser.me/api/portraits/men/91.jpg"
        },
        "financialRecords": {
            "debt": "$70,013"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "politcal science"
        },
        "isOnline": true,
        "studentName": "Alexander Walker",
        "id": 123456182
    }, {
        "contact": {
            "email": "melissa.zimmerman@email.com",
            "phoneNumber": "+1 201 79 6267"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 2,
                "day": 6
            },
            "sex": "female",
            "parentName": "Christopher Zimmerman",
            "profilePhoto": "https://randomuser.me/api/portraits/women/91.jpg"
        },
        "financialRecords": {
            "debt": "$40,695"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "Melissa Zimmerman",
        "id": 123456183
    }, {
        "contact": {
            "email": "christian.nelson@email.com",
            "phoneNumber": "+1 856 587 616"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 1,
                "day": 10
            },
            "sex": "male",
            "parentName": "Kayla Nelson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/92.jpg"
        },
        "financialRecords": {
            "debt": "$62,009"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "mechanical engineering"
        },
        "isOnline": true,
        "studentName": "Christian Nelson",
        "id": 123456184
    }, {
        "contact": {
            "email": "angela.clark@email.com",
            "phoneNumber": "+1 856 987 9001"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 8,
                "day": 5
            },
            "sex": "female",
            "parentName": "Thomas Clark",
            "profilePhoto": "https://randomuser.me/api/portraits/women/92.jpg"
        },
        "financialRecords": {
            "debt": "$93,386"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Angela Clark",
        "id": 123456185
    }, {
        "contact": {
            "email": "joseph.green@email.com",
            "phoneNumber": "+1 undefined 353 9161"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 8,
                "day": 1
            },
            "sex": "male",
            "parentName": "Karen Green",
            "profilePhoto": "https://randomuser.me/api/portraits/men/93.jpg"
        },
        "financialRecords": {
            "debt": "$44,974"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Joseph Green",
        "id": 123456186
    }, {
        "contact": {
            "email": "melissa.brown@email.com",
            "phoneNumber": "+1 856 621 5983"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 4,
                "day": 21
            },
            "sex": "female",
            "parentName": "John Brown",
            "profilePhoto": "https://randomuser.me/api/portraits/women/93.jpg"
        },
        "financialRecords": {
            "debt": "$33,549"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "finance"
        },
        "isOnline": true,
        "studentName": "Melissa Brown",
        "id": 123456187
    }, {
        "contact": {
            "email": "tyler.perez@email.com",
            "phoneNumber": "+1 732 291 5337"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 12,
                "day": 2
            },
            "sex": "male",
            "parentName": "Michelle Perez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/94.jpg"
        },
        "financialRecords": {
            "debt": "$52,796"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "politcal science"
        },
        "isOnline": true,
        "studentName": "Tyler Perez",
        "id": 123456188
    }, {
        "contact": {
            "email": "elizabeth.chen@email.com",
            "phoneNumber": "+1 201 132 5483"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 6,
                "day": 1
            },
            "sex": "female",
            "parentName": "Joseph Chen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/94.jpg"
        },
        "financialRecords": {
            "debt": "$54,415"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "electrical engineering"
        },
        "isOnline": false,
        "studentName": "Elizabeth Chen",
        "id": 123456189
    }, {
        "contact": {
            "email": "andrew.davis@email.com",
            "phoneNumber": "+1 201 32 5804"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 4,
                "day": 16
            },
            "sex": "male",
            "parentName": "Jessica Davis",
            "profilePhoto": "https://randomuser.me/api/portraits/men/95.jpg"
        },
        "financialRecords": {
            "debt": "$17,997"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Andrew Davis",
        "id": 123456190
    }, {
        "contact": {
            "email": "melissa.rodriguez@email.com",
            "phoneNumber": "+1 856 110 1180"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 11,
                "day": 7
            },
            "sex": "female",
            "parentName": "Brian Rodriguez",
            "profilePhoto": "https://randomuser.me/api/portraits/women/95.jpg"
        },
        "financialRecords": {
            "debt": "$78,011"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "mechanical engineering"
        },
        "isOnline": false,
        "studentName": "Melissa Rodriguez",
        "id": 123456191
    }, {
        "contact": {
            "email": "daniel.smith@email.com",
            "phoneNumber": "+1 732 304 8950"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 6,
                "day": 6
            },
            "sex": "male",
            "parentName": "Jennifer Smith",
            "profilePhoto": "https://randomuser.me/api/portraits/men/96.jpg"
        },
        "financialRecords": {
            "debt": "$42,032"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "electrical engineering"
        },
        "isOnline": true,
        "studentName": "Daniel Smith",
        "id": 123456192
    }, {
        "contact": {
            "email": "heather.ali@email.com",
            "phoneNumber": "+1 732 40 8706"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 12,
                "day": 1
            },
            "sex": "female",
            "parentName": "William Ali",
            "profilePhoto": "https://randomuser.me/api/portraits/women/96.jpg"
        },
        "financialRecords": {
            "debt": "$58,113"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Heather Ali",
        "id": 123456193
    }, {
        "contact": {
            "email": "gabriel.anderson@email.com",
            "phoneNumber": "+1 201 796 6560"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 3,
                "day": 28
            },
            "sex": "male",
            "parentName": "Heather Anderson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/97.jpg"
        },
        "financialRecords": {
            "debt": "$87,303"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "nursing"
        },
        "isOnline": true,
        "studentName": "Gabriel Anderson",
        "id": 123456194
    }, {
        "contact": {
            "email": "taylor.toussaint@email.com",
            "phoneNumber": "+1 609 953 5490"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 2,
                "day": 3
            },
            "sex": "female",
            "parentName": "Jacob Toussaint",
            "profilePhoto": "https://randomuser.me/api/portraits/women/97.jpg"
        },
        "financialRecords": {
            "debt": "$11,596"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "politcal science"
        },
        "isOnline": false,
        "studentName": "Taylor Toussaint",
        "id": 123456195
    }, {
        "contact": {
            "email": "justin.chen@email.com",
            "phoneNumber": "+1 201 463 2439"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 4,
                "day": 26
            },
            "sex": "male",
            "parentName": "Emma Chen",
            "profilePhoto": "https://randomuser.me/api/portraits/men/98.jpg"
        },
        "financialRecords": {
            "debt": "$50,183"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "Justin Chen",
        "id": 123456196
    }, {
        "contact": {
            "email": "taylor.fournier@email.com",
            "phoneNumber": "+1 609 216 8411"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 1,
                "day": 8
            },
            "sex": "female",
            "parentName": "Michael Fournier",
            "profilePhoto": "https://randomuser.me/api/portraits/women/98.jpg"
        },
        "financialRecords": {
            "debt": "$37,985"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "biology"
        },
        "isOnline": true,
        "studentName": "Taylor Fournier",
        "id": 123456197
    }, {
        "contact": {
            "email": "daniel.monet@email.com",
            "phoneNumber": "+1 201 276 6182"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 1,
                "day": 11
            },
            "sex": "male",
            "parentName": "Angela Monet",
            "profilePhoto": "https://randomuser.me/api/portraits/men/99.jpg"
        },
        "financialRecords": {
            "debt": "$29,264"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "Daniel Monet",
        "id": 123456198
    }, {
        "contact": {
            "email": "patricia.cooper@email.com",
            "phoneNumber": "+1 201 124 3498"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 3,
                "day": 22
            },
            "sex": "female",
            "parentName": "Brian Cooper",
            "profilePhoto": "https://randomuser.me/api/portraits/women/99.jpg"
        },
        "financialRecords": {
            "debt": "$13,267"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "Patricia Cooper",
        "id": 123456199
    }, {
        "contact": {
            "email": "joseph.martinez@email.com",
            "phoneNumber": "+1 732 145 4057"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 5,
                "day": 9
            },
            "sex": "male",
            "parentName": "Melissa Martinez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/0.jpg"
        },
        "financialRecords": {
            "debt": "$7,074"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Joseph Martinez",
        "id": 123456200
    }, {
        "contact": {
            "email": "melissa.schneider@email.com",
            "phoneNumber": "+1 908 639 7262"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 6,
                "day": 20
            },
            "sex": "female",
            "parentName": "Joseph Schneider",
            "profilePhoto": "https://randomuser.me/api/portraits/women/0.jpg"
        },
        "financialRecords": {
            "debt": "$99,050"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Melissa Schneider",
        "id": 123456201
    }, {
        "contact": {
            "email": "tyler.dupont@email.com",
            "phoneNumber": "+1 609 951 9198"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 12,
                "day": 16
            },
            "sex": "male",
            "parentName": "Samantha Dupont",
            "profilePhoto": "https://randomuser.me/api/portraits/men/1.jpg"
        },
        "financialRecords": {
            "debt": "$48,761"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "Tyler Dupont",
        "id": 123456202
    }, {
        "contact": {
            "email": "madison.brown@email.com",
            "phoneNumber": "+1 856 821 6969"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 9,
                "day": 31
            },
            "sex": "female",
            "parentName": "Tyler Brown",
            "profilePhoto": "https://randomuser.me/api/portraits/women/1.jpg"
        },
        "financialRecords": {
            "debt": "$8,932"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "biology"
        },
        "isOnline": true,
        "studentName": "Madison Brown",
        "id": 123456203
    }, {
        "contact": {
            "email": "brian.zhang@email.com",
            "phoneNumber": "+1 201 254 4689"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 5,
                "day": 11
            },
            "sex": "male",
            "parentName": "Linda Zhang",
            "profilePhoto": "https://randomuser.me/api/portraits/men/2.jpg"
        },
        "financialRecords": {
            "debt": "$64,093"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "finance"
        },
        "isOnline": true,
        "studentName": "Brian Zhang",
        "id": 123456204
    }, {
        "contact": {
            "email": "sophia.edwards@email.com",
            "phoneNumber": "+1 856 649 9500"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 9,
                "day": 10
            },
            "sex": "female",
            "parentName": "William Edwards",
            "profilePhoto": "https://randomuser.me/api/portraits/women/2.jpg"
        },
        "financialRecords": {
            "debt": "$7,505"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Sophia Edwards",
        "id": 123456205
    }, {
        "contact": {
            "email": "zachary.edwards@email.com",
            "phoneNumber": "+1 609 650 5515"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 12,
                "day": 29
            },
            "sex": "male",
            "parentName": "Lillian Edwards",
            "profilePhoto": "https://randomuser.me/api/portraits/men/3.jpg"
        },
        "financialRecords": {
            "debt": "$51,539"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "mechanical engineering"
        },
        "isOnline": true,
        "studentName": "Zachary Edwards",
        "id": 123456206
    }, {
        "contact": {
            "email": "amanda.cooper@email.com",
            "phoneNumber": "+1 908 356 9539"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 11,
                "day": 24
            },
            "sex": "female",
            "parentName": "James Cooper",
            "profilePhoto": "https://randomuser.me/api/portraits/women/3.jpg"
        },
        "financialRecords": {
            "debt": "$50,328"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Amanda Cooper",
        "id": 123456207
    }, {
        "contact": {
            "email": "austin.dubois@email.com",
            "phoneNumber": "+1 201 691 5412"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 8,
                "day": 2
            },
            "sex": "male",
            "parentName": "Heather Dubois",
            "profilePhoto": "https://randomuser.me/api/portraits/men/4.jpg"
        },
        "financialRecords": {
            "debt": "$91,981"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "mechanical engineering"
        },
        "isOnline": false,
        "studentName": "Austin Dubois",
        "id": 123456208
    }, {
        "contact": {
            "email": "amanda.dupont@email.com",
            "phoneNumber": "+1 908 568 3671"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 11,
                "day": 28
            },
            "sex": "female",
            "parentName": "Kyle Dupont",
            "profilePhoto": "https://randomuser.me/api/portraits/women/4.jpg"
        },
        "financialRecords": {
            "debt": "$81,830"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Amanda Dupont",
        "id": 123456209
    }, {
        "contact": {
            "email": "matthew.zimmerman@email.com",
            "phoneNumber": "+1 609 326 1314"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 5,
                "day": 14
            },
            "sex": "male",
            "parentName": "Linda Zimmerman",
            "profilePhoto": "https://randomuser.me/api/portraits/men/5.jpg"
        },
        "financialRecords": {
            "debt": "$57,703"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Matthew Zimmerman",
        "id": 123456210
    }, {
        "contact": {
            "email": "susan.bonnet@email.com",
            "phoneNumber": "+1 732 826 8602"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 9,
                "day": 15
            },
            "sex": "female",
            "parentName": "Austin Bonnet",
            "profilePhoto": "https://randomuser.me/api/portraits/women/5.jpg"
        },
        "financialRecords": {
            "debt": "$1,993"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "computer science"
        },
        "isOnline": true,
        "studentName": "Susan Bonnet",
        "id": 123456211
    }, {
        "contact": {
            "email": "ethan.chen@email.com",
            "phoneNumber": "+1 undefined 845 9587"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 3,
                "day": 26
            },
            "sex": "male",
            "parentName": "Kimberly Chen",
            "profilePhoto": "https://randomuser.me/api/portraits/men/6.jpg"
        },
        "financialRecords": {
            "debt": "$46,596"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "mechanical engineering"
        },
        "isOnline": false,
        "studentName": "Ethan Chen",
        "id": 123456212
    }, {
        "contact": {
            "email": "melissa.howard@email.com",
            "phoneNumber": "+1 732 128 672"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 2,
                "day": 18
            },
            "sex": "female",
            "parentName": "Joshua Howard",
            "profilePhoto": "https://randomuser.me/api/portraits/women/6.jpg"
        },
        "financialRecords": {
            "debt": "$71,232"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Melissa Howard",
        "id": 123456213
    }, {
        "contact": {
            "email": "ethan.richardson@email.com",
            "phoneNumber": "+1 201 290 7468"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 4,
                "day": 3
            },
            "sex": "male",
            "parentName": "Jennifer Richardson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/7.jpg"
        },
        "financialRecords": {
            "debt": "$57,963"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "computer science"
        },
        "isOnline": true,
        "studentName": "Ethan Richardson",
        "id": 123456214
    }, {
        "contact": {
            "email": "elizabeth.white@email.com",
            "phoneNumber": "+1 609 795 2905"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 9,
                "day": 9
            },
            "sex": "female",
            "parentName": "Brian White",
            "profilePhoto": "https://randomuser.me/api/portraits/women/7.jpg"
        },
        "financialRecords": {
            "debt": "$33,385"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Elizabeth White",
        "id": 123456215
    }, {
        "contact": {
            "email": "william.schmidt@email.com",
            "phoneNumber": "+1 undefined 661 8616"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 9,
                "day": 2
            },
            "sex": "male",
            "parentName": "Heather Schmidt",
            "profilePhoto": "https://randomuser.me/api/portraits/men/8.jpg"
        },
        "financialRecords": {
            "debt": "$15,741"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "mechanical engineering"
        },
        "isOnline": false,
        "studentName": "William Schmidt",
        "id": 123456216
    }, {
        "contact": {
            "email": "lillian.chen@email.com",
            "phoneNumber": "+1 609 564 6408"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 11,
                "day": 10
            },
            "sex": "female",
            "parentName": "Michael Chen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/8.jpg"
        },
        "financialRecords": {
            "debt": "$84,611"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Lillian Chen",
        "id": 123456217
    }, {
        "contact": {
            "email": "kyle.cooper@email.com",
            "phoneNumber": "+1 201 75 2114"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 9,
                "day": 20
            },
            "sex": "male",
            "parentName": "Sarah Cooper",
            "profilePhoto": "https://randomuser.me/api/portraits/men/9.jpg"
        },
        "financialRecords": {
            "debt": "$21,544"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "Kyle Cooper",
        "id": 123456218
    }, {
        "contact": {
            "email": "ashley.wright@email.com",
            "phoneNumber": "+1 732 321 8602"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 5,
                "day": 20
            },
            "sex": "female",
            "parentName": "David Wright",
            "profilePhoto": "https://randomuser.me/api/portraits/women/9.jpg"
        },
        "financialRecords": {
            "debt": "$38,966"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Ashley Wright",
        "id": 123456219
    }, {
        "contact": {
            "email": "anthony.hill@email.com",
            "phoneNumber": "+1 201 545 6962"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 1,
                "day": 7
            },
            "sex": "male",
            "parentName": "Sarah Hill",
            "profilePhoto": "https://randomuser.me/api/portraits/men/10.jpg"
        },
        "financialRecords": {
            "debt": "$12,346"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "Anthony Hill",
        "id": 123456220
    }, {
        "contact": {
            "email": "olivia.miller@email.com",
            "phoneNumber": "+1 732 827 4563"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 19
            },
            "sex": "female",
            "parentName": "Tyler Miller",
            "profilePhoto": "https://randomuser.me/api/portraits/women/10.jpg"
        },
        "financialRecords": {
            "debt": "$63,327"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Olivia Miller",
        "id": 123456221
    }, {
        "contact": {
            "email": "justin.braun@email.com",
            "phoneNumber": "+1 201 908 4443"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 7,
                "day": 12
            },
            "sex": "male",
            "parentName": "Megan Braun",
            "profilePhoto": "https://randomuser.me/api/portraits/men/11.jpg"
        },
        "financialRecords": {
            "debt": "$27,375"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "architectural engineering"
        },
        "isOnline": true,
        "studentName": "Justin Braun",
        "id": 123456222
    }, {
        "contact": {
            "email": "melissa.schneider@email.com",
            "phoneNumber": "+1 609 352 8384"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 8,
                "day": 17
            },
            "sex": "female",
            "parentName": "Matthew Schneider",
            "profilePhoto": "https://randomuser.me/api/portraits/women/11.jpg"
        },
        "financialRecords": {
            "debt": "$47,432"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "Melissa Schneider",
        "id": 123456223
    }, {
        "contact": {
            "email": "jason.lewis@email.com",
            "phoneNumber": "+1 732 712 487"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 6,
                "day": 19
            },
            "sex": "male",
            "parentName": "Abigail Lewis",
            "profilePhoto": "https://randomuser.me/api/portraits/men/12.jpg"
        },
        "financialRecords": {
            "debt": "$84,839"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Jason Lewis",
        "id": 123456224
    }, {
        "contact": {
            "email": "elizabeth.miller@email.com",
            "phoneNumber": "+1 856 572 3770"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 8,
                "day": 15
            },
            "sex": "female",
            "parentName": "Jacob Miller",
            "profilePhoto": "https://randomuser.me/api/portraits/women/12.jpg"
        },
        "financialRecords": {
            "debt": "$53,489"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "Elizabeth Miller",
        "id": 123456225
    }, {
        "contact": {
            "email": "david.robinson@email.com",
            "phoneNumber": "+1 732 861 8123"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 11,
                "day": 23
            },
            "sex": "male",
            "parentName": "Lillian Robinson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/13.jpg"
        },
        "financialRecords": {
            "debt": "$26,964"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "computer science"
        },
        "isOnline": true,
        "studentName": "David Robinson",
        "id": 123456226
    }, {
        "contact": {
            "email": "sophia.allen@email.com",
            "phoneNumber": "+1 undefined 327 3928"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 3,
                "day": 17
            },
            "sex": "female",
            "parentName": "Alexander Allen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/13.jpg"
        },
        "financialRecords": {
            "debt": "$10,965"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Sophia Allen",
        "id": 123456227
    }, {
        "contact": {
            "email": "robert.davis@email.com",
            "phoneNumber": "+1 856 721 8499"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 3,
                "day": 5
            },
            "sex": "male",
            "parentName": "Isabella Davis",
            "profilePhoto": "https://randomuser.me/api/portraits/men/14.jpg"
        },
        "financialRecords": {
            "debt": "$26,376"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Robert Davis",
        "id": 123456228
    }, {
        "contact": {
            "email": "sarah.green@email.com",
            "phoneNumber": "+1 732 778 4436"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 6,
                "day": 26
            },
            "sex": "female",
            "parentName": "Ryan Green",
            "profilePhoto": "https://randomuser.me/api/portraits/women/14.jpg"
        },
        "financialRecords": {
            "debt": "$2,162"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Sarah Green",
        "id": 123456229
    }, {
        "contact": {
            "email": "thomas.chen@email.com",
            "phoneNumber": "+1 856 473 7589"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 4,
                "day": 12
            },
            "sex": "male",
            "parentName": "Michelle Chen",
            "profilePhoto": "https://randomuser.me/api/portraits/men/15.jpg"
        },
        "financialRecords": {
            "debt": "$44,415"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Thomas Chen",
        "id": 123456230
    }, {
        "contact": {
            "email": "heather.white@email.com",
            "phoneNumber": "+1 908 325 5214"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 4,
                "day": 22
            },
            "sex": "female",
            "parentName": "Jason White",
            "profilePhoto": "https://randomuser.me/api/portraits/women/15.jpg"
        },
        "financialRecords": {
            "debt": "$93,569"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Heather White",
        "id": 123456231
    }, {
        "contact": {
            "email": "nicholas.hill@email.com",
            "phoneNumber": "+1 undefined 317 9305"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 3,
                "day": 9
            },
            "sex": "male",
            "parentName": "Stephanie Hill",
            "profilePhoto": "https://randomuser.me/api/portraits/men/16.jpg"
        },
        "financialRecords": {
            "debt": "$59,383"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Nicholas Hill",
        "id": 123456232
    }, {
        "contact": {
            "email": "lisa.rogers@email.com",
            "phoneNumber": "+1 732 548 9719"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 9,
                "day": 9
            },
            "sex": "female",
            "parentName": "Mark Rogers",
            "profilePhoto": "https://randomuser.me/api/portraits/women/16.jpg"
        },
        "financialRecords": {
            "debt": "$92,647"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Lisa Rogers",
        "id": 123456233
    }, {
        "contact": {
            "email": "ethan.perez@email.com",
            "phoneNumber": "+1 732 503 9075"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 1,
                "day": 13
            },
            "sex": "male",
            "parentName": "Alexis Perez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/17.jpg"
        },
        "financialRecords": {
            "debt": "$70,609"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Ethan Perez",
        "id": 123456234
    }, {
        "contact": {
            "email": "jessica.howard@email.com",
            "phoneNumber": "+1 856 799 6146"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 5,
                "day": 1
            },
            "sex": "female",
            "parentName": "Matthew Howard",
            "profilePhoto": "https://randomuser.me/api/portraits/women/17.jpg"
        },
        "financialRecords": {
            "debt": "$32,801"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Jessica Howard",
        "id": 123456235
    }, {
        "contact": {
            "email": "nathan.chen@email.com",
            "phoneNumber": "+1 201 104 1299"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 9,
                "day": 25
            },
            "sex": "male",
            "parentName": "Madison Chen",
            "profilePhoto": "https://randomuser.me/api/portraits/men/18.jpg"
        },
        "financialRecords": {
            "debt": "$75,967"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "politcal science"
        },
        "isOnline": false,
        "studentName": "Nathan Chen",
        "id": 123456236
    }, {
        "contact": {
            "email": "taylor.mitchell@email.com",
            "phoneNumber": "+1 201 754 9386"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 10,
                "day": 8
            },
            "sex": "female",
            "parentName": "Daniel Mitchell",
            "profilePhoto": "https://randomuser.me/api/portraits/women/18.jpg"
        },
        "financialRecords": {
            "debt": "$71,442"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "Taylor Mitchell",
        "id": 123456237
    }, {
        "contact": {
            "email": "brandon.miller@email.com",
            "phoneNumber": "+1 732 860 4733"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 4,
                "day": 1
            },
            "sex": "male",
            "parentName": "Kimberly Miller",
            "profilePhoto": "https://randomuser.me/api/portraits/men/19.jpg"
        },
        "financialRecords": {
            "debt": "$81,515"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": true,
        "studentName": "Brandon Miller",
        "id": 123456238
    }, {
        "contact": {
            "email": "kayla.schneider@email.com",
            "phoneNumber": "+1 undefined 825 2443"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 6,
                "day": 15
            },
            "sex": "female",
            "parentName": "Brian Schneider",
            "profilePhoto": "https://randomuser.me/api/portraits/women/19.jpg"
        },
        "financialRecords": {
            "debt": "$54,331"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Kayla Schneider",
        "id": 123456239
    }, {
        "contact": {
            "email": "samuel.anderson@email.com",
            "phoneNumber": "+1 201 125 4916"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 10,
                "day": 3
            },
            "sex": "male",
            "parentName": "Heather Anderson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/20.jpg"
        },
        "financialRecords": {
            "debt": "$92,796"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "nursing"
        },
        "isOnline": false,
        "studentName": "Samuel Anderson",
        "id": 123456240
    }, {
        "contact": {
            "email": "heather.white@email.com",
            "phoneNumber": "+1 732 561 2826"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 12,
                "day": 20
            },
            "sex": "female",
            "parentName": "Ryan White",
            "profilePhoto": "https://randomuser.me/api/portraits/women/20.jpg"
        },
        "financialRecords": {
            "debt": "$90,564"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "Heather White",
        "id": 123456241
    }, {
        "contact": {
            "email": "james.young@email.com",
            "phoneNumber": "+1 201 253 2274"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 9,
                "day": 1
            },
            "sex": "male",
            "parentName": "Brittany Young",
            "profilePhoto": "https://randomuser.me/api/portraits/men/21.jpg"
        },
        "financialRecords": {
            "debt": "$67,191"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "nursing"
        },
        "isOnline": false,
        "studentName": "James Young",
        "id": 123456242
    }, {
        "contact": {
            "email": "michelle.clark@email.com",
            "phoneNumber": "+1 856 60 7474"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 12,
                "day": 31
            },
            "sex": "female",
            "parentName": "Nicholas Clark",
            "profilePhoto": "https://randomuser.me/api/portraits/women/21.jpg"
        },
        "financialRecords": {
            "debt": "$32,499"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "Michelle Clark",
        "id": 123456243
    }, {
        "contact": {
            "email": "thomas.peterson@email.com",
            "phoneNumber": "+1 201 903 6052"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 10,
                "day": 12
            },
            "sex": "male",
            "parentName": "Hannah Peterson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/22.jpg"
        },
        "financialRecords": {
            "debt": "$76,608"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Thomas Peterson",
        "id": 123456244
    }, {
        "contact": {
            "email": "stephanie.lee@email.com",
            "phoneNumber": "+1 201 618 5473"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 2,
                "day": 9
            },
            "sex": "female",
            "parentName": "Kevin Lee",
            "profilePhoto": "https://randomuser.me/api/portraits/women/22.jpg"
        },
        "financialRecords": {
            "debt": "$89,300"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "architectural engineering"
        },
        "isOnline": true,
        "studentName": "Stephanie Lee",
        "id": 123456245
    }, {
        "contact": {
            "email": "joseph.carter@email.com",
            "phoneNumber": "+1 undefined 68 3907"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 1,
                "day": 30
            },
            "sex": "male",
            "parentName": "Jessica Carter",
            "profilePhoto": "https://randomuser.me/api/portraits/men/23.jpg"
        },
        "financialRecords": {
            "debt": "$91,189"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "architectural engineering"
        },
        "isOnline": false,
        "studentName": "Joseph Carter",
        "id": 123456246
    }, {
        "contact": {
            "email": "susan.taylor@email.com",
            "phoneNumber": "+1 732 438 3568"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 4,
                "day": 27
            },
            "sex": "female",
            "parentName": "Brian Taylor",
            "profilePhoto": "https://randomuser.me/api/portraits/women/23.jpg"
        },
        "financialRecords": {
            "debt": "$19,406"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Susan Taylor",
        "id": 123456247
    }, {
        "contact": {
            "email": "nicholas.thompson@email.com",
            "phoneNumber": "+1 856 867 1714"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 8,
                "day": 6
            },
            "sex": "male",
            "parentName": "Melissa Thompson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/24.jpg"
        },
        "financialRecords": {
            "debt": "$51,612"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Nicholas Thompson",
        "id": 123456248
    }, {
        "contact": {
            "email": "amanda.cooper@email.com",
            "phoneNumber": "+1 856 309 231"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 8,
                "day": 5
            },
            "sex": "female",
            "parentName": "Tyler Cooper",
            "profilePhoto": "https://randomuser.me/api/portraits/women/24.jpg"
        },
        "financialRecords": {
            "debt": "$80,490"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "mechanical engineering"
        },
        "isOnline": true,
        "studentName": "Amanda Cooper",
        "id": 123456249
    }, {
        "contact": {
            "email": "michael.hall@email.com",
            "phoneNumber": "+1 201 366 1829"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 5,
                "day": 9
            },
            "sex": "male",
            "parentName": "Sarah Hall",
            "profilePhoto": "https://randomuser.me/api/portraits/men/25.jpg"
        },
        "financialRecords": {
            "debt": "$78,497"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "politcal science"
        },
        "isOnline": true,
        "studentName": "Michael Hall",
        "id": 123456250
    }, {
        "contact": {
            "email": "elizabeth.clark@email.com",
            "phoneNumber": "+1 856 48 6208"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 6,
                "day": 27
            },
            "sex": "female",
            "parentName": "Brandon Clark",
            "profilePhoto": "https://randomuser.me/api/portraits/women/25.jpg"
        },
        "financialRecords": {
            "debt": "$46,540"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "nursing"
        },
        "isOnline": true,
        "studentName": "Elizabeth Clark",
        "id": 123456251
    }, {
        "contact": {
            "email": "jason.liang@email.com",
            "phoneNumber": "+1 732 579 2387"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 3,
                "day": 30
            },
            "sex": "male",
            "parentName": "Samantha Liang",
            "profilePhoto": "https://randomuser.me/api/portraits/men/26.jpg"
        },
        "financialRecords": {
            "debt": "$2,838"
        },
        "academicRecords": {
            "class": "VII A"
        },
        "isOnline": true,
        "studentName": "Jason Liang",
        "id": 123456252
    }, {
        "contact": {
            "email": "megan.schulz@email.com",
            "phoneNumber": "+1 201 424 6517"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 11,
                "day": 18
            },
            "sex": "female",
            "parentName": "Joshua Schulz",
            "profilePhoto": "https://randomuser.me/api/portraits/women/26.jpg"
        },
        "financialRecords": {
            "debt": "$62,665"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "business"
        },
        "isOnline": false,
        "studentName": "Megan Schulz",
        "id": 123456253
    }, {
        "contact": {
            "email": "zachary.smith@email.com",
            "phoneNumber": "+1 201 896 1211"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 11,
                "day": 13
            },
            "sex": "male",
            "parentName": "Brittany Smith",
            "profilePhoto": "https://randomuser.me/api/portraits/men/27.jpg"
        },
        "financialRecords": {
            "debt": "$8,871"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Zachary Smith",
        "id": 123456254
    }, {
        "contact": {
            "email": "brittany.dubois@email.com",
            "phoneNumber": "+1 856 772 5352"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 5,
                "day": 8
            },
            "sex": "female",
            "parentName": "Mark Dubois",
            "profilePhoto": "https://randomuser.me/api/portraits/women/27.jpg"
        },
        "financialRecords": {
            "debt": "$54,727"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Brittany Dubois",
        "id": 123456255
    }, {
        "contact": {
            "email": "james.hill@email.com",
            "phoneNumber": "+1 undefined 273 1432"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 9,
                "day": 8
            },
            "sex": "male",
            "parentName": "Megan Hill",
            "profilePhoto": "https://randomuser.me/api/portraits/men/28.jpg"
        },
        "financialRecords": {
            "debt": "$725"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "nursing"
        },
        "isOnline": true,
        "studentName": "James Hill",
        "id": 123456256
    }, {
        "contact": {
            "email": "stephanie.hall@email.com",
            "phoneNumber": "+1 201 843 8208"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 5,
                "day": 18
            },
            "sex": "female",
            "parentName": "Zachary Hall",
            "profilePhoto": "https://randomuser.me/api/portraits/women/28.jpg"
        },
        "financialRecords": {
            "debt": "$64,086"
        },
        "academicRecords": {
            "class": "VII C"
        },
        "isOnline": false,
        "studentName": "Stephanie Hall",
        "id": 123456257
    }, {
        "contact": {
            "email": "william.dupont@email.com",
            "phoneNumber": "+1 609 879 4635"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 12,
                "day": 1
            },
            "sex": "male",
            "parentName": "Sarah Dupont",
            "profilePhoto": "https://randomuser.me/api/portraits/men/29.jpg"
        },
        "financialRecords": {
            "debt": "$24,509"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "architectural engineering"
        },
        "isOnline": false,
        "studentName": "William Dupont",
        "id": 123456258
    }, {
        "contact": {
            "email": "mary.braun@email.com",
            "phoneNumber": "+1 908 298 3775"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 1,
                "day": 7
            },
            "sex": "female",
            "parentName": "John Braun",
            "profilePhoto": "https://randomuser.me/api/portraits/women/29.jpg"
        },
        "financialRecords": {
            "debt": "$2,848"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Mary Braun",
        "id": 123456259
    }, {
        "contact": {
            "email": "james.campbell@email.com",
            "phoneNumber": "+1 609 889 7749"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 1,
                "day": 16
            },
            "sex": "male",
            "parentName": "Michelle Campbell",
            "profilePhoto": "https://randomuser.me/api/portraits/men/30.jpg"
        },
        "financialRecords": {
            "debt": "$94,069"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "James Campbell",
        "id": 123456260
    }, {
        "contact": {
            "email": "stephanie.wang@email.com",
            "phoneNumber": "+1 201 907 318"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 2,
                "day": 18
            },
            "sex": "female",
            "parentName": "Kyle Wang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/30.jpg"
        },
        "financialRecords": {
            "debt": "$49,474"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "Stephanie Wang",
        "id": 123456261
    }, {
        "contact": {
            "email": "jonathan.taylor@email.com",
            "phoneNumber": "+1 856 905 7713"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 6,
                "day": 2
            },
            "sex": "male",
            "parentName": "Stephanie Taylor",
            "profilePhoto": "https://randomuser.me/api/portraits/men/31.jpg"
        },
        "financialRecords": {
            "debt": "$87,539"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "Jonathan Taylor",
        "id": 123456262
    }, {
        "contact": {
            "email": "abigail.brown@email.com",
            "phoneNumber": "+1 856 914 4771"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 5,
                "day": 11
            },
            "sex": "female",
            "parentName": "Matthew Brown",
            "profilePhoto": "https://randomuser.me/api/portraits/women/31.jpg"
        },
        "financialRecords": {
            "debt": "$28,331"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "Abigail Brown",
        "id": 123456263
    }, {
        "contact": {
            "email": "jonathan.liang@email.com",
            "phoneNumber": "+1 609 996 7092"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 9,
                "day": 29
            },
            "sex": "male",
            "parentName": "Michelle Liang",
            "profilePhoto": "https://randomuser.me/api/portraits/men/32.jpg"
        },
        "financialRecords": {
            "debt": "$25,523"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Jonathan Liang",
        "id": 123456264
    }, {
        "contact": {
            "email": "elizabeth.toussaint@email.com",
            "phoneNumber": "+1 201 229 5211"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 11,
                "day": 9
            },
            "sex": "female",
            "parentName": "Andrew Toussaint",
            "profilePhoto": "https://randomuser.me/api/portraits/women/32.jpg"
        },
        "financialRecords": {
            "debt": "$58,260"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Elizabeth Toussaint",
        "id": 123456265
    }, {
        "contact": {
            "email": "matthew.rodriguez@email.com",
            "phoneNumber": "+1 732 853 6456"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 10,
                "day": 29
            },
            "sex": "male",
            "parentName": "Elizabeth Rodriguez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/33.jpg"
        },
        "financialRecords": {
            "debt": "$11,478"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "nursing"
        },
        "isOnline": false,
        "studentName": "Matthew Rodriguez",
        "id": 123456266
    }, {
        "contact": {
            "email": "taylor.zhang@email.com",
            "phoneNumber": "+1 856 440 5795"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 2,
                "day": 6
            },
            "sex": "female",
            "parentName": "Tyler Zhang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/33.jpg"
        },
        "financialRecords": {
            "debt": "$69,764"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Taylor Zhang",
        "id": 123456267
    }, {
        "contact": {
            "email": "kyle.white@email.com",
            "phoneNumber": "+1 201 949 9114"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 1,
                "day": 1
            },
            "sex": "male",
            "parentName": "Megan White",
            "profilePhoto": "https://randomuser.me/api/portraits/men/34.jpg"
        },
        "financialRecords": {
            "debt": "$20,986"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Kyle White",
        "id": 123456268
    }, {
        "contact": {
            "email": "megan.white@email.com",
            "phoneNumber": "+1 856 610 7347"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 4,
                "day": 29
            },
            "sex": "female",
            "parentName": "Robert White",
            "profilePhoto": "https://randomuser.me/api/portraits/women/34.jpg"
        },
        "financialRecords": {
            "debt": "$8,205"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Megan White",
        "id": 123456269
    }, {
        "contact": {
            "email": "gabriel.young@email.com",
            "phoneNumber": "+1 201 564 9858"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 1,
                "day": 22
            },
            "sex": "male",
            "parentName": "Megan Young",
            "profilePhoto": "https://randomuser.me/api/portraits/men/35.jpg"
        },
        "financialRecords": {
            "debt": "$19,641"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Gabriel Young",
        "id": 123456270
    }, {
        "contact": {
            "email": "mary.williams@email.com",
            "phoneNumber": "+1 609 675 4384"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 10,
                "day": 21
            },
            "sex": "female",
            "parentName": "Daniel Williams",
            "profilePhoto": "https://randomuser.me/api/portraits/women/35.jpg"
        },
        "financialRecords": {
            "debt": "$7,404"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "architectural engineering"
        },
        "isOnline": false,
        "studentName": "Mary Williams",
        "id": 123456271
    }, {
        "contact": {
            "email": "matthew.harris@email.com",
            "phoneNumber": "+1 609 976 1205"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 3,
                "day": 20
            },
            "sex": "male",
            "parentName": "Hannah Harris",
            "profilePhoto": "https://randomuser.me/api/portraits/men/36.jpg"
        },
        "financialRecords": {
            "debt": "$58,894"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Matthew Harris",
        "id": 123456272
    }, {
        "contact": {
            "email": "jessica.thompson@email.com",
            "phoneNumber": "+1 undefined 592 3505"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 2
            },
            "sex": "female",
            "parentName": "Gabriel Thompson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/36.jpg"
        },
        "financialRecords": {
            "debt": "$24,770"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Jessica Thompson",
        "id": 123456273
    }, {
        "contact": {
            "email": "zachary.nelson@email.com",
            "phoneNumber": "+1 732 639 2753"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 8,
                "day": 22
            },
            "sex": "male",
            "parentName": "Nicole Nelson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/37.jpg"
        },
        "financialRecords": {
            "debt": "$22,710"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": true,
        "studentName": "Zachary Nelson",
        "id": 123456274
    }, {
        "contact": {
            "email": "heather.wilson@email.com",
            "phoneNumber": "+1 609 767 8846"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 8,
                "day": 4
            },
            "sex": "female",
            "parentName": "Brandon Wilson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/37.jpg"
        },
        "financialRecords": {
            "debt": "$59,166"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "Heather Wilson",
        "id": 123456275
    }, {
        "contact": {
            "email": "matthew.monet@email.com",
            "phoneNumber": "+1 undefined 99 5213"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 7,
                "day": 15
            },
            "sex": "male",
            "parentName": "Megan Monet",
            "profilePhoto": "https://randomuser.me/api/portraits/men/38.jpg"
        },
        "financialRecords": {
            "debt": "$89,960"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "Matthew Monet",
        "id": 123456276
    }, {
        "contact": {
            "email": "heather.richardson@email.com",
            "phoneNumber": "+1 856 298 2484"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 10,
                "day": 5
            },
            "sex": "female",
            "parentName": "Brandon Richardson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/38.jpg"
        },
        "financialRecords": {
            "debt": "$62,557"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "computer science"
        },
        "isOnline": true,
        "studentName": "Heather Richardson",
        "id": 123456277
    }, {
        "contact": {
            "email": "ethan.schulz@email.com",
            "phoneNumber": "+1 856 164 1083"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 8,
                "day": 4
            },
            "sex": "male",
            "parentName": "Sophia Schulz",
            "profilePhoto": "https://randomuser.me/api/portraits/men/39.jpg"
        },
        "financialRecords": {
            "debt": "$64,840"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "mechanical engineering"
        },
        "isOnline": true,
        "studentName": "Ethan Schulz",
        "id": 123456278
    }, {
        "contact": {
            "email": "mary.allen@email.com",
            "phoneNumber": "+1 908 203 1631"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 6,
                "day": 25
            },
            "sex": "female",
            "parentName": "Andrew Allen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/39.jpg"
        },
        "financialRecords": {
            "debt": "$39,318"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "psychology"
        },
        "isOnline": true,
        "studentName": "Mary Allen",
        "id": 123456279
    }, {
        "contact": {
            "email": "david.ali@email.com",
            "phoneNumber": "+1 201 618 9763"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 7,
                "day": 26
            },
            "sex": "male",
            "parentName": "Sarah Ali",
            "profilePhoto": "https://randomuser.me/api/portraits/men/40.jpg"
        },
        "financialRecords": {
            "debt": "$48,821"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "David Ali",
        "id": 123456280
    }, {
        "contact": {
            "email": "linda.flores@email.com",
            "phoneNumber": "+1 201 678 2128"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 3,
                "day": 20
            },
            "sex": "female",
            "parentName": "Nicholas Flores",
            "profilePhoto": "https://randomuser.me/api/portraits/women/40.jpg"
        },
        "financialRecords": {
            "debt": "$68,552"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "Linda Flores",
        "id": 123456281
    }, {
        "contact": {
            "email": "thomas.wilson@email.com",
            "phoneNumber": "+1 732 836 864"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 7,
                "day": 21
            },
            "sex": "male",
            "parentName": "Emma Wilson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/41.jpg"
        },
        "financialRecords": {
            "debt": "$26,982"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "biology"
        },
        "isOnline": true,
        "studentName": "Thomas Wilson",
        "id": 123456282
    }, {
        "contact": {
            "email": "mary.clark@email.com",
            "phoneNumber": "+1 908 623 1412"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 6,
                "day": 25
            },
            "sex": "female",
            "parentName": "John Clark",
            "profilePhoto": "https://randomuser.me/api/portraits/women/41.jpg"
        },
        "financialRecords": {
            "debt": "$85,626"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Mary Clark",
        "id": 123456283
    }, {
        "contact": {
            "email": "tyler.walker@email.com",
            "phoneNumber": "+1 609 517 6436"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 8,
                "day": 8
            },
            "sex": "male",
            "parentName": "Ashley Walker",
            "profilePhoto": "https://randomuser.me/api/portraits/men/42.jpg"
        },
        "financialRecords": {
            "debt": "$31,153"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "architectural engineering"
        },
        "isOnline": false,
        "studentName": "Tyler Walker",
        "id": 123456284
    }, {
        "contact": {
            "email": "heather.baker@email.com",
            "phoneNumber": "+1 856 230 8028"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 9,
                "day": 12
            },
            "sex": "female",
            "parentName": "William Baker",
            "profilePhoto": "https://randomuser.me/api/portraits/women/42.jpg"
        },
        "financialRecords": {
            "debt": "$87,574"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "politcal science"
        },
        "isOnline": true,
        "studentName": "Heather Baker",
        "id": 123456285
    }, {
        "contact": {
            "email": "brian.perez@email.com",
            "phoneNumber": "+1 201 870 7784"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 9,
                "day": 29
            },
            "sex": "male",
            "parentName": "Samantha Perez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/43.jpg"
        },
        "financialRecords": {
            "debt": "$15,753"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "mechanical engineering"
        },
        "isOnline": false,
        "studentName": "Brian Perez",
        "id": 123456286
    }, {
        "contact": {
            "email": "lillian.harris@email.com",
            "phoneNumber": "+1 undefined 497 2473"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 9,
                "day": 24
            },
            "sex": "female",
            "parentName": "Jack Harris",
            "profilePhoto": "https://randomuser.me/api/portraits/women/43.jpg"
        },
        "financialRecords": {
            "debt": "$74,591"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Lillian Harris",
        "id": 123456287
    }, {
        "contact": {
            "email": "christian.adams@email.com",
            "phoneNumber": "+1 609 566 4344"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 5,
                "day": 25
            },
            "sex": "male",
            "parentName": "Kimberly Adams",
            "profilePhoto": "https://randomuser.me/api/portraits/men/44.jpg"
        },
        "financialRecords": {
            "debt": "$64,597"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "Christian Adams",
        "id": 123456288
    }, {
        "contact": {
            "email": "kayla.young@email.com",
            "phoneNumber": "+1 undefined 401 7556"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 6,
                "day": 29
            },
            "sex": "female",
            "parentName": "Christian Young",
            "profilePhoto": "https://randomuser.me/api/portraits/women/44.jpg"
        },
        "financialRecords": {
            "debt": "$10,379"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Kayla Young",
        "id": 123456289
    }, {
        "contact": {
            "email": "alexander.peterson@email.com",
            "phoneNumber": "+1 856 80 1598"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 5
            },
            "sex": "male",
            "parentName": "Linda Peterson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/45.jpg"
        },
        "financialRecords": {
            "debt": "$31,760"
        },
        "academicRecords": {
            "class": "VII C"
        },
        "isOnline": false,
        "studentName": "Alexander Peterson",
        "id": 123456290
    }, {
        "contact": {
            "email": "heather.wang@email.com",
            "phoneNumber": "+1 undefined 169 5491"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 6,
                "day": 14
            },
            "sex": "female",
            "parentName": "Thomas Wang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/45.jpg"
        },
        "financialRecords": {
            "debt": "$8,456"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "Heather Wang",
        "id": 123456291
    }, {
        "contact": {
            "email": "alexander.peterson@email.com",
            "phoneNumber": "+1 908 25 893"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 10,
                "day": 17
            },
            "sex": "male",
            "parentName": "Taylor Peterson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/46.jpg"
        },
        "financialRecords": {
            "debt": "$56,727"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "electrical engineering"
        },
        "isOnline": false,
        "studentName": "Alexander Peterson",
        "id": 123456292
    }, {
        "contact": {
            "email": "samantha.edwards@email.com",
            "phoneNumber": "+1 609 89 1349"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 7,
                "day": 13
            },
            "sex": "female",
            "parentName": "Jonathan Edwards",
            "profilePhoto": "https://randomuser.me/api/portraits/women/46.jpg"
        },
        "financialRecords": {
            "debt": "$32,162"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "Samantha Edwards",
        "id": 123456293
    }, {
        "contact": {
            "email": "robert.smith@email.com",
            "phoneNumber": "+1 908 869 7807"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 2,
                "day": 25
            },
            "sex": "male",
            "parentName": "Ashley Smith",
            "profilePhoto": "https://randomuser.me/api/portraits/men/47.jpg"
        },
        "financialRecords": {
            "debt": "$55,205"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "Robert Smith",
        "id": 123456294
    }, {
        "contact": {
            "email": "susan.davis@email.com",
            "phoneNumber": "+1 201 264 4661"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 6,
                "day": 1
            },
            "sex": "female",
            "parentName": "Joshua Davis",
            "profilePhoto": "https://randomuser.me/api/portraits/women/47.jpg"
        },
        "financialRecords": {
            "debt": "$79,453"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "Susan Davis",
        "id": 123456295
    }, {
        "contact": {
            "email": "david.zhang@email.com",
            "phoneNumber": "+1 856 926 2488"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 5,
                "day": 18
            },
            "sex": "male",
            "parentName": "Lillian Zhang",
            "profilePhoto": "https://randomuser.me/api/portraits/men/48.jpg"
        },
        "financialRecords": {
            "debt": "$70,797"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "David Zhang",
        "id": 123456296
    }, {
        "contact": {
            "email": "michelle.zhang@email.com",
            "phoneNumber": "+1 201 764 9406"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 5,
                "day": 16
            },
            "sex": "female",
            "parentName": "Andrew Zhang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/48.jpg"
        },
        "financialRecords": {
            "debt": "$42,226"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Michelle Zhang",
        "id": 123456297
    }, {
        "contact": {
            "email": "michael.chen@email.com",
            "phoneNumber": "+1 732 191 739"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 3,
                "day": 1
            },
            "sex": "male",
            "parentName": "Jessica Chen",
            "profilePhoto": "https://randomuser.me/api/portraits/men/49.jpg"
        },
        "financialRecords": {
            "debt": "$58,193"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": true,
        "studentName": "Michael Chen",
        "id": 123456298
    }, {
        "contact": {
            "email": "samantha.hill@email.com",
            "phoneNumber": "+1 609 950 1900"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 5,
                "day": 25
            },
            "sex": "female",
            "parentName": "Daniel Hill",
            "profilePhoto": "https://randomuser.me/api/portraits/women/49.jpg"
        },
        "financialRecords": {
            "debt": "$29,323"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Samantha Hill",
        "id": 123456299
    }, {
        "contact": {
            "email": "kyle.gonzalez@email.com",
            "phoneNumber": "+1 609 947 8227"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 5
            },
            "sex": "male",
            "parentName": "Kayla Gonzalez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/50.jpg"
        },
        "financialRecords": {
            "debt": "$92,229"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Kyle Gonzalez",
        "id": 123456300
    }, {
        "contact": {
            "email": "jennifer.chen@email.com",
            "phoneNumber": "+1 609 244 3463"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 3,
                "day": 1
            },
            "sex": "female",
            "parentName": "John Chen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/50.jpg"
        },
        "financialRecords": {
            "debt": "$93,366"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Jennifer Chen",
        "id": 123456301
    }, {
        "contact": {
            "email": "anthony.liang@email.com",
            "phoneNumber": "+1 856 499 4006"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 1,
                "day": 20
            },
            "sex": "male",
            "parentName": "Sophia Liang",
            "profilePhoto": "https://randomuser.me/api/portraits/men/51.jpg"
        },
        "financialRecords": {
            "debt": "$27,791"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "Anthony Liang",
        "id": 123456302
    }, {
        "contact": {
            "email": "michelle.schulz@email.com",
            "phoneNumber": "+1 856 781 7461"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 8,
                "day": 2
            },
            "sex": "female",
            "parentName": "Kyle Schulz",
            "profilePhoto": "https://randomuser.me/api/portraits/women/51.jpg"
        },
        "financialRecords": {
            "debt": "$88,287"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Michelle Schulz",
        "id": 123456303
    }, {
        "contact": {
            "email": "thomas.martinez@email.com",
            "phoneNumber": "+1 732 216 8697"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 1,
                "day": 4
            },
            "sex": "male",
            "parentName": "Angela Martinez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/52.jpg"
        },
        "financialRecords": {
            "debt": "$23,345"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "architectural engineering"
        },
        "isOnline": false,
        "studentName": "Thomas Martinez",
        "id": 123456304
    }, {
        "contact": {
            "email": "sophia.rogers@email.com",
            "phoneNumber": "+1 undefined 454 3624"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 8,
                "day": 15
            },
            "sex": "female",
            "parentName": "Justin Rogers",
            "profilePhoto": "https://randomuser.me/api/portraits/women/52.jpg"
        },
        "financialRecords": {
            "debt": "$9,012"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Sophia Rogers",
        "id": 123456305
    }, {
        "contact": {
            "email": "ethan.robinson@email.com",
            "phoneNumber": "+1 856 650 3110"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 11,
                "day": 7
            },
            "sex": "male",
            "parentName": "Karen Robinson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/53.jpg"
        },
        "financialRecords": {
            "debt": "$4,911"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "Ethan Robinson",
        "id": 123456306
    }, {
        "contact": {
            "email": "kimberly.davis@email.com",
            "phoneNumber": "+1 856 349 6997"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 8,
                "day": 17
            },
            "sex": "female",
            "parentName": "Jacob Davis",
            "profilePhoto": "https://randomuser.me/api/portraits/women/53.jpg"
        },
        "financialRecords": {
            "debt": "$3,765"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "electrical engineering"
        },
        "isOnline": true,
        "studentName": "Kimberly Davis",
        "id": 123456307
    }, {
        "contact": {
            "email": "samuel.garnier@email.com",
            "phoneNumber": "+1 201 772 8606"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 11,
                "day": 7
            },
            "sex": "male",
            "parentName": "Emily Garnier",
            "profilePhoto": "https://randomuser.me/api/portraits/men/54.jpg"
        },
        "financialRecords": {
            "debt": "$58,719"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "psychology"
        },
        "isOnline": true,
        "studentName": "Samuel Garnier",
        "id": 123456308
    }, {
        "contact": {
            "email": "jennifer.schneider@email.com",
            "phoneNumber": "+1 908 793 5403"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 5,
                "day": 28
            },
            "sex": "female",
            "parentName": "Michael Schneider",
            "profilePhoto": "https://randomuser.me/api/portraits/women/54.jpg"
        },
        "financialRecords": {
            "debt": "$55,509"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "Jennifer Schneider",
        "id": 123456309
    }, {
        "contact": {
            "email": "samuel.zhang@email.com",
            "phoneNumber": "+1 856 430 9089"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 10,
                "day": 23
            },
            "sex": "male",
            "parentName": "Ashley Zhang",
            "profilePhoto": "https://randomuser.me/api/portraits/men/55.jpg"
        },
        "financialRecords": {
            "debt": "$76,214"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "mechanical engineering"
        },
        "isOnline": false,
        "studentName": "Samuel Zhang",
        "id": 123456310
    }, {
        "contact": {
            "email": "patricia.schneider@email.com",
            "phoneNumber": "+1 201 415 2117"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 10,
                "day": 7
            },
            "sex": "female",
            "parentName": "Jonathan Schneider",
            "profilePhoto": "https://randomuser.me/api/portraits/women/55.jpg"
        },
        "financialRecords": {
            "debt": "$55,997"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Patricia Schneider",
        "id": 123456311
    }, {
        "contact": {
            "email": "justin.bonnet@email.com",
            "phoneNumber": "+1 undefined 997 2617"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 9,
                "day": 12
            },
            "sex": "male",
            "parentName": "Michelle Bonnet",
            "profilePhoto": "https://randomuser.me/api/portraits/men/56.jpg"
        },
        "financialRecords": {
            "debt": "$2,983"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "Justin Bonnet",
        "id": 123456312
    }, {
        "contact": {
            "email": "amy.allen@email.com",
            "phoneNumber": "+1 856 501 7690"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 1,
                "day": 30
            },
            "sex": "female",
            "parentName": "Christopher Allen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/56.jpg"
        },
        "financialRecords": {
            "debt": "$9,469"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Amy Allen",
        "id": 123456313
    }, {
        "contact": {
            "email": "gabriel.perez@email.com",
            "phoneNumber": "+1 856 824 8651"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 3,
                "day": 10
            },
            "sex": "male",
            "parentName": "Patricia Perez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/57.jpg"
        },
        "financialRecords": {
            "debt": "$97,376"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Gabriel Perez",
        "id": 123456314
    }, {
        "contact": {
            "email": "linda.lewis@email.com",
            "phoneNumber": "+1 732 664 5144"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 1,
                "day": 4
            },
            "sex": "female",
            "parentName": "Nicholas Lewis",
            "profilePhoto": "https://randomuser.me/api/portraits/women/57.jpg"
        },
        "financialRecords": {
            "debt": "$923"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "Linda Lewis",
        "id": 123456315
    }, {
        "contact": {
            "email": "mark.wright@email.com",
            "phoneNumber": "+1 856 921 3262"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 6,
                "day": 21
            },
            "sex": "male",
            "parentName": "Emma Wright",
            "profilePhoto": "https://randomuser.me/api/portraits/men/58.jpg"
        },
        "financialRecords": {
            "debt": "$77,445"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Mark Wright",
        "id": 123456316
    }, {
        "contact": {
            "email": "amy.robinson@email.com",
            "phoneNumber": "+1 732 529 3319"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 8,
                "day": 9
            },
            "sex": "female",
            "parentName": "Austin Robinson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/58.jpg"
        },
        "financialRecords": {
            "debt": "$48,977"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Amy Robinson",
        "id": 123456317
    }, {
        "contact": {
            "email": "joseph.mitchell@email.com",
            "phoneNumber": "+1 908 421 693"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 5,
                "day": 24
            },
            "sex": "male",
            "parentName": "Amy Mitchell",
            "profilePhoto": "https://randomuser.me/api/portraits/men/59.jpg"
        },
        "financialRecords": {
            "debt": "$60,661"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "finance"
        },
        "isOnline": true,
        "studentName": "Joseph Mitchell",
        "id": 123456318
    }, {
        "contact": {
            "email": "angela.moore@email.com",
            "phoneNumber": "+1 908 33 8604"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 6,
                "day": 20
            },
            "sex": "female",
            "parentName": "Joshua Moore",
            "profilePhoto": "https://randomuser.me/api/portraits/women/59.jpg"
        },
        "financialRecords": {
            "debt": "$69,760"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "electrical engineering"
        },
        "isOnline": false,
        "studentName": "Angela Moore",
        "id": 123456319
    }, {
        "contact": {
            "email": "anthony.roberts@email.com",
            "phoneNumber": "+1 732 23 9848"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 8,
                "day": 12
            },
            "sex": "male",
            "parentName": "Karen Roberts",
            "profilePhoto": "https://randomuser.me/api/portraits/men/60.jpg"
        },
        "financialRecords": {
            "debt": "$71,570"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "politcal science"
        },
        "isOnline": false,
        "studentName": "Anthony Roberts",
        "id": 123456320
    }, {
        "contact": {
            "email": "samantha.robinson@email.com",
            "phoneNumber": "+1 732 141 3702"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 6,
                "day": 5
            },
            "sex": "female",
            "parentName": "Nicholas Robinson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/60.jpg"
        },
        "financialRecords": {
            "debt": "$62,165"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "nursing"
        },
        "isOnline": true,
        "studentName": "Samantha Robinson",
        "id": 123456321
    }, {
        "contact": {
            "email": "kyle.smith@email.com",
            "phoneNumber": "+1 732 46 80"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 4,
                "day": 4
            },
            "sex": "male",
            "parentName": "Elizabeth Smith",
            "profilePhoto": "https://randomuser.me/api/portraits/men/61.jpg"
        },
        "financialRecords": {
            "debt": "$93,887"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "mechanical engineering"
        },
        "isOnline": false,
        "studentName": "Kyle Smith",
        "id": 123456322
    }, {
        "contact": {
            "email": "olivia.chen@email.com",
            "phoneNumber": "+1 609 546 1446"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 10,
                "day": 25
            },
            "sex": "female",
            "parentName": "Jack Chen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/61.jpg"
        },
        "financialRecords": {
            "debt": "$70,459"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Olivia Chen",
        "id": 123456323
    }, {
        "contact": {
            "email": "justin.brown@email.com",
            "phoneNumber": "+1 201 775 7895"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 1,
                "day": 22
            },
            "sex": "male",
            "parentName": "Brittany Brown",
            "profilePhoto": "https://randomuser.me/api/portraits/men/62.jpg"
        },
        "financialRecords": {
            "debt": "$62,082"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "electrical engineering"
        },
        "isOnline": true,
        "studentName": "Justin Brown",
        "id": 123456324
    }, {
        "contact": {
            "email": "elizabeth.müller@email.com",
            "phoneNumber": "+1 732 553 7412"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 4,
                "day": 8
            },
            "sex": "female",
            "parentName": "Christian Müller",
            "profilePhoto": "https://randomuser.me/api/portraits/women/62.jpg"
        },
        "financialRecords": {
            "debt": "$34,308"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Elizabeth Müller",
        "id": 123456325
    }, {
        "contact": {
            "email": "brandon.martinez@email.com",
            "phoneNumber": "+1 908 403 29"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 5,
                "day": 29
            },
            "sex": "male",
            "parentName": "Emma Martinez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/63.jpg"
        },
        "financialRecords": {
            "debt": "$99,582"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "biology"
        },
        "isOnline": true,
        "studentName": "Brandon Martinez",
        "id": 123456326
    }, {
        "contact": {
            "email": "madison.wang@email.com",
            "phoneNumber": "+1 732 327 7030"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 2,
                "day": 3
            },
            "sex": "female",
            "parentName": "Robert Wang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/63.jpg"
        },
        "financialRecords": {
            "debt": "$58,218"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "mechanical engineering"
        },
        "isOnline": false,
        "studentName": "Madison Wang",
        "id": 123456327
    }, {
        "contact": {
            "email": "brandon.dubois@email.com",
            "phoneNumber": "+1 856 448 4037"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 3,
                "day": 12
            },
            "sex": "male",
            "parentName": "Stephanie Dubois",
            "profilePhoto": "https://randomuser.me/api/portraits/men/64.jpg"
        },
        "financialRecords": {
            "debt": "$3,673"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Brandon Dubois",
        "id": 123456328
    }, {
        "contact": {
            "email": "stephanie.robinson@email.com",
            "phoneNumber": "+1 609 280 457"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 1,
                "day": 30
            },
            "sex": "female",
            "parentName": "Brian Robinson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/64.jpg"
        },
        "financialRecords": {
            "debt": "$73,387"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Stephanie Robinson",
        "id": 123456329
    }, {
        "contact": {
            "email": "anthony.jones@email.com",
            "phoneNumber": "+1 856 156 2886"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 7,
                "day": 21
            },
            "sex": "male",
            "parentName": "Amanda Jones",
            "profilePhoto": "https://randomuser.me/api/portraits/men/65.jpg"
        },
        "financialRecords": {
            "debt": "$97,552"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "politcal science"
        },
        "isOnline": true,
        "studentName": "Anthony Jones",
        "id": 123456330
    }, {
        "contact": {
            "email": "isabella.li@email.com",
            "phoneNumber": "+1 856 814 8645"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 9,
                "day": 25
            },
            "sex": "female",
            "parentName": "Robert Li",
            "profilePhoto": "https://randomuser.me/api/portraits/women/65.jpg"
        },
        "financialRecords": {
            "debt": "$87,286"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Isabella Li",
        "id": 123456331
    }, {
        "contact": {
            "email": "joshua.cooper@email.com",
            "phoneNumber": "+1 201 869 9789"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 12,
                "day": 6
            },
            "sex": "male",
            "parentName": "Angela Cooper",
            "profilePhoto": "https://randomuser.me/api/portraits/men/66.jpg"
        },
        "financialRecords": {
            "debt": "$34,810"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "psychology"
        },
        "isOnline": true,
        "studentName": "Joshua Cooper",
        "id": 123456332
    }, {
        "contact": {
            "email": "jessica.braun@email.com",
            "phoneNumber": "+1 732 364 8638"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 6,
                "day": 2
            },
            "sex": "female",
            "parentName": "Matthew Braun",
            "profilePhoto": "https://randomuser.me/api/portraits/women/66.jpg"
        },
        "financialRecords": {
            "debt": "$13,721"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Jessica Braun",
        "id": 123456333
    }, {
        "contact": {
            "email": "brandon.allen@email.com",
            "phoneNumber": "+1 609 955 6114"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 1,
                "day": 30
            },
            "sex": "male",
            "parentName": "Ashley Allen",
            "profilePhoto": "https://randomuser.me/api/portraits/men/67.jpg"
        },
        "financialRecords": {
            "debt": "$58,153"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "Brandon Allen",
        "id": 123456334
    }, {
        "contact": {
            "email": "samantha.adams@email.com",
            "phoneNumber": "+1 201 869 7533"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 3,
                "day": 4
            },
            "sex": "female",
            "parentName": "Justin Adams",
            "profilePhoto": "https://randomuser.me/api/portraits/women/67.jpg"
        },
        "financialRecords": {
            "debt": "$29,655"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Samantha Adams",
        "id": 123456335
    }, {
        "contact": {
            "email": "jack.bonnet@email.com",
            "phoneNumber": "+1 856 555 9177"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 1,
                "day": 13
            },
            "sex": "male",
            "parentName": "Karen Bonnet",
            "profilePhoto": "https://randomuser.me/api/portraits/men/68.jpg"
        },
        "financialRecords": {
            "debt": "$41,115"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "Jack Bonnet",
        "id": 123456336
    }, {
        "contact": {
            "email": "jessica.howard@email.com",
            "phoneNumber": "+1 732 194 4927"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 4,
                "day": 6
            },
            "sex": "female",
            "parentName": "Ryan Howard",
            "profilePhoto": "https://randomuser.me/api/portraits/women/68.jpg"
        },
        "financialRecords": {
            "debt": "$69,194"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "Jessica Howard",
        "id": 123456337
    }, {
        "contact": {
            "email": "mark.rodriguez@email.com",
            "phoneNumber": "+1 201 587 5967"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 3,
                "day": 11
            },
            "sex": "male",
            "parentName": "Isabella Rodriguez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/69.jpg"
        },
        "financialRecords": {
            "debt": "$79,678"
        },
        "academicRecords": {
            "class": "VII C"
        },
        "isOnline": true,
        "studentName": "Mark Rodriguez",
        "id": 123456338
    }, {
        "contact": {
            "email": "amy.jones@email.com",
            "phoneNumber": "+1 732 186 266"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 8,
                "day": 4
            },
            "sex": "female",
            "parentName": "Brandon Jones",
            "profilePhoto": "https://randomuser.me/api/portraits/women/69.jpg"
        },
        "financialRecords": {
            "debt": "$69,973"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "Amy Jones",
        "id": 123456339
    }, {
        "contact": {
            "email": "christopher.braun@email.com",
            "phoneNumber": "+1 856 868 771"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 4,
                "day": 21
            },
            "sex": "male",
            "parentName": "Sophia Braun",
            "profilePhoto": "https://randomuser.me/api/portraits/men/70.jpg"
        },
        "financialRecords": {
            "debt": "$63,399"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "mechanical engineering"
        },
        "isOnline": true,
        "studentName": "Christopher Braun",
        "id": 123456340
    }, {
        "contact": {
            "email": "olivia.rodriguez@email.com",
            "phoneNumber": "+1 732 81 6344"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 6,
                "day": 1
            },
            "sex": "female",
            "parentName": "Kyle Rodriguez",
            "profilePhoto": "https://randomuser.me/api/portraits/women/70.jpg"
        },
        "financialRecords": {
            "debt": "$93,420"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Olivia Rodriguez",
        "id": 123456341
    }, {
        "contact": {
            "email": "michael.roberts@email.com",
            "phoneNumber": "+1 201 530 7773"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 3,
                "day": 13
            },
            "sex": "male",
            "parentName": "Nicole Roberts",
            "profilePhoto": "https://randomuser.me/api/portraits/men/71.jpg"
        },
        "financialRecords": {
            "debt": "$67,779"
        },
        "academicRecords": {
            "class": "VII A"
        },
        "isOnline": true,
        "studentName": "Michael Roberts",
        "id": 123456342
    }, {
        "contact": {
            "email": "kayla.jones@email.com",
            "phoneNumber": "+1 856 554 2493"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 10,
                "day": 3
            },
            "sex": "female",
            "parentName": "Jacob Jones",
            "profilePhoto": "https://randomuser.me/api/portraits/women/71.jpg"
        },
        "financialRecords": {
            "debt": "$1,686"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Kayla Jones",
        "id": 123456343
    }, {
        "contact": {
            "email": "ethan.roberts@email.com",
            "phoneNumber": "+1 609 925 3887"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 5,
                "day": 29
            },
            "sex": "male",
            "parentName": "Megan Roberts",
            "profilePhoto": "https://randomuser.me/api/portraits/men/72.jpg"
        },
        "financialRecords": {
            "debt": "$50,839"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "Ethan Roberts",
        "id": 123456344
    }, {
        "contact": {
            "email": "kimberly.robinson@email.com",
            "phoneNumber": "+1 732 261 2088"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 3,
                "day": 21
            },
            "sex": "female",
            "parentName": "Brian Robinson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/72.jpg"
        },
        "financialRecords": {
            "debt": "$5,316"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "communications"
        },
        "isOnline": true,
        "studentName": "Kimberly Robinson",
        "id": 123456345
    }, {
        "contact": {
            "email": "joshua.liang@email.com",
            "phoneNumber": "+1 908 324 2849"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 3,
                "day": 19
            },
            "sex": "male",
            "parentName": "Emma Liang",
            "profilePhoto": "https://randomuser.me/api/portraits/men/73.jpg"
        },
        "financialRecords": {
            "debt": "$31,578"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Joshua Liang",
        "id": 123456346
    }, {
        "contact": {
            "email": "mary.lee@email.com",
            "phoneNumber": "+1 609 343 4693"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 6,
                "day": 30
            },
            "sex": "female",
            "parentName": "Christopher Lee",
            "profilePhoto": "https://randomuser.me/api/portraits/women/73.jpg"
        },
        "financialRecords": {
            "debt": "$23,883"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "nursing"
        },
        "isOnline": false,
        "studentName": "Mary Lee",
        "id": 123456347
    }, {
        "contact": {
            "email": "david.gonzalez@email.com",
            "phoneNumber": "+1 undefined 939 4957"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 6,
                "day": 13
            },
            "sex": "male",
            "parentName": "Hannah Gonzalez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/74.jpg"
        },
        "financialRecords": {
            "debt": "$37,313"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "psychology"
        },
        "isOnline": true,
        "studentName": "David Gonzalez",
        "id": 123456348
    }, {
        "contact": {
            "email": "ashley.richardson@email.com",
            "phoneNumber": "+1 856 868 1418"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 4,
                "day": 13
            },
            "sex": "female",
            "parentName": "Andrew Richardson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/74.jpg"
        },
        "financialRecords": {
            "debt": "$57,465"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Ashley Richardson",
        "id": 123456349
    }, {
        "contact": {
            "email": "brandon.schulz@email.com",
            "phoneNumber": "+1 201 515 6547"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 3,
                "day": 26
            },
            "sex": "male",
            "parentName": "Angela Schulz",
            "profilePhoto": "https://randomuser.me/api/portraits/men/75.jpg"
        },
        "financialRecords": {
            "debt": "$43,393"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "nursing"
        },
        "isOnline": true,
        "studentName": "Brandon Schulz",
        "id": 123456350
    }, {
        "contact": {
            "email": "emily.jones@email.com",
            "phoneNumber": "+1 201 164 2816"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 6,
                "day": 9
            },
            "sex": "female",
            "parentName": "Austin Jones",
            "profilePhoto": "https://randomuser.me/api/portraits/women/75.jpg"
        },
        "financialRecords": {
            "debt": "$20,666"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Emily Jones",
        "id": 123456351
    }, {
        "contact": {
            "email": "nathan.liang@email.com",
            "phoneNumber": "+1 609 694 9631"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 8
            },
            "sex": "male",
            "parentName": "Linda Liang",
            "profilePhoto": "https://randomuser.me/api/portraits/men/76.jpg"
        },
        "financialRecords": {
            "debt": "$43,501"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "architectural engineering"
        },
        "isOnline": true,
        "studentName": "Nathan Liang",
        "id": 123456352
    }, {
        "contact": {
            "email": "kayla.schmidt@email.com",
            "phoneNumber": "+1 609 966 6437"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 12,
                "day": 6
            },
            "sex": "female",
            "parentName": "Brandon Schmidt",
            "profilePhoto": "https://randomuser.me/api/portraits/women/76.jpg"
        },
        "financialRecords": {
            "debt": "$76,795"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Kayla Schmidt",
        "id": 123456353
    }, {
        "contact": {
            "email": "daniel.lavigne@email.com",
            "phoneNumber": "+1 609 362 5349"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 2,
                "day": 25
            },
            "sex": "male",
            "parentName": "Emily Lavigne",
            "profilePhoto": "https://randomuser.me/api/portraits/men/77.jpg"
        },
        "financialRecords": {
            "debt": "$8,788"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "computer science"
        },
        "isOnline": true,
        "studentName": "Daniel Lavigne",
        "id": 123456354
    }, {
        "contact": {
            "email": "madison.baker@email.com",
            "phoneNumber": "+1 856 920 814"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 10,
                "day": 8
            },
            "sex": "female",
            "parentName": "Nicholas Baker",
            "profilePhoto": "https://randomuser.me/api/portraits/women/77.jpg"
        },
        "financialRecords": {
            "debt": "$29,385"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Madison Baker",
        "id": 123456355
    }, {
        "contact": {
            "email": "gabriel.garnier@email.com",
            "phoneNumber": "+1 856 734 8119"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 10,
                "day": 12
            },
            "sex": "male",
            "parentName": "Linda Garnier",
            "profilePhoto": "https://randomuser.me/api/portraits/men/78.jpg"
        },
        "financialRecords": {
            "debt": "$6,481"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Gabriel Garnier",
        "id": 123456356
    }, {
        "contact": {
            "email": "olivia.allen@email.com",
            "phoneNumber": "+1 609 817 2131"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 11,
                "day": 26
            },
            "sex": "female",
            "parentName": "Joshua Allen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/78.jpg"
        },
        "financialRecords": {
            "debt": "$76,110"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "politcal science"
        },
        "isOnline": true,
        "studentName": "Olivia Allen",
        "id": 123456357
    }, {
        "contact": {
            "email": "joseph.richardson@email.com",
            "phoneNumber": "+1 201 278 7249"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 8,
                "day": 12
            },
            "sex": "male",
            "parentName": "Linda Richardson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/79.jpg"
        },
        "financialRecords": {
            "debt": "$74,200"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "Joseph Richardson",
        "id": 123456358
    }, {
        "contact": {
            "email": "abigail.clark@email.com",
            "phoneNumber": "+1 undefined 618 3947"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 2,
                "day": 21
            },
            "sex": "female",
            "parentName": "David Clark",
            "profilePhoto": "https://randomuser.me/api/portraits/women/79.jpg"
        },
        "financialRecords": {
            "debt": "$55,514"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "architectural engineering"
        },
        "isOnline": true,
        "studentName": "Abigail Clark",
        "id": 123456359
    }, {
        "contact": {
            "email": "christopher.thompson@email.com",
            "phoneNumber": "+1 201 313 2376"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 6,
                "day": 30
            },
            "sex": "male",
            "parentName": "Taylor Thompson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/80.jpg"
        },
        "financialRecords": {
            "debt": "$98,878"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "politcal science"
        },
        "isOnline": true,
        "studentName": "Christopher Thompson",
        "id": 123456360
    }, {
        "contact": {
            "email": "kimberly.nelson@email.com",
            "phoneNumber": "+1 908 748 977"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 5,
                "day": 14
            },
            "sex": "female",
            "parentName": "Nathan Nelson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/80.jpg"
        },
        "financialRecords": {
            "debt": "$72,132"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Kimberly Nelson",
        "id": 123456361
    }, {
        "contact": {
            "email": "samuel.richardson@email.com",
            "phoneNumber": "+1 908 296 3028"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 1,
                "day": 29
            },
            "sex": "male",
            "parentName": "Emma Richardson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/81.jpg"
        },
        "financialRecords": {
            "debt": "$87,557"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Samuel Richardson",
        "id": 123456362
    }, {
        "contact": {
            "email": "abigail.peterson@email.com",
            "phoneNumber": "+1 856 512 1689"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 7,
                "day": 10
            },
            "sex": "female",
            "parentName": "Ethan Peterson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/81.jpg"
        },
        "financialRecords": {
            "debt": "$61,922"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "Abigail Peterson",
        "id": 123456363
    }, {
        "contact": {
            "email": "gabriel.mitchell@email.com",
            "phoneNumber": "+1 201 649 1238"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 11,
                "day": 2
            },
            "sex": "male",
            "parentName": "Elizabeth Mitchell",
            "profilePhoto": "https://randomuser.me/api/portraits/men/82.jpg"
        },
        "financialRecords": {
            "debt": "$19,935"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "architectural engineering"
        },
        "isOnline": true,
        "studentName": "Gabriel Mitchell",
        "id": 123456364
    }, {
        "contact": {
            "email": "samantha.dubois@email.com",
            "phoneNumber": "+1 609 390 149"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 9,
                "day": 14
            },
            "sex": "female",
            "parentName": "Daniel Dubois",
            "profilePhoto": "https://randomuser.me/api/portraits/women/82.jpg"
        },
        "financialRecords": {
            "debt": "$82,994"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "mechanical engineering"
        },
        "isOnline": false,
        "studentName": "Samantha Dubois",
        "id": 123456365
    }, {
        "contact": {
            "email": "austin.liu@email.com",
            "phoneNumber": "+1 201 498 2000"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 9,
                "day": 23
            },
            "sex": "male",
            "parentName": "Jessica Liu",
            "profilePhoto": "https://randomuser.me/api/portraits/men/83.jpg"
        },
        "financialRecords": {
            "debt": "$61,900"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "politcal science"
        },
        "isOnline": false,
        "studentName": "Austin Liu",
        "id": 123456366
    }, {
        "contact": {
            "email": "karen.müller@email.com",
            "phoneNumber": "+1 undefined 141 7419"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 2,
                "day": 5
            },
            "sex": "female",
            "parentName": "Samuel Müller",
            "profilePhoto": "https://randomuser.me/api/portraits/women/83.jpg"
        },
        "financialRecords": {
            "debt": "$15,736"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Karen Müller",
        "id": 123456367
    }, {
        "contact": {
            "email": "christian.wang@email.com",
            "phoneNumber": "+1 609 745 1683"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 4,
                "day": 26
            },
            "sex": "male",
            "parentName": "Jessica Wang",
            "profilePhoto": "https://randomuser.me/api/portraits/men/84.jpg"
        },
        "financialRecords": {
            "debt": "$58,311"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Christian Wang",
        "id": 123456368
    }, {
        "contact": {
            "email": "kayla.hill@email.com",
            "phoneNumber": "+1 609 899 588"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 4,
                "day": 5
            },
            "sex": "female",
            "parentName": "Joshua Hill",
            "profilePhoto": "https://randomuser.me/api/portraits/women/84.jpg"
        },
        "financialRecords": {
            "debt": "$54,746"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Kayla Hill",
        "id": 123456369
    }, {
        "contact": {
            "email": "joshua.lavigne@email.com",
            "phoneNumber": "+1 201 814 2736"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 12,
                "day": 11
            },
            "sex": "male",
            "parentName": "Amy Lavigne",
            "profilePhoto": "https://randomuser.me/api/portraits/men/85.jpg"
        },
        "financialRecords": {
            "debt": "$96,406"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "finance"
        },
        "isOnline": true,
        "studentName": "Joshua Lavigne",
        "id": 123456370
    }, {
        "contact": {
            "email": "jessica.moore@email.com",
            "phoneNumber": "+1 201 695 1082"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 5,
                "day": 17
            },
            "sex": "female",
            "parentName": "Jack Moore",
            "profilePhoto": "https://randomuser.me/api/portraits/women/85.jpg"
        },
        "financialRecords": {
            "debt": "$19,635"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Jessica Moore",
        "id": 123456371
    }, {
        "contact": {
            "email": "zachary.brown@email.com",
            "phoneNumber": "+1 732 615 2560"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 24
            },
            "sex": "male",
            "parentName": "Elizabeth Brown",
            "profilePhoto": "https://randomuser.me/api/portraits/men/86.jpg"
        },
        "financialRecords": {
            "debt": "$87,075"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Zachary Brown",
        "id": 123456372
    }, {
        "contact": {
            "email": "melissa.walker@email.com",
            "phoneNumber": "+1 609 53 1761"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 9,
                "day": 26
            },
            "sex": "female",
            "parentName": "Kyle Walker",
            "profilePhoto": "https://randomuser.me/api/portraits/women/86.jpg"
        },
        "financialRecords": {
            "debt": "$81,570"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": true,
        "studentName": "Melissa Walker",
        "id": 123456373
    }, {
        "contact": {
            "email": "jason.thompson@email.com",
            "phoneNumber": "+1 609 717 9290"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 8,
                "day": 4
            },
            "sex": "male",
            "parentName": "Kayla Thompson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/87.jpg"
        },
        "financialRecords": {
            "debt": "$81,305"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "politcal science"
        },
        "isOnline": true,
        "studentName": "Jason Thompson",
        "id": 123456374
    }, {
        "contact": {
            "email": "taylor.müller@email.com",
            "phoneNumber": "+1 732 285 9866"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 12,
                "day": 20
            },
            "sex": "female",
            "parentName": "Kyle Müller",
            "profilePhoto": "https://randomuser.me/api/portraits/women/87.jpg"
        },
        "financialRecords": {
            "debt": "$72,227"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "mechanical engineering"
        },
        "isOnline": true,
        "studentName": "Taylor Müller",
        "id": 123456375
    }, {
        "contact": {
            "email": "ryan.perez@email.com",
            "phoneNumber": "+1 732 7 7108"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 8,
                "day": 21
            },
            "sex": "male",
            "parentName": "Amanda Perez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/88.jpg"
        },
        "financialRecords": {
            "debt": "$67,980"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "finance"
        },
        "isOnline": true,
        "studentName": "Ryan Perez",
        "id": 123456376
    }, {
        "contact": {
            "email": "patricia.davis@email.com",
            "phoneNumber": "+1 201 500 6192"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 3,
                "day": 8
            },
            "sex": "female",
            "parentName": "Zachary Davis",
            "profilePhoto": "https://randomuser.me/api/portraits/women/88.jpg"
        },
        "financialRecords": {
            "debt": "$13,204"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "electrical engineering"
        },
        "isOnline": false,
        "studentName": "Patricia Davis",
        "id": 123456377
    }, {
        "contact": {
            "email": "austin.liang@email.com",
            "phoneNumber": "+1 856 533 971"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 9
            },
            "sex": "male",
            "parentName": "Karen Liang",
            "profilePhoto": "https://randomuser.me/api/portraits/men/89.jpg"
        },
        "financialRecords": {
            "debt": "$26,269"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "nursing"
        },
        "isOnline": false,
        "studentName": "Austin Liang",
        "id": 123456378
    }, {
        "contact": {
            "email": "stephanie.thompson@email.com",
            "phoneNumber": "+1 undefined 684 5703"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 11,
                "day": 2
            },
            "sex": "female",
            "parentName": "Andrew Thompson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/89.jpg"
        },
        "financialRecords": {
            "debt": "$32,319"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Stephanie Thompson",
        "id": 123456379
    }, {
        "contact": {
            "email": "gabriel.bonnet@email.com",
            "phoneNumber": "+1 609 734 841"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 10,
                "day": 3
            },
            "sex": "male",
            "parentName": "Jessica Bonnet",
            "profilePhoto": "https://randomuser.me/api/portraits/men/90.jpg"
        },
        "financialRecords": {
            "debt": "$52,908"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Gabriel Bonnet",
        "id": 123456380
    }, {
        "contact": {
            "email": "jennifer.lewis@email.com",
            "phoneNumber": "+1 undefined 417 1601"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 12,
                "day": 21
            },
            "sex": "female",
            "parentName": "Ethan Lewis",
            "profilePhoto": "https://randomuser.me/api/portraits/women/90.jpg"
        },
        "financialRecords": {
            "debt": "$35,830"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "Jennifer Lewis",
        "id": 123456381
    }, {
        "contact": {
            "email": "ryan.thompson@email.com",
            "phoneNumber": "+1 609 936 8082"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 1,
                "day": 7
            },
            "sex": "male",
            "parentName": "Lisa Thompson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/91.jpg"
        },
        "financialRecords": {
            "debt": "$68,403"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "psychology"
        },
        "isOnline": true,
        "studentName": "Ryan Thompson",
        "id": 123456382
    }, {
        "contact": {
            "email": "linda.wang@email.com",
            "phoneNumber": "+1 201 107 5762"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 5,
                "day": 14
            },
            "sex": "female",
            "parentName": "Michael Wang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/91.jpg"
        },
        "financialRecords": {
            "debt": "$42,268"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "mechanical engineering"
        },
        "isOnline": false,
        "studentName": "Linda Wang",
        "id": 123456383
    }, {
        "contact": {
            "email": "ethan.adams@email.com",
            "phoneNumber": "+1 undefined 58 9035"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 7,
                "day": 20
            },
            "sex": "male",
            "parentName": "Olivia Adams",
            "profilePhoto": "https://randomuser.me/api/portraits/men/92.jpg"
        },
        "financialRecords": {
            "debt": "$82,499"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "psychology"
        },
        "isOnline": true,
        "studentName": "Ethan Adams",
        "id": 123456384
    }, {
        "contact": {
            "email": "alexis.wang@email.com",
            "phoneNumber": "+1 201 442 9227"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 6,
                "day": 1
            },
            "sex": "female",
            "parentName": "Thomas Wang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/92.jpg"
        },
        "financialRecords": {
            "debt": "$46,486"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "nursing"
        },
        "isOnline": false,
        "studentName": "Alexis Wang",
        "id": 123456385
    }, {
        "contact": {
            "email": "thomas.robinson@email.com",
            "phoneNumber": "+1 609 10 3635"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 3,
                "day": 7
            },
            "sex": "male",
            "parentName": "Sarah Robinson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/93.jpg"
        },
        "financialRecords": {
            "debt": "$48,210"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "mechanical engineering"
        },
        "isOnline": false,
        "studentName": "Thomas Robinson",
        "id": 123456386
    }, {
        "contact": {
            "email": "lillian.liu@email.com",
            "phoneNumber": "+1 609 773 4233"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 8,
                "day": 31
            },
            "sex": "female",
            "parentName": "Brandon Liu",
            "profilePhoto": "https://randomuser.me/api/portraits/women/93.jpg"
        },
        "financialRecords": {
            "debt": "$65,105"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "politcal science"
        },
        "isOnline": false,
        "studentName": "Lillian Liu",
        "id": 123456387
    }, {
        "contact": {
            "email": "michael.wang@email.com",
            "phoneNumber": "+1 856 150 6463"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 6,
                "day": 12
            },
            "sex": "male",
            "parentName": "Abigail Wang",
            "profilePhoto": "https://randomuser.me/api/portraits/men/94.jpg"
        },
        "financialRecords": {
            "debt": "$52,859"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "politcal science"
        },
        "isOnline": false,
        "studentName": "Michael Wang",
        "id": 123456388
    }, {
        "contact": {
            "email": "olivia.edwards@email.com",
            "phoneNumber": "+1 609 387 5642"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 7,
                "day": 28
            },
            "sex": "female",
            "parentName": "David Edwards",
            "profilePhoto": "https://randomuser.me/api/portraits/women/94.jpg"
        },
        "financialRecords": {
            "debt": "$60,912"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Olivia Edwards",
        "id": 123456389
    }, {
        "contact": {
            "email": "michael.carter@email.com",
            "phoneNumber": "+1 732 476 3823"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 8,
                "day": 27
            },
            "sex": "male",
            "parentName": "Patricia Carter",
            "profilePhoto": "https://randomuser.me/api/portraits/men/95.jpg"
        },
        "financialRecords": {
            "debt": "$2,467"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "computer science"
        },
        "isOnline": true,
        "studentName": "Michael Carter",
        "id": 123456390
    }, {
        "contact": {
            "email": "megan.schulz@email.com",
            "phoneNumber": "+1 856 159 4498"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 4,
                "day": 5
            },
            "sex": "female",
            "parentName": "Daniel Schulz",
            "profilePhoto": "https://randomuser.me/api/portraits/women/95.jpg"
        },
        "financialRecords": {
            "debt": "$23,722"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Megan Schulz",
        "id": 123456391
    }, {
        "contact": {
            "email": "nathan.taylor@email.com",
            "phoneNumber": "+1 856 598 5825"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 4,
                "day": 5
            },
            "sex": "male",
            "parentName": "Angela Taylor",
            "profilePhoto": "https://randomuser.me/api/portraits/men/96.jpg"
        },
        "financialRecords": {
            "debt": "$76,986"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "nursing"
        },
        "isOnline": false,
        "studentName": "Nathan Taylor",
        "id": 123456392
    }, {
        "contact": {
            "email": "susan.lewis@email.com",
            "phoneNumber": "+1 609 899 3961"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 6,
                "day": 23
            },
            "sex": "female",
            "parentName": "Brian Lewis",
            "profilePhoto": "https://randomuser.me/api/portraits/women/96.jpg"
        },
        "financialRecords": {
            "debt": "$12,206"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "mechanical engineering"
        },
        "isOnline": false,
        "studentName": "Susan Lewis",
        "id": 123456393
    }, {
        "contact": {
            "email": "austin.wright@email.com",
            "phoneNumber": "+1 732 12 4889"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 8,
                "day": 17
            },
            "sex": "male",
            "parentName": "Elizabeth Wright",
            "profilePhoto": "https://randomuser.me/api/portraits/men/97.jpg"
        },
        "financialRecords": {
            "debt": "$34,845"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Austin Wright",
        "id": 123456394
    }, {
        "contact": {
            "email": "stephanie.anderson@email.com",
            "phoneNumber": "+1 609 649 8541"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 6,
                "day": 31
            },
            "sex": "female",
            "parentName": "Austin Anderson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/97.jpg"
        },
        "financialRecords": {
            "debt": "$83,042"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "psychology"
        },
        "isOnline": true,
        "studentName": "Stephanie Anderson",
        "id": 123456395
    }, {
        "contact": {
            "email": "william.thompson@email.com",
            "phoneNumber": "+1 undefined 959 4729"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 1,
                "day": 11
            },
            "sex": "male",
            "parentName": "Amy Thompson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/98.jpg"
        },
        "financialRecords": {
            "debt": "$29,946"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "mechanical engineering"
        },
        "isOnline": false,
        "studentName": "William Thompson",
        "id": 123456396
    }, {
        "contact": {
            "email": "alexis.campbell@email.com",
            "phoneNumber": "+1 201 288 4189"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 5,
                "day": 12
            },
            "sex": "female",
            "parentName": "Matthew Campbell",
            "profilePhoto": "https://randomuser.me/api/portraits/women/98.jpg"
        },
        "financialRecords": {
            "debt": "$63,615"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "biology"
        },
        "isOnline": true,
        "studentName": "Alexis Campbell",
        "id": 123456397
    }, {
        "contact": {
            "email": "gabriel.garnier@email.com",
            "phoneNumber": "+1 201 654 4446"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 11,
                "day": 27
            },
            "sex": "male",
            "parentName": "Emily Garnier",
            "profilePhoto": "https://randomuser.me/api/portraits/men/99.jpg"
        },
        "financialRecords": {
            "debt": "$32,366"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "finance"
        },
        "isOnline": true,
        "studentName": "Gabriel Garnier",
        "id": 123456398
    }, {
        "contact": {
            "email": "jennifer.nelson@email.com",
            "phoneNumber": "+1 856 621 4995"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 24
            },
            "sex": "female",
            "parentName": "James Nelson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/99.jpg"
        },
        "financialRecords": {
            "debt": "$49,454"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Jennifer Nelson",
        "id": 123456399
    }, {
        "contact": {
            "email": "michael.howard@email.com",
            "phoneNumber": "+1 609 176 4961"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 3,
                "day": 30
            },
            "sex": "male",
            "parentName": "Angela Howard",
            "profilePhoto": "https://randomuser.me/api/portraits/men/0.jpg"
        },
        "financialRecords": {
            "debt": "$93,898"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "Michael Howard",
        "id": 123456400
    }, {
        "contact": {
            "email": "sarah.nguyen@email.com",
            "phoneNumber": "+1 856 662 3707"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 4,
                "day": 19
            },
            "sex": "female",
            "parentName": "Thomas Nguyen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/0.jpg"
        },
        "financialRecords": {
            "debt": "$94,087"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "Sarah Nguyen",
        "id": 123456401
    }, {
        "contact": {
            "email": "william.ali@email.com",
            "phoneNumber": "+1 732 943 4590"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 7,
                "day": 12
            },
            "sex": "male",
            "parentName": "Sophia Ali",
            "profilePhoto": "https://randomuser.me/api/portraits/men/1.jpg"
        },
        "financialRecords": {
            "debt": "$36,161"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "communications"
        },
        "isOnline": true,
        "studentName": "William Ali",
        "id": 123456402
    }, {
        "contact": {
            "email": "kayla.gonzalez@email.com",
            "phoneNumber": "+1 201 160 7421"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 1,
                "day": 21
            },
            "sex": "female",
            "parentName": "Christian Gonzalez",
            "profilePhoto": "https://randomuser.me/api/portraits/women/1.jpg"
        },
        "financialRecords": {
            "debt": "$10,157"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "Kayla Gonzalez",
        "id": 123456403
    }, {
        "contact": {
            "email": "andrew.chen@email.com",
            "phoneNumber": "+1 609 202 8375"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 4,
                "day": 4
            },
            "sex": "male",
            "parentName": "Madison Chen",
            "profilePhoto": "https://randomuser.me/api/portraits/men/2.jpg"
        },
        "financialRecords": {
            "debt": "$46,695"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Andrew Chen",
        "id": 123456404
    }, {
        "contact": {
            "email": "mary.davis@email.com",
            "phoneNumber": "+1 609 806 41"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 8,
                "day": 9
            },
            "sex": "female",
            "parentName": "Anthony Davis",
            "profilePhoto": "https://randomuser.me/api/portraits/women/2.jpg"
        },
        "financialRecords": {
            "debt": "$10,133"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Mary Davis",
        "id": 123456405
    }, {
        "contact": {
            "email": "joshua.chen@email.com",
            "phoneNumber": "+1 908 582 4186"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 1,
                "day": 19
            },
            "sex": "male",
            "parentName": "Amy Chen",
            "profilePhoto": "https://randomuser.me/api/portraits/men/3.jpg"
        },
        "financialRecords": {
            "debt": "$24,213"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Joshua Chen",
        "id": 123456406
    }, {
        "contact": {
            "email": "ashley.williams@email.com",
            "phoneNumber": "+1 908 869 6028"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 7,
                "day": 10
            },
            "sex": "female",
            "parentName": "Michael Williams",
            "profilePhoto": "https://randomuser.me/api/portraits/women/3.jpg"
        },
        "financialRecords": {
            "debt": "$89,162"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "Ashley Williams",
        "id": 123456407
    }, {
        "contact": {
            "email": "thomas.li@email.com",
            "phoneNumber": "+1 856 984 8882"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 4,
                "day": 5
            },
            "sex": "male",
            "parentName": "Taylor Li",
            "profilePhoto": "https://randomuser.me/api/portraits/men/4.jpg"
        },
        "financialRecords": {
            "debt": "$13,988"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "electrical engineering"
        },
        "isOnline": true,
        "studentName": "Thomas Li",
        "id": 123456408
    }, {
        "contact": {
            "email": "angela.allen@email.com",
            "phoneNumber": "+1 856 301 4715"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 10,
                "day": 12
            },
            "sex": "female",
            "parentName": "Matthew Allen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/4.jpg"
        },
        "financialRecords": {
            "debt": "$64,307"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Angela Allen",
        "id": 123456409
    }, {
        "contact": {
            "email": "william.martinez@email.com",
            "phoneNumber": "+1 908 716 1224"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 3,
                "day": 10
            },
            "sex": "male",
            "parentName": "Amy Martinez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/5.jpg"
        },
        "financialRecords": {
            "debt": "$70,637"
        },
        "academicRecords": {
            "class": "VII C"
        },
        "isOnline": true,
        "studentName": "William Martinez",
        "id": 123456410
    }, {
        "contact": {
            "email": "olivia.ali@email.com",
            "phoneNumber": "+1 856 343 3493"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 9,
                "day": 29
            },
            "sex": "female",
            "parentName": "Christopher Ali",
            "profilePhoto": "https://randomuser.me/api/portraits/women/5.jpg"
        },
        "financialRecords": {
            "debt": "$81,784"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "computer science"
        },
        "isOnline": true,
        "studentName": "Olivia Ali",
        "id": 123456411
    }, {
        "contact": {
            "email": "ryan.dupont@email.com",
            "phoneNumber": "+1 732 949 5069"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 6,
                "day": 11
            },
            "sex": "male",
            "parentName": "Jessica Dupont",
            "profilePhoto": "https://randomuser.me/api/portraits/men/6.jpg"
        },
        "financialRecords": {
            "debt": "$90,175"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Ryan Dupont",
        "id": 123456412
    }, {
        "contact": {
            "email": "isabella.howard@email.com",
            "phoneNumber": "+1 609 796 4825"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 8,
                "day": 1
            },
            "sex": "female",
            "parentName": "Kyle Howard",
            "profilePhoto": "https://randomuser.me/api/portraits/women/6.jpg"
        },
        "financialRecords": {
            "debt": "$4,710"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Isabella Howard",
        "id": 123456413
    }, {
        "contact": {
            "email": "gabriel.lee@email.com",
            "phoneNumber": "+1 856 661 5958"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 4,
                "day": 29
            },
            "sex": "male",
            "parentName": "Samantha Lee",
            "profilePhoto": "https://randomuser.me/api/portraits/men/7.jpg"
        },
        "financialRecords": {
            "debt": "$65,275"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Gabriel Lee",
        "id": 123456414
    }, {
        "contact": {
            "email": "lillian.wang@email.com",
            "phoneNumber": "+1 908 357 1978"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 3,
                "day": 6
            },
            "sex": "female",
            "parentName": "Matthew Wang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/7.jpg"
        },
        "financialRecords": {
            "debt": "$18,148"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "nursing"
        },
        "isOnline": false,
        "studentName": "Lillian Wang",
        "id": 123456415
    }, {
        "contact": {
            "email": "tyler.thompson@email.com",
            "phoneNumber": "+1 201 593 6954"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 1,
                "day": 19
            },
            "sex": "male",
            "parentName": "Abigail Thompson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/8.jpg"
        },
        "financialRecords": {
            "debt": "$46,877"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "Tyler Thompson",
        "id": 123456416
    }, {
        "contact": {
            "email": "isabella.lewis@email.com",
            "phoneNumber": "+1 908 973 3406"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 6,
                "day": 25
            },
            "sex": "female",
            "parentName": "Mark Lewis",
            "profilePhoto": "https://randomuser.me/api/portraits/women/8.jpg"
        },
        "financialRecords": {
            "debt": "$66,000"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "computer science"
        },
        "isOnline": true,
        "studentName": "Isabella Lewis",
        "id": 123456417
    }, {
        "contact": {
            "email": "justin.wright@email.com",
            "phoneNumber": "+1 908 742 4774"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 12,
                "day": 7
            },
            "sex": "male",
            "parentName": "Samantha Wright",
            "profilePhoto": "https://randomuser.me/api/portraits/men/9.jpg"
        },
        "financialRecords": {
            "debt": "$57,966"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Justin Wright",
        "id": 123456418
    }, {
        "contact": {
            "email": "elizabeth.gonzalez@email.com",
            "phoneNumber": "+1 609 366 6152"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 2,
                "day": 5
            },
            "sex": "female",
            "parentName": "Tyler Gonzalez",
            "profilePhoto": "https://randomuser.me/api/portraits/women/9.jpg"
        },
        "financialRecords": {
            "debt": "$40,770"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "communications"
        },
        "isOnline": true,
        "studentName": "Elizabeth Gonzalez",
        "id": 123456419
    }, {
        "contact": {
            "email": "david.green@email.com",
            "phoneNumber": "+1 732 518 237"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 7,
                "day": 1
            },
            "sex": "male",
            "parentName": "Jessica Green",
            "profilePhoto": "https://randomuser.me/api/portraits/men/10.jpg"
        },
        "financialRecords": {
            "debt": "$54,904"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "David Green",
        "id": 123456420
    }, {
        "contact": {
            "email": "kimberly.edwards@email.com",
            "phoneNumber": "+1 undefined 359 4081"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 12,
                "day": 10
            },
            "sex": "female",
            "parentName": "Joseph Edwards",
            "profilePhoto": "https://randomuser.me/api/portraits/women/10.jpg"
        },
        "financialRecords": {
            "debt": "$8,103"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "biology"
        },
        "isOnline": true,
        "studentName": "Kimberly Edwards",
        "id": 123456421
    }, {
        "contact": {
            "email": "nathan.dupont@email.com",
            "phoneNumber": "+1 908 819 9361"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 5,
                "day": 11
            },
            "sex": "male",
            "parentName": "Sarah Dupont",
            "profilePhoto": "https://randomuser.me/api/portraits/men/11.jpg"
        },
        "financialRecords": {
            "debt": "$24,068"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "electrical engineering"
        },
        "isOnline": false,
        "studentName": "Nathan Dupont",
        "id": 123456422
    }, {
        "contact": {
            "email": "emma.schmidt@email.com",
            "phoneNumber": "+1 undefined 357 6672"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 8,
                "day": 17
            },
            "sex": "female",
            "parentName": "David Schmidt",
            "profilePhoto": "https://randomuser.me/api/portraits/women/11.jpg"
        },
        "financialRecords": {
            "debt": "$75,460"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "politcal science"
        },
        "isOnline": true,
        "studentName": "Emma Schmidt",
        "id": 123456423
    }, {
        "contact": {
            "email": "jacob.mitchell@email.com",
            "phoneNumber": "+1 732 615 8322"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 2,
                "day": 8
            },
            "sex": "male",
            "parentName": "Angela Mitchell",
            "profilePhoto": "https://randomuser.me/api/portraits/men/12.jpg"
        },
        "financialRecords": {
            "debt": "$98,873"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": true,
        "studentName": "Jacob Mitchell",
        "id": 123456424
    }, {
        "contact": {
            "email": "emma.bonnet@email.com",
            "phoneNumber": "+1 609 33 7652"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 1,
                "day": 19
            },
            "sex": "female",
            "parentName": "David Bonnet",
            "profilePhoto": "https://randomuser.me/api/portraits/women/12.jpg"
        },
        "financialRecords": {
            "debt": "$93,678"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Emma Bonnet",
        "id": 123456425
    }, {
        "contact": {
            "email": "ryan.müller@email.com",
            "phoneNumber": "+1 856 300 5864"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 3,
                "day": 19
            },
            "sex": "male",
            "parentName": "Michelle Müller",
            "profilePhoto": "https://randomuser.me/api/portraits/men/13.jpg"
        },
        "financialRecords": {
            "debt": "$62,216"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Ryan Müller",
        "id": 123456426
    }, {
        "contact": {
            "email": "kayla.dubois@email.com",
            "phoneNumber": "+1 856 234 5929"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 1,
                "day": 22
            },
            "sex": "female",
            "parentName": "William Dubois",
            "profilePhoto": "https://randomuser.me/api/portraits/women/13.jpg"
        },
        "financialRecords": {
            "debt": "$72,776"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Kayla Dubois",
        "id": 123456427
    }, {
        "contact": {
            "email": "kyle.williams@email.com",
            "phoneNumber": "+1 856 986 7834"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 8,
                "day": 21
            },
            "sex": "male",
            "parentName": "Ashley Williams",
            "profilePhoto": "https://randomuser.me/api/portraits/men/14.jpg"
        },
        "financialRecords": {
            "debt": "$90,325"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "nursing"
        },
        "isOnline": true,
        "studentName": "Kyle Williams",
        "id": 123456428
    }, {
        "contact": {
            "email": "patricia.jones@email.com",
            "phoneNumber": "+1 undefined 21 4737"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 3,
                "day": 23
            },
            "sex": "female",
            "parentName": "Joseph Jones",
            "profilePhoto": "https://randomuser.me/api/portraits/women/14.jpg"
        },
        "financialRecords": {
            "debt": "$76,420"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Patricia Jones",
        "id": 123456429
    }, {
        "contact": {
            "email": "daniel.edwards@email.com",
            "phoneNumber": "+1 856 882 9160"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 8,
                "day": 13
            },
            "sex": "male",
            "parentName": "Karen Edwards",
            "profilePhoto": "https://randomuser.me/api/portraits/men/15.jpg"
        },
        "financialRecords": {
            "debt": "$92,669"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "computer science"
        },
        "isOnline": true,
        "studentName": "Daniel Edwards",
        "id": 123456430
    }, {
        "contact": {
            "email": "linda.zimmerman@email.com",
            "phoneNumber": "+1 856 243 6823"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 9,
                "day": 4
            },
            "sex": "female",
            "parentName": "Zachary Zimmerman",
            "profilePhoto": "https://randomuser.me/api/portraits/women/15.jpg"
        },
        "financialRecords": {
            "debt": "$65,255"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Linda Zimmerman",
        "id": 123456431
    }, {
        "contact": {
            "email": "william.zhang@email.com",
            "phoneNumber": "+1 732 353 4670"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 6,
                "day": 3
            },
            "sex": "male",
            "parentName": "Karen Zhang",
            "profilePhoto": "https://randomuser.me/api/portraits/men/16.jpg"
        },
        "financialRecords": {
            "debt": "$33,014"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "nursing"
        },
        "isOnline": true,
        "studentName": "William Zhang",
        "id": 123456432
    }, {
        "contact": {
            "email": "amy.li@email.com",
            "phoneNumber": "+1 201 973 7532"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 6,
                "day": 6
            },
            "sex": "female",
            "parentName": "Matthew Li",
            "profilePhoto": "https://randomuser.me/api/portraits/women/16.jpg"
        },
        "financialRecords": {
            "debt": "$46,789"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "business"
        },
        "isOnline": false,
        "studentName": "Amy Li",
        "id": 123456433
    }, {
        "contact": {
            "email": "thomas.li@email.com",
            "phoneNumber": "+1 856 642 4339"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 5,
                "day": 13
            },
            "sex": "male",
            "parentName": "Abigail Li",
            "profilePhoto": "https://randomuser.me/api/portraits/men/17.jpg"
        },
        "financialRecords": {
            "debt": "$77,784"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "politcal science"
        },
        "isOnline": true,
        "studentName": "Thomas Li",
        "id": 123456434
    }, {
        "contact": {
            "email": "heather.ali@email.com",
            "phoneNumber": "+1 201 488 8612"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 1,
                "day": 9
            },
            "sex": "female",
            "parentName": "Joshua Ali",
            "profilePhoto": "https://randomuser.me/api/portraits/women/17.jpg"
        },
        "financialRecords": {
            "debt": "$69,976"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "architectural engineering"
        },
        "isOnline": true,
        "studentName": "Heather Ali",
        "id": 123456435
    }, {
        "contact": {
            "email": "zachary.green@email.com",
            "phoneNumber": "+1 609 308 1750"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 10,
                "day": 26
            },
            "sex": "male",
            "parentName": "Jessica Green",
            "profilePhoto": "https://randomuser.me/api/portraits/men/18.jpg"
        },
        "financialRecords": {
            "debt": "$72,535"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Zachary Green",
        "id": 123456436
    }, {
        "contact": {
            "email": "emily.baker@email.com",
            "phoneNumber": "+1 732 370 9506"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 1,
                "day": 9
            },
            "sex": "female",
            "parentName": "Joshua Baker",
            "profilePhoto": "https://randomuser.me/api/portraits/women/18.jpg"
        },
        "financialRecords": {
            "debt": "$74,249"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "finance"
        },
        "isOnline": true,
        "studentName": "Emily Baker",
        "id": 123456437
    }, {
        "contact": {
            "email": "alexander.ali@email.com",
            "phoneNumber": "+1 856 985 192"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 9,
                "day": 15
            },
            "sex": "male",
            "parentName": "Sarah Ali",
            "profilePhoto": "https://randomuser.me/api/portraits/men/19.jpg"
        },
        "financialRecords": {
            "debt": "$86,767"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "Alexander Ali",
        "id": 123456438
    }, {
        "contact": {
            "email": "kimberly.robinson@email.com",
            "phoneNumber": "+1 856 47 4478"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 1,
                "day": 31
            },
            "sex": "female",
            "parentName": "Ryan Robinson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/19.jpg"
        },
        "financialRecords": {
            "debt": "$52,695"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "Kimberly Robinson",
        "id": 123456439
    }, {
        "contact": {
            "email": "kevin.davis@email.com",
            "phoneNumber": "+1 609 573 8247"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 8,
                "day": 2
            },
            "sex": "male",
            "parentName": "Kayla Davis",
            "profilePhoto": "https://randomuser.me/api/portraits/men/20.jpg"
        },
        "financialRecords": {
            "debt": "$47,154"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "politcal science"
        },
        "isOnline": false,
        "studentName": "Kevin Davis",
        "id": 123456440
    }, {
        "contact": {
            "email": "megan.perez@email.com",
            "phoneNumber": "+1 undefined 142 4905"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 5,
                "day": 27
            },
            "sex": "female",
            "parentName": "Nicholas Perez",
            "profilePhoto": "https://randomuser.me/api/portraits/women/20.jpg"
        },
        "financialRecords": {
            "debt": "$26,006"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Megan Perez",
        "id": 123456441
    }, {
        "contact": {
            "email": "gabriel.davis@email.com",
            "phoneNumber": "+1 856 370 2803"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 4,
                "day": 14
            },
            "sex": "male",
            "parentName": "Jennifer Davis",
            "profilePhoto": "https://randomuser.me/api/portraits/men/21.jpg"
        },
        "financialRecords": {
            "debt": "$36,797"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Gabriel Davis",
        "id": 123456442
    }, {
        "contact": {
            "email": "abigail.harris@email.com",
            "phoneNumber": "+1 856 934 4628"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 2,
                "day": 23
            },
            "sex": "female",
            "parentName": "Jacob Harris",
            "profilePhoto": "https://randomuser.me/api/portraits/women/21.jpg"
        },
        "financialRecords": {
            "debt": "$48,446"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "biology"
        },
        "isOnline": true,
        "studentName": "Abigail Harris",
        "id": 123456443
    }, {
        "contact": {
            "email": "kevin.wang@email.com",
            "phoneNumber": "+1 908 884 402"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 10,
                "day": 7
            },
            "sex": "male",
            "parentName": "Ashley Wang",
            "profilePhoto": "https://randomuser.me/api/portraits/men/22.jpg"
        },
        "financialRecords": {
            "debt": "$5,838"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "Kevin Wang",
        "id": 123456444
    }, {
        "contact": {
            "email": "taylor.flores@email.com",
            "phoneNumber": "+1 201 518 8788"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 9,
                "day": 30
            },
            "sex": "female",
            "parentName": "Samuel Flores",
            "profilePhoto": "https://randomuser.me/api/portraits/women/22.jpg"
        },
        "financialRecords": {
            "debt": "$46,286"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "psychology"
        },
        "isOnline": true,
        "studentName": "Taylor Flores",
        "id": 123456445
    }, {
        "contact": {
            "email": "jason.taylor@email.com",
            "phoneNumber": "+1 201 239 3418"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 6,
                "day": 4
            },
            "sex": "male",
            "parentName": "Michelle Taylor",
            "profilePhoto": "https://randomuser.me/api/portraits/men/23.jpg"
        },
        "financialRecords": {
            "debt": "$8,388"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Jason Taylor",
        "id": 123456446
    }, {
        "contact": {
            "email": "samantha.walker@email.com",
            "phoneNumber": "+1 201 79 2533"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 1,
                "day": 28
            },
            "sex": "female",
            "parentName": "Jonathan Walker",
            "profilePhoto": "https://randomuser.me/api/portraits/women/23.jpg"
        },
        "financialRecords": {
            "debt": "$41,845"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "mechanical engineering"
        },
        "isOnline": true,
        "studentName": "Samantha Walker",
        "id": 123456447
    }, {
        "contact": {
            "email": "thomas.lee@email.com",
            "phoneNumber": "+1 609 737 7210"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 3,
                "day": 21
            },
            "sex": "male",
            "parentName": "Angela Lee",
            "profilePhoto": "https://randomuser.me/api/portraits/men/24.jpg"
        },
        "financialRecords": {
            "debt": "$42,052"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Thomas Lee",
        "id": 123456448
    }, {
        "contact": {
            "email": "nicole.nguyen@email.com",
            "phoneNumber": "+1 undefined 730 4325"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 1,
                "day": 3
            },
            "sex": "female",
            "parentName": "Jacob Nguyen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/24.jpg"
        },
        "financialRecords": {
            "debt": "$48,514"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "Nicole Nguyen",
        "id": 123456449
    }, {
        "contact": {
            "email": "anthony.carter@email.com",
            "phoneNumber": "+1 201 62 5635"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 3,
                "day": 10
            },
            "sex": "male",
            "parentName": "Hannah Carter",
            "profilePhoto": "https://randomuser.me/api/portraits/men/25.jpg"
        },
        "financialRecords": {
            "debt": "$23,278"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "architectural engineering"
        },
        "isOnline": false,
        "studentName": "Anthony Carter",
        "id": 123456450
    }, {
        "contact": {
            "email": "jennifer.campbell@email.com",
            "phoneNumber": "+1 732 81 7026"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 8,
                "day": 3
            },
            "sex": "female",
            "parentName": "Anthony Campbell",
            "profilePhoto": "https://randomuser.me/api/portraits/women/25.jpg"
        },
        "financialRecords": {
            "debt": "$96,139"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Jennifer Campbell",
        "id": 123456451
    }, {
        "contact": {
            "email": "nicholas.liang@email.com",
            "phoneNumber": "+1 908 452 3363"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 8,
                "day": 23
            },
            "sex": "male",
            "parentName": "Samantha Liang",
            "profilePhoto": "https://randomuser.me/api/portraits/men/26.jpg"
        },
        "financialRecords": {
            "debt": "$61,337"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Nicholas Liang",
        "id": 123456452
    }, {
        "contact": {
            "email": "brittany.edwards@email.com",
            "phoneNumber": "+1 732 754 4342"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 6,
                "day": 4
            },
            "sex": "female",
            "parentName": "Nicholas Edwards",
            "profilePhoto": "https://randomuser.me/api/portraits/women/26.jpg"
        },
        "financialRecords": {
            "debt": "$66,554"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "nursing"
        },
        "isOnline": true,
        "studentName": "Brittany Edwards",
        "id": 123456453
    }, {
        "contact": {
            "email": "mark.hall@email.com",
            "phoneNumber": "+1 908 816 3664"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 4,
                "day": 16
            },
            "sex": "male",
            "parentName": "Kayla Hall",
            "profilePhoto": "https://randomuser.me/api/portraits/men/27.jpg"
        },
        "financialRecords": {
            "debt": "$32,525"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "Mark Hall",
        "id": 123456454
    }, {
        "contact": {
            "email": "linda.zimmerman@email.com",
            "phoneNumber": "+1 609 163 1550"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 5
            },
            "sex": "female",
            "parentName": "Christopher Zimmerman",
            "profilePhoto": "https://randomuser.me/api/portraits/women/27.jpg"
        },
        "financialRecords": {
            "debt": "$88,809"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "Linda Zimmerman",
        "id": 123456455
    }, {
        "contact": {
            "email": "john.jones@email.com",
            "phoneNumber": "+1 732 426 3971"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 5,
                "day": 2
            },
            "sex": "male",
            "parentName": "Kimberly Jones",
            "profilePhoto": "https://randomuser.me/api/portraits/men/28.jpg"
        },
        "financialRecords": {
            "debt": "$64,053"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "John Jones",
        "id": 123456456
    }, {
        "contact": {
            "email": "mary.perez@email.com",
            "phoneNumber": "+1 732 63 4198"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 2,
                "day": 1
            },
            "sex": "female",
            "parentName": "Justin Perez",
            "profilePhoto": "https://randomuser.me/api/portraits/women/28.jpg"
        },
        "financialRecords": {
            "debt": "$91,664"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Mary Perez",
        "id": 123456457
    }, {
        "contact": {
            "email": "william.liu@email.com",
            "phoneNumber": "+1 201 472 1882"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 10,
                "day": 2
            },
            "sex": "male",
            "parentName": "Jennifer Liu",
            "profilePhoto": "https://randomuser.me/api/portraits/men/29.jpg"
        },
        "financialRecords": {
            "debt": "$91,827"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "William Liu",
        "id": 123456458
    }, {
        "contact": {
            "email": "kayla.lewis@email.com",
            "phoneNumber": "+1 732 730 6484"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 7,
                "day": 15
            },
            "sex": "female",
            "parentName": "Joseph Lewis",
            "profilePhoto": "https://randomuser.me/api/portraits/women/29.jpg"
        },
        "financialRecords": {
            "debt": "$29,766"
        },
        "academicRecords": {
            "class": "VII A"
        },
        "isOnline": false,
        "studentName": "Kayla Lewis",
        "id": 123456459
    }, {
        "contact": {
            "email": "tyler.schmidt@email.com",
            "phoneNumber": "+1 856 641 492"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 4,
                "day": 29
            },
            "sex": "male",
            "parentName": "Hannah Schmidt",
            "profilePhoto": "https://randomuser.me/api/portraits/men/30.jpg"
        },
        "financialRecords": {
            "debt": "$3,675"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "biology"
        },
        "isOnline": true,
        "studentName": "Tyler Schmidt",
        "id": 123456460
    }, {
        "contact": {
            "email": "megan.jones@email.com",
            "phoneNumber": "+1 undefined 98 1408"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 2,
                "day": 24
            },
            "sex": "female",
            "parentName": "Kevin Jones",
            "profilePhoto": "https://randomuser.me/api/portraits/women/30.jpg"
        },
        "financialRecords": {
            "debt": "$92,690"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "architectural engineering"
        },
        "isOnline": true,
        "studentName": "Megan Jones",
        "id": 123456461
    }, {
        "contact": {
            "email": "jack.dubois@email.com",
            "phoneNumber": "+1 201 852 54"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 9,
                "day": 17
            },
            "sex": "male",
            "parentName": "Jennifer Dubois",
            "profilePhoto": "https://randomuser.me/api/portraits/men/31.jpg"
        },
        "financialRecords": {
            "debt": "$39,824"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "architectural engineering"
        },
        "isOnline": true,
        "studentName": "Jack Dubois",
        "id": 123456462
    }, {
        "contact": {
            "email": "olivia.garnier@email.com",
            "phoneNumber": "+1 856 625 9357"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 4,
                "day": 19
            },
            "sex": "female",
            "parentName": "Brian Garnier",
            "profilePhoto": "https://randomuser.me/api/portraits/women/31.jpg"
        },
        "financialRecords": {
            "debt": "$49,121"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "Olivia Garnier",
        "id": 123456463
    }, {
        "contact": {
            "email": "michael.williams@email.com",
            "phoneNumber": "+1 609 736 1565"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 4,
                "day": 6
            },
            "sex": "male",
            "parentName": "Brittany Williams",
            "profilePhoto": "https://randomuser.me/api/portraits/men/32.jpg"
        },
        "financialRecords": {
            "debt": "$37,001"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Michael Williams",
        "id": 123456464
    }, {
        "contact": {
            "email": "mary.wilson@email.com",
            "phoneNumber": "+1 856 661 9005"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 4,
                "day": 10
            },
            "sex": "female",
            "parentName": "Mark Wilson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/32.jpg"
        },
        "financialRecords": {
            "debt": "$54,087"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "Mary Wilson",
        "id": 123456465
    }, {
        "contact": {
            "email": "jack.moore@email.com",
            "phoneNumber": "+1 201 827 6522"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 9,
                "day": 12
            },
            "sex": "male",
            "parentName": "Hannah Moore",
            "profilePhoto": "https://randomuser.me/api/portraits/men/33.jpg"
        },
        "financialRecords": {
            "debt": "$71,617"
        },
        "academicRecords": {
            "class": "VII B"
        },
        "isOnline": true,
        "studentName": "Jack Moore",
        "id": 123456466
    }, {
        "contact": {
            "email": "melissa.moore@email.com",
            "phoneNumber": "+1 856 280 104"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 9,
                "day": 7
            },
            "sex": "female",
            "parentName": "Ryan Moore",
            "profilePhoto": "https://randomuser.me/api/portraits/women/33.jpg"
        },
        "financialRecords": {
            "debt": "$51,277"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "politcal science"
        },
        "isOnline": false,
        "studentName": "Melissa Moore",
        "id": 123456467
    }, {
        "contact": {
            "email": "nicholas.toussaint@email.com",
            "phoneNumber": "+1 609 62 9149"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 6,
                "day": 26
            },
            "sex": "male",
            "parentName": "Melissa Toussaint",
            "profilePhoto": "https://randomuser.me/api/portraits/men/34.jpg"
        },
        "financialRecords": {
            "debt": "$88,638"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "Nicholas Toussaint",
        "id": 123456468
    }, {
        "contact": {
            "email": "amanda.gonzalez@email.com",
            "phoneNumber": "+1 609 232 633"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 11
            },
            "sex": "female",
            "parentName": "Michael Gonzalez",
            "profilePhoto": "https://randomuser.me/api/portraits/women/34.jpg"
        },
        "financialRecords": {
            "debt": "$32,692"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Amanda Gonzalez",
        "id": 123456469
    }, {
        "contact": {
            "email": "joseph.schulz@email.com",
            "phoneNumber": "+1 201 548 201"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 9,
                "day": 16
            },
            "sex": "male",
            "parentName": "Jennifer Schulz",
            "profilePhoto": "https://randomuser.me/api/portraits/men/35.jpg"
        },
        "financialRecords": {
            "debt": "$98,279"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "nursing"
        },
        "isOnline": false,
        "studentName": "Joseph Schulz",
        "id": 123456470
    }, {
        "contact": {
            "email": "taylor.zhang@email.com",
            "phoneNumber": "+1 201 66 7191"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 6,
                "day": 4
            },
            "sex": "female",
            "parentName": "Nathan Zhang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/35.jpg"
        },
        "financialRecords": {
            "debt": "$34,501"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Taylor Zhang",
        "id": 123456471
    }, {
        "contact": {
            "email": "nicholas.howard@email.com",
            "phoneNumber": "+1 856 409 7971"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 6,
                "day": 24
            },
            "sex": "male",
            "parentName": "Jennifer Howard",
            "profilePhoto": "https://randomuser.me/api/portraits/men/36.jpg"
        },
        "financialRecords": {
            "debt": "$35,725"
        },
        "academicRecords": {
            "class": "VII B"
        },
        "isOnline": false,
        "studentName": "Nicholas Howard",
        "id": 123456472
    }, {
        "contact": {
            "email": "abigail.moore@email.com",
            "phoneNumber": "+1 609 14 6575"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 3,
                "day": 2
            },
            "sex": "female",
            "parentName": "Joshua Moore",
            "profilePhoto": "https://randomuser.me/api/portraits/women/36.jpg"
        },
        "financialRecords": {
            "debt": "$4,913"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Abigail Moore",
        "id": 123456473
    }, {
        "contact": {
            "email": "robert.wright@email.com",
            "phoneNumber": "+1 908 102 659"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 5
            },
            "sex": "male",
            "parentName": "Heather Wright",
            "profilePhoto": "https://randomuser.me/api/portraits/men/37.jpg"
        },
        "financialRecords": {
            "debt": "$5,243"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Robert Wright",
        "id": 123456474
    }, {
        "contact": {
            "email": "karen.allen@email.com",
            "phoneNumber": "+1 732 726 3888"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 9,
                "day": 25
            },
            "sex": "female",
            "parentName": "Nathan Allen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/37.jpg"
        },
        "financialRecords": {
            "debt": "$15,959"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Karen Allen",
        "id": 123456475
    }, {
        "contact": {
            "email": "alexander.mitchell@email.com",
            "phoneNumber": "+1 201 80 8621"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 2,
                "day": 10
            },
            "sex": "male",
            "parentName": "Alexis Mitchell",
            "profilePhoto": "https://randomuser.me/api/portraits/men/38.jpg"
        },
        "financialRecords": {
            "debt": "$18,698"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "Alexander Mitchell",
        "id": 123456476
    }, {
        "contact": {
            "email": "melissa.carter@email.com",
            "phoneNumber": "+1 908 700 8917"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 6,
                "day": 17
            },
            "sex": "female",
            "parentName": "James Carter",
            "profilePhoto": "https://randomuser.me/api/portraits/women/38.jpg"
        },
        "financialRecords": {
            "debt": "$42,090"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "business"
        },
        "isOnline": false,
        "studentName": "Melissa Carter",
        "id": 123456477
    }, {
        "contact": {
            "email": "michael.wang@email.com",
            "phoneNumber": "+1 856 275 2986"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 5,
                "day": 21
            },
            "sex": "male",
            "parentName": "Michelle Wang",
            "profilePhoto": "https://randomuser.me/api/portraits/men/39.jpg"
        },
        "financialRecords": {
            "debt": "$29,164"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "electrical engineering"
        },
        "isOnline": true,
        "studentName": "Michael Wang",
        "id": 123456478
    }, {
        "contact": {
            "email": "alexis.wright@email.com",
            "phoneNumber": "+1 609 639 4121"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 1
            },
            "sex": "female",
            "parentName": "James Wright",
            "profilePhoto": "https://randomuser.me/api/portraits/women/39.jpg"
        },
        "financialRecords": {
            "debt": "$42,674"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "architectural engineering"
        },
        "isOnline": true,
        "studentName": "Alexis Wright",
        "id": 123456479
    }, {
        "contact": {
            "email": "nicholas.bonnet@email.com",
            "phoneNumber": "+1 undefined 168 1578"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 8,
                "day": 6
            },
            "sex": "male",
            "parentName": "Susan Bonnet",
            "profilePhoto": "https://randomuser.me/api/portraits/men/40.jpg"
        },
        "financialRecords": {
            "debt": "$60,909"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "finance"
        },
        "isOnline": true,
        "studentName": "Nicholas Bonnet",
        "id": 123456480
    }, {
        "contact": {
            "email": "jennifer.lewis@email.com",
            "phoneNumber": "+1 908 609 9301"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 11,
                "day": 25
            },
            "sex": "female",
            "parentName": "Zachary Lewis",
            "profilePhoto": "https://randomuser.me/api/portraits/women/40.jpg"
        },
        "financialRecords": {
            "debt": "$81,071"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "mechanical engineering"
        },
        "isOnline": false,
        "studentName": "Jennifer Lewis",
        "id": 123456481
    }, {
        "contact": {
            "email": "robert.flores@email.com",
            "phoneNumber": "+1 609 157 9277"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 2,
                "day": 10
            },
            "sex": "male",
            "parentName": "Amy Flores",
            "profilePhoto": "https://randomuser.me/api/portraits/men/41.jpg"
        },
        "financialRecords": {
            "debt": "$61,404"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "business"
        },
        "isOnline": false,
        "studentName": "Robert Flores",
        "id": 123456482
    }, {
        "contact": {
            "email": "jennifer.wilson@email.com",
            "phoneNumber": "+1 856 636 8637"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 12,
                "day": 25
            },
            "sex": "female",
            "parentName": "Brandon Wilson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/41.jpg"
        },
        "financialRecords": {
            "debt": "$37,006"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Jennifer Wilson",
        "id": 123456483
    }, {
        "contact": {
            "email": "jack.miller@email.com",
            "phoneNumber": "+1 732 462 7291"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 9,
                "day": 12
            },
            "sex": "male",
            "parentName": "Kimberly Miller",
            "profilePhoto": "https://randomuser.me/api/portraits/men/42.jpg"
        },
        "financialRecords": {
            "debt": "$4,319"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": true,
        "studentName": "Jack Miller",
        "id": 123456484
    }, {
        "contact": {
            "email": "emma.allen@email.com",
            "phoneNumber": "+1 undefined 353 2691"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 7,
                "day": 24
            },
            "sex": "female",
            "parentName": "Jonathan Allen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/42.jpg"
        },
        "financialRecords": {
            "debt": "$305"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Emma Allen",
        "id": 123456485
    }, {
        "contact": {
            "email": "nathan.martinez@email.com",
            "phoneNumber": "+1 609 354 2532"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 4,
                "day": 5
            },
            "sex": "male",
            "parentName": "Susan Martinez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/43.jpg"
        },
        "financialRecords": {
            "debt": "$64,594"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "architectural engineering"
        },
        "isOnline": false,
        "studentName": "Nathan Martinez",
        "id": 123456486
    }, {
        "contact": {
            "email": "samantha.lewis@email.com",
            "phoneNumber": "+1 609 826 8751"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 6,
                "day": 29
            },
            "sex": "female",
            "parentName": "Jonathan Lewis",
            "profilePhoto": "https://randomuser.me/api/portraits/women/43.jpg"
        },
        "financialRecords": {
            "debt": "$21,474"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "Samantha Lewis",
        "id": 123456487
    }, {
        "contact": {
            "email": "joseph.jones@email.com",
            "phoneNumber": "+1 908 825 5155"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 7,
                "day": 26
            },
            "sex": "male",
            "parentName": "Amanda Jones",
            "profilePhoto": "https://randomuser.me/api/portraits/men/44.jpg"
        },
        "financialRecords": {
            "debt": "$99,638"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Joseph Jones",
        "id": 123456488
    }, {
        "contact": {
            "email": "nicole.ali@email.com",
            "phoneNumber": "+1 856 628 2840"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 5,
                "day": 8
            },
            "sex": "female",
            "parentName": "Jack Ali",
            "profilePhoto": "https://randomuser.me/api/portraits/women/44.jpg"
        },
        "financialRecords": {
            "debt": "$34,931"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "communications"
        },
        "isOnline": true,
        "studentName": "Nicole Ali",
        "id": 123456489
    }, {
        "contact": {
            "email": "michael.peterson@email.com",
            "phoneNumber": "+1 undefined 417 439"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 7,
                "day": 7
            },
            "sex": "male",
            "parentName": "Kayla Peterson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/45.jpg"
        },
        "financialRecords": {
            "debt": "$90,977"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "computer science"
        },
        "isOnline": true,
        "studentName": "Michael Peterson",
        "id": 123456490
    }, {
        "contact": {
            "email": "emma.garnier@email.com",
            "phoneNumber": "+1 609 526 5971"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 4,
                "day": 18
            },
            "sex": "female",
            "parentName": "Jonathan Garnier",
            "profilePhoto": "https://randomuser.me/api/portraits/women/45.jpg"
        },
        "financialRecords": {
            "debt": "$43,388"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "computer science"
        },
        "isOnline": true,
        "studentName": "Emma Garnier",
        "id": 123456491
    }, {
        "contact": {
            "email": "zachary.carter@email.com",
            "phoneNumber": "+1 908 134 4867"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 7,
                "day": 7
            },
            "sex": "male",
            "parentName": "Abigail Carter",
            "profilePhoto": "https://randomuser.me/api/portraits/men/46.jpg"
        },
        "financialRecords": {
            "debt": "$66,122"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "mechanical engineering"
        },
        "isOnline": false,
        "studentName": "Zachary Carter",
        "id": 123456492
    }, {
        "contact": {
            "email": "mary.rodriguez@email.com",
            "phoneNumber": "+1 732 486 6126"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 9,
                "day": 9
            },
            "sex": "female",
            "parentName": "Jonathan Rodriguez",
            "profilePhoto": "https://randomuser.me/api/portraits/women/46.jpg"
        },
        "financialRecords": {
            "debt": "$85,777"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Mary Rodriguez",
        "id": 123456493
    }, {
        "contact": {
            "email": "nathan.schneider@email.com",
            "phoneNumber": "+1 732 3 1482"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 10,
                "day": 5
            },
            "sex": "male",
            "parentName": "Alexis Schneider",
            "profilePhoto": "https://randomuser.me/api/portraits/men/47.jpg"
        },
        "financialRecords": {
            "debt": "$61,396"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "mechanical engineering"
        },
        "isOnline": true,
        "studentName": "Nathan Schneider",
        "id": 123456494
    }, {
        "contact": {
            "email": "nicole.thompson@email.com",
            "phoneNumber": "+1 201 905 3881"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 5,
                "day": 21
            },
            "sex": "female",
            "parentName": "John Thompson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/47.jpg"
        },
        "financialRecords": {
            "debt": "$19,957"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Nicole Thompson",
        "id": 123456495
    }, {
        "contact": {
            "email": "thomas.robinson@email.com",
            "phoneNumber": "+1 732 5 4530"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 9,
                "day": 22
            },
            "sex": "male",
            "parentName": "Sarah Robinson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/48.jpg"
        },
        "financialRecords": {
            "debt": "$12,655"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "Thomas Robinson",
        "id": 123456496
    }, {
        "contact": {
            "email": "jennifer.wang@email.com",
            "phoneNumber": "+1 undefined 670 6046"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 1,
                "day": 18
            },
            "sex": "female",
            "parentName": "Kevin Wang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/48.jpg"
        },
        "financialRecords": {
            "debt": "$96,022"
        },
        "academicRecords": {
            "class": "VII C"
        },
        "isOnline": true,
        "studentName": "Jennifer Wang",
        "id": 123456497
    }, {
        "contact": {
            "email": "brandon.jones@email.com",
            "phoneNumber": "+1 856 162 5310"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 1,
                "day": 2
            },
            "sex": "male",
            "parentName": "Mary Jones",
            "profilePhoto": "https://randomuser.me/api/portraits/men/49.jpg"
        },
        "financialRecords": {
            "debt": "$30,935"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "biology"
        },
        "isOnline": true,
        "studentName": "Brandon Jones",
        "id": 123456498
    }, {
        "contact": {
            "email": "brittany.garnier@email.com",
            "phoneNumber": "+1 609 231 111"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 4,
                "day": 4
            },
            "sex": "female",
            "parentName": "Brandon Garnier",
            "profilePhoto": "https://randomuser.me/api/portraits/women/49.jpg"
        },
        "financialRecords": {
            "debt": "$52,371"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "politcal science"
        },
        "isOnline": false,
        "studentName": "Brittany Garnier",
        "id": 123456499
    }, {
        "contact": {
            "email": "thomas.baker@email.com",
            "phoneNumber": "+1 undefined 659 3562"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 7,
                "day": 17
            },
            "sex": "male",
            "parentName": "Emily Baker",
            "profilePhoto": "https://randomuser.me/api/portraits/men/50.jpg"
        },
        "financialRecords": {
            "debt": "$11,641"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "mechanical engineering"
        },
        "isOnline": false,
        "studentName": "Thomas Baker",
        "id": 123456500
    }, {
        "contact": {
            "email": "samantha.chen@email.com",
            "phoneNumber": "+1 609 15 6482"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 9,
                "day": 10
            },
            "sex": "female",
            "parentName": "Joseph Chen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/50.jpg"
        },
        "financialRecords": {
            "debt": "$70,177"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "nursing"
        },
        "isOnline": false,
        "studentName": "Samantha Chen",
        "id": 123456501
    }, {
        "contact": {
            "email": "ethan.wilson@email.com",
            "phoneNumber": "+1 201 995 9903"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 1,
                "day": 29
            },
            "sex": "male",
            "parentName": "Olivia Wilson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/51.jpg"
        },
        "financialRecords": {
            "debt": "$64,244"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "computer science"
        },
        "isOnline": true,
        "studentName": "Ethan Wilson",
        "id": 123456502
    }, {
        "contact": {
            "email": "lisa.walker@email.com",
            "phoneNumber": "+1 201 760 305"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 23
            },
            "sex": "female",
            "parentName": "Ethan Walker",
            "profilePhoto": "https://randomuser.me/api/portraits/women/51.jpg"
        },
        "financialRecords": {
            "debt": "$84,134"
        },
        "academicRecords": {
            "class": "VII C"
        },
        "isOnline": true,
        "studentName": "Lisa Walker",
        "id": 123456503
    }, {
        "contact": {
            "email": "joseph.hall@email.com",
            "phoneNumber": "+1 609 865 3032"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 12,
                "day": 26
            },
            "sex": "male",
            "parentName": "Karen Hall",
            "profilePhoto": "https://randomuser.me/api/portraits/men/52.jpg"
        },
        "financialRecords": {
            "debt": "$35,594"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Joseph Hall",
        "id": 123456504
    }, {
        "contact": {
            "email": "amanda.robinson@email.com",
            "phoneNumber": "+1 undefined 774 4948"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 1,
                "day": 10
            },
            "sex": "female",
            "parentName": "Ryan Robinson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/52.jpg"
        },
        "financialRecords": {
            "debt": "$97,629"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "business"
        },
        "isOnline": false,
        "studentName": "Amanda Robinson",
        "id": 123456505
    }, {
        "contact": {
            "email": "james.allen@email.com",
            "phoneNumber": "+1 908 319 8632"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 3,
                "day": 19
            },
            "sex": "male",
            "parentName": "Samantha Allen",
            "profilePhoto": "https://randomuser.me/api/portraits/men/53.jpg"
        },
        "financialRecords": {
            "debt": "$14,477"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "politcal science"
        },
        "isOnline": false,
        "studentName": "James Allen",
        "id": 123456506
    }, {
        "contact": {
            "email": "lillian.dubois@email.com",
            "phoneNumber": "+1 609 981 7780"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 20
            },
            "sex": "female",
            "parentName": "Ryan Dubois",
            "profilePhoto": "https://randomuser.me/api/portraits/women/53.jpg"
        },
        "financialRecords": {
            "debt": "$67,980"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Lillian Dubois",
        "id": 123456507
    }, {
        "contact": {
            "email": "kyle.jones@email.com",
            "phoneNumber": "+1 201 682 1484"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 1
            },
            "sex": "male",
            "parentName": "Melissa Jones",
            "profilePhoto": "https://randomuser.me/api/portraits/men/54.jpg"
        },
        "financialRecords": {
            "debt": "$40,905"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Kyle Jones",
        "id": 123456508
    }, {
        "contact": {
            "email": "emma.wang@email.com",
            "phoneNumber": "+1 201 633 6067"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 3,
                "day": 22
            },
            "sex": "female",
            "parentName": "Thomas Wang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/54.jpg"
        },
        "financialRecords": {
            "debt": "$45,457"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "nursing"
        },
        "isOnline": true,
        "studentName": "Emma Wang",
        "id": 123456509
    }, {
        "contact": {
            "email": "david.dupont@email.com",
            "phoneNumber": "+1 undefined 33 7145"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 1,
                "day": 7
            },
            "sex": "male",
            "parentName": "Emily Dupont",
            "profilePhoto": "https://randomuser.me/api/portraits/men/55.jpg"
        },
        "financialRecords": {
            "debt": "$81,693"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "politcal science"
        },
        "isOnline": true,
        "studentName": "David Dupont",
        "id": 123456510
    }, {
        "contact": {
            "email": "lisa.white@email.com",
            "phoneNumber": "+1 undefined 170 4284"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 12,
                "day": 14
            },
            "sex": "female",
            "parentName": "Daniel White",
            "profilePhoto": "https://randomuser.me/api/portraits/women/55.jpg"
        },
        "financialRecords": {
            "debt": "$87,996"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "politcal science"
        },
        "isOnline": false,
        "studentName": "Lisa White",
        "id": 123456511
    }, {
        "contact": {
            "email": "james.clark@email.com",
            "phoneNumber": "+1 732 217 2334"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 8,
                "day": 22
            },
            "sex": "male",
            "parentName": "Abigail Clark",
            "profilePhoto": "https://randomuser.me/api/portraits/men/56.jpg"
        },
        "financialRecords": {
            "debt": "$41,308"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "finance"
        },
        "isOnline": true,
        "studentName": "James Clark",
        "id": 123456512
    }, {
        "contact": {
            "email": "brittany.hill@email.com",
            "phoneNumber": "+1 732 741 7525"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 3,
                "day": 8
            },
            "sex": "female",
            "parentName": "Gabriel Hill",
            "profilePhoto": "https://randomuser.me/api/portraits/women/56.jpg"
        },
        "financialRecords": {
            "debt": "$83,143"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "Brittany Hill",
        "id": 123456513
    }, {
        "contact": {
            "email": "austin.li@email.com",
            "phoneNumber": "+1 856 625 5836"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 8,
                "day": 5
            },
            "sex": "male",
            "parentName": "Elizabeth Li",
            "profilePhoto": "https://randomuser.me/api/portraits/men/57.jpg"
        },
        "financialRecords": {
            "debt": "$96,400"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Austin Li",
        "id": 123456514
    }, {
        "contact": {
            "email": "hannah.green@email.com",
            "phoneNumber": "+1 609 479 3608"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 4,
                "day": 7
            },
            "sex": "female",
            "parentName": "Jack Green",
            "profilePhoto": "https://randomuser.me/api/portraits/women/57.jpg"
        },
        "financialRecords": {
            "debt": "$66,449"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Hannah Green",
        "id": 123456515
    }, {
        "contact": {
            "email": "william.walker@email.com",
            "phoneNumber": "+1 732 319 5010"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 5,
                "day": 6
            },
            "sex": "male",
            "parentName": "Emily Walker",
            "profilePhoto": "https://randomuser.me/api/portraits/men/58.jpg"
        },
        "financialRecords": {
            "debt": "$96,601"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "business"
        },
        "isOnline": false,
        "studentName": "William Walker",
        "id": 123456516
    }, {
        "contact": {
            "email": "alexis.rodriguez@email.com",
            "phoneNumber": "+1 609 645 8388"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 12,
                "day": 22
            },
            "sex": "female",
            "parentName": "Brian Rodriguez",
            "profilePhoto": "https://randomuser.me/api/portraits/women/58.jpg"
        },
        "financialRecords": {
            "debt": "$26,002"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Alexis Rodriguez",
        "id": 123456517
    }, {
        "contact": {
            "email": "jack.dupont@email.com",
            "phoneNumber": "+1 201 380 2725"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 1,
                "day": 6
            },
            "sex": "male",
            "parentName": "Amanda Dupont",
            "profilePhoto": "https://randomuser.me/api/portraits/men/59.jpg"
        },
        "financialRecords": {
            "debt": "$72,963"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "communications"
        },
        "isOnline": true,
        "studentName": "Jack Dupont",
        "id": 123456518
    }, {
        "contact": {
            "email": "kimberly.dupont@email.com",
            "phoneNumber": "+1 609 563 5024"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 9,
                "day": 17
            },
            "sex": "female",
            "parentName": "Andrew Dupont",
            "profilePhoto": "https://randomuser.me/api/portraits/women/59.jpg"
        },
        "financialRecords": {
            "debt": "$5,008"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "Kimberly Dupont",
        "id": 123456519
    }, {
        "contact": {
            "email": "gabriel.garnier@email.com",
            "phoneNumber": "+1 undefined 240 3860"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 6,
                "day": 1
            },
            "sex": "male",
            "parentName": "Taylor Garnier",
            "profilePhoto": "https://randomuser.me/api/portraits/men/60.jpg"
        },
        "financialRecords": {
            "debt": "$85,073"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "Gabriel Garnier",
        "id": 123456520
    }, {
        "contact": {
            "email": "susan.carter@email.com",
            "phoneNumber": "+1 201 946 9257"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 7,
                "day": 27
            },
            "sex": "female",
            "parentName": "Mark Carter",
            "profilePhoto": "https://randomuser.me/api/portraits/women/60.jpg"
        },
        "financialRecords": {
            "debt": "$67,678"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "Susan Carter",
        "id": 123456521
    }, {
        "contact": {
            "email": "jacob.davis@email.com",
            "phoneNumber": "+1 856 361 1424"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 4,
                "day": 25
            },
            "sex": "male",
            "parentName": "Megan Davis",
            "profilePhoto": "https://randomuser.me/api/portraits/men/61.jpg"
        },
        "financialRecords": {
            "debt": "$71,931"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Jacob Davis",
        "id": 123456522
    }, {
        "contact": {
            "email": "amy.anderson@email.com",
            "phoneNumber": "+1 609 332 4471"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 3,
                "day": 24
            },
            "sex": "female",
            "parentName": "Daniel Anderson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/61.jpg"
        },
        "financialRecords": {
            "debt": "$19,903"
        },
        "academicRecords": {
            "class": "VII B"
        },
        "isOnline": false,
        "studentName": "Amy Anderson",
        "id": 123456523
    }, {
        "contact": {
            "email": "kevin.hall@email.com",
            "phoneNumber": "+1 856 597 7213"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 5,
                "day": 24
            },
            "sex": "male",
            "parentName": "Samantha Hall",
            "profilePhoto": "https://randomuser.me/api/portraits/men/62.jpg"
        },
        "financialRecords": {
            "debt": "$26,385"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "architectural engineering"
        },
        "isOnline": true,
        "studentName": "Kevin Hall",
        "id": 123456524
    }, {
        "contact": {
            "email": "samantha.braun@email.com",
            "phoneNumber": "+1 609 171 5247"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 6,
                "day": 19
            },
            "sex": "female",
            "parentName": "Samuel Braun",
            "profilePhoto": "https://randomuser.me/api/portraits/women/62.jpg"
        },
        "financialRecords": {
            "debt": "$46,859"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Samantha Braun",
        "id": 123456525
    }, {
        "contact": {
            "email": "alexander.thompson@email.com",
            "phoneNumber": "+1 201 854 6337"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 6,
                "day": 7
            },
            "sex": "male",
            "parentName": "Emily Thompson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/63.jpg"
        },
        "financialRecords": {
            "debt": "$19,024"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Alexander Thompson",
        "id": 123456526
    }, {
        "contact": {
            "email": "heather.clark@email.com",
            "phoneNumber": "+1 732 176 3624"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 1,
                "day": 20
            },
            "sex": "female",
            "parentName": "Christian Clark",
            "profilePhoto": "https://randomuser.me/api/portraits/women/63.jpg"
        },
        "financialRecords": {
            "debt": "$48,097"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "biology"
        },
        "isOnline": true,
        "studentName": "Heather Clark",
        "id": 123456527
    }, {
        "contact": {
            "email": "gabriel.fournier@email.com",
            "phoneNumber": "+1 732 318 213"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 10,
                "day": 14
            },
            "sex": "male",
            "parentName": "Madison Fournier",
            "profilePhoto": "https://randomuser.me/api/portraits/men/64.jpg"
        },
        "financialRecords": {
            "debt": "$22,664"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "computer science"
        },
        "isOnline": true,
        "studentName": "Gabriel Fournier",
        "id": 123456528
    }, {
        "contact": {
            "email": "michelle.schmidt@email.com",
            "phoneNumber": "+1 201 863 5196"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 5,
                "day": 18
            },
            "sex": "female",
            "parentName": "Christian Schmidt",
            "profilePhoto": "https://randomuser.me/api/portraits/women/64.jpg"
        },
        "financialRecords": {
            "debt": "$88,231"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "Michelle Schmidt",
        "id": 123456529
    }, {
        "contact": {
            "email": "brian.carter@email.com",
            "phoneNumber": "+1 856 583 9966"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 7,
                "day": 12
            },
            "sex": "male",
            "parentName": "Linda Carter",
            "profilePhoto": "https://randomuser.me/api/portraits/men/65.jpg"
        },
        "financialRecords": {
            "debt": "$78,351"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "Brian Carter",
        "id": 123456530
    }, {
        "contact": {
            "email": "mary.bonnet@email.com",
            "phoneNumber": "+1 908 100 9833"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 9,
                "day": 15
            },
            "sex": "female",
            "parentName": "Tyler Bonnet",
            "profilePhoto": "https://randomuser.me/api/portraits/women/65.jpg"
        },
        "financialRecords": {
            "debt": "$76,397"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Mary Bonnet",
        "id": 123456531
    }, {
        "contact": {
            "email": "james.martinez@email.com",
            "phoneNumber": "+1 609 793 8673"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 1,
                "day": 14
            },
            "sex": "male",
            "parentName": "Jessica Martinez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/66.jpg"
        },
        "financialRecords": {
            "debt": "$90,704"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "architectural engineering"
        },
        "isOnline": true,
        "studentName": "James Martinez",
        "id": 123456532
    }, {
        "contact": {
            "email": "elizabeth.thompson@email.com",
            "phoneNumber": "+1 609 506 3561"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 11,
                "day": 22
            },
            "sex": "female",
            "parentName": "Robert Thompson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/66.jpg"
        },
        "financialRecords": {
            "debt": "$92,100"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "Elizabeth Thompson",
        "id": 123456533
    }, {
        "contact": {
            "email": "samuel.li@email.com",
            "phoneNumber": "+1 609 38 6700"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 5,
                "day": 16
            },
            "sex": "male",
            "parentName": "Megan Li",
            "profilePhoto": "https://randomuser.me/api/portraits/men/67.jpg"
        },
        "financialRecords": {
            "debt": "$7,715"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "business"
        },
        "isOnline": false,
        "studentName": "Samuel Li",
        "id": 123456534
    }, {
        "contact": {
            "email": "abigail.wilson@email.com",
            "phoneNumber": "+1 856 730 8199"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 10,
                "day": 29
            },
            "sex": "female",
            "parentName": "Justin Wilson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/67.jpg"
        },
        "financialRecords": {
            "debt": "$95,385"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Abigail Wilson",
        "id": 123456535
    }, {
        "contact": {
            "email": "matthew.scott@email.com",
            "phoneNumber": "+1 201 798 758"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 10,
                "day": 21
            },
            "sex": "male",
            "parentName": "Ashley Scott",
            "profilePhoto": "https://randomuser.me/api/portraits/men/68.jpg"
        },
        "financialRecords": {
            "debt": "$18,914"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "nursing"
        },
        "isOnline": false,
        "studentName": "Matthew Scott",
        "id": 123456536
    }, {
        "contact": {
            "email": "sophia.liang@email.com",
            "phoneNumber": "+1 undefined 547 4678"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 1,
                "day": 14
            },
            "sex": "female",
            "parentName": "Samuel Liang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/68.jpg"
        },
        "financialRecords": {
            "debt": "$7,786"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Sophia Liang",
        "id": 123456537
    }, {
        "contact": {
            "email": "brandon.scott@email.com",
            "phoneNumber": "+1 732 746 7893"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 1,
                "day": 29
            },
            "sex": "male",
            "parentName": "Alexis Scott",
            "profilePhoto": "https://randomuser.me/api/portraits/men/69.jpg"
        },
        "financialRecords": {
            "debt": "$43,999"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "mechanical engineering"
        },
        "isOnline": false,
        "studentName": "Brandon Scott",
        "id": 123456538
    }, {
        "contact": {
            "email": "michelle.mitchell@email.com",
            "phoneNumber": "+1 609 11 9301"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 12,
                "day": 13
            },
            "sex": "female",
            "parentName": "Kevin Mitchell",
            "profilePhoto": "https://randomuser.me/api/portraits/women/69.jpg"
        },
        "financialRecords": {
            "debt": "$17,352"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Michelle Mitchell",
        "id": 123456539
    }, {
        "contact": {
            "email": "michael.bonnet@email.com",
            "phoneNumber": "+1 732 96 9339"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 2,
                "day": 15
            },
            "sex": "male",
            "parentName": "Karen Bonnet",
            "profilePhoto": "https://randomuser.me/api/portraits/men/70.jpg"
        },
        "financialRecords": {
            "debt": "$9,333"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "computer science"
        },
        "isOnline": true,
        "studentName": "Michael Bonnet",
        "id": 123456540
    }, {
        "contact": {
            "email": "mary.wilson@email.com",
            "phoneNumber": "+1 609 469 2983"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 8,
                "day": 6
            },
            "sex": "female",
            "parentName": "Brian Wilson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/70.jpg"
        },
        "financialRecords": {
            "debt": "$66,110"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "politcal science"
        },
        "isOnline": false,
        "studentName": "Mary Wilson",
        "id": 123456541
    }, {
        "contact": {
            "email": "john.peterson@email.com",
            "phoneNumber": "+1 201 605 1642"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 2
            },
            "sex": "male",
            "parentName": "Taylor Peterson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/71.jpg"
        },
        "financialRecords": {
            "debt": "$37,570"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "John Peterson",
        "id": 123456542
    }, {
        "contact": {
            "email": "sophia.peterson@email.com",
            "phoneNumber": "+1 908 67 3541"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 3,
                "day": 17
            },
            "sex": "female",
            "parentName": "Joshua Peterson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/71.jpg"
        },
        "financialRecords": {
            "debt": "$8,657"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "biology"
        },
        "isOnline": true,
        "studentName": "Sophia Peterson",
        "id": 123456543
    }, {
        "contact": {
            "email": "brian.lavigne@email.com",
            "phoneNumber": "+1 201 402 4879"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 4,
                "day": 25
            },
            "sex": "male",
            "parentName": "Sophia Lavigne",
            "profilePhoto": "https://randomuser.me/api/portraits/men/72.jpg"
        },
        "financialRecords": {
            "debt": "$11,037"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "biology"
        },
        "isOnline": true,
        "studentName": "Brian Lavigne",
        "id": 123456544
    }, {
        "contact": {
            "email": "angela.fournier@email.com",
            "phoneNumber": "+1 732 602 4044"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 6,
                "day": 29
            },
            "sex": "female",
            "parentName": "Joseph Fournier",
            "profilePhoto": "https://randomuser.me/api/portraits/women/72.jpg"
        },
        "financialRecords": {
            "debt": "$28,780"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "business"
        },
        "isOnline": false,
        "studentName": "Angela Fournier",
        "id": 123456545
    }, {
        "contact": {
            "email": "james.chen@email.com",
            "phoneNumber": "+1 732 662 4622"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 1,
                "day": 12
            },
            "sex": "male",
            "parentName": "Kimberly Chen",
            "profilePhoto": "https://randomuser.me/api/portraits/men/73.jpg"
        },
        "financialRecords": {
            "debt": "$64,282"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "James Chen",
        "id": 123456546
    }, {
        "contact": {
            "email": "amy.lewis@email.com",
            "phoneNumber": "+1 908 290 7689"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 5,
                "day": 1
            },
            "sex": "female",
            "parentName": "Jason Lewis",
            "profilePhoto": "https://randomuser.me/api/portraits/women/73.jpg"
        },
        "financialRecords": {
            "debt": "$18,453"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "biology"
        },
        "isOnline": true,
        "studentName": "Amy Lewis",
        "id": 123456547
    }, {
        "contact": {
            "email": "ryan.wilson@email.com",
            "phoneNumber": "+1 201 53 5928"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 10,
                "day": 30
            },
            "sex": "male",
            "parentName": "Sophia Wilson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/74.jpg"
        },
        "financialRecords": {
            "debt": "$3,599"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "politcal science"
        },
        "isOnline": false,
        "studentName": "Ryan Wilson",
        "id": 123456548
    }, {
        "contact": {
            "email": "samantha.chen@email.com",
            "phoneNumber": "+1 609 954 3913"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 7,
                "day": 20
            },
            "sex": "female",
            "parentName": "Alexander Chen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/74.jpg"
        },
        "financialRecords": {
            "debt": "$6,038"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Samantha Chen",
        "id": 123456549
    }, {
        "contact": {
            "email": "jacob.liu@email.com",
            "phoneNumber": "+1 732 964 4522"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 2,
                "day": 11
            },
            "sex": "male",
            "parentName": "Sarah Liu",
            "profilePhoto": "https://randomuser.me/api/portraits/men/75.jpg"
        },
        "financialRecords": {
            "debt": "$84,221"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Jacob Liu",
        "id": 123456550
    }, {
        "contact": {
            "email": "lisa.taylor@email.com",
            "phoneNumber": "+1 856 705 807"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 10,
                "day": 23
            },
            "sex": "female",
            "parentName": "Brandon Taylor",
            "profilePhoto": "https://randomuser.me/api/portraits/women/75.jpg"
        },
        "financialRecords": {
            "debt": "$6,177"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "Lisa Taylor",
        "id": 123456551
    }, {
        "contact": {
            "email": "gabriel.schneider@email.com",
            "phoneNumber": "+1 609 602 5884"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 10,
                "day": 18
            },
            "sex": "male",
            "parentName": "Sophia Schneider",
            "profilePhoto": "https://randomuser.me/api/portraits/men/76.jpg"
        },
        "financialRecords": {
            "debt": "$41,912"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Gabriel Schneider",
        "id": 123456552
    }, {
        "contact": {
            "email": "isabella.nguyen@email.com",
            "phoneNumber": "+1 609 759 898"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 4,
                "day": 30
            },
            "sex": "female",
            "parentName": "Nicholas Nguyen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/76.jpg"
        },
        "financialRecords": {
            "debt": "$69,313"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "architectural engineering"
        },
        "isOnline": true,
        "studentName": "Isabella Nguyen",
        "id": 123456553
    }, {
        "contact": {
            "email": "daniel.chen@email.com",
            "phoneNumber": "+1 201 41 9107"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 5,
                "day": 18
            },
            "sex": "male",
            "parentName": "Angela Chen",
            "profilePhoto": "https://randomuser.me/api/portraits/men/77.jpg"
        },
        "financialRecords": {
            "debt": "$37,697"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Daniel Chen",
        "id": 123456554
    }, {
        "contact": {
            "email": "samantha.nguyen@email.com",
            "phoneNumber": "+1 856 887 3063"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 3,
                "day": 8
            },
            "sex": "female",
            "parentName": "Ethan Nguyen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/77.jpg"
        },
        "financialRecords": {
            "debt": "$62,215"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Samantha Nguyen",
        "id": 123456555
    }, {
        "contact": {
            "email": "john.schmidt@email.com",
            "phoneNumber": "+1 856 682 9142"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 10,
                "day": 1
            },
            "sex": "male",
            "parentName": "Taylor Schmidt",
            "profilePhoto": "https://randomuser.me/api/portraits/men/78.jpg"
        },
        "financialRecords": {
            "debt": "$62,975"
        },
        "academicRecords": {
            "class": "VII B"
        },
        "isOnline": false,
        "studentName": "John Schmidt",
        "id": 123456556
    }, {
        "contact": {
            "email": "jennifer.allen@email.com",
            "phoneNumber": "+1 201 558 9451"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 3,
                "day": 19
            },
            "sex": "female",
            "parentName": "Austin Allen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/78.jpg"
        },
        "financialRecords": {
            "debt": "$28,632"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "electrical engineering"
        },
        "isOnline": true,
        "studentName": "Jennifer Allen",
        "id": 123456557
    }, {
        "contact": {
            "email": "james.clark@email.com",
            "phoneNumber": "+1 732 590 3645"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 6,
                "day": 12
            },
            "sex": "male",
            "parentName": "Olivia Clark",
            "profilePhoto": "https://randomuser.me/api/portraits/men/79.jpg"
        },
        "financialRecords": {
            "debt": "$87,954"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "James Clark",
        "id": 123456558
    }, {
        "contact": {
            "email": "patricia.liu@email.com",
            "phoneNumber": "+1 undefined 84 9464"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 10,
                "day": 14
            },
            "sex": "female",
            "parentName": "Samuel Liu",
            "profilePhoto": "https://randomuser.me/api/portraits/women/79.jpg"
        },
        "financialRecords": {
            "debt": "$86,264"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Patricia Liu",
        "id": 123456559
    }, {
        "contact": {
            "email": "kyle.young@email.com",
            "phoneNumber": "+1 undefined 602 8291"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 5,
                "day": 21
            },
            "sex": "male",
            "parentName": "Brittany Young",
            "profilePhoto": "https://randomuser.me/api/portraits/men/80.jpg"
        },
        "financialRecords": {
            "debt": "$26,982"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "electrical engineering"
        },
        "isOnline": false,
        "studentName": "Kyle Young",
        "id": 123456560
    }, {
        "contact": {
            "email": "amanda.wright@email.com",
            "phoneNumber": "+1 201 355 7550"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 7,
                "day": 1
            },
            "sex": "female",
            "parentName": "Matthew Wright",
            "profilePhoto": "https://randomuser.me/api/portraits/women/80.jpg"
        },
        "financialRecords": {
            "debt": "$68,683"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "computer science"
        },
        "isOnline": true,
        "studentName": "Amanda Wright",
        "id": 123456561
    }, {
        "contact": {
            "email": "justin.thompson@email.com",
            "phoneNumber": "+1 609 926 6107"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 1,
                "day": 28
            },
            "sex": "male",
            "parentName": "Kayla Thompson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/81.jpg"
        },
        "financialRecords": {
            "debt": "$35,289"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Justin Thompson",
        "id": 123456562
    }, {
        "contact": {
            "email": "madison.martinez@email.com",
            "phoneNumber": "+1 856 569 4636"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 2,
                "day": 17
            },
            "sex": "female",
            "parentName": "Jack Martinez",
            "profilePhoto": "https://randomuser.me/api/portraits/women/81.jpg"
        },
        "financialRecords": {
            "debt": "$77,597"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "mechanical engineering"
        },
        "isOnline": false,
        "studentName": "Madison Martinez",
        "id": 123456563
    }, {
        "contact": {
            "email": "daniel.braun@email.com",
            "phoneNumber": "+1 732 154 218"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 3,
                "day": 1
            },
            "sex": "male",
            "parentName": "Olivia Braun",
            "profilePhoto": "https://randomuser.me/api/portraits/men/82.jpg"
        },
        "financialRecords": {
            "debt": "$99,501"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Daniel Braun",
        "id": 123456564
    }, {
        "contact": {
            "email": "isabella.nelson@email.com",
            "phoneNumber": "+1 201 323 1919"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 10,
                "day": 30
            },
            "sex": "female",
            "parentName": "Justin Nelson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/82.jpg"
        },
        "financialRecords": {
            "debt": "$36,202"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Isabella Nelson",
        "id": 123456565
    }, {
        "contact": {
            "email": "daniel.liu@email.com",
            "phoneNumber": "+1 856 564 822"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 11,
                "day": 3
            },
            "sex": "male",
            "parentName": "Karen Liu",
            "profilePhoto": "https://randomuser.me/api/portraits/men/83.jpg"
        },
        "financialRecords": {
            "debt": "$15,746"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "finance"
        },
        "isOnline": true,
        "studentName": "Daniel Liu",
        "id": 123456566
    }, {
        "contact": {
            "email": "sophia.zimmerman@email.com",
            "phoneNumber": "+1 732 802 5893"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 4,
                "day": 27
            },
            "sex": "female",
            "parentName": "Andrew Zimmerman",
            "profilePhoto": "https://randomuser.me/api/portraits/women/83.jpg"
        },
        "financialRecords": {
            "debt": "$33,889"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "architectural engineering"
        },
        "isOnline": true,
        "studentName": "Sophia Zimmerman",
        "id": 123456567
    }, {
        "contact": {
            "email": "brian.wright@email.com",
            "phoneNumber": "+1 201 934 9230"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 2,
                "day": 17
            },
            "sex": "male",
            "parentName": "Jennifer Wright",
            "profilePhoto": "https://randomuser.me/api/portraits/men/84.jpg"
        },
        "financialRecords": {
            "debt": "$12,499"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Brian Wright",
        "id": 123456568
    }, {
        "contact": {
            "email": "isabella.garnier@email.com",
            "phoneNumber": "+1 908 44 1411"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 7,
                "day": 21
            },
            "sex": "female",
            "parentName": "Mark Garnier",
            "profilePhoto": "https://randomuser.me/api/portraits/women/84.jpg"
        },
        "financialRecords": {
            "debt": "$87,635"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "mechanical engineering"
        },
        "isOnline": true,
        "studentName": "Isabella Garnier",
        "id": 123456569
    }, {
        "contact": {
            "email": "christopher.green@email.com",
            "phoneNumber": "+1 undefined 163 145"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 6,
                "day": 4
            },
            "sex": "male",
            "parentName": "Amy Green",
            "profilePhoto": "https://randomuser.me/api/portraits/men/85.jpg"
        },
        "financialRecords": {
            "debt": "$79,283"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "business"
        },
        "isOnline": false,
        "studentName": "Christopher Green",
        "id": 123456570
    }, {
        "contact": {
            "email": "lillian.lewis@email.com",
            "phoneNumber": "+1 856 210 1948"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 9,
                "day": 8
            },
            "sex": "female",
            "parentName": "Daniel Lewis",
            "profilePhoto": "https://randomuser.me/api/portraits/women/85.jpg"
        },
        "financialRecords": {
            "debt": "$26,430"
        },
        "academicRecords": {
            "class": "VII B"
        },
        "isOnline": true,
        "studentName": "Lillian Lewis",
        "id": 123456571
    }, {
        "contact": {
            "email": "samuel.wilson@email.com",
            "phoneNumber": "+1 856 723 8811"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 5,
                "day": 30
            },
            "sex": "male",
            "parentName": "Elizabeth Wilson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/86.jpg"
        },
        "financialRecords": {
            "debt": "$23,837"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "mechanical engineering"
        },
        "isOnline": true,
        "studentName": "Samuel Wilson",
        "id": 123456572
    }, {
        "contact": {
            "email": "jessica.allen@email.com",
            "phoneNumber": "+1 856 853 1441"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 6,
                "day": 25
            },
            "sex": "female",
            "parentName": "John Allen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/86.jpg"
        },
        "financialRecords": {
            "debt": "$97,886"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Jessica Allen",
        "id": 123456573
    }, {
        "contact": {
            "email": "joshua.young@email.com",
            "phoneNumber": "+1 undefined 566 1619"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 4,
                "day": 6
            },
            "sex": "male",
            "parentName": "Lillian Young",
            "profilePhoto": "https://randomuser.me/api/portraits/men/87.jpg"
        },
        "financialRecords": {
            "debt": "$6,124"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Joshua Young",
        "id": 123456574
    }, {
        "contact": {
            "email": "emily.zimmerman@email.com",
            "phoneNumber": "+1 609 435 2655"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 1,
                "day": 22
            },
            "sex": "female",
            "parentName": "Robert Zimmerman",
            "profilePhoto": "https://randomuser.me/api/portraits/women/87.jpg"
        },
        "financialRecords": {
            "debt": "$26,855"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Emily Zimmerman",
        "id": 123456575
    }, {
        "contact": {
            "email": "samuel.monet@email.com",
            "phoneNumber": "+1 856 112 456"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 7,
                "day": 20
            },
            "sex": "male",
            "parentName": "Alexis Monet",
            "profilePhoto": "https://randomuser.me/api/portraits/men/88.jpg"
        },
        "financialRecords": {
            "debt": "$65,897"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Samuel Monet",
        "id": 123456576
    }, {
        "contact": {
            "email": "jessica.walker@email.com",
            "phoneNumber": "+1 201 692 9797"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 5,
                "day": 30
            },
            "sex": "female",
            "parentName": "Christopher Walker",
            "profilePhoto": "https://randomuser.me/api/portraits/women/88.jpg"
        },
        "financialRecords": {
            "debt": "$74,939"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "biology"
        },
        "isOnline": true,
        "studentName": "Jessica Walker",
        "id": 123456577
    }, {
        "contact": {
            "email": "mark.taylor@email.com",
            "phoneNumber": "+1 201 642 5198"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 15
            },
            "sex": "male",
            "parentName": "Samantha Taylor",
            "profilePhoto": "https://randomuser.me/api/portraits/men/89.jpg"
        },
        "financialRecords": {
            "debt": "$45,515"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Mark Taylor",
        "id": 123456578
    }, {
        "contact": {
            "email": "megan.taylor@email.com",
            "phoneNumber": "+1 609 387 454"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 4,
                "day": 2
            },
            "sex": "female",
            "parentName": "Matthew Taylor",
            "profilePhoto": "https://randomuser.me/api/portraits/women/89.jpg"
        },
        "financialRecords": {
            "debt": "$39,611"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Megan Taylor",
        "id": 123456579
    }, {
        "contact": {
            "email": "brian.taylor@email.com",
            "phoneNumber": "+1 201 968 5999"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 1,
                "day": 14
            },
            "sex": "male",
            "parentName": "Isabella Taylor",
            "profilePhoto": "https://randomuser.me/api/portraits/men/90.jpg"
        },
        "financialRecords": {
            "debt": "$12,506"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "business"
        },
        "isOnline": false,
        "studentName": "Brian Taylor",
        "id": 123456580
    }, {
        "contact": {
            "email": "mary.zhang@email.com",
            "phoneNumber": "+1 856 640 5071"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 4,
                "day": 29
            },
            "sex": "female",
            "parentName": "Alexander Zhang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/90.jpg"
        },
        "financialRecords": {
            "debt": "$80,030"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "Mary Zhang",
        "id": 123456581
    }, {
        "contact": {
            "email": "gabriel.martinez@email.com",
            "phoneNumber": "+1 201 28 9723"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 12,
                "day": 20
            },
            "sex": "male",
            "parentName": "Madison Martinez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/91.jpg"
        },
        "financialRecords": {
            "debt": "$88,183"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "finance"
        },
        "isOnline": true,
        "studentName": "Gabriel Martinez",
        "id": 123456582
    }, {
        "contact": {
            "email": "mary.lewis@email.com",
            "phoneNumber": "+1 856 912 7801"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 5,
                "day": 16
            },
            "sex": "female",
            "parentName": "Kevin Lewis",
            "profilePhoto": "https://randomuser.me/api/portraits/women/91.jpg"
        },
        "financialRecords": {
            "debt": "$28,568"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Mary Lewis",
        "id": 123456583
    }, {
        "contact": {
            "email": "joshua.adams@email.com",
            "phoneNumber": "+1 201 642 4082"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 6,
                "day": 19
            },
            "sex": "male",
            "parentName": "Taylor Adams",
            "profilePhoto": "https://randomuser.me/api/portraits/men/92.jpg"
        },
        "financialRecords": {
            "debt": "$79,367"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Joshua Adams",
        "id": 123456584
    }, {
        "contact": {
            "email": "kimberly.zimmerman@email.com",
            "phoneNumber": "+1 609 812 1831"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 5,
                "day": 2
            },
            "sex": "female",
            "parentName": "Ryan Zimmerman",
            "profilePhoto": "https://randomuser.me/api/portraits/women/92.jpg"
        },
        "financialRecords": {
            "debt": "$20,900"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Kimberly Zimmerman",
        "id": 123456585
    }, {
        "contact": {
            "email": "joshua.taylor@email.com",
            "phoneNumber": "+1 856 406 7459"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 11,
                "day": 6
            },
            "sex": "male",
            "parentName": "Brittany Taylor",
            "profilePhoto": "https://randomuser.me/api/portraits/men/93.jpg"
        },
        "financialRecords": {
            "debt": "$52,121"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Joshua Taylor",
        "id": 123456586
    }, {
        "contact": {
            "email": "emily.allen@email.com",
            "phoneNumber": "+1 732 598 3688"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 6,
                "day": 4
            },
            "sex": "female",
            "parentName": "Zachary Allen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/93.jpg"
        },
        "financialRecords": {
            "debt": "$57,462"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Emily Allen",
        "id": 123456587
    }, {
        "contact": {
            "email": "joseph.wang@email.com",
            "phoneNumber": "+1 201 922 3197"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 7,
                "day": 28
            },
            "sex": "male",
            "parentName": "Kayla Wang",
            "profilePhoto": "https://randomuser.me/api/portraits/men/94.jpg"
        },
        "financialRecords": {
            "debt": "$75,363"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "architectural engineering"
        },
        "isOnline": true,
        "studentName": "Joseph Wang",
        "id": 123456588
    }, {
        "contact": {
            "email": "michelle.toussaint@email.com",
            "phoneNumber": "+1 732 421 8907"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 4
            },
            "sex": "female",
            "parentName": "Mark Toussaint",
            "profilePhoto": "https://randomuser.me/api/portraits/women/94.jpg"
        },
        "financialRecords": {
            "debt": "$57,891"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Michelle Toussaint",
        "id": 123456589
    }, {
        "contact": {
            "email": "thomas.howard@email.com",
            "phoneNumber": "+1 609 126 1747"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 9,
                "day": 4
            },
            "sex": "male",
            "parentName": "Sarah Howard",
            "profilePhoto": "https://randomuser.me/api/portraits/men/95.jpg"
        },
        "financialRecords": {
            "debt": "$1,939"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Thomas Howard",
        "id": 123456590
    }, {
        "contact": {
            "email": "patricia.clark@email.com",
            "phoneNumber": "+1 201 486 5198"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 1,
                "day": 1
            },
            "sex": "female",
            "parentName": "Samuel Clark",
            "profilePhoto": "https://randomuser.me/api/portraits/women/95.jpg"
        },
        "financialRecords": {
            "debt": "$13,480"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "psychology"
        },
        "isOnline": true,
        "studentName": "Patricia Clark",
        "id": 123456591
    }, {
        "contact": {
            "email": "brandon.dubois@email.com",
            "phoneNumber": "+1 undefined 827 9257"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 10,
                "day": 23
            },
            "sex": "male",
            "parentName": "Jennifer Dubois",
            "profilePhoto": "https://randomuser.me/api/portraits/men/96.jpg"
        },
        "financialRecords": {
            "debt": "$10,931"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "architectural engineering"
        },
        "isOnline": false,
        "studentName": "Brandon Dubois",
        "id": 123456592
    }, {
        "contact": {
            "email": "melissa.wang@email.com",
            "phoneNumber": "+1 609 60 1507"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 8,
                "day": 27
            },
            "sex": "female",
            "parentName": "Justin Wang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/96.jpg"
        },
        "financialRecords": {
            "debt": "$93,810"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "biology"
        },
        "isOnline": true,
        "studentName": "Melissa Wang",
        "id": 123456593
    }, {
        "contact": {
            "email": "austin.allen@email.com",
            "phoneNumber": "+1 908 314 9596"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 10,
                "day": 21
            },
            "sex": "male",
            "parentName": "Hannah Allen",
            "profilePhoto": "https://randomuser.me/api/portraits/men/97.jpg"
        },
        "financialRecords": {
            "debt": "$3,369"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "Austin Allen",
        "id": 123456594
    }, {
        "contact": {
            "email": "alexis.roberts@email.com",
            "phoneNumber": "+1 856 235 7351"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 9,
                "day": 30
            },
            "sex": "female",
            "parentName": "Nicholas Roberts",
            "profilePhoto": "https://randomuser.me/api/portraits/women/97.jpg"
        },
        "financialRecords": {
            "debt": "$43,954"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "nursing"
        },
        "isOnline": false,
        "studentName": "Alexis Roberts",
        "id": 123456595
    }, {
        "contact": {
            "email": "joseph.peterson@email.com",
            "phoneNumber": "+1 609 137 2261"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 11,
                "day": 23
            },
            "sex": "male",
            "parentName": "Samantha Peterson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/98.jpg"
        },
        "financialRecords": {
            "debt": "$2,689"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "psychology"
        },
        "isOnline": true,
        "studentName": "Joseph Peterson",
        "id": 123456596
    }, {
        "contact": {
            "email": "taylor.walker@email.com",
            "phoneNumber": "+1 856 668 5042"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 5,
                "day": 19
            },
            "sex": "female",
            "parentName": "Mark Walker",
            "profilePhoto": "https://randomuser.me/api/portraits/women/98.jpg"
        },
        "financialRecords": {
            "debt": "$73,338"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "Taylor Walker",
        "id": 123456597
    }, {
        "contact": {
            "email": "tyler.howard@email.com",
            "phoneNumber": "+1 856 243 8070"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 8,
                "day": 4
            },
            "sex": "male",
            "parentName": "Olivia Howard",
            "profilePhoto": "https://randomuser.me/api/portraits/men/99.jpg"
        },
        "financialRecords": {
            "debt": "$95,778"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Tyler Howard",
        "id": 123456598
    }, {
        "contact": {
            "email": "brittany.li@email.com",
            "phoneNumber": "+1 732 97 9796"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 1,
                "day": 2
            },
            "sex": "female",
            "parentName": "Robert Li",
            "profilePhoto": "https://randomuser.me/api/portraits/women/99.jpg"
        },
        "financialRecords": {
            "debt": "$22,997"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Brittany Li",
        "id": 123456599
    }, {
        "contact": {
            "email": "matthew.williams@email.com",
            "phoneNumber": "+1 856 960 6753"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 2,
                "day": 16
            },
            "sex": "male",
            "parentName": "Stephanie Williams",
            "profilePhoto": "https://randomuser.me/api/portraits/men/0.jpg"
        },
        "financialRecords": {
            "debt": "$88,127"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "mechanical engineering"
        },
        "isOnline": true,
        "studentName": "Matthew Williams",
        "id": 123456600
    }, {
        "contact": {
            "email": "patricia.adams@email.com",
            "phoneNumber": "+1 732 343 4054"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 9,
                "day": 12
            },
            "sex": "female",
            "parentName": "Thomas Adams",
            "profilePhoto": "https://randomuser.me/api/portraits/women/0.jpg"
        },
        "financialRecords": {
            "debt": "$42,757"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "Patricia Adams",
        "id": 123456601
    }, {
        "contact": {
            "email": "christian.baker@email.com",
            "phoneNumber": "+1 908 29 7236"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 7,
                "day": 21
            },
            "sex": "male",
            "parentName": "Megan Baker",
            "profilePhoto": "https://randomuser.me/api/portraits/men/1.jpg"
        },
        "financialRecords": {
            "debt": "$4,592"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Christian Baker",
        "id": 123456602
    }, {
        "contact": {
            "email": "sophia.schmidt@email.com",
            "phoneNumber": "+1 732 521 4896"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 9,
                "day": 4
            },
            "sex": "female",
            "parentName": "Brandon Schmidt",
            "profilePhoto": "https://randomuser.me/api/portraits/women/1.jpg"
        },
        "financialRecords": {
            "debt": "$74,151"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Sophia Schmidt",
        "id": 123456603
    }, {
        "contact": {
            "email": "ethan.braun@email.com",
            "phoneNumber": "+1 856 528 1887"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 10,
                "day": 11
            },
            "sex": "male",
            "parentName": "Heather Braun",
            "profilePhoto": "https://randomuser.me/api/portraits/men/2.jpg"
        },
        "financialRecords": {
            "debt": "$67,185"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Ethan Braun",
        "id": 123456604
    }, {
        "contact": {
            "email": "hannah.scott@email.com",
            "phoneNumber": "+1 609 243 1271"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 4,
                "day": 22
            },
            "sex": "female",
            "parentName": "Gabriel Scott",
            "profilePhoto": "https://randomuser.me/api/portraits/women/2.jpg"
        },
        "financialRecords": {
            "debt": "$39,873"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "computer science"
        },
        "isOnline": true,
        "studentName": "Hannah Scott",
        "id": 123456605
    }, {
        "contact": {
            "email": "jason.nguyen@email.com",
            "phoneNumber": "+1 609 128 4608"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 8,
                "day": 9
            },
            "sex": "male",
            "parentName": "Jennifer Nguyen",
            "profilePhoto": "https://randomuser.me/api/portraits/men/3.jpg"
        },
        "financialRecords": {
            "debt": "$15,912"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "nursing"
        },
        "isOnline": true,
        "studentName": "Jason Nguyen",
        "id": 123456606
    }, {
        "contact": {
            "email": "elizabeth.martinez@email.com",
            "phoneNumber": "+1 undefined 863 9883"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 1,
                "day": 19
            },
            "sex": "female",
            "parentName": "John Martinez",
            "profilePhoto": "https://randomuser.me/api/portraits/women/3.jpg"
        },
        "financialRecords": {
            "debt": "$63,780"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Elizabeth Martinez",
        "id": 123456607
    }, {
        "contact": {
            "email": "thomas.williams@email.com",
            "phoneNumber": "+1 609 586 7082"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 12,
                "day": 8
            },
            "sex": "male",
            "parentName": "Stephanie Williams",
            "profilePhoto": "https://randomuser.me/api/portraits/men/4.jpg"
        },
        "financialRecords": {
            "debt": "$83,511"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Thomas Williams",
        "id": 123456608
    }, {
        "contact": {
            "email": "sophia.flores@email.com",
            "phoneNumber": "+1 732 824 6806"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 1,
                "day": 22
            },
            "sex": "female",
            "parentName": "Tyler Flores",
            "profilePhoto": "https://randomuser.me/api/portraits/women/4.jpg"
        },
        "financialRecords": {
            "debt": "$74,286"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "computer science"
        },
        "isOnline": true,
        "studentName": "Sophia Flores",
        "id": 123456609
    }, {
        "contact": {
            "email": "joseph.harris@email.com",
            "phoneNumber": "+1 908 208 2668"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 3,
                "day": 28
            },
            "sex": "male",
            "parentName": "Abigail Harris",
            "profilePhoto": "https://randomuser.me/api/portraits/men/5.jpg"
        },
        "financialRecords": {
            "debt": "$95,177"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Joseph Harris",
        "id": 123456610
    }, {
        "contact": {
            "email": "kimberly.bonnet@email.com",
            "phoneNumber": "+1 908 366 4545"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 6,
                "day": 6
            },
            "sex": "female",
            "parentName": "Robert Bonnet",
            "profilePhoto": "https://randomuser.me/api/portraits/women/5.jpg"
        },
        "financialRecords": {
            "debt": "$89,566"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Kimberly Bonnet",
        "id": 123456611
    }, {
        "contact": {
            "email": "brian.schneider@email.com",
            "phoneNumber": "+1 201 442 6011"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 6,
                "day": 23
            },
            "sex": "male",
            "parentName": "Sarah Schneider",
            "profilePhoto": "https://randomuser.me/api/portraits/men/6.jpg"
        },
        "financialRecords": {
            "debt": "$72,155"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Brian Schneider",
        "id": 123456612
    }, {
        "contact": {
            "email": "samantha.thompson@email.com",
            "phoneNumber": "+1 undefined 157 9254"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 24
            },
            "sex": "female",
            "parentName": "Brian Thompson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/6.jpg"
        },
        "financialRecords": {
            "debt": "$75,882"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "Samantha Thompson",
        "id": 123456613
    }, {
        "contact": {
            "email": "kyle.jones@email.com",
            "phoneNumber": "+1 201 249 1151"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 6,
                "day": 21
            },
            "sex": "male",
            "parentName": "Ashley Jones",
            "profilePhoto": "https://randomuser.me/api/portraits/men/7.jpg"
        },
        "financialRecords": {
            "debt": "$17,619"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Kyle Jones",
        "id": 123456614
    }, {
        "contact": {
            "email": "sophia.allen@email.com",
            "phoneNumber": "+1 908 617 6396"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 10,
                "day": 22
            },
            "sex": "female",
            "parentName": "David Allen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/7.jpg"
        },
        "financialRecords": {
            "debt": "$8,807"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "psychology"
        },
        "isOnline": true,
        "studentName": "Sophia Allen",
        "id": 123456615
    }, {
        "contact": {
            "email": "alexander.brown@email.com",
            "phoneNumber": "+1 201 690 4150"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 9,
                "day": 24
            },
            "sex": "male",
            "parentName": "Taylor Brown",
            "profilePhoto": "https://randomuser.me/api/portraits/men/8.jpg"
        },
        "financialRecords": {
            "debt": "$22,887"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "Alexander Brown",
        "id": 123456616
    }, {
        "contact": {
            "email": "linda.lewis@email.com",
            "phoneNumber": "+1 856 796 9259"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 3,
                "day": 10
            },
            "sex": "female",
            "parentName": "Gabriel Lewis",
            "profilePhoto": "https://randomuser.me/api/portraits/women/8.jpg"
        },
        "financialRecords": {
            "debt": "$69,556"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "communications"
        },
        "isOnline": true,
        "studentName": "Linda Lewis",
        "id": 123456617
    }, {
        "contact": {
            "email": "christian.gonzalez@email.com",
            "phoneNumber": "+1 201 330 9714"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 3,
                "day": 4
            },
            "sex": "male",
            "parentName": "Amy Gonzalez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/9.jpg"
        },
        "financialRecords": {
            "debt": "$11,636"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "politcal science"
        },
        "isOnline": true,
        "studentName": "Christian Gonzalez",
        "id": 123456618
    }, {
        "contact": {
            "email": "samantha.moore@email.com",
            "phoneNumber": "+1 732 331 2342"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 6,
                "day": 12
            },
            "sex": "female",
            "parentName": "Ryan Moore",
            "profilePhoto": "https://randomuser.me/api/portraits/women/9.jpg"
        },
        "financialRecords": {
            "debt": "$83,015"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "Samantha Moore",
        "id": 123456619
    }, {
        "contact": {
            "email": "daniel.brown@email.com",
            "phoneNumber": "+1 732 850 5209"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 10,
                "day": 16
            },
            "sex": "male",
            "parentName": "Michelle Brown",
            "profilePhoto": "https://randomuser.me/api/portraits/men/10.jpg"
        },
        "financialRecords": {
            "debt": "$84,916"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "computer science"
        },
        "isOnline": true,
        "studentName": "Daniel Brown",
        "id": 123456620
    }, {
        "contact": {
            "email": "alexis.hill@email.com",
            "phoneNumber": "+1 609 817 2638"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 4,
                "day": 18
            },
            "sex": "female",
            "parentName": "Tyler Hill",
            "profilePhoto": "https://randomuser.me/api/portraits/women/10.jpg"
        },
        "financialRecords": {
            "debt": "$1,677"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Alexis Hill",
        "id": 123456621
    }, {
        "contact": {
            "email": "kyle.lee@email.com",
            "phoneNumber": "+1 609 107 8106"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 5,
                "day": 29
            },
            "sex": "male",
            "parentName": "Kimberly Lee",
            "profilePhoto": "https://randomuser.me/api/portraits/men/11.jpg"
        },
        "financialRecords": {
            "debt": "$32,507"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Kyle Lee",
        "id": 123456622
    }, {
        "contact": {
            "email": "patricia.liang@email.com",
            "phoneNumber": "+1 undefined 329 9922"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 6,
                "day": 23
            },
            "sex": "female",
            "parentName": "Alexander Liang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/11.jpg"
        },
        "financialRecords": {
            "debt": "$45,572"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "Patricia Liang",
        "id": 123456623
    }, {
        "contact": {
            "email": "brandon.cooper@email.com",
            "phoneNumber": "+1 908 858 6267"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 7,
                "day": 5
            },
            "sex": "male",
            "parentName": "Brittany Cooper",
            "profilePhoto": "https://randomuser.me/api/portraits/men/12.jpg"
        },
        "financialRecords": {
            "debt": "$85,370"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "business"
        },
        "isOnline": false,
        "studentName": "Brandon Cooper",
        "id": 123456624
    }, {
        "contact": {
            "email": "taylor.campbell@email.com",
            "phoneNumber": "+1 201 392 1979"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 1
            },
            "sex": "female",
            "parentName": "Brandon Campbell",
            "profilePhoto": "https://randomuser.me/api/portraits/women/12.jpg"
        },
        "financialRecords": {
            "debt": "$74,778"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Taylor Campbell",
        "id": 123456625
    }, {
        "contact": {
            "email": "nicholas.williams@email.com",
            "phoneNumber": "+1 908 352 5620"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 7,
                "day": 23
            },
            "sex": "male",
            "parentName": "Isabella Williams",
            "profilePhoto": "https://randomuser.me/api/portraits/men/13.jpg"
        },
        "financialRecords": {
            "debt": "$93,381"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Nicholas Williams",
        "id": 123456626
    }, {
        "contact": {
            "email": "sarah.anderson@email.com",
            "phoneNumber": "+1 609 862 2640"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 7,
                "day": 1
            },
            "sex": "female",
            "parentName": "Anthony Anderson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/13.jpg"
        },
        "financialRecords": {
            "debt": "$75,213"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "electrical engineering"
        },
        "isOnline": true,
        "studentName": "Sarah Anderson",
        "id": 123456627
    }, {
        "contact": {
            "email": "joseph.howard@email.com",
            "phoneNumber": "+1 609 791 4113"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 7,
                "day": 18
            },
            "sex": "male",
            "parentName": "Emily Howard",
            "profilePhoto": "https://randomuser.me/api/portraits/men/14.jpg"
        },
        "financialRecords": {
            "debt": "$89,371"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Joseph Howard",
        "id": 123456628
    }, {
        "contact": {
            "email": "jennifer.williams@email.com",
            "phoneNumber": "+1 201 866 2974"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 25
            },
            "sex": "female",
            "parentName": "Justin Williams",
            "profilePhoto": "https://randomuser.me/api/portraits/women/14.jpg"
        },
        "financialRecords": {
            "debt": "$94,738"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "nursing"
        },
        "isOnline": false,
        "studentName": "Jennifer Williams",
        "id": 123456629
    }, {
        "contact": {
            "email": "ryan.adams@email.com",
            "phoneNumber": "+1 201 805 4777"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 12,
                "day": 7
            },
            "sex": "male",
            "parentName": "Emily Adams",
            "profilePhoto": "https://randomuser.me/api/portraits/men/15.jpg"
        },
        "financialRecords": {
            "debt": "$97,830"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Ryan Adams",
        "id": 123456630
    }, {
        "contact": {
            "email": "isabella.monet@email.com",
            "phoneNumber": "+1 732 198 4096"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 9,
                "day": 18
            },
            "sex": "female",
            "parentName": "Andrew Monet",
            "profilePhoto": "https://randomuser.me/api/portraits/women/15.jpg"
        },
        "financialRecords": {
            "debt": "$7,492"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "politcal science"
        },
        "isOnline": true,
        "studentName": "Isabella Monet",
        "id": 123456631
    }, {
        "contact": {
            "email": "ethan.gonzalez@email.com",
            "phoneNumber": "+1 609 821 6091"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 10,
                "day": 27
            },
            "sex": "male",
            "parentName": "Sarah Gonzalez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/16.jpg"
        },
        "financialRecords": {
            "debt": "$21,784"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "politcal science"
        },
        "isOnline": true,
        "studentName": "Ethan Gonzalez",
        "id": 123456632
    }, {
        "contact": {
            "email": "ashley.zhang@email.com",
            "phoneNumber": "+1 609 127 5590"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 11,
                "day": 29
            },
            "sex": "female",
            "parentName": "Jason Zhang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/16.jpg"
        },
        "financialRecords": {
            "debt": "$85,832"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Ashley Zhang",
        "id": 123456633
    }, {
        "contact": {
            "email": "kevin.cooper@email.com",
            "phoneNumber": "+1 732 263 5997"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 9,
                "day": 15
            },
            "sex": "male",
            "parentName": "Alexis Cooper",
            "profilePhoto": "https://randomuser.me/api/portraits/men/17.jpg"
        },
        "financialRecords": {
            "debt": "$84,720"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Kevin Cooper",
        "id": 123456634
    }, {
        "contact": {
            "email": "susan.roberts@email.com",
            "phoneNumber": "+1 201 248 4079"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 2,
                "day": 10
            },
            "sex": "female",
            "parentName": "Ethan Roberts",
            "profilePhoto": "https://randomuser.me/api/portraits/women/17.jpg"
        },
        "financialRecords": {
            "debt": "$91,391"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Susan Roberts",
        "id": 123456635
    }, {
        "contact": {
            "email": "christian.scott@email.com",
            "phoneNumber": "+1 undefined 926 4232"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 6,
                "day": 20
            },
            "sex": "male",
            "parentName": "Abigail Scott",
            "profilePhoto": "https://randomuser.me/api/portraits/men/18.jpg"
        },
        "financialRecords": {
            "debt": "$33,888"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "biology"
        },
        "isOnline": true,
        "studentName": "Christian Scott",
        "id": 123456636
    }, {
        "contact": {
            "email": "nicole.nguyen@email.com",
            "phoneNumber": "+1 856 276 8542"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 8,
                "day": 21
            },
            "sex": "female",
            "parentName": "Matthew Nguyen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/18.jpg"
        },
        "financialRecords": {
            "debt": "$38,273"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Nicole Nguyen",
        "id": 123456637
    }, {
        "contact": {
            "email": "david.garnier@email.com",
            "phoneNumber": "+1 856 580 51"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 6,
                "day": 18
            },
            "sex": "male",
            "parentName": "Lillian Garnier",
            "profilePhoto": "https://randomuser.me/api/portraits/men/19.jpg"
        },
        "financialRecords": {
            "debt": "$15,882"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "electrical engineering"
        },
        "isOnline": false,
        "studentName": "David Garnier",
        "id": 123456638
    }, {
        "contact": {
            "email": "taylor.bonnet@email.com",
            "phoneNumber": "+1 609 634 8120"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 9,
                "day": 25
            },
            "sex": "female",
            "parentName": "Thomas Bonnet",
            "profilePhoto": "https://randomuser.me/api/portraits/women/19.jpg"
        },
        "financialRecords": {
            "debt": "$68,101"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "nursing"
        },
        "isOnline": true,
        "studentName": "Taylor Bonnet",
        "id": 123456639
    }, {
        "contact": {
            "email": "brian.bonnet@email.com",
            "phoneNumber": "+1 undefined 339 3172"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 4,
                "day": 15
            },
            "sex": "male",
            "parentName": "Emily Bonnet",
            "profilePhoto": "https://randomuser.me/api/portraits/men/20.jpg"
        },
        "financialRecords": {
            "debt": "$83,400"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "psychology"
        },
        "isOnline": true,
        "studentName": "Brian Bonnet",
        "id": 123456640
    }, {
        "contact": {
            "email": "madison.müller@email.com",
            "phoneNumber": "+1 609 73 341"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 5,
                "day": 1
            },
            "sex": "female",
            "parentName": "Matthew Müller",
            "profilePhoto": "https://randomuser.me/api/portraits/women/20.jpg"
        },
        "financialRecords": {
            "debt": "$69,016"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Madison Müller",
        "id": 123456641
    }, {
        "contact": {
            "email": "jason.toussaint@email.com",
            "phoneNumber": "+1 609 280 2648"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 3,
                "day": 15
            },
            "sex": "male",
            "parentName": "Sophia Toussaint",
            "profilePhoto": "https://randomuser.me/api/portraits/men/21.jpg"
        },
        "financialRecords": {
            "debt": "$48,396"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "Jason Toussaint",
        "id": 123456642
    }, {
        "contact": {
            "email": "olivia.nguyen@email.com",
            "phoneNumber": "+1 732 830 5181"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 7,
                "day": 28
            },
            "sex": "female",
            "parentName": "Jack Nguyen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/21.jpg"
        },
        "financialRecords": {
            "debt": "$53,224"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Olivia Nguyen",
        "id": 123456643
    }, {
        "contact": {
            "email": "andrew.bonnet@email.com",
            "phoneNumber": "+1 732 873 8015"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 3,
                "day": 22
            },
            "sex": "male",
            "parentName": "Elizabeth Bonnet",
            "profilePhoto": "https://randomuser.me/api/portraits/men/22.jpg"
        },
        "financialRecords": {
            "debt": "$85,795"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Andrew Bonnet",
        "id": 123456644
    }, {
        "contact": {
            "email": "emily.harris@email.com",
            "phoneNumber": "+1 856 832 9266"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 9,
                "day": 23
            },
            "sex": "female",
            "parentName": "Thomas Harris",
            "profilePhoto": "https://randomuser.me/api/portraits/women/22.jpg"
        },
        "financialRecords": {
            "debt": "$14,359"
        },
        "academicRecords": {
            "class": "VII A"
        },
        "isOnline": false,
        "studentName": "Emily Harris",
        "id": 123456645
    }, {
        "contact": {
            "email": "joshua.jones@email.com",
            "phoneNumber": "+1 908 263 3359"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 11,
                "day": 2
            },
            "sex": "male",
            "parentName": "Samantha Jones",
            "profilePhoto": "https://randomuser.me/api/portraits/men/23.jpg"
        },
        "financialRecords": {
            "debt": "$19,076"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": true,
        "studentName": "Joshua Jones",
        "id": 123456646
    }, {
        "contact": {
            "email": "sophia.lavigne@email.com",
            "phoneNumber": "+1 856 671 5935"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 4,
                "day": 8
            },
            "sex": "female",
            "parentName": "Matthew Lavigne",
            "profilePhoto": "https://randomuser.me/api/portraits/women/23.jpg"
        },
        "financialRecords": {
            "debt": "$11,537"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "electrical engineering"
        },
        "isOnline": true,
        "studentName": "Sophia Lavigne",
        "id": 123456647
    }, {
        "contact": {
            "email": "tyler.cooper@email.com",
            "phoneNumber": "+1 856 88 6101"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 4,
                "day": 23
            },
            "sex": "male",
            "parentName": "Amy Cooper",
            "profilePhoto": "https://randomuser.me/api/portraits/men/24.jpg"
        },
        "financialRecords": {
            "debt": "$88,987"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "nursing"
        },
        "isOnline": false,
        "studentName": "Tyler Cooper",
        "id": 123456648
    }, {
        "contact": {
            "email": "emily.martinez@email.com",
            "phoneNumber": "+1 908 918 5210"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 1,
                "day": 23
            },
            "sex": "female",
            "parentName": "James Martinez",
            "profilePhoto": "https://randomuser.me/api/portraits/women/24.jpg"
        },
        "financialRecords": {
            "debt": "$67,628"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "biology"
        },
        "isOnline": true,
        "studentName": "Emily Martinez",
        "id": 123456649
    }, {
        "contact": {
            "email": "jonathan.müller@email.com",
            "phoneNumber": "+1 732 323 3173"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 9,
                "day": 14
            },
            "sex": "male",
            "parentName": "Brittany Müller",
            "profilePhoto": "https://randomuser.me/api/portraits/men/25.jpg"
        },
        "financialRecords": {
            "debt": "$92,052"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "computer science"
        },
        "isOnline": true,
        "studentName": "Jonathan Müller",
        "id": 123456650
    }, {
        "contact": {
            "email": "sophia.rodriguez@email.com",
            "phoneNumber": "+1 609 937 6109"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 9,
                "day": 23
            },
            "sex": "female",
            "parentName": "David Rodriguez",
            "profilePhoto": "https://randomuser.me/api/portraits/women/25.jpg"
        },
        "financialRecords": {
            "debt": "$84,317"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "electrical engineering"
        },
        "isOnline": false,
        "studentName": "Sophia Rodriguez",
        "id": 123456651
    }, {
        "contact": {
            "email": "john.thompson@email.com",
            "phoneNumber": "+1 856 714 5514"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 4,
                "day": 30
            },
            "sex": "male",
            "parentName": "Ashley Thompson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/26.jpg"
        },
        "financialRecords": {
            "debt": "$98,382"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "John Thompson",
        "id": 123456652
    }, {
        "contact": {
            "email": "abigail.walker@email.com",
            "phoneNumber": "+1 609 971 3520"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 5,
                "day": 21
            },
            "sex": "female",
            "parentName": "Kyle Walker",
            "profilePhoto": "https://randomuser.me/api/portraits/women/26.jpg"
        },
        "financialRecords": {
            "debt": "$40,231"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "Abigail Walker",
        "id": 123456653
    }, {
        "contact": {
            "email": "matthew.nguyen@email.com",
            "phoneNumber": "+1 609 51 4095"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 10,
                "day": 3
            },
            "sex": "male",
            "parentName": "Lillian Nguyen",
            "profilePhoto": "https://randomuser.me/api/portraits/men/27.jpg"
        },
        "financialRecords": {
            "debt": "$97,454"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "electrical engineering"
        },
        "isOnline": true,
        "studentName": "Matthew Nguyen",
        "id": 123456654
    }, {
        "contact": {
            "email": "heather.perez@email.com",
            "phoneNumber": "+1 732 14 3387"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 9,
                "day": 3
            },
            "sex": "female",
            "parentName": "James Perez",
            "profilePhoto": "https://randomuser.me/api/portraits/women/27.jpg"
        },
        "financialRecords": {
            "debt": "$44,939"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "Heather Perez",
        "id": 123456655
    }, {
        "contact": {
            "email": "christian.taylor@email.com",
            "phoneNumber": "+1 732 667 7090"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 9,
                "day": 3
            },
            "sex": "male",
            "parentName": "Hannah Taylor",
            "profilePhoto": "https://randomuser.me/api/portraits/men/28.jpg"
        },
        "financialRecords": {
            "debt": "$48,222"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "politcal science"
        },
        "isOnline": false,
        "studentName": "Christian Taylor",
        "id": 123456656
    }, {
        "contact": {
            "email": "olivia.campbell@email.com",
            "phoneNumber": "+1 856 456 3889"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 9,
                "day": 12
            },
            "sex": "female",
            "parentName": "Matthew Campbell",
            "profilePhoto": "https://randomuser.me/api/portraits/women/28.jpg"
        },
        "financialRecords": {
            "debt": "$42,345"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Olivia Campbell",
        "id": 123456657
    }, {
        "contact": {
            "email": "nathan.dubois@email.com",
            "phoneNumber": "+1 732 12 1093"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 9,
                "day": 10
            },
            "sex": "male",
            "parentName": "Emily Dubois",
            "profilePhoto": "https://randomuser.me/api/portraits/men/29.jpg"
        },
        "financialRecords": {
            "debt": "$32,681"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "finance"
        },
        "isOnline": true,
        "studentName": "Nathan Dubois",
        "id": 123456658
    }, {
        "contact": {
            "email": "hannah.smith@email.com",
            "phoneNumber": "+1 732 819 7904"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 8,
                "day": 26
            },
            "sex": "female",
            "parentName": "Gabriel Smith",
            "profilePhoto": "https://randomuser.me/api/portraits/women/29.jpg"
        },
        "financialRecords": {
            "debt": "$22,243"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Hannah Smith",
        "id": 123456659
    }, {
        "contact": {
            "email": "kevin.garnier@email.com",
            "phoneNumber": "+1 732 197 936"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 3,
                "day": 25
            },
            "sex": "male",
            "parentName": "Jessica Garnier",
            "profilePhoto": "https://randomuser.me/api/portraits/men/30.jpg"
        },
        "financialRecords": {
            "debt": "$23,055"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "finance"
        },
        "isOnline": true,
        "studentName": "Kevin Garnier",
        "id": 123456660
    }, {
        "contact": {
            "email": "emily.baker@email.com",
            "phoneNumber": "+1 908 818 1255"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 5,
                "day": 13
            },
            "sex": "female",
            "parentName": "Alexander Baker",
            "profilePhoto": "https://randomuser.me/api/portraits/women/30.jpg"
        },
        "financialRecords": {
            "debt": "$68,302"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Emily Baker",
        "id": 123456661
    }, {
        "contact": {
            "email": "jason.martinez@email.com",
            "phoneNumber": "+1 732 327 5443"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 8,
                "day": 22
            },
            "sex": "male",
            "parentName": "Michelle Martinez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/31.jpg"
        },
        "financialRecords": {
            "debt": "$81,332"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "Jason Martinez",
        "id": 123456662
    }, {
        "contact": {
            "email": "olivia.lee@email.com",
            "phoneNumber": "+1 732 718 287"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 12,
                "day": 30
            },
            "sex": "female",
            "parentName": "Joshua Lee",
            "profilePhoto": "https://randomuser.me/api/portraits/women/31.jpg"
        },
        "financialRecords": {
            "debt": "$19,453"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Olivia Lee",
        "id": 123456663
    }, {
        "contact": {
            "email": "jason.roberts@email.com",
            "phoneNumber": "+1 908 120 781"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 10,
                "day": 23
            },
            "sex": "male",
            "parentName": "Susan Roberts",
            "profilePhoto": "https://randomuser.me/api/portraits/men/32.jpg"
        },
        "financialRecords": {
            "debt": "$78,336"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "Jason Roberts",
        "id": 123456664
    }, {
        "contact": {
            "email": "jessica.allen@email.com",
            "phoneNumber": "+1 undefined 78 9458"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 6,
                "day": 20
            },
            "sex": "female",
            "parentName": "Tyler Allen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/32.jpg"
        },
        "financialRecords": {
            "debt": "$99,724"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Jessica Allen",
        "id": 123456665
    }, {
        "contact": {
            "email": "daniel.bonnet@email.com",
            "phoneNumber": "+1 201 646 1659"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 3,
                "day": 20
            },
            "sex": "male",
            "parentName": "Jennifer Bonnet",
            "profilePhoto": "https://randomuser.me/api/portraits/men/33.jpg"
        },
        "financialRecords": {
            "debt": "$36,170"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Daniel Bonnet",
        "id": 123456666
    }, {
        "contact": {
            "email": "angela.richardson@email.com",
            "phoneNumber": "+1 201 308 3209"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 7,
                "day": 19
            },
            "sex": "female",
            "parentName": "Tyler Richardson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/33.jpg"
        },
        "financialRecords": {
            "debt": "$75,088"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Angela Richardson",
        "id": 123456667
    }, {
        "contact": {
            "email": "brandon.martinez@email.com",
            "phoneNumber": "+1 609 365 3171"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 5,
                "day": 3
            },
            "sex": "male",
            "parentName": "Emily Martinez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/34.jpg"
        },
        "financialRecords": {
            "debt": "$6,942"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "nursing"
        },
        "isOnline": false,
        "studentName": "Brandon Martinez",
        "id": 123456668
    }, {
        "contact": {
            "email": "sarah.rogers@email.com",
            "phoneNumber": "+1 undefined 908 4755"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 3,
                "day": 24
            },
            "sex": "female",
            "parentName": "Samuel Rogers",
            "profilePhoto": "https://randomuser.me/api/portraits/women/34.jpg"
        },
        "financialRecords": {
            "debt": "$38,493"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Sarah Rogers",
        "id": 123456669
    }, {
        "contact": {
            "email": "michael.wright@email.com",
            "phoneNumber": "+1 908 894 2963"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 2,
                "day": 11
            },
            "sex": "male",
            "parentName": "Karen Wright",
            "profilePhoto": "https://randomuser.me/api/portraits/men/35.jpg"
        },
        "financialRecords": {
            "debt": "$55,409"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "nursing"
        },
        "isOnline": false,
        "studentName": "Michael Wright",
        "id": 123456670
    }, {
        "contact": {
            "email": "michelle.allen@email.com",
            "phoneNumber": "+1 908 63 3502"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 3,
                "day": 29
            },
            "sex": "female",
            "parentName": "Kyle Allen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/35.jpg"
        },
        "financialRecords": {
            "debt": "$44,615"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "psychology"
        },
        "isOnline": true,
        "studentName": "Michelle Allen",
        "id": 123456671
    }, {
        "contact": {
            "email": "joseph.harris@email.com",
            "phoneNumber": "+1 undefined 981 7926"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 11,
                "day": 1
            },
            "sex": "male",
            "parentName": "Madison Harris",
            "profilePhoto": "https://randomuser.me/api/portraits/men/36.jpg"
        },
        "financialRecords": {
            "debt": "$6,500"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Joseph Harris",
        "id": 123456672
    }, {
        "contact": {
            "email": "madison.williams@email.com",
            "phoneNumber": "+1 201 832 6693"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 4,
                "day": 22
            },
            "sex": "female",
            "parentName": "Christian Williams",
            "profilePhoto": "https://randomuser.me/api/portraits/women/36.jpg"
        },
        "financialRecords": {
            "debt": "$61,748"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Madison Williams",
        "id": 123456673
    }, {
        "contact": {
            "email": "zachary.schneider@email.com",
            "phoneNumber": "+1 609 568 3112"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 2,
                "day": 18
            },
            "sex": "male",
            "parentName": "Sophia Schneider",
            "profilePhoto": "https://randomuser.me/api/portraits/men/37.jpg"
        },
        "financialRecords": {
            "debt": "$12,983"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "Zachary Schneider",
        "id": 123456674
    }, {
        "contact": {
            "email": "emma.li@email.com",
            "phoneNumber": "+1 201 944 6089"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 1,
                "day": 23
            },
            "sex": "female",
            "parentName": "William Li",
            "profilePhoto": "https://randomuser.me/api/portraits/women/37.jpg"
        },
        "financialRecords": {
            "debt": "$72,661"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Emma Li",
        "id": 123456675
    }, {
        "contact": {
            "email": "michael.clark@email.com",
            "phoneNumber": "+1 732 638 3452"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 7,
                "day": 29
            },
            "sex": "male",
            "parentName": "Sarah Clark",
            "profilePhoto": "https://randomuser.me/api/portraits/men/38.jpg"
        },
        "financialRecords": {
            "debt": "$83,777"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "architectural engineering"
        },
        "isOnline": true,
        "studentName": "Michael Clark",
        "id": 123456676
    }, {
        "contact": {
            "email": "hannah.jones@email.com",
            "phoneNumber": "+1 732 981 8824"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 5,
                "day": 3
            },
            "sex": "female",
            "parentName": "Tyler Jones",
            "profilePhoto": "https://randomuser.me/api/portraits/women/38.jpg"
        },
        "financialRecords": {
            "debt": "$53,400"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Hannah Jones",
        "id": 123456677
    }, {
        "contact": {
            "email": "austin.zhang@email.com",
            "phoneNumber": "+1 732 835 2416"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 7,
                "day": 31
            },
            "sex": "male",
            "parentName": "Lisa Zhang",
            "profilePhoto": "https://randomuser.me/api/portraits/men/39.jpg"
        },
        "financialRecords": {
            "debt": "$86,415"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "electrical engineering"
        },
        "isOnline": true,
        "studentName": "Austin Zhang",
        "id": 123456678
    }, {
        "contact": {
            "email": "michelle.williams@email.com",
            "phoneNumber": "+1 732 5 3703"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 5,
                "day": 5
            },
            "sex": "female",
            "parentName": "Mark Williams",
            "profilePhoto": "https://randomuser.me/api/portraits/women/39.jpg"
        },
        "financialRecords": {
            "debt": "$29,371"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "Michelle Williams",
        "id": 123456679
    }, {
        "contact": {
            "email": "kevin.adams@email.com",
            "phoneNumber": "+1 609 982 9098"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 5,
                "day": 12
            },
            "sex": "male",
            "parentName": "Jennifer Adams",
            "profilePhoto": "https://randomuser.me/api/portraits/men/40.jpg"
        },
        "financialRecords": {
            "debt": "$89,699"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "Kevin Adams",
        "id": 123456680
    }, {
        "contact": {
            "email": "susan.lewis@email.com",
            "phoneNumber": "+1 609 335 1445"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 5,
                "day": 22
            },
            "sex": "female",
            "parentName": "Thomas Lewis",
            "profilePhoto": "https://randomuser.me/api/portraits/women/40.jpg"
        },
        "financialRecords": {
            "debt": "$73,791"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Susan Lewis",
        "id": 123456681
    }, {
        "contact": {
            "email": "nathan.rogers@email.com",
            "phoneNumber": "+1 609 717 7932"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 10,
                "day": 22
            },
            "sex": "male",
            "parentName": "Ashley Rogers",
            "profilePhoto": "https://randomuser.me/api/portraits/men/41.jpg"
        },
        "financialRecords": {
            "debt": "$20,759"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "architectural engineering"
        },
        "isOnline": true,
        "studentName": "Nathan Rogers",
        "id": 123456682
    }, {
        "contact": {
            "email": "stephanie.williams@email.com",
            "phoneNumber": "+1 609 20 5530"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 4,
                "day": 1
            },
            "sex": "female",
            "parentName": "Christian Williams",
            "profilePhoto": "https://randomuser.me/api/portraits/women/41.jpg"
        },
        "financialRecords": {
            "debt": "$66,023"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Stephanie Williams",
        "id": 123456683
    }, {
        "contact": {
            "email": "jason.flores@email.com",
            "phoneNumber": "+1 609 541 180"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 10,
                "day": 16
            },
            "sex": "male",
            "parentName": "Ashley Flores",
            "profilePhoto": "https://randomuser.me/api/portraits/men/42.jpg"
        },
        "financialRecords": {
            "debt": "$81,356"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "politcal science"
        },
        "isOnline": true,
        "studentName": "Jason Flores",
        "id": 123456684
    }, {
        "contact": {
            "email": "olivia.taylor@email.com",
            "phoneNumber": "+1 609 569 1593"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 5,
                "day": 4
            },
            "sex": "female",
            "parentName": "David Taylor",
            "profilePhoto": "https://randomuser.me/api/portraits/women/42.jpg"
        },
        "financialRecords": {
            "debt": "$45,935"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "business"
        },
        "isOnline": false,
        "studentName": "Olivia Taylor",
        "id": 123456685
    }, {
        "contact": {
            "email": "zachary.schmidt@email.com",
            "phoneNumber": "+1 908 981 6766"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 7,
                "day": 22
            },
            "sex": "male",
            "parentName": "Sophia Schmidt",
            "profilePhoto": "https://randomuser.me/api/portraits/men/43.jpg"
        },
        "financialRecords": {
            "debt": "$55,552"
        },
        "academicRecords": {
            "class": "VII C"
        },
        "isOnline": true,
        "studentName": "Zachary Schmidt",
        "id": 123456686
    }, {
        "contact": {
            "email": "jennifer.allen@email.com",
            "phoneNumber": "+1 609 40 6506"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 8,
                "day": 14
            },
            "sex": "female",
            "parentName": "Joseph Allen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/43.jpg"
        },
        "financialRecords": {
            "debt": "$55,409"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Jennifer Allen",
        "id": 123456687
    }, {
        "contact": {
            "email": "matthew.jones@email.com",
            "phoneNumber": "+1 undefined 598 7937"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 12,
                "day": 22
            },
            "sex": "male",
            "parentName": "Ashley Jones",
            "profilePhoto": "https://randomuser.me/api/portraits/men/44.jpg"
        },
        "financialRecords": {
            "debt": "$13,150"
        },
        "academicRecords": {
            "class": "VII B"
        },
        "isOnline": false,
        "studentName": "Matthew Jones",
        "id": 123456688
    }, {
        "contact": {
            "email": "sophia.lewis@email.com",
            "phoneNumber": "+1 856 50 263"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 11,
                "day": 4
            },
            "sex": "female",
            "parentName": "Justin Lewis",
            "profilePhoto": "https://randomuser.me/api/portraits/women/44.jpg"
        },
        "financialRecords": {
            "debt": "$75,005"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "mechanical engineering"
        },
        "isOnline": true,
        "studentName": "Sophia Lewis",
        "id": 123456689
    }, {
        "contact": {
            "email": "jacob.bonnet@email.com",
            "phoneNumber": "+1 908 631 5480"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 1,
                "day": 31
            },
            "sex": "male",
            "parentName": "Olivia Bonnet",
            "profilePhoto": "https://randomuser.me/api/portraits/men/45.jpg"
        },
        "financialRecords": {
            "debt": "$91,289"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Jacob Bonnet",
        "id": 123456690
    }, {
        "contact": {
            "email": "michelle.harris@email.com",
            "phoneNumber": "+1 908 638 6231"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 5,
                "day": 19
            },
            "sex": "female",
            "parentName": "Andrew Harris",
            "profilePhoto": "https://randomuser.me/api/portraits/women/45.jpg"
        },
        "financialRecords": {
            "debt": "$4,527"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "architectural engineering"
        },
        "isOnline": true,
        "studentName": "Michelle Harris",
        "id": 123456691
    }, {
        "contact": {
            "email": "gabriel.green@email.com",
            "phoneNumber": "+1 undefined 312 9884"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 1,
                "day": 25
            },
            "sex": "male",
            "parentName": "Mary Green",
            "profilePhoto": "https://randomuser.me/api/portraits/men/46.jpg"
        },
        "financialRecords": {
            "debt": "$26,895"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Gabriel Green",
        "id": 123456692
    }, {
        "contact": {
            "email": "taylor.schneider@email.com",
            "phoneNumber": "+1 undefined 586 7253"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 9,
                "day": 18
            },
            "sex": "female",
            "parentName": "Nathan Schneider",
            "profilePhoto": "https://randomuser.me/api/portraits/women/46.jpg"
        },
        "financialRecords": {
            "debt": "$24,434"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "finance"
        },
        "isOnline": true,
        "studentName": "Taylor Schneider",
        "id": 123456693
    }, {
        "contact": {
            "email": "jonathan.ali@email.com",
            "phoneNumber": "+1 908 126 7820"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 11,
                "day": 13
            },
            "sex": "male",
            "parentName": "Olivia Ali",
            "profilePhoto": "https://randomuser.me/api/portraits/men/47.jpg"
        },
        "financialRecords": {
            "debt": "$28,737"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Jonathan Ali",
        "id": 123456694
    }, {
        "contact": {
            "email": "lisa.wright@email.com",
            "phoneNumber": "+1 201 739 3834"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 4,
                "day": 27
            },
            "sex": "female",
            "parentName": "Ryan Wright",
            "profilePhoto": "https://randomuser.me/api/portraits/women/47.jpg"
        },
        "financialRecords": {
            "debt": "$72,170"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Lisa Wright",
        "id": 123456695
    }, {
        "contact": {
            "email": "matthew.davis@email.com",
            "phoneNumber": "+1 201 270 1575"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 4,
                "day": 22
            },
            "sex": "male",
            "parentName": "Lisa Davis",
            "profilePhoto": "https://randomuser.me/api/portraits/men/48.jpg"
        },
        "financialRecords": {
            "debt": "$78,152"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "communications"
        },
        "isOnline": true,
        "studentName": "Matthew Davis",
        "id": 123456696
    }, {
        "contact": {
            "email": "angela.baker@email.com",
            "phoneNumber": "+1 908 719 2216"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 9,
                "day": 28
            },
            "sex": "female",
            "parentName": "Jason Baker",
            "profilePhoto": "https://randomuser.me/api/portraits/women/48.jpg"
        },
        "financialRecords": {
            "debt": "$59,560"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Angela Baker",
        "id": 123456697
    }, {
        "contact": {
            "email": "matthew.ali@email.com",
            "phoneNumber": "+1 908 51 772"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 2,
                "day": 24
            },
            "sex": "male",
            "parentName": "Michelle Ali",
            "profilePhoto": "https://randomuser.me/api/portraits/men/49.jpg"
        },
        "financialRecords": {
            "debt": "$61,831"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "architectural engineering"
        },
        "isOnline": true,
        "studentName": "Matthew Ali",
        "id": 123456698
    }, {
        "contact": {
            "email": "emma.carter@email.com",
            "phoneNumber": "+1 908 690 9916"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 3,
                "day": 4
            },
            "sex": "female",
            "parentName": "Austin Carter",
            "profilePhoto": "https://randomuser.me/api/portraits/women/49.jpg"
        },
        "financialRecords": {
            "debt": "$41,337"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "nursing"
        },
        "isOnline": false,
        "studentName": "Emma Carter",
        "id": 123456699
    }, {
        "contact": {
            "email": "gabriel.howard@email.com",
            "phoneNumber": "+1 201 194 2112"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 10,
                "day": 28
            },
            "sex": "male",
            "parentName": "Sophia Howard",
            "profilePhoto": "https://randomuser.me/api/portraits/men/50.jpg"
        },
        "financialRecords": {
            "debt": "$34,806"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "Gabriel Howard",
        "id": 123456700
    }, {
        "contact": {
            "email": "emily.smith@email.com",
            "phoneNumber": "+1 201 226 1126"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 10,
                "day": 28
            },
            "sex": "female",
            "parentName": "Ethan Smith",
            "profilePhoto": "https://randomuser.me/api/portraits/women/50.jpg"
        },
        "financialRecords": {
            "debt": "$51,213"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "communications"
        },
        "isOnline": true,
        "studentName": "Emily Smith",
        "id": 123456701
    }, {
        "contact": {
            "email": "william.fournier@email.com",
            "phoneNumber": "+1 609 823 866"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 2,
                "day": 11
            },
            "sex": "male",
            "parentName": "Sophia Fournier",
            "profilePhoto": "https://randomuser.me/api/portraits/men/51.jpg"
        },
        "financialRecords": {
            "debt": "$96,700"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "finance"
        },
        "isOnline": true,
        "studentName": "William Fournier",
        "id": 123456702
    }, {
        "contact": {
            "email": "kimberly.robinson@email.com",
            "phoneNumber": "+1 609 781 2676"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 2,
                "day": 18
            },
            "sex": "female",
            "parentName": "Mark Robinson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/51.jpg"
        },
        "financialRecords": {
            "debt": "$53,198"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "biology"
        },
        "isOnline": true,
        "studentName": "Kimberly Robinson",
        "id": 123456703
    }, {
        "contact": {
            "email": "brandon.bonnet@email.com",
            "phoneNumber": "+1 201 536 8704"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 11,
                "day": 8
            },
            "sex": "male",
            "parentName": "Kayla Bonnet",
            "profilePhoto": "https://randomuser.me/api/portraits/men/52.jpg"
        },
        "financialRecords": {
            "debt": "$15,111"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Brandon Bonnet",
        "id": 123456704
    }, {
        "contact": {
            "email": "samantha.cooper@email.com",
            "phoneNumber": "+1 201 811 9368"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 3,
                "day": 25
            },
            "sex": "female",
            "parentName": "Gabriel Cooper",
            "profilePhoto": "https://randomuser.me/api/portraits/women/52.jpg"
        },
        "financialRecords": {
            "debt": "$94,636"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "mechanical engineering"
        },
        "isOnline": true,
        "studentName": "Samantha Cooper",
        "id": 123456705
    }, {
        "contact": {
            "email": "anthony.fournier@email.com",
            "phoneNumber": "+1 201 7 8327"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 9,
                "day": 16
            },
            "sex": "male",
            "parentName": "Karen Fournier",
            "profilePhoto": "https://randomuser.me/api/portraits/men/53.jpg"
        },
        "financialRecords": {
            "debt": "$41,227"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "psychology"
        },
        "isOnline": true,
        "studentName": "Anthony Fournier",
        "id": 123456706
    }, {
        "contact": {
            "email": "abigail.richardson@email.com",
            "phoneNumber": "+1 201 259 9885"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 9,
                "day": 20
            },
            "sex": "female",
            "parentName": "William Richardson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/53.jpg"
        },
        "financialRecords": {
            "debt": "$31,416"
        },
        "academicRecords": {
            "class": "VII C"
        },
        "isOnline": false,
        "studentName": "Abigail Richardson",
        "id": 123456707
    }, {
        "contact": {
            "email": "kyle.nelson@email.com",
            "phoneNumber": "+1 856 725 5302"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 2,
                "day": 11
            },
            "sex": "male",
            "parentName": "Abigail Nelson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/54.jpg"
        },
        "financialRecords": {
            "debt": "$42,110"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "nursing"
        },
        "isOnline": false,
        "studentName": "Kyle Nelson",
        "id": 123456708
    }, {
        "contact": {
            "email": "melissa.walker@email.com",
            "phoneNumber": "+1 609 219 5109"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 7,
                "day": 1
            },
            "sex": "female",
            "parentName": "Jacob Walker",
            "profilePhoto": "https://randomuser.me/api/portraits/women/54.jpg"
        },
        "financialRecords": {
            "debt": "$63,129"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Melissa Walker",
        "id": 123456709
    }, {
        "contact": {
            "email": "christopher.nguyen@email.com",
            "phoneNumber": "+1 undefined 625 2381"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 10,
                "day": 29
            },
            "sex": "male",
            "parentName": "Hannah Nguyen",
            "profilePhoto": "https://randomuser.me/api/portraits/men/55.jpg"
        },
        "financialRecords": {
            "debt": "$76,382"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "mechanical engineering"
        },
        "isOnline": false,
        "studentName": "Christopher Nguyen",
        "id": 123456710
    }, {
        "contact": {
            "email": "ashley.anderson@email.com",
            "phoneNumber": "+1 201 823 9372"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 6,
                "day": 12
            },
            "sex": "female",
            "parentName": "Brian Anderson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/55.jpg"
        },
        "financialRecords": {
            "debt": "$72,812"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Ashley Anderson",
        "id": 123456711
    }, {
        "contact": {
            "email": "brandon.fournier@email.com",
            "phoneNumber": "+1 732 439 5983"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 7,
                "day": 21
            },
            "sex": "male",
            "parentName": "Susan Fournier",
            "profilePhoto": "https://randomuser.me/api/portraits/men/56.jpg"
        },
        "financialRecords": {
            "debt": "$98,097"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Brandon Fournier",
        "id": 123456712
    }, {
        "contact": {
            "email": "taylor.martinez@email.com",
            "phoneNumber": "+1 201 600 7593"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 3,
                "day": 10
            },
            "sex": "female",
            "parentName": "David Martinez",
            "profilePhoto": "https://randomuser.me/api/portraits/women/56.jpg"
        },
        "financialRecords": {
            "debt": "$43,404"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "mechanical engineering"
        },
        "isOnline": false,
        "studentName": "Taylor Martinez",
        "id": 123456713
    }, {
        "contact": {
            "email": "christian.wright@email.com",
            "phoneNumber": "+1 201 435 3712"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 3,
                "day": 25
            },
            "sex": "male",
            "parentName": "Linda Wright",
            "profilePhoto": "https://randomuser.me/api/portraits/men/57.jpg"
        },
        "financialRecords": {
            "debt": "$72,632"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "nursing"
        },
        "isOnline": false,
        "studentName": "Christian Wright",
        "id": 123456714
    }, {
        "contact": {
            "email": "jessica.nguyen@email.com",
            "phoneNumber": "+1 609 227 5998"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 8,
                "day": 30
            },
            "sex": "female",
            "parentName": "Thomas Nguyen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/57.jpg"
        },
        "financialRecords": {
            "debt": "$22,549"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Jessica Nguyen",
        "id": 123456715
    }, {
        "contact": {
            "email": "william.wilson@email.com",
            "phoneNumber": "+1 856 863 2381"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 7,
                "day": 3
            },
            "sex": "male",
            "parentName": "Lillian Wilson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/58.jpg"
        },
        "financialRecords": {
            "debt": "$73,161"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "electrical engineering"
        },
        "isOnline": true,
        "studentName": "William Wilson",
        "id": 123456716
    }, {
        "contact": {
            "email": "amanda.braun@email.com",
            "phoneNumber": "+1 201 2 1815"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 8,
                "day": 12
            },
            "sex": "female",
            "parentName": "Christian Braun",
            "profilePhoto": "https://randomuser.me/api/portraits/women/58.jpg"
        },
        "financialRecords": {
            "debt": "$28,354"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Amanda Braun",
        "id": 123456717
    }, {
        "contact": {
            "email": "david.monet@email.com",
            "phoneNumber": "+1 609 908 2368"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 9,
                "day": 1
            },
            "sex": "male",
            "parentName": "Lisa Monet",
            "profilePhoto": "https://randomuser.me/api/portraits/men/59.jpg"
        },
        "financialRecords": {
            "debt": "$94,013"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "David Monet",
        "id": 123456718
    }, {
        "contact": {
            "email": "jennifer.chen@email.com",
            "phoneNumber": "+1 201 708 5365"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 1,
                "day": 28
            },
            "sex": "female",
            "parentName": "Tyler Chen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/59.jpg"
        },
        "financialRecords": {
            "debt": "$13,617"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Jennifer Chen",
        "id": 123456719
    }, {
        "contact": {
            "email": "john.howard@email.com",
            "phoneNumber": "+1 856 730 8165"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 7,
                "day": 29
            },
            "sex": "male",
            "parentName": "Angela Howard",
            "profilePhoto": "https://randomuser.me/api/portraits/men/60.jpg"
        },
        "financialRecords": {
            "debt": "$92,072"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "John Howard",
        "id": 123456720
    }, {
        "contact": {
            "email": "nicole.baker@email.com",
            "phoneNumber": "+1 201 504 2962"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 7,
                "day": 5
            },
            "sex": "female",
            "parentName": "Joshua Baker",
            "profilePhoto": "https://randomuser.me/api/portraits/women/60.jpg"
        },
        "financialRecords": {
            "debt": "$87,168"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Nicole Baker",
        "id": 123456721
    }, {
        "contact": {
            "email": "michael.bonnet@email.com",
            "phoneNumber": "+1 856 227 675"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 5,
                "day": 26
            },
            "sex": "male",
            "parentName": "Kimberly Bonnet",
            "profilePhoto": "https://randomuser.me/api/portraits/men/61.jpg"
        },
        "financialRecords": {
            "debt": "$80,002"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Michael Bonnet",
        "id": 123456722
    }, {
        "contact": {
            "email": "sarah.walker@email.com",
            "phoneNumber": "+1 732 724 2686"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 6,
                "day": 15
            },
            "sex": "female",
            "parentName": "Ryan Walker",
            "profilePhoto": "https://randomuser.me/api/portraits/women/61.jpg"
        },
        "financialRecords": {
            "debt": "$3,553"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Sarah Walker",
        "id": 123456723
    }, {
        "contact": {
            "email": "jonathan.chen@email.com",
            "phoneNumber": "+1 732 773 6041"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 7,
                "day": 15
            },
            "sex": "male",
            "parentName": "Kimberly Chen",
            "profilePhoto": "https://randomuser.me/api/portraits/men/62.jpg"
        },
        "financialRecords": {
            "debt": "$55,293"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Jonathan Chen",
        "id": 123456724
    }, {
        "contact": {
            "email": "abigail.liu@email.com",
            "phoneNumber": "+1 856 986 4897"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 9,
                "day": 13
            },
            "sex": "female",
            "parentName": "Jason Liu",
            "profilePhoto": "https://randomuser.me/api/portraits/women/62.jpg"
        },
        "financialRecords": {
            "debt": "$6,864"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Abigail Liu",
        "id": 123456725
    }, {
        "contact": {
            "email": "alexander.walker@email.com",
            "phoneNumber": "+1 201 713 9734"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 4,
                "day": 1
            },
            "sex": "male",
            "parentName": "Nicole Walker",
            "profilePhoto": "https://randomuser.me/api/portraits/men/63.jpg"
        },
        "financialRecords": {
            "debt": "$89,999"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "Alexander Walker",
        "id": 123456726
    }, {
        "contact": {
            "email": "samantha.zhang@email.com",
            "phoneNumber": "+1 732 217 3742"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 5,
                "day": 21
            },
            "sex": "female",
            "parentName": "Zachary Zhang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/63.jpg"
        },
        "financialRecords": {
            "debt": "$73,401"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Samantha Zhang",
        "id": 123456727
    }, {
        "contact": {
            "email": "nathan.peterson@email.com",
            "phoneNumber": "+1 856 594 3070"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 1
            },
            "sex": "male",
            "parentName": "Samantha Peterson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/64.jpg"
        },
        "financialRecords": {
            "debt": "$90,103"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Nathan Peterson",
        "id": 123456728
    }, {
        "contact": {
            "email": "sophia.allen@email.com",
            "phoneNumber": "+1 732 978 1341"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 8,
                "day": 8
            },
            "sex": "female",
            "parentName": "William Allen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/64.jpg"
        },
        "financialRecords": {
            "debt": "$64,774"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "nursing"
        },
        "isOnline": true,
        "studentName": "Sophia Allen",
        "id": 123456729
    }, {
        "contact": {
            "email": "brandon.young@email.com",
            "phoneNumber": "+1 856 348 9720"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 11,
                "day": 18
            },
            "sex": "male",
            "parentName": "Kayla Young",
            "profilePhoto": "https://randomuser.me/api/portraits/men/65.jpg"
        },
        "financialRecords": {
            "debt": "$45,784"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "architectural engineering"
        },
        "isOnline": true,
        "studentName": "Brandon Young",
        "id": 123456730
    }, {
        "contact": {
            "email": "elizabeth.smith@email.com",
            "phoneNumber": "+1 201 357 8230"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 10,
                "day": 19
            },
            "sex": "female",
            "parentName": "Anthony Smith",
            "profilePhoto": "https://randomuser.me/api/portraits/women/65.jpg"
        },
        "financialRecords": {
            "debt": "$60,198"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Elizabeth Smith",
        "id": 123456731
    }, {
        "contact": {
            "email": "jonathan.baker@email.com",
            "phoneNumber": "+1 609 461 309"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 4,
                "day": 7
            },
            "sex": "male",
            "parentName": "Patricia Baker",
            "profilePhoto": "https://randomuser.me/api/portraits/men/66.jpg"
        },
        "financialRecords": {
            "debt": "$94,958"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "Jonathan Baker",
        "id": 123456732
    }, {
        "contact": {
            "email": "emma.toussaint@email.com",
            "phoneNumber": "+1 201 644 8113"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 8,
                "day": 16
            },
            "sex": "female",
            "parentName": "Robert Toussaint",
            "profilePhoto": "https://randomuser.me/api/portraits/women/66.jpg"
        },
        "financialRecords": {
            "debt": "$37,133"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "nursing"
        },
        "isOnline": true,
        "studentName": "Emma Toussaint",
        "id": 123456733
    }, {
        "contact": {
            "email": "joshua.wilson@email.com",
            "phoneNumber": "+1 201 751 7682"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 12,
                "day": 12
            },
            "sex": "male",
            "parentName": "Nicole Wilson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/67.jpg"
        },
        "financialRecords": {
            "debt": "$89,757"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Joshua Wilson",
        "id": 123456734
    }, {
        "contact": {
            "email": "stephanie.taylor@email.com",
            "phoneNumber": "+1 732 456 6517"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 7,
                "day": 22
            },
            "sex": "female",
            "parentName": "Anthony Taylor",
            "profilePhoto": "https://randomuser.me/api/portraits/women/67.jpg"
        },
        "financialRecords": {
            "debt": "$39,080"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "nursing"
        },
        "isOnline": true,
        "studentName": "Stephanie Taylor",
        "id": 123456735
    }, {
        "contact": {
            "email": "david.schmidt@email.com",
            "phoneNumber": "+1 856 931 4611"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 6,
                "day": 18
            },
            "sex": "male",
            "parentName": "Karen Schmidt",
            "profilePhoto": "https://randomuser.me/api/portraits/men/68.jpg"
        },
        "financialRecords": {
            "debt": "$49,978"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "David Schmidt",
        "id": 123456736
    }, {
        "contact": {
            "email": "megan.braun@email.com",
            "phoneNumber": "+1 856 954 1025"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 1,
                "day": 8
            },
            "sex": "female",
            "parentName": "Thomas Braun",
            "profilePhoto": "https://randomuser.me/api/portraits/women/68.jpg"
        },
        "financialRecords": {
            "debt": "$98,600"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "nursing"
        },
        "isOnline": false,
        "studentName": "Megan Braun",
        "id": 123456737
    }, {
        "contact": {
            "email": "james.roberts@email.com",
            "phoneNumber": "+1 609 116 64"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 4,
                "day": 12
            },
            "sex": "male",
            "parentName": "Michelle Roberts",
            "profilePhoto": "https://randomuser.me/api/portraits/men/69.jpg"
        },
        "financialRecords": {
            "debt": "$91,756"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "communications"
        },
        "isOnline": true,
        "studentName": "James Roberts",
        "id": 123456738
    }, {
        "contact": {
            "email": "alexis.jones@email.com",
            "phoneNumber": "+1 856 688 2522"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 2,
                "day": 15
            },
            "sex": "female",
            "parentName": "Nicholas Jones",
            "profilePhoto": "https://randomuser.me/api/portraits/women/69.jpg"
        },
        "financialRecords": {
            "debt": "$2,465"
        },
        "academicRecords": {
            "class": "VII B"
        },
        "isOnline": true,
        "studentName": "Alexis Jones",
        "id": 123456739
    }, {
        "contact": {
            "email": "christopher.thompson@email.com",
            "phoneNumber": "+1 undefined 955 6952"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 5,
                "day": 6
            },
            "sex": "male",
            "parentName": "Melissa Thompson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/70.jpg"
        },
        "financialRecords": {
            "debt": "$26,711"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "psychology"
        },
        "isOnline": true,
        "studentName": "Christopher Thompson",
        "id": 123456740
    }, {
        "contact": {
            "email": "angela.white@email.com",
            "phoneNumber": "+1 undefined 417 1722"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 2,
                "day": 18
            },
            "sex": "female",
            "parentName": "Kevin White",
            "profilePhoto": "https://randomuser.me/api/portraits/women/70.jpg"
        },
        "financialRecords": {
            "debt": "$14,233"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Angela White",
        "id": 123456741
    }, {
        "contact": {
            "email": "thomas.smith@email.com",
            "phoneNumber": "+1 609 296 8102"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 3,
                "day": 3
            },
            "sex": "male",
            "parentName": "Lillian Smith",
            "profilePhoto": "https://randomuser.me/api/portraits/men/71.jpg"
        },
        "financialRecords": {
            "debt": "$89,622"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "psychology"
        },
        "isOnline": true,
        "studentName": "Thomas Smith",
        "id": 123456742
    }, {
        "contact": {
            "email": "patricia.chen@email.com",
            "phoneNumber": "+1 201 367 624"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 8,
                "day": 5
            },
            "sex": "female",
            "parentName": "Ethan Chen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/71.jpg"
        },
        "financialRecords": {
            "debt": "$50,389"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Patricia Chen",
        "id": 123456743
    }, {
        "contact": {
            "email": "ethan.rogers@email.com",
            "phoneNumber": "+1 undefined 317 7408"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 4,
                "day": 13
            },
            "sex": "male",
            "parentName": "Linda Rogers",
            "profilePhoto": "https://randomuser.me/api/portraits/men/72.jpg"
        },
        "financialRecords": {
            "debt": "$89,337"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "architectural engineering"
        },
        "isOnline": false,
        "studentName": "Ethan Rogers",
        "id": 123456744
    }, {
        "contact": {
            "email": "sophia.jones@email.com",
            "phoneNumber": "+1 856 353 4819"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 1,
                "day": 24
            },
            "sex": "female",
            "parentName": "James Jones",
            "profilePhoto": "https://randomuser.me/api/portraits/women/72.jpg"
        },
        "financialRecords": {
            "debt": "$25,012"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Sophia Jones",
        "id": 123456745
    }, {
        "contact": {
            "email": "tyler.harris@email.com",
            "phoneNumber": "+1 856 232 253"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 5,
                "day": 29
            },
            "sex": "male",
            "parentName": "Michelle Harris",
            "profilePhoto": "https://randomuser.me/api/portraits/men/73.jpg"
        },
        "financialRecords": {
            "debt": "$94,498"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "psychology"
        },
        "isOnline": true,
        "studentName": "Tyler Harris",
        "id": 123456746
    }, {
        "contact": {
            "email": "stephanie.mitchell@email.com",
            "phoneNumber": "+1 undefined 430 9156"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 7,
                "day": 4
            },
            "sex": "female",
            "parentName": "Austin Mitchell",
            "profilePhoto": "https://randomuser.me/api/portraits/women/73.jpg"
        },
        "financialRecords": {
            "debt": "$88,032"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "psychology"
        },
        "isOnline": true,
        "studentName": "Stephanie Mitchell",
        "id": 123456747
    }, {
        "contact": {
            "email": "john.schneider@email.com",
            "phoneNumber": "+1 201 898 6763"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 12,
                "day": 27
            },
            "sex": "male",
            "parentName": "Heather Schneider",
            "profilePhoto": "https://randomuser.me/api/portraits/men/74.jpg"
        },
        "financialRecords": {
            "debt": "$84,993"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "John Schneider",
        "id": 123456748
    }, {
        "contact": {
            "email": "amy.adams@email.com",
            "phoneNumber": "+1 undefined 519 7282"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 5,
                "day": 27
            },
            "sex": "female",
            "parentName": "James Adams",
            "profilePhoto": "https://randomuser.me/api/portraits/women/74.jpg"
        },
        "financialRecords": {
            "debt": "$73,648"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Amy Adams",
        "id": 123456749
    }, {
        "contact": {
            "email": "austin.nguyen@email.com",
            "phoneNumber": "+1 609 675 10"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 3,
                "day": 16
            },
            "sex": "male",
            "parentName": "Michelle Nguyen",
            "profilePhoto": "https://randomuser.me/api/portraits/men/75.jpg"
        },
        "financialRecords": {
            "debt": "$34,550"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "computer science"
        },
        "isOnline": true,
        "studentName": "Austin Nguyen",
        "id": 123456750
    }, {
        "contact": {
            "email": "elizabeth.howard@email.com",
            "phoneNumber": "+1 732 477 3790"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 7,
                "day": 20
            },
            "sex": "female",
            "parentName": "William Howard",
            "profilePhoto": "https://randomuser.me/api/portraits/women/75.jpg"
        },
        "financialRecords": {
            "debt": "$2,014"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Elizabeth Howard",
        "id": 123456751
    }, {
        "contact": {
            "email": "joshua.wright@email.com",
            "phoneNumber": "+1 undefined 696 3790"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 3,
                "day": 6
            },
            "sex": "male",
            "parentName": "Kayla Wright",
            "profilePhoto": "https://randomuser.me/api/portraits/men/76.jpg"
        },
        "financialRecords": {
            "debt": "$26,745"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Joshua Wright",
        "id": 123456752
    }, {
        "contact": {
            "email": "linda.chen@email.com",
            "phoneNumber": "+1 201 269 5048"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 3,
                "day": 5
            },
            "sex": "female",
            "parentName": "Nicholas Chen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/76.jpg"
        },
        "financialRecords": {
            "debt": "$49,995"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "electrical engineering"
        },
        "isOnline": false,
        "studentName": "Linda Chen",
        "id": 123456753
    }, {
        "contact": {
            "email": "thomas.schmidt@email.com",
            "phoneNumber": "+1 609 528 6582"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 4,
                "day": 8
            },
            "sex": "male",
            "parentName": "Stephanie Schmidt",
            "profilePhoto": "https://randomuser.me/api/portraits/men/77.jpg"
        },
        "financialRecords": {
            "debt": "$27,098"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "Thomas Schmidt",
        "id": 123456754
    }, {
        "contact": {
            "email": "angela.fournier@email.com",
            "phoneNumber": "+1 201 33 4586"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 6,
                "day": 20
            },
            "sex": "female",
            "parentName": "Kevin Fournier",
            "profilePhoto": "https://randomuser.me/api/portraits/women/77.jpg"
        },
        "financialRecords": {
            "debt": "$11,258"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "Angela Fournier",
        "id": 123456755
    }, {
        "contact": {
            "email": "james.perez@email.com",
            "phoneNumber": "+1 201 268 906"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 9,
                "day": 28
            },
            "sex": "male",
            "parentName": "Megan Perez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/78.jpg"
        },
        "financialRecords": {
            "debt": "$6,543"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "James Perez",
        "id": 123456756
    }, {
        "contact": {
            "email": "amy.toussaint@email.com",
            "phoneNumber": "+1 undefined 856 2343"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 5,
                "day": 2
            },
            "sex": "female",
            "parentName": "Matthew Toussaint",
            "profilePhoto": "https://randomuser.me/api/portraits/women/78.jpg"
        },
        "financialRecords": {
            "debt": "$71,048"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "nursing"
        },
        "isOnline": true,
        "studentName": "Amy Toussaint",
        "id": 123456757
    }, {
        "contact": {
            "email": "austin.bonnet@email.com",
            "phoneNumber": "+1 732 960 9873"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 6,
                "day": 8
            },
            "sex": "male",
            "parentName": "Samantha Bonnet",
            "profilePhoto": "https://randomuser.me/api/portraits/men/79.jpg"
        },
        "financialRecords": {
            "debt": "$85,974"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Austin Bonnet",
        "id": 123456758
    }, {
        "contact": {
            "email": "emily.carter@email.com",
            "phoneNumber": "+1 856 848 8513"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 10,
                "day": 2
            },
            "sex": "female",
            "parentName": "Brandon Carter",
            "profilePhoto": "https://randomuser.me/api/portraits/women/79.jpg"
        },
        "financialRecords": {
            "debt": "$20,959"
        },
        "academicRecords": {
            "class": "VII A"
        },
        "isOnline": false,
        "studentName": "Emily Carter",
        "id": 123456759
    }, {
        "contact": {
            "email": "justin.richardson@email.com",
            "phoneNumber": "+1 201 969 4968"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 4,
                "day": 11
            },
            "sex": "male",
            "parentName": "Elizabeth Richardson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/80.jpg"
        },
        "financialRecords": {
            "debt": "$19,456"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "mechanical engineering"
        },
        "isOnline": true,
        "studentName": "Justin Richardson",
        "id": 123456760
    }, {
        "contact": {
            "email": "heather.flores@email.com",
            "phoneNumber": "+1 732 386 8644"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 10,
                "day": 28
            },
            "sex": "female",
            "parentName": "Jonathan Flores",
            "profilePhoto": "https://randomuser.me/api/portraits/women/80.jpg"
        },
        "financialRecords": {
            "debt": "$60,726"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Heather Flores",
        "id": 123456761
    }, {
        "contact": {
            "email": "joseph.zhang@email.com",
            "phoneNumber": "+1 609 799 4265"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 1,
                "day": 8
            },
            "sex": "male",
            "parentName": "Kayla Zhang",
            "profilePhoto": "https://randomuser.me/api/portraits/men/81.jpg"
        },
        "financialRecords": {
            "debt": "$38,466"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "architectural engineering"
        },
        "isOnline": true,
        "studentName": "Joseph Zhang",
        "id": 123456762
    }, {
        "contact": {
            "email": "patricia.anderson@email.com",
            "phoneNumber": "+1 732 122 5685"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 12,
                "day": 10
            },
            "sex": "female",
            "parentName": "Daniel Anderson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/81.jpg"
        },
        "financialRecords": {
            "debt": "$92,948"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "nursing"
        },
        "isOnline": true,
        "studentName": "Patricia Anderson",
        "id": 123456763
    }, {
        "contact": {
            "email": "joseph.müller@email.com",
            "phoneNumber": "+1 908 550 7875"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 12,
                "day": 1
            },
            "sex": "male",
            "parentName": "Ashley Müller",
            "profilePhoto": "https://randomuser.me/api/portraits/men/82.jpg"
        },
        "financialRecords": {
            "debt": "$70,911"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "electrical engineering"
        },
        "isOnline": false,
        "studentName": "Joseph Müller",
        "id": 123456764
    }, {
        "contact": {
            "email": "jessica.howard@email.com",
            "phoneNumber": "+1 856 110 6376"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 6,
                "day": 11
            },
            "sex": "female",
            "parentName": "Jack Howard",
            "profilePhoto": "https://randomuser.me/api/portraits/women/82.jpg"
        },
        "financialRecords": {
            "debt": "$43,191"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "politcal science"
        },
        "isOnline": false,
        "studentName": "Jessica Howard",
        "id": 123456765
    }, {
        "contact": {
            "email": "ethan.howard@email.com",
            "phoneNumber": "+1 732 361 612"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 7,
                "day": 25
            },
            "sex": "male",
            "parentName": "Abigail Howard",
            "profilePhoto": "https://randomuser.me/api/portraits/men/83.jpg"
        },
        "financialRecords": {
            "debt": "$66,823"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": true,
        "studentName": "Ethan Howard",
        "id": 123456766
    }, {
        "contact": {
            "email": "hannah.schmidt@email.com",
            "phoneNumber": "+1 856 720 9171"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 8,
                "day": 20
            },
            "sex": "female",
            "parentName": "Matthew Schmidt",
            "profilePhoto": "https://randomuser.me/api/portraits/women/83.jpg"
        },
        "financialRecords": {
            "debt": "$36,662"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Hannah Schmidt",
        "id": 123456767
    }, {
        "contact": {
            "email": "nicholas.mitchell@email.com",
            "phoneNumber": "+1 856 752 8992"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 1,
                "day": 3
            },
            "sex": "male",
            "parentName": "Sarah Mitchell",
            "profilePhoto": "https://randomuser.me/api/portraits/men/84.jpg"
        },
        "financialRecords": {
            "debt": "$54,277"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "Nicholas Mitchell",
        "id": 123456768
    }, {
        "contact": {
            "email": "lillian.liu@email.com",
            "phoneNumber": "+1 201 525 1306"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 9,
                "day": 14
            },
            "sex": "female",
            "parentName": "Ethan Liu",
            "profilePhoto": "https://randomuser.me/api/portraits/women/84.jpg"
        },
        "financialRecords": {
            "debt": "$61,951"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "architectural engineering"
        },
        "isOnline": false,
        "studentName": "Lillian Liu",
        "id": 123456769
    }, {
        "contact": {
            "email": "thomas.harris@email.com",
            "phoneNumber": "+1 201 213 3190"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 11,
                "day": 28
            },
            "sex": "male",
            "parentName": "Mary Harris",
            "profilePhoto": "https://randomuser.me/api/portraits/men/85.jpg"
        },
        "financialRecords": {
            "debt": "$66,354"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "Thomas Harris",
        "id": 123456770
    }, {
        "contact": {
            "email": "brittany.young@email.com",
            "phoneNumber": "+1 609 718 7713"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 10,
                "day": 8
            },
            "sex": "female",
            "parentName": "Samuel Young",
            "profilePhoto": "https://randomuser.me/api/portraits/women/85.jpg"
        },
        "financialRecords": {
            "debt": "$19,798"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "communications"
        },
        "isOnline": true,
        "studentName": "Brittany Young",
        "id": 123456771
    }, {
        "contact": {
            "email": "christian.mitchell@email.com",
            "phoneNumber": "+1 201 759 2782"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 8,
                "day": 19
            },
            "sex": "male",
            "parentName": "Melissa Mitchell",
            "profilePhoto": "https://randomuser.me/api/portraits/men/86.jpg"
        },
        "financialRecords": {
            "debt": "$67,753"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Christian Mitchell",
        "id": 123456772
    }, {
        "contact": {
            "email": "mary.carter@email.com",
            "phoneNumber": "+1 201 56 415"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 3,
                "day": 14
            },
            "sex": "female",
            "parentName": "Zachary Carter",
            "profilePhoto": "https://randomuser.me/api/portraits/women/86.jpg"
        },
        "financialRecords": {
            "debt": "$53,690"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Mary Carter",
        "id": 123456773
    }, {
        "contact": {
            "email": "brian.cooper@email.com",
            "phoneNumber": "+1 856 586 8794"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 3,
                "day": 30
            },
            "sex": "male",
            "parentName": "Susan Cooper",
            "profilePhoto": "https://randomuser.me/api/portraits/men/87.jpg"
        },
        "financialRecords": {
            "debt": "$8,827"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "Brian Cooper",
        "id": 123456774
    }, {
        "contact": {
            "email": "elizabeth.smith@email.com",
            "phoneNumber": "+1 908 456 4777"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 7,
                "day": 17
            },
            "sex": "female",
            "parentName": "Jason Smith",
            "profilePhoto": "https://randomuser.me/api/portraits/women/87.jpg"
        },
        "financialRecords": {
            "debt": "$37,049"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Elizabeth Smith",
        "id": 123456775
    }, {
        "contact": {
            "email": "joseph.liu@email.com",
            "phoneNumber": "+1 732 404 4578"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 12,
                "day": 6
            },
            "sex": "male",
            "parentName": "Mary Liu",
            "profilePhoto": "https://randomuser.me/api/portraits/men/88.jpg"
        },
        "financialRecords": {
            "debt": "$63,190"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "Joseph Liu",
        "id": 123456776
    }, {
        "contact": {
            "email": "madison.liang@email.com",
            "phoneNumber": "+1 856 41 495"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 3,
                "day": 30
            },
            "sex": "female",
            "parentName": "Samuel Liang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/88.jpg"
        },
        "financialRecords": {
            "debt": "$13,155"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "Madison Liang",
        "id": 123456777
    }, {
        "contact": {
            "email": "christian.richardson@email.com",
            "phoneNumber": "+1 856 885 493"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 9,
                "day": 8
            },
            "sex": "male",
            "parentName": "Elizabeth Richardson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/89.jpg"
        },
        "financialRecords": {
            "debt": "$69,130"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Christian Richardson",
        "id": 123456778
    }, {
        "contact": {
            "email": "amanda.wright@email.com",
            "phoneNumber": "+1 732 922 8755"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 8,
                "day": 28
            },
            "sex": "female",
            "parentName": "Tyler Wright",
            "profilePhoto": "https://randomuser.me/api/portraits/women/89.jpg"
        },
        "financialRecords": {
            "debt": "$2,784"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Amanda Wright",
        "id": 123456779
    }, {
        "contact": {
            "email": "tyler.hall@email.com",
            "phoneNumber": "+1 732 1 8835"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 10,
                "day": 6
            },
            "sex": "male",
            "parentName": "Hannah Hall",
            "profilePhoto": "https://randomuser.me/api/portraits/men/90.jpg"
        },
        "financialRecords": {
            "debt": "$66,718"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "electrical engineering"
        },
        "isOnline": true,
        "studentName": "Tyler Hall",
        "id": 123456780
    }, {
        "contact": {
            "email": "heather.williams@email.com",
            "phoneNumber": "+1 856 98 4171"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 4,
                "day": 25
            },
            "sex": "female",
            "parentName": "Christopher Williams",
            "profilePhoto": "https://randomuser.me/api/portraits/women/90.jpg"
        },
        "financialRecords": {
            "debt": "$73,654"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Heather Williams",
        "id": 123456781
    }, {
        "contact": {
            "email": "david.fournier@email.com",
            "phoneNumber": "+1 732 111 2411"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 6,
                "day": 15
            },
            "sex": "male",
            "parentName": "Hannah Fournier",
            "profilePhoto": "https://randomuser.me/api/portraits/men/91.jpg"
        },
        "financialRecords": {
            "debt": "$67,628"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "electrical engineering"
        },
        "isOnline": true,
        "studentName": "David Fournier",
        "id": 123456782
    }, {
        "contact": {
            "email": "susan.flores@email.com",
            "phoneNumber": "+1 201 229 7247"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 6,
                "day": 24
            },
            "sex": "female",
            "parentName": "Austin Flores",
            "profilePhoto": "https://randomuser.me/api/portraits/women/91.jpg"
        },
        "financialRecords": {
            "debt": "$1,383"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Susan Flores",
        "id": 123456783
    }, {
        "contact": {
            "email": "tyler.monet@email.com",
            "phoneNumber": "+1 856 878 9452"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 9,
                "day": 11
            },
            "sex": "male",
            "parentName": "Heather Monet",
            "profilePhoto": "https://randomuser.me/api/portraits/men/92.jpg"
        },
        "financialRecords": {
            "debt": "$49,837"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "Tyler Monet",
        "id": 123456784
    }, {
        "contact": {
            "email": "mary.white@email.com",
            "phoneNumber": "+1 609 494 7506"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 10,
                "day": 1
            },
            "sex": "female",
            "parentName": "James White",
            "profilePhoto": "https://randomuser.me/api/portraits/women/92.jpg"
        },
        "financialRecords": {
            "debt": "$36,341"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Mary White",
        "id": 123456785
    }, {
        "contact": {
            "email": "brandon.lee@email.com",
            "phoneNumber": "+1 908 941 3472"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 3,
                "day": 19
            },
            "sex": "male",
            "parentName": "Nicole Lee",
            "profilePhoto": "https://randomuser.me/api/portraits/men/93.jpg"
        },
        "financialRecords": {
            "debt": "$83,231"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "Brandon Lee",
        "id": 123456786
    }, {
        "contact": {
            "email": "alexis.schulz@email.com",
            "phoneNumber": "+1 201 331 1574"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 6,
                "day": 3
            },
            "sex": "female",
            "parentName": "Robert Schulz",
            "profilePhoto": "https://randomuser.me/api/portraits/women/93.jpg"
        },
        "financialRecords": {
            "debt": "$31,848"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Alexis Schulz",
        "id": 123456787
    }, {
        "contact": {
            "email": "jason.miller@email.com",
            "phoneNumber": "+1 732 406 9804"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 3,
                "day": 18
            },
            "sex": "male",
            "parentName": "Ashley Miller",
            "profilePhoto": "https://randomuser.me/api/portraits/men/94.jpg"
        },
        "financialRecords": {
            "debt": "$56,919"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "Jason Miller",
        "id": 123456788
    }, {
        "contact": {
            "email": "brittany.lavigne@email.com",
            "phoneNumber": "+1 201 865 2674"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 10,
                "day": 28
            },
            "sex": "female",
            "parentName": "Brandon Lavigne",
            "profilePhoto": "https://randomuser.me/api/portraits/women/94.jpg"
        },
        "financialRecords": {
            "debt": "$13,067"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Brittany Lavigne",
        "id": 123456789
    }, {
        "contact": {
            "email": "christopher.müller@email.com",
            "phoneNumber": "+1 609 627 1833"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 9,
                "day": 21
            },
            "sex": "male",
            "parentName": "Kayla Müller",
            "profilePhoto": "https://randomuser.me/api/portraits/men/95.jpg"
        },
        "financialRecords": {
            "debt": "$39,317"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": true,
        "studentName": "Christopher Müller",
        "id": 123456790
    }, {
        "contact": {
            "email": "lillian.wilson@email.com",
            "phoneNumber": "+1 856 289 5812"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 10,
                "day": 4
            },
            "sex": "female",
            "parentName": "Joseph Wilson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/95.jpg"
        },
        "financialRecords": {
            "debt": "$35,731"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Lillian Wilson",
        "id": 123456791
    }, {
        "contact": {
            "email": "mark.perez@email.com",
            "phoneNumber": "+1 609 396 723"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 7,
                "day": 3
            },
            "sex": "male",
            "parentName": "Amanda Perez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/96.jpg"
        },
        "financialRecords": {
            "debt": "$85,062"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Mark Perez",
        "id": 123456792
    }, {
        "contact": {
            "email": "megan.nelson@email.com",
            "phoneNumber": "+1 856 310 2854"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 4,
                "day": 6
            },
            "sex": "female",
            "parentName": "Samuel Nelson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/96.jpg"
        },
        "financialRecords": {
            "debt": "$87,137"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Megan Nelson",
        "id": 123456793
    }, {
        "contact": {
            "email": "thomas.miller@email.com",
            "phoneNumber": "+1 732 354 3155"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 6,
                "day": 13
            },
            "sex": "male",
            "parentName": "Lillian Miller",
            "profilePhoto": "https://randomuser.me/api/portraits/men/97.jpg"
        },
        "financialRecords": {
            "debt": "$78,639"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "finance"
        },
        "isOnline": true,
        "studentName": "Thomas Miller",
        "id": 123456794
    }, {
        "contact": {
            "email": "linda.moore@email.com",
            "phoneNumber": "+1 609 695 7770"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 8,
                "day": 6
            },
            "sex": "female",
            "parentName": "Samuel Moore",
            "profilePhoto": "https://randomuser.me/api/portraits/women/97.jpg"
        },
        "financialRecords": {
            "debt": "$88,281"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "Linda Moore",
        "id": 123456795
    }, {
        "contact": {
            "email": "ethan.edwards@email.com",
            "phoneNumber": "+1 201 960 7671"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 10,
                "day": 22
            },
            "sex": "male",
            "parentName": "Brittany Edwards",
            "profilePhoto": "https://randomuser.me/api/portraits/men/98.jpg"
        },
        "financialRecords": {
            "debt": "$25,386"
        },
        "academicRecords": {
            "class": "VII B"
        },
        "isOnline": true,
        "studentName": "Ethan Edwards",
        "id": 123456796
    }, {
        "contact": {
            "email": "emily.young@email.com",
            "phoneNumber": "+1 856 636 3963"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 3,
                "day": 19
            },
            "sex": "female",
            "parentName": "Jack Young",
            "profilePhoto": "https://randomuser.me/api/portraits/women/98.jpg"
        },
        "financialRecords": {
            "debt": "$11,987"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "politcal science"
        },
        "isOnline": true,
        "studentName": "Emily Young",
        "id": 123456797
    }, {
        "contact": {
            "email": "david.hall@email.com",
            "phoneNumber": "+1 908 119 6095"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 2,
                "day": 24
            },
            "sex": "male",
            "parentName": "Kayla Hall",
            "profilePhoto": "https://randomuser.me/api/portraits/men/99.jpg"
        },
        "financialRecords": {
            "debt": "$46,971"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "business"
        },
        "isOnline": false,
        "studentName": "David Hall",
        "id": 123456798
    }, {
        "contact": {
            "email": "lillian.hall@email.com",
            "phoneNumber": "+1 856 647 1662"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 8,
                "day": 31
            },
            "sex": "female",
            "parentName": "William Hall",
            "profilePhoto": "https://randomuser.me/api/portraits/women/99.jpg"
        },
        "financialRecords": {
            "debt": "$30,259"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "nursing"
        },
        "isOnline": true,
        "studentName": "Lillian Hall",
        "id": 123456799
    }, {
        "contact": {
            "email": "christian.schneider@email.com",
            "phoneNumber": "+1 732 620 1477"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 6,
                "day": 16
            },
            "sex": "male",
            "parentName": "Heather Schneider",
            "profilePhoto": "https://randomuser.me/api/portraits/men/0.jpg"
        },
        "financialRecords": {
            "debt": "$907"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "nursing"
        },
        "isOnline": false,
        "studentName": "Christian Schneider",
        "id": 123456800
    }, {
        "contact": {
            "email": "isabella.gonzalez@email.com",
            "phoneNumber": "+1 908 505 6925"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 7,
                "day": 3
            },
            "sex": "female",
            "parentName": "Jacob Gonzalez",
            "profilePhoto": "https://randomuser.me/api/portraits/women/0.jpg"
        },
        "financialRecords": {
            "debt": "$2,171"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Isabella Gonzalez",
        "id": 123456801
    }, {
        "contact": {
            "email": "justin.dupont@email.com",
            "phoneNumber": "+1 609 358 5440"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 1,
                "day": 20
            },
            "sex": "male",
            "parentName": "Jennifer Dupont",
            "profilePhoto": "https://randomuser.me/api/portraits/men/1.jpg"
        },
        "financialRecords": {
            "debt": "$35,567"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": true,
        "studentName": "Justin Dupont",
        "id": 123456802
    }, {
        "contact": {
            "email": "hannah.taylor@email.com",
            "phoneNumber": "+1 856 390 7942"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 24
            },
            "sex": "female",
            "parentName": "Jacob Taylor",
            "profilePhoto": "https://randomuser.me/api/portraits/women/1.jpg"
        },
        "financialRecords": {
            "debt": "$72,340"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "nursing"
        },
        "isOnline": true,
        "studentName": "Hannah Taylor",
        "id": 123456803
    }, {
        "contact": {
            "email": "samuel.brown@email.com",
            "phoneNumber": "+1 609 514 5174"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 7,
                "day": 8
            },
            "sex": "male",
            "parentName": "Mary Brown",
            "profilePhoto": "https://randomuser.me/api/portraits/men/2.jpg"
        },
        "financialRecords": {
            "debt": "$69,339"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Samuel Brown",
        "id": 123456804
    }, {
        "contact": {
            "email": "heather.scott@email.com",
            "phoneNumber": "+1 856 235 6130"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 4,
                "day": 16
            },
            "sex": "female",
            "parentName": "Robert Scott",
            "profilePhoto": "https://randomuser.me/api/portraits/women/2.jpg"
        },
        "financialRecords": {
            "debt": "$12,156"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "Heather Scott",
        "id": 123456805
    }, {
        "contact": {
            "email": "brian.ali@email.com",
            "phoneNumber": "+1 856 1 9489"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 9,
                "day": 5
            },
            "sex": "male",
            "parentName": "Brittany Ali",
            "profilePhoto": "https://randomuser.me/api/portraits/men/3.jpg"
        },
        "financialRecords": {
            "debt": "$91,703"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Brian Ali",
        "id": 123456806
    }, {
        "contact": {
            "email": "isabella.zhang@email.com",
            "phoneNumber": "+1 908 670 6551"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 8,
                "day": 17
            },
            "sex": "female",
            "parentName": "Nicholas Zhang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/3.jpg"
        },
        "financialRecords": {
            "debt": "$18,710"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "politcal science"
        },
        "isOnline": false,
        "studentName": "Isabella Zhang",
        "id": 123456807
    }, {
        "contact": {
            "email": "james.fournier@email.com",
            "phoneNumber": "+1 609 823 3372"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 8,
                "day": 9
            },
            "sex": "male",
            "parentName": "Linda Fournier",
            "profilePhoto": "https://randomuser.me/api/portraits/men/4.jpg"
        },
        "financialRecords": {
            "debt": "$91,500"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "nursing"
        },
        "isOnline": true,
        "studentName": "James Fournier",
        "id": 123456808
    }, {
        "contact": {
            "email": "emily.ali@email.com",
            "phoneNumber": "+1 201 228 4653"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 2,
                "day": 6
            },
            "sex": "female",
            "parentName": "William Ali",
            "profilePhoto": "https://randomuser.me/api/portraits/women/4.jpg"
        },
        "financialRecords": {
            "debt": "$30,312"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "architectural engineering"
        },
        "isOnline": false,
        "studentName": "Emily Ali",
        "id": 123456809
    }, {
        "contact": {
            "email": "brian.gonzalez@email.com",
            "phoneNumber": "+1 609 658 5942"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 11,
                "day": 20
            },
            "sex": "male",
            "parentName": "Abigail Gonzalez",
            "profilePhoto": "https://randomuser.me/api/portraits/men/5.jpg"
        },
        "financialRecords": {
            "debt": "$53,696"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "Brian Gonzalez",
        "id": 123456810
    }, {
        "contact": {
            "email": "patricia.müller@email.com",
            "phoneNumber": "+1 609 839 7957"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 6,
                "day": 10
            },
            "sex": "female",
            "parentName": "Jacob Müller",
            "profilePhoto": "https://randomuser.me/api/portraits/women/5.jpg"
        },
        "financialRecords": {
            "debt": "$58,659"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "psychology"
        },
        "isOnline": true,
        "studentName": "Patricia Müller",
        "id": 123456811
    }, {
        "contact": {
            "email": "nathan.walker@email.com",
            "phoneNumber": "+1 201 499 4628"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 3,
                "day": 27
            },
            "sex": "male",
            "parentName": "Angela Walker",
            "profilePhoto": "https://randomuser.me/api/portraits/men/6.jpg"
        },
        "financialRecords": {
            "debt": "$46,417"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "architectural engineering"
        },
        "isOnline": false,
        "studentName": "Nathan Walker",
        "id": 123456812
    }, {
        "contact": {
            "email": "susan.baker@email.com",
            "phoneNumber": "+1 undefined 220 6055"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 7,
                "day": 30
            },
            "sex": "female",
            "parentName": "Christian Baker",
            "profilePhoto": "https://randomuser.me/api/portraits/women/6.jpg"
        },
        "financialRecords": {
            "debt": "$94,565"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Susan Baker",
        "id": 123456813
    }, {
        "contact": {
            "email": "michael.richardson@email.com",
            "phoneNumber": "+1 908 126 428"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 5,
                "day": 3
            },
            "sex": "male",
            "parentName": "Kimberly Richardson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/7.jpg"
        },
        "financialRecords": {
            "debt": "$27,737"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "electrical engineering"
        },
        "isOnline": true,
        "studentName": "Michael Richardson",
        "id": 123456814
    }, {
        "contact": {
            "email": "nicole.adams@email.com",
            "phoneNumber": "+1 609 123 654"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 8,
                "day": 6
            },
            "sex": "female",
            "parentName": "Kevin Adams",
            "profilePhoto": "https://randomuser.me/api/portraits/women/7.jpg"
        },
        "financialRecords": {
            "debt": "$43,163"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Nicole Adams",
        "id": 123456815
    }, {
        "contact": {
            "email": "andrew.zimmerman@email.com",
            "phoneNumber": "+1 732 117 3852"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 3,
                "day": 26
            },
            "sex": "male",
            "parentName": "Jennifer Zimmerman",
            "profilePhoto": "https://randomuser.me/api/portraits/men/8.jpg"
        },
        "financialRecords": {
            "debt": "$69,108"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "psychology"
        },
        "isOnline": true,
        "studentName": "Andrew Zimmerman",
        "id": 123456816
    }, {
        "contact": {
            "email": "stephanie.miller@email.com",
            "phoneNumber": "+1 undefined 765 4286"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 4,
                "day": 15
            },
            "sex": "female",
            "parentName": "Justin Miller",
            "profilePhoto": "https://randomuser.me/api/portraits/women/8.jpg"
        },
        "financialRecords": {
            "debt": "$45,163"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Stephanie Miller",
        "id": 123456817
    }, {
        "contact": {
            "email": "andrew.liu@email.com",
            "phoneNumber": "+1 856 530 8991"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 18
            },
            "sex": "male",
            "parentName": "Michelle Liu",
            "profilePhoto": "https://randomuser.me/api/portraits/men/9.jpg"
        },
        "financialRecords": {
            "debt": "$77,057"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Andrew Liu",
        "id": 123456818
    }, {
        "contact": {
            "email": "lillian.white@email.com",
            "phoneNumber": "+1 908 193 2974"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 9,
                "day": 3
            },
            "sex": "female",
            "parentName": "Joseph White",
            "profilePhoto": "https://randomuser.me/api/portraits/women/9.jpg"
        },
        "financialRecords": {
            "debt": "$89,927"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "politcal science"
        },
        "isOnline": false,
        "studentName": "Lillian White",
        "id": 123456819
    }, {
        "contact": {
            "email": "alexander.wilson@email.com",
            "phoneNumber": "+1 908 804 1985"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 9,
                "day": 19
            },
            "sex": "male",
            "parentName": "Hannah Wilson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/10.jpg"
        },
        "financialRecords": {
            "debt": "$85,855"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Alexander Wilson",
        "id": 123456820
    }, {
        "contact": {
            "email": "jennifer.fournier@email.com",
            "phoneNumber": "+1 908 283 741"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 9,
                "day": 7
            },
            "sex": "female",
            "parentName": "Jack Fournier",
            "profilePhoto": "https://randomuser.me/api/portraits/women/10.jpg"
        },
        "financialRecords": {
            "debt": "$5,802"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "biology"
        },
        "isOnline": true,
        "studentName": "Jennifer Fournier",
        "id": 123456821
    }, {
        "contact": {
            "email": "michael.campbell@email.com",
            "phoneNumber": "+1 609 63 7439"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 2,
                "day": 2
            },
            "sex": "male",
            "parentName": "Isabella Campbell",
            "profilePhoto": "https://randomuser.me/api/portraits/men/11.jpg"
        },
        "financialRecords": {
            "debt": "$70,737"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "politcal science"
        },
        "isOnline": false,
        "studentName": "Michael Campbell",
        "id": 123456822
    }, {
        "contact": {
            "email": "amy.green@email.com",
            "phoneNumber": "+1 201 13 6136"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 2,
                "day": 8
            },
            "sex": "female",
            "parentName": "Mark Green",
            "profilePhoto": "https://randomuser.me/api/portraits/women/11.jpg"
        },
        "financialRecords": {
            "debt": "$4,710"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "electrical engineering"
        },
        "isOnline": true,
        "studentName": "Amy Green",
        "id": 123456823
    }, {
        "contact": {
            "email": "alexander.smith@email.com",
            "phoneNumber": "+1 201 941 7036"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 10,
                "day": 3
            },
            "sex": "male",
            "parentName": "Elizabeth Smith",
            "profilePhoto": "https://randomuser.me/api/portraits/men/12.jpg"
        },
        "financialRecords": {
            "debt": "$74,563"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "computer science"
        },
        "isOnline": true,
        "studentName": "Alexander Smith",
        "id": 123456824
    }, {
        "contact": {
            "email": "ashley.zhang@email.com",
            "phoneNumber": "+1 732 859 144"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 1,
                "day": 15
            },
            "sex": "female",
            "parentName": "Kevin Zhang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/12.jpg"
        },
        "financialRecords": {
            "debt": "$73,918"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Ashley Zhang",
        "id": 123456825
    }, {
        "contact": {
            "email": "ethan.schmidt@email.com",
            "phoneNumber": "+1 undefined 581 4026"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 10,
                "day": 18
            },
            "sex": "male",
            "parentName": "Melissa Schmidt",
            "profilePhoto": "https://randomuser.me/api/portraits/men/13.jpg"
        },
        "financialRecords": {
            "debt": "$45,940"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Ethan Schmidt",
        "id": 123456826
    }, {
        "contact": {
            "email": "madison.harris@email.com",
            "phoneNumber": "+1 undefined 219 7818"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 9,
                "day": 27
            },
            "sex": "female",
            "parentName": "Andrew Harris",
            "profilePhoto": "https://randomuser.me/api/portraits/women/13.jpg"
        },
        "financialRecords": {
            "debt": "$55,288"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "mechanical engineering"
        },
        "isOnline": false,
        "studentName": "Madison Harris",
        "id": 123456827
    }, {
        "contact": {
            "email": "matthew.liu@email.com",
            "phoneNumber": "+1 201 267 2046"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 10,
                "day": 10
            },
            "sex": "male",
            "parentName": "Stephanie Liu",
            "profilePhoto": "https://randomuser.me/api/portraits/men/14.jpg"
        },
        "financialRecords": {
            "debt": "$50,880"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "Matthew Liu",
        "id": 123456828
    }, {
        "contact": {
            "email": "lisa.adams@email.com",
            "phoneNumber": "+1 609 338 6466"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 6,
                "day": 22
            },
            "sex": "female",
            "parentName": "Jack Adams",
            "profilePhoto": "https://randomuser.me/api/portraits/women/14.jpg"
        },
        "financialRecords": {
            "debt": "$70,145"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Lisa Adams",
        "id": 123456829
    }, {
        "contact": {
            "email": "austin.anderson@email.com",
            "phoneNumber": "+1 201 916 5667"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 8,
                "day": 9
            },
            "sex": "male",
            "parentName": "Sarah Anderson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/15.jpg"
        },
        "financialRecords": {
            "debt": "$79,098"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "Austin Anderson",
        "id": 123456830
    }, {
        "contact": {
            "email": "kimberly.martinez@email.com",
            "phoneNumber": "+1 201 956 1995"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 11,
                "day": 22
            },
            "sex": "female",
            "parentName": "Nathan Martinez",
            "profilePhoto": "https://randomuser.me/api/portraits/women/15.jpg"
        },
        "financialRecords": {
            "debt": "$90,726"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "politcal science"
        },
        "isOnline": false,
        "studentName": "Kimberly Martinez",
        "id": 123456831
    }, {
        "contact": {
            "email": "kyle.chen@email.com",
            "phoneNumber": "+1 undefined 810 6293"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 10,
                "day": 18
            },
            "sex": "male",
            "parentName": "Ashley Chen",
            "profilePhoto": "https://randomuser.me/api/portraits/men/16.jpg"
        },
        "financialRecords": {
            "debt": "$41,550"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Kyle Chen",
        "id": 123456832
    }, {
        "contact": {
            "email": "emily.richardson@email.com",
            "phoneNumber": "+1 609 975 5006"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 12,
                "day": 19
            },
            "sex": "female",
            "parentName": "Joshua Richardson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/16.jpg"
        },
        "financialRecords": {
            "debt": "$27,969"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "Emily Richardson",
        "id": 123456833
    }, {
        "contact": {
            "email": "kyle.miller@email.com",
            "phoneNumber": "+1 856 55 4711"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 8,
                "day": 26
            },
            "sex": "male",
            "parentName": "Lisa Miller",
            "profilePhoto": "https://randomuser.me/api/portraits/men/17.jpg"
        },
        "financialRecords": {
            "debt": "$80,167"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "Kyle Miller",
        "id": 123456834
    }, {
        "contact": {
            "email": "kimberly.taylor@email.com",
            "phoneNumber": "+1 609 608 2999"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 12,
                "day": 10
            },
            "sex": "female",
            "parentName": "Jack Taylor",
            "profilePhoto": "https://randomuser.me/api/portraits/women/17.jpg"
        },
        "financialRecords": {
            "debt": "$93,569"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "architectural engineering"
        },
        "isOnline": false,
        "studentName": "Kimberly Taylor",
        "id": 123456835
    }, {
        "contact": {
            "email": "brandon.rogers@email.com",
            "phoneNumber": "+1 908 953 8974"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 2,
                "day": 23
            },
            "sex": "male",
            "parentName": "Jessica Rogers",
            "profilePhoto": "https://randomuser.me/api/portraits/men/18.jpg"
        },
        "financialRecords": {
            "debt": "$31,461"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Brandon Rogers",
        "id": 123456836
    }, {
        "contact": {
            "email": "michelle.moore@email.com",
            "phoneNumber": "+1 732 703 9808"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 7,
                "day": 19
            },
            "sex": "female",
            "parentName": "William Moore",
            "profilePhoto": "https://randomuser.me/api/portraits/women/18.jpg"
        },
        "financialRecords": {
            "debt": "$87,961"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "communications"
        },
        "isOnline": true,
        "studentName": "Michelle Moore",
        "id": 123456837
    }, {
        "contact": {
            "email": "jonathan.scott@email.com",
            "phoneNumber": "+1 609 404 1377"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 10,
                "day": 18
            },
            "sex": "male",
            "parentName": "Melissa Scott",
            "profilePhoto": "https://randomuser.me/api/portraits/men/19.jpg"
        },
        "financialRecords": {
            "debt": "$35,515"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Jonathan Scott",
        "id": 123456838
    }, {
        "contact": {
            "email": "lisa.green@email.com",
            "phoneNumber": "+1 908 38 3710"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 7,
                "day": 5
            },
            "sex": "female",
            "parentName": "William Green",
            "profilePhoto": "https://randomuser.me/api/portraits/women/19.jpg"
        },
        "financialRecords": {
            "debt": "$37,495"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Lisa Green",
        "id": 123456839
    }, {
        "contact": {
            "email": "jack.carter@email.com",
            "phoneNumber": "+1 856 190 7380"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 3,
                "day": 5
            },
            "sex": "male",
            "parentName": "Ashley Carter",
            "profilePhoto": "https://randomuser.me/api/portraits/men/20.jpg"
        },
        "financialRecords": {
            "debt": "$571"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "Jack Carter",
        "id": 123456840
    }, {
        "contact": {
            "email": "jessica.zimmerman@email.com",
            "phoneNumber": "+1 856 411 8219"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 7,
                "day": 7
            },
            "sex": "female",
            "parentName": "Joshua Zimmerman",
            "profilePhoto": "https://randomuser.me/api/portraits/women/20.jpg"
        },
        "financialRecords": {
            "debt": "$75,080"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Jessica Zimmerman",
        "id": 123456841
    }, {
        "contact": {
            "email": "joseph.allen@email.com",
            "phoneNumber": "+1 201 998 5739"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 6,
                "day": 26
            },
            "sex": "male",
            "parentName": "Kimberly Allen",
            "profilePhoto": "https://randomuser.me/api/portraits/men/21.jpg"
        },
        "financialRecords": {
            "debt": "$37,699"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Joseph Allen",
        "id": 123456842
    }, {
        "contact": {
            "email": "angela.nelson@email.com",
            "phoneNumber": "+1 201 147 9214"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 3,
                "day": 29
            },
            "sex": "female",
            "parentName": "Jack Nelson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/21.jpg"
        },
        "financialRecords": {
            "debt": "$61,393"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "politcal science"
        },
        "isOnline": true,
        "studentName": "Angela Nelson",
        "id": 123456843
    }, {
        "contact": {
            "email": "tyler.garnier@email.com",
            "phoneNumber": "+1 856 934 8338"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 1,
                "day": 7
            },
            "sex": "male",
            "parentName": "Megan Garnier",
            "profilePhoto": "https://randomuser.me/api/portraits/men/22.jpg"
        },
        "financialRecords": {
            "debt": "$39,828"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Tyler Garnier",
        "id": 123456844
    }, {
        "contact": {
            "email": "lillian.adams@email.com",
            "phoneNumber": "+1 201 890 2852"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 8,
                "day": 6
            },
            "sex": "female",
            "parentName": "Nathan Adams",
            "profilePhoto": "https://randomuser.me/api/portraits/women/22.jpg"
        },
        "financialRecords": {
            "debt": "$92,369"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Lillian Adams",
        "id": 123456845
    }, {
        "contact": {
            "email": "ryan.williams@email.com",
            "phoneNumber": "+1 732 658 3939"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 4,
                "day": 12
            },
            "sex": "male",
            "parentName": "Kimberly Williams",
            "profilePhoto": "https://randomuser.me/api/portraits/men/23.jpg"
        },
        "financialRecords": {
            "debt": "$97,988"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "architectural engineering"
        },
        "isOnline": false,
        "studentName": "Ryan Williams",
        "id": 123456846
    }, {
        "contact": {
            "email": "nicole.adams@email.com",
            "phoneNumber": "+1 908 640 2474"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 3,
                "day": 20
            },
            "sex": "female",
            "parentName": "Anthony Adams",
            "profilePhoto": "https://randomuser.me/api/portraits/women/23.jpg"
        },
        "financialRecords": {
            "debt": "$22,672"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "architectural engineering"
        },
        "isOnline": false,
        "studentName": "Nicole Adams",
        "id": 123456847
    }, {
        "contact": {
            "email": "jonathan.green@email.com",
            "phoneNumber": "+1 undefined 918 7763"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 4,
                "day": 14
            },
            "sex": "male",
            "parentName": "Patricia Green",
            "profilePhoto": "https://randomuser.me/api/portraits/men/24.jpg"
        },
        "financialRecords": {
            "debt": "$30,659"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "nursing"
        },
        "isOnline": true,
        "studentName": "Jonathan Green",
        "id": 123456848
    }, {
        "contact": {
            "email": "lisa.zhang@email.com",
            "phoneNumber": "+1 undefined 599 9467"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 4,
                "day": 17
            },
            "sex": "female",
            "parentName": "Matthew Zhang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/24.jpg"
        },
        "financialRecords": {
            "debt": "$13,387"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Lisa Zhang",
        "id": 123456849
    }, {
        "contact": {
            "email": "zachary.moore@email.com",
            "phoneNumber": "+1 856 836 1733"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 2,
                "day": 9
            },
            "sex": "male",
            "parentName": "Patricia Moore",
            "profilePhoto": "https://randomuser.me/api/portraits/men/25.jpg"
        },
        "financialRecords": {
            "debt": "$89,220"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "electrical engineering"
        },
        "isOnline": false,
        "studentName": "Zachary Moore",
        "id": 123456850
    }, {
        "contact": {
            "email": "brittany.anderson@email.com",
            "phoneNumber": "+1 908 130 6228"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 5,
                "day": 19
            },
            "sex": "female",
            "parentName": "Jack Anderson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/25.jpg"
        },
        "financialRecords": {
            "debt": "$18,808"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Brittany Anderson",
        "id": 123456851
    }, {
        "contact": {
            "email": "joshua.clark@email.com",
            "phoneNumber": "+1 609 532 7510"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 4,
                "day": 10
            },
            "sex": "male",
            "parentName": "Nicole Clark",
            "profilePhoto": "https://randomuser.me/api/portraits/men/26.jpg"
        },
        "financialRecords": {
            "debt": "$86,563"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "mechanical engineering"
        },
        "isOnline": true,
        "studentName": "Joshua Clark",
        "id": 123456852
    }, {
        "contact": {
            "email": "patricia.wright@email.com",
            "phoneNumber": "+1 908 928 2038"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 8,
                "day": 27
            },
            "sex": "female",
            "parentName": "Tyler Wright",
            "profilePhoto": "https://randomuser.me/api/portraits/women/26.jpg"
        },
        "financialRecords": {
            "debt": "$49,205"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "psychology"
        },
        "isOnline": true,
        "studentName": "Patricia Wright",
        "id": 123456853
    }, {
        "contact": {
            "email": "john.mitchell@email.com",
            "phoneNumber": "+1 856 948 3959"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 3,
                "day": 10
            },
            "sex": "male",
            "parentName": "Kimberly Mitchell",
            "profilePhoto": "https://randomuser.me/api/portraits/men/27.jpg"
        },
        "financialRecords": {
            "debt": "$92,857"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "John Mitchell",
        "id": 123456854
    }, {
        "contact": {
            "email": "amy.li@email.com",
            "phoneNumber": "+1 201 337 6545"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 2,
                "day": 10
            },
            "sex": "female",
            "parentName": "Ryan Li",
            "profilePhoto": "https://randomuser.me/api/portraits/women/27.jpg"
        },
        "financialRecords": {
            "debt": "$52,864"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "architectural engineering"
        },
        "isOnline": true,
        "studentName": "Amy Li",
        "id": 123456855
    }, {
        "contact": {
            "email": "christopher.chen@email.com",
            "phoneNumber": "+1 undefined 717 5629"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 2,
                "day": 18
            },
            "sex": "male",
            "parentName": "Ashley Chen",
            "profilePhoto": "https://randomuser.me/api/portraits/men/28.jpg"
        },
        "financialRecords": {
            "debt": "$82,100"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "politcal science"
        },
        "isOnline": true,
        "studentName": "Christopher Chen",
        "id": 123456856
    }, {
        "contact": {
            "email": "susan.wang@email.com",
            "phoneNumber": "+1 856 928 9929"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 1,
                "day": 14
            },
            "sex": "female",
            "parentName": "Jacob Wang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/28.jpg"
        },
        "financialRecords": {
            "debt": "$99,846"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "Susan Wang",
        "id": 123456857
    }, {
        "contact": {
            "email": "jason.ali@email.com",
            "phoneNumber": "+1 609 210 7591"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 1,
                "day": 25
            },
            "sex": "male",
            "parentName": "Brittany Ali",
            "profilePhoto": "https://randomuser.me/api/portraits/men/29.jpg"
        },
        "financialRecords": {
            "debt": "$67,417"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Jason Ali",
        "id": 123456858
    }, {
        "contact": {
            "email": "madison.thompson@email.com",
            "phoneNumber": "+1 201 763 7154"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 3,
                "day": 1
            },
            "sex": "female",
            "parentName": "Tyler Thompson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/29.jpg"
        },
        "financialRecords": {
            "debt": "$70,277"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "psychology"
        },
        "isOnline": true,
        "studentName": "Madison Thompson",
        "id": 123456859
    }, {
        "contact": {
            "email": "john.wang@email.com",
            "phoneNumber": "+1 201 18 8025"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 8,
                "day": 13
            },
            "sex": "male",
            "parentName": "Kayla Wang",
            "profilePhoto": "https://randomuser.me/api/portraits/men/30.jpg"
        },
        "financialRecords": {
            "debt": "$68,049"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "electrical engineering"
        },
        "isOnline": true,
        "studentName": "John Wang",
        "id": 123456860
    }, {
        "contact": {
            "email": "lisa.peterson@email.com",
            "phoneNumber": "+1 undefined 246 3702"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 9,
                "day": 1
            },
            "sex": "female",
            "parentName": "Mark Peterson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/30.jpg"
        },
        "financialRecords": {
            "debt": "$7,239"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Lisa Peterson",
        "id": 123456861
    }, {
        "contact": {
            "email": "jacob.moore@email.com",
            "phoneNumber": "+1 908 383 2796"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 10,
                "day": 23
            },
            "sex": "male",
            "parentName": "Susan Moore",
            "profilePhoto": "https://randomuser.me/api/portraits/men/31.jpg"
        },
        "financialRecords": {
            "debt": "$17,910"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "nursing"
        },
        "isOnline": false,
        "studentName": "Jacob Moore",
        "id": 123456862
    }, {
        "contact": {
            "email": "angela.edwards@email.com",
            "phoneNumber": "+1 609 480 611"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 4,
                "day": 27
            },
            "sex": "female",
            "parentName": "Samuel Edwards",
            "profilePhoto": "https://randomuser.me/api/portraits/women/31.jpg"
        },
        "financialRecords": {
            "debt": "$50,280"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "mechanical engineering"
        },
        "isOnline": false,
        "studentName": "Angela Edwards",
        "id": 123456863
    }, {
        "contact": {
            "email": "ethan.robinson@email.com",
            "phoneNumber": "+1 201 609 9342"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 9,
                "day": 13
            },
            "sex": "male",
            "parentName": "Karen Robinson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/32.jpg"
        },
        "financialRecords": {
            "debt": "$18,525"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "psychology"
        },
        "isOnline": true,
        "studentName": "Ethan Robinson",
        "id": 123456864
    }, {
        "contact": {
            "email": "emily.hall@email.com",
            "phoneNumber": "+1 201 687 2169"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 9,
                "day": 2
            },
            "sex": "female",
            "parentName": "Gabriel Hall",
            "profilePhoto": "https://randomuser.me/api/portraits/women/32.jpg"
        },
        "financialRecords": {
            "debt": "$34,827"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "nursing"
        },
        "isOnline": false,
        "studentName": "Emily Hall",
        "id": 123456865
    }, {
        "contact": {
            "email": "christopher.moore@email.com",
            "phoneNumber": "+1 201 286 9872"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 6,
                "day": 16
            },
            "sex": "male",
            "parentName": "Olivia Moore",
            "profilePhoto": "https://randomuser.me/api/portraits/men/33.jpg"
        },
        "financialRecords": {
            "debt": "$74,604"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Christopher Moore",
        "id": 123456866
    }, {
        "contact": {
            "email": "jennifer.miller@email.com",
            "phoneNumber": "+1 732 495 8156"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 9,
                "day": 29
            },
            "sex": "female",
            "parentName": "Michael Miller",
            "profilePhoto": "https://randomuser.me/api/portraits/women/33.jpg"
        },
        "financialRecords": {
            "debt": "$24,216"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "mechanical engineering"
        },
        "isOnline": false,
        "studentName": "Jennifer Miller",
        "id": 123456867
    }, {
        "contact": {
            "email": "brandon.zhang@email.com",
            "phoneNumber": "+1 732 919 4714"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 9,
                "day": 11
            },
            "sex": "male",
            "parentName": "Kimberly Zhang",
            "profilePhoto": "https://randomuser.me/api/portraits/men/34.jpg"
        },
        "financialRecords": {
            "debt": "$97,246"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "Brandon Zhang",
        "id": 123456868
    }, {
        "contact": {
            "email": "megan.harris@email.com",
            "phoneNumber": "+1 609 441 5846"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 7,
                "day": 9
            },
            "sex": "female",
            "parentName": "Joseph Harris",
            "profilePhoto": "https://randomuser.me/api/portraits/women/34.jpg"
        },
        "financialRecords": {
            "debt": "$36,619"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "nursing"
        },
        "isOnline": false,
        "studentName": "Megan Harris",
        "id": 123456869
    }, {
        "contact": {
            "email": "anthony.dupont@email.com",
            "phoneNumber": "+1 609 646 8272"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 7,
                "day": 8
            },
            "sex": "male",
            "parentName": "Nicole Dupont",
            "profilePhoto": "https://randomuser.me/api/portraits/men/35.jpg"
        },
        "financialRecords": {
            "debt": "$98,300"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "politcal science"
        },
        "isOnline": true,
        "studentName": "Anthony Dupont",
        "id": 123456870
    }, {
        "contact": {
            "email": "jessica.dubois@email.com",
            "phoneNumber": "+1 732 125 4402"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 3,
                "day": 10
            },
            "sex": "female",
            "parentName": "Michael Dubois",
            "profilePhoto": "https://randomuser.me/api/portraits/women/35.jpg"
        },
        "financialRecords": {
            "debt": "$78,258"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "business"
        },
        "isOnline": false,
        "studentName": "Jessica Dubois",
        "id": 123456871
    }, {
        "contact": {
            "email": "john.mitchell@email.com",
            "phoneNumber": "+1 856 330 3854"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 4,
                "day": 14
            },
            "sex": "male",
            "parentName": "Mary Mitchell",
            "profilePhoto": "https://randomuser.me/api/portraits/men/36.jpg"
        },
        "financialRecords": {
            "debt": "$10,151"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "John Mitchell",
        "id": 123456872
    }, {
        "contact": {
            "email": "olivia.nelson@email.com",
            "phoneNumber": "+1 856 120 4379"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 2,
                "day": 4
            },
            "sex": "female",
            "parentName": "Jonathan Nelson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/36.jpg"
        },
        "financialRecords": {
            "debt": "$63,715"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Olivia Nelson",
        "id": 123456873
    }, {
        "contact": {
            "email": "michael.braun@email.com",
            "phoneNumber": "+1 undefined 795 4436"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 3,
                "day": 1
            },
            "sex": "male",
            "parentName": "Melissa Braun",
            "profilePhoto": "https://randomuser.me/api/portraits/men/37.jpg"
        },
        "financialRecords": {
            "debt": "$74,068"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "Michael Braun",
        "id": 123456874
    }, {
        "contact": {
            "email": "madison.richardson@email.com",
            "phoneNumber": "+1 undefined 470 7068"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 10,
                "day": 9
            },
            "sex": "female",
            "parentName": "Michael Richardson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/37.jpg"
        },
        "financialRecords": {
            "debt": "$94,054"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "architectural engineering"
        },
        "isOnline": true,
        "studentName": "Madison Richardson",
        "id": 123456875
    }, {
        "contact": {
            "email": "jack.roberts@email.com",
            "phoneNumber": "+1 732 133 7818"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 5,
                "day": 8
            },
            "sex": "male",
            "parentName": "Susan Roberts",
            "profilePhoto": "https://randomuser.me/api/portraits/men/38.jpg"
        },
        "financialRecords": {
            "debt": "$31,091"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Jack Roberts",
        "id": 123456876
    }, {
        "contact": {
            "email": "mary.white@email.com",
            "phoneNumber": "+1 201 317 7619"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 10,
                "day": 27
            },
            "sex": "female",
            "parentName": "Joshua White",
            "profilePhoto": "https://randomuser.me/api/portraits/women/38.jpg"
        },
        "financialRecords": {
            "debt": "$95,805"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Mary White",
        "id": 123456877
    }, {
        "contact": {
            "email": "jack.richardson@email.com",
            "phoneNumber": "+1 201 436 2663"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 1,
                "day": 6
            },
            "sex": "male",
            "parentName": "Emily Richardson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/39.jpg"
        },
        "financialRecords": {
            "debt": "$34,714"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "architectural engineering"
        },
        "isOnline": false,
        "studentName": "Jack Richardson",
        "id": 123456878
    }, {
        "contact": {
            "email": "michelle.moore@email.com",
            "phoneNumber": "+1 609 779 1494"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 11,
                "day": 3
            },
            "sex": "female",
            "parentName": "Alexander Moore",
            "profilePhoto": "https://randomuser.me/api/portraits/women/39.jpg"
        },
        "financialRecords": {
            "debt": "$3,705"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "electrical engineering"
        },
        "isOnline": true,
        "studentName": "Michelle Moore",
        "id": 123456879
    }, {
        "contact": {
            "email": "christopher.lee@email.com",
            "phoneNumber": "+1 609 871 8678"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 1,
                "day": 14
            },
            "sex": "male",
            "parentName": "Jessica Lee",
            "profilePhoto": "https://randomuser.me/api/portraits/men/40.jpg"
        },
        "financialRecords": {
            "debt": "$99,991"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Christopher Lee",
        "id": 123456880
    }, {
        "contact": {
            "email": "linda.cooper@email.com",
            "phoneNumber": "+1 undefined 182 5081"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 5,
                "day": 13
            },
            "sex": "female",
            "parentName": "James Cooper",
            "profilePhoto": "https://randomuser.me/api/portraits/women/40.jpg"
        },
        "financialRecords": {
            "debt": "$946"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Linda Cooper",
        "id": 123456881
    }, {
        "contact": {
            "email": "gabriel.wilson@email.com",
            "phoneNumber": "+1 856 623 5306"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 9,
                "day": 24
            },
            "sex": "male",
            "parentName": "Melissa Wilson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/41.jpg"
        },
        "financialRecords": {
            "debt": "$63,501"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Gabriel Wilson",
        "id": 123456882
    }, {
        "contact": {
            "email": "hannah.liu@email.com",
            "phoneNumber": "+1 908 837 362"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 10,
                "day": 8
            },
            "sex": "female",
            "parentName": "Joshua Liu",
            "profilePhoto": "https://randomuser.me/api/portraits/women/41.jpg"
        },
        "financialRecords": {
            "debt": "$52,621"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "electrical engineering"
        },
        "isOnline": true,
        "studentName": "Hannah Liu",
        "id": 123456883
    }, {
        "contact": {
            "email": "andrew.allen@email.com",
            "phoneNumber": "+1 732 28 6015"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 11,
                "day": 14
            },
            "sex": "male",
            "parentName": "Melissa Allen",
            "profilePhoto": "https://randomuser.me/api/portraits/men/42.jpg"
        },
        "financialRecords": {
            "debt": "$27,245"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Andrew Allen",
        "id": 123456884
    }, {
        "contact": {
            "email": "sarah.zhang@email.com",
            "phoneNumber": "+1 undefined 635 8121"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 5,
                "day": 1
            },
            "sex": "female",
            "parentName": "John Zhang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/42.jpg"
        },
        "financialRecords": {
            "debt": "$84,419"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "communications"
        },
        "isOnline": true,
        "studentName": "Sarah Zhang",
        "id": 123456885
    }, {
        "contact": {
            "email": "anthony.schneider@email.com",
            "phoneNumber": "+1 856 804 9369"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 5,
                "day": 27
            },
            "sex": "male",
            "parentName": "Brittany Schneider",
            "profilePhoto": "https://randomuser.me/api/portraits/men/43.jpg"
        },
        "financialRecords": {
            "debt": "$87,758"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "mechanical engineering"
        },
        "isOnline": true,
        "studentName": "Anthony Schneider",
        "id": 123456886
    }, {
        "contact": {
            "email": "heather.lavigne@email.com",
            "phoneNumber": "+1 732 573 4974"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 10,
                "day": 15
            },
            "sex": "female",
            "parentName": "Jonathan Lavigne",
            "profilePhoto": "https://randomuser.me/api/portraits/women/43.jpg"
        },
        "financialRecords": {
            "debt": "$97,576"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Heather Lavigne",
        "id": 123456887
    }, {
        "contact": {
            "email": "robert.thompson@email.com",
            "phoneNumber": "+1 908 137 1773"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 5,
                "day": 29
            },
            "sex": "male",
            "parentName": "Emily Thompson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/44.jpg"
        },
        "financialRecords": {
            "debt": "$86,124"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "Robert Thompson",
        "id": 123456888
    }, {
        "contact": {
            "email": "elizabeth.campbell@email.com",
            "phoneNumber": "+1 609 742 8828"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 1,
                "day": 15
            },
            "sex": "female",
            "parentName": "Daniel Campbell",
            "profilePhoto": "https://randomuser.me/api/portraits/women/44.jpg"
        },
        "financialRecords": {
            "debt": "$42,209"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "communications"
        },
        "isOnline": false,
        "studentName": "Elizabeth Campbell",
        "id": 123456889
    }, {
        "contact": {
            "email": "christopher.wright@email.com",
            "phoneNumber": "+1 856 874 6505"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 1,
                "day": 8
            },
            "sex": "male",
            "parentName": "Brittany Wright",
            "profilePhoto": "https://randomuser.me/api/portraits/men/45.jpg"
        },
        "financialRecords": {
            "debt": "$64,449"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Christopher Wright",
        "id": 123456890
    }, {
        "contact": {
            "email": "abigail.perez@email.com",
            "phoneNumber": "+1 201 910 4947"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 1,
                "day": 17
            },
            "sex": "female",
            "parentName": "James Perez",
            "profilePhoto": "https://randomuser.me/api/portraits/women/45.jpg"
        },
        "financialRecords": {
            "debt": "$90,425"
        },
        "academicRecords": {
            "class": "VII A"
        },
        "isOnline": true,
        "studentName": "Abigail Perez",
        "id": 123456891
    }, {
        "contact": {
            "email": "joseph.scott@email.com",
            "phoneNumber": "+1 201 268 7160"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 5,
                "day": 4
            },
            "sex": "male",
            "parentName": "Megan Scott",
            "profilePhoto": "https://randomuser.me/api/portraits/men/46.jpg"
        },
        "financialRecords": {
            "debt": "$74,180"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "Joseph Scott",
        "id": 123456892
    }, {
        "contact": {
            "email": "nicole.flores@email.com",
            "phoneNumber": "+1 201 307 2781"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 7,
                "day": 2
            },
            "sex": "female",
            "parentName": "Joseph Flores",
            "profilePhoto": "https://randomuser.me/api/portraits/women/46.jpg"
        },
        "financialRecords": {
            "debt": "$43,994"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Nicole Flores",
        "id": 123456893
    }, {
        "contact": {
            "email": "ryan.lee@email.com",
            "phoneNumber": "+1 201 986 9806"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 12,
                "day": 21
            },
            "sex": "male",
            "parentName": "Brittany Lee",
            "profilePhoto": "https://randomuser.me/api/portraits/men/47.jpg"
        },
        "financialRecords": {
            "debt": "$80,706"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "mechanical engineering"
        },
        "isOnline": true,
        "studentName": "Ryan Lee",
        "id": 123456894
    }, {
        "contact": {
            "email": "angela.scott@email.com",
            "phoneNumber": "+1 609 817 2790"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 4,
                "day": 13
            },
            "sex": "female",
            "parentName": "Ethan Scott",
            "profilePhoto": "https://randomuser.me/api/portraits/women/47.jpg"
        },
        "financialRecords": {
            "debt": "$29,472"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "Angela Scott",
        "id": 123456895
    }, {
        "contact": {
            "email": "anthony.carter@email.com",
            "phoneNumber": "+1 856 169 7053"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 6,
                "day": 10
            },
            "sex": "male",
            "parentName": "Michelle Carter",
            "profilePhoto": "https://randomuser.me/api/portraits/men/48.jpg"
        },
        "financialRecords": {
            "debt": "$67,270"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "psychology"
        },
        "isOnline": false,
        "studentName": "Anthony Carter",
        "id": 123456896
    }, {
        "contact": {
            "email": "nicole.walker@email.com",
            "phoneNumber": "+1 732 994 7151"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 11,
                "day": 1
            },
            "sex": "female",
            "parentName": "Nicholas Walker",
            "profilePhoto": "https://randomuser.me/api/portraits/women/48.jpg"
        },
        "financialRecords": {
            "debt": "$5,740"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Nicole Walker",
        "id": 123456897
    }, {
        "contact": {
            "email": "robert.richardson@email.com",
            "phoneNumber": "+1 908 96 4871"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 4,
                "day": 16
            },
            "sex": "male",
            "parentName": "Olivia Richardson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/49.jpg"
        },
        "financialRecords": {
            "debt": "$78,285"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "literature"
        },
        "isOnline": true,
        "studentName": "Robert Richardson",
        "id": 123456898
    }, {
        "contact": {
            "email": "elizabeth.liang@email.com",
            "phoneNumber": "+1 732 287 1965"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 9,
                "day": 16
            },
            "sex": "female",
            "parentName": "Gabriel Liang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/49.jpg"
        },
        "financialRecords": {
            "debt": "$13,402"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Elizabeth Liang",
        "id": 123456899
    }, {
        "contact": {
            "email": "daniel.wright@email.com",
            "phoneNumber": "+1 609 163 934"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 1,
                "day": 28
            },
            "sex": "male",
            "parentName": "Heather Wright",
            "profilePhoto": "https://randomuser.me/api/portraits/men/50.jpg"
        },
        "financialRecords": {
            "debt": "$15,003"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Daniel Wright",
        "id": 123456900
    }, {
        "contact": {
            "email": "amy.lavigne@email.com",
            "phoneNumber": "+1 201 585 5240"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 12,
                "day": 16
            },
            "sex": "female",
            "parentName": "Jason Lavigne",
            "profilePhoto": "https://randomuser.me/api/portraits/women/50.jpg"
        },
        "financialRecords": {
            "debt": "$58,589"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "chemical engineering"
        },
        "isOnline": false,
        "studentName": "Amy Lavigne",
        "id": 123456901
    }, {
        "contact": {
            "email": "andrew.davis@email.com",
            "phoneNumber": "+1 201 646 7915"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 3,
                "day": 15
            },
            "sex": "male",
            "parentName": "Kayla Davis",
            "profilePhoto": "https://randomuser.me/api/portraits/men/51.jpg"
        },
        "financialRecords": {
            "debt": "$13,799"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "communications"
        },
        "isOnline": true,
        "studentName": "Andrew Davis",
        "id": 123456902
    }, {
        "contact": {
            "email": "madison.allen@email.com",
            "phoneNumber": "+1 732 216 9912"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 5,
                "day": 19
            },
            "sex": "female",
            "parentName": "Nicholas Allen",
            "profilePhoto": "https://randomuser.me/api/portraits/women/51.jpg"
        },
        "financialRecords": {
            "debt": "$87,008"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "biology"
        },
        "isOnline": false,
        "studentName": "Madison Allen",
        "id": 123456903
    }, {
        "contact": {
            "email": "austin.hill@email.com",
            "phoneNumber": "+1 undefined 780 3761"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 5,
                "day": 19
            },
            "sex": "male",
            "parentName": "Linda Hill",
            "profilePhoto": "https://randomuser.me/api/portraits/men/52.jpg"
        },
        "financialRecords": {
            "debt": "$30,066"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Austin Hill",
        "id": 123456904
    }, {
        "contact": {
            "email": "alexis.campbell@email.com",
            "phoneNumber": "+1 732 399 8755"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 1,
                "day": 20
            },
            "sex": "female",
            "parentName": "Austin Campbell",
            "profilePhoto": "https://randomuser.me/api/portraits/women/52.jpg"
        },
        "financialRecords": {
            "debt": "$79,741"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "architectural engineering"
        },
        "isOnline": false,
        "studentName": "Alexis Campbell",
        "id": 123456905
    }, {
        "contact": {
            "email": "brian.müller@email.com",
            "phoneNumber": "+1 732 688 1564"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 11,
                "day": 10
            },
            "sex": "male",
            "parentName": "Emily Müller",
            "profilePhoto": "https://randomuser.me/api/portraits/men/53.jpg"
        },
        "financialRecords": {
            "debt": "$59,480"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Brian Müller",
        "id": 123456906
    }, {
        "contact": {
            "email": "lisa.zhang@email.com",
            "phoneNumber": "+1 856 851 532"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 5,
                "day": 16
            },
            "sex": "female",
            "parentName": "Michael Zhang",
            "profilePhoto": "https://randomuser.me/api/portraits/women/53.jpg"
        },
        "financialRecords": {
            "debt": "$16,311"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "psychology"
        },
        "isOnline": true,
        "studentName": "Lisa Zhang",
        "id": 123456907
    }, {
        "contact": {
            "email": "ethan.clark@email.com",
            "phoneNumber": "+1 732 459 6817"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 3,
                "day": 20
            },
            "sex": "male",
            "parentName": "Samantha Clark",
            "profilePhoto": "https://randomuser.me/api/portraits/men/54.jpg"
        },
        "financialRecords": {
            "debt": "$77,058"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Ethan Clark",
        "id": 123456908
    }, {
        "contact": {
            "email": "nicole.anderson@email.com",
            "phoneNumber": "+1 undefined 408 125"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 2,
                "day": 22
            },
            "sex": "female",
            "parentName": "James Anderson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/54.jpg"
        },
        "financialRecords": {
            "debt": "$74,847"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "politcal science"
        },
        "isOnline": true,
        "studentName": "Nicole Anderson",
        "id": 123456909
    }, {
        "contact": {
            "email": "austin.flores@email.com",
            "phoneNumber": "+1 609 324 2931"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 5,
                "day": 7
            },
            "sex": "male",
            "parentName": "Amy Flores",
            "profilePhoto": "https://randomuser.me/api/portraits/men/55.jpg"
        },
        "financialRecords": {
            "debt": "$90,403"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "civil engineering"
        },
        "isOnline": false,
        "studentName": "Austin Flores",
        "id": 123456910
    }, {
        "contact": {
            "email": "linda.cooper@email.com",
            "phoneNumber": "+1 undefined 389 1749"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 7,
                "day": 18
            },
            "sex": "female",
            "parentName": "Michael Cooper",
            "profilePhoto": "https://randomuser.me/api/portraits/women/55.jpg"
        },
        "financialRecords": {
            "debt": "$52,528"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Linda Cooper",
        "id": 123456911
    }, {
        "contact": {
            "email": "andrew.dubois@email.com",
            "phoneNumber": "+1 732 864 7898"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 11,
                "day": 28
            },
            "sex": "male",
            "parentName": "Elizabeth Dubois",
            "profilePhoto": "https://randomuser.me/api/portraits/men/56.jpg"
        },
        "financialRecords": {
            "debt": "$99,713"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "finance"
        },
        "isOnline": false,
        "studentName": "Andrew Dubois",
        "id": 123456912
    }, {
        "contact": {
            "email": "karen.mitchell@email.com",
            "phoneNumber": "+1 732 536 922"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 10,
                "day": 8
            },
            "sex": "female",
            "parentName": "Justin Mitchell",
            "profilePhoto": "https://randomuser.me/api/portraits/women/56.jpg"
        },
        "financialRecords": {
            "debt": "$78,372"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "childhood education"
        },
        "isOnline": true,
        "studentName": "Karen Mitchell",
        "id": 123456913
    }, {
        "contact": {
            "email": "ethan.white@email.com",
            "phoneNumber": "+1 732 24 8799"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 4,
                "day": 28
            },
            "sex": "male",
            "parentName": "Taylor White",
            "profilePhoto": "https://randomuser.me/api/portraits/men/57.jpg"
        },
        "financialRecords": {
            "debt": "$35,102"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Ethan White",
        "id": 123456914
    }, {
        "contact": {
            "email": "nicole.schulz@email.com",
            "phoneNumber": "+1 201 194 8293"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 6,
                "day": 6
            },
            "sex": "female",
            "parentName": "Jason Schulz",
            "profilePhoto": "https://randomuser.me/api/portraits/women/57.jpg"
        },
        "financialRecords": {
            "debt": "$79,058"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "politcal science"
        },
        "isOnline": true,
        "studentName": "Nicole Schulz",
        "id": 123456915
    }, {
        "contact": {
            "email": "christian.jones@email.com",
            "phoneNumber": "+1 856 542 85"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 1,
                "day": 6
            },
            "sex": "male",
            "parentName": "Patricia Jones",
            "profilePhoto": "https://randomuser.me/api/portraits/men/58.jpg"
        },
        "financialRecords": {
            "debt": "$94,223"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "mechanical engineering"
        },
        "isOnline": true,
        "studentName": "Christian Jones",
        "id": 123456916
    }, {
        "contact": {
            "email": "megan.li@email.com",
            "phoneNumber": "+1 908 51 3031"
        },
        "bio": {
            "dob": {
                "year": 2002,
                "month": 7,
                "day": 24
            },
            "sex": "female",
            "parentName": "Jacob Li",
            "profilePhoto": "https://randomuser.me/api/portraits/women/58.jpg"
        },
        "financialRecords": {
            "debt": "$63,330"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "psychology"
        },
        "isOnline": true,
        "studentName": "Megan Li",
        "id": 123456917
    }, {
        "contact": {
            "email": "samuel.mitchell@email.com",
            "phoneNumber": "+1 201 960 2300"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 6,
                "day": 10
            },
            "sex": "male",
            "parentName": "Heather Mitchell",
            "profilePhoto": "https://randomuser.me/api/portraits/men/59.jpg"
        },
        "financialRecords": {
            "debt": "$83,691"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "literature"
        },
        "isOnline": false,
        "studentName": "Samuel Mitchell",
        "id": 123456918
    }, {
        "contact": {
            "email": "amanda.edwards@email.com",
            "phoneNumber": "+1 undefined 239 6724"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 3,
                "day": 24
            },
            "sex": "female",
            "parentName": "Daniel Edwards",
            "profilePhoto": "https://randomuser.me/api/portraits/women/59.jpg"
        },
        "financialRecords": {
            "debt": "$87,871"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "computer science"
        },
        "isOnline": false,
        "studentName": "Amanda Edwards",
        "id": 123456919
    }, {
        "contact": {
            "email": "mark.richardson@email.com",
            "phoneNumber": "+1 856 656 23"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 11,
                "day": 31
            },
            "sex": "male",
            "parentName": "Jessica Richardson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/60.jpg"
        },
        "financialRecords": {
            "debt": "$11,859"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "politcal science"
        },
        "isOnline": false,
        "studentName": "Mark Richardson",
        "id": 123456920
    }, {
        "contact": {
            "email": "alexis.flores@email.com",
            "phoneNumber": "+1 undefined 638 7240"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 4,
                "day": 20
            },
            "sex": "female",
            "parentName": "William Flores",
            "profilePhoto": "https://randomuser.me/api/portraits/women/60.jpg"
        },
        "financialRecords": {
            "debt": "$83,062"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "mechanical engineering"
        },
        "isOnline": true,
        "studentName": "Alexis Flores",
        "id": 123456921
    }, {
        "contact": {
            "email": "anthony.zimmerman@email.com",
            "phoneNumber": "+1 908 594 4118"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 9,
                "day": 26
            },
            "sex": "male",
            "parentName": "Lisa Zimmerman",
            "profilePhoto": "https://randomuser.me/api/portraits/men/61.jpg"
        },
        "financialRecords": {
            "debt": "$18,403"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "business"
        },
        "isOnline": true,
        "studentName": "Anthony Zimmerman",
        "id": 123456922
    }, {
        "contact": {
            "email": "megan.wilson@email.com",
            "phoneNumber": "+1 732 61 7468"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 8,
                "day": 18
            },
            "sex": "female",
            "parentName": "Ethan Wilson",
            "profilePhoto": "https://randomuser.me/api/portraits/women/61.jpg"
        },
        "financialRecords": {
            "debt": "$20,595"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "architectural engineering"
        },
        "isOnline": true,
        "studentName": "Megan Wilson",
        "id": 123456923
    }, {
        "contact": {
            "email": "john.schmidt@email.com",
            "phoneNumber": "+1 609 403 3433"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 11,
                "day": 19
            },
            "sex": "male",
            "parentName": "Susan Schmidt",
            "profilePhoto": "https://randomuser.me/api/portraits/men/62.jpg"
        },
        "financialRecords": {
            "debt": "$81,070"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "mechanical engineering"
        },
        "isOnline": true,
        "studentName": "John Schmidt",
        "id": 123456924
    }, {
        "contact": {
            "email": "megan.mitchell@email.com",
            "phoneNumber": "+1 856 936 7108"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 3,
                "day": 9
            },
            "sex": "female",
            "parentName": "Mark Mitchell",
            "profilePhoto": "https://randomuser.me/api/portraits/women/62.jpg"
        },
        "financialRecords": {
            "debt": "$54,596"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "economics"
        },
        "isOnline": false,
        "studentName": "Megan Mitchell",
        "id": 123456925
    }, {
        "contact": {
            "email": "ethan.anderson@email.com",
            "phoneNumber": "+1 609 894 8621"
        },
        "bio": {
            "dob": {
                "year": 1999,
                "month": 6,
                "day": 19
            },
            "sex": "male",
            "parentName": "Kimberly Anderson",
            "profilePhoto": "https://randomuser.me/api/portraits/men/63.jpg"
        },
        "financialRecords": {
            "debt": "$24,923"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "finance"
        },
        "isOnline": true,
        "studentName": "Ethan Anderson",
        "id": 123456926
    }, {
        "contact": {
            "email": "melissa.fournier@email.com",
            "phoneNumber": "+1 732 880 4176"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 9,
                "day": 6
            },
            "sex": "female",
            "parentName": "Joshua Fournier",
            "profilePhoto": "https://randomuser.me/api/portraits/women/63.jpg"
        },
        "financialRecords": {
            "debt": "$65,002"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "chemical engineering"
        },
        "isOnline": true,
        "studentName": "Melissa Fournier",
        "id": 123456927
    }, {
        "contact": {
            "email": "robert.schneider@email.com",
            "phoneNumber": "+1 856 927 5829"
        },
        "bio": {
            "dob": {
                "year": 1998,
                "month": 9,
                "day": 4
            },
            "sex": "male",
            "parentName": "Megan Schneider",
            "profilePhoto": "https://randomuser.me/api/portraits/men/64.jpg"
        },
        "financialRecords": {
            "debt": "$13,125"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "childhood education"
        },
        "isOnline": false,
        "studentName": "Robert Schneider",
        "id": 123456928
    }, {
        "contact": {
            "email": "emily.lewis@email.com",
            "phoneNumber": "+1 908 864 236"
        },
        "bio": {
            "dob": {
                "year": 2000,
                "month": 4,
                "day": 19
            },
            "sex": "female",
            "parentName": "Zachary Lewis",
            "profilePhoto": "https://randomuser.me/api/portraits/women/64.jpg"
        },
        "financialRecords": {
            "debt": "$53,817"
        },
        "academicRecords": {
            "class": "VII C",
            "major": "economics"
        },
        "isOnline": true,
        "studentName": "Emily Lewis",
        "id": 123456929
    }, {
        "contact": {
            "email": "kyle.green@email.com",
            "phoneNumber": "+1 201 36 1612"
        },
        "bio": {
            "dob": {
                "year": 2003,
                "month": 3,
                "day": 22
            },
            "sex": "male",
            "parentName": "Emma Green",
            "profilePhoto": "https://randomuser.me/api/portraits/men/65.jpg"
        },
        "financialRecords": {
            "debt": "$22,676"
        },
        "academicRecords": {
            "class": "VII A",
            "major": "civil engineering"
        },
        "isOnline": true,
        "studentName": "Kyle Green",
        "id": 123456930
    }, {
        "contact": {
            "email": "taylor.lewis@email.com",
            "phoneNumber": "+1 856 284 9166"
        },
        "bio": {
            "dob": {
                "year": 2001,
                "month": 3,
                "day": 4
            },
            "sex": "female",
            "parentName": "Jack Lewis",
            "profilePhoto": "https://randomuser.me/api/portraits/women/65.jpg"
        },
        "financialRecords": {
            "debt": "$67,369"
        },
        "academicRecords": {
            "class": "VII B",
            "major": "mechanical engineering"
        },
        "isOnline": false,
        "studentName": "Taylor Lewis",
        "id": 123456931
    }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getHomeData':
            actions['getHomeData']();
            break;
    }
    
    return state;
};

const store = createStore(reducer);

export default store;