import {createStore } from 'redux';

const initialState = {
    overview: [
        { "title": "students", "stat": "932" },
        { "title": "teacher", "stat": "754" },
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
    }]
}