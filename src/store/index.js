import { createStore } from 'redux';
import actions from './actions.js';

const initialState = {
    overview: [
        { "title": "students", "stat": "932" },
        { "title": "teachers", "stat": "754" },
        { "title": "events", "stat": "40" },
        { "title": "foods", "stat": "32,000" },
    ],
    students: [{
            "contact": {
                "email": "nicholas.martinez@email.com",
                "phoneNumber": "+1 212 506 1466"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 8,
                    "day": 12
                },
                "sex": "male",
                "parentName": "Sarah Martinez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/0.jpg"
            },
            "financialRecords": {
                "debt": "$59,169"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Nicholas Martinez",
            "id": 123456000
        }, {
            "contact": {
                "email": "samantha.wilson@email.com",
                "phoneNumber": "+1 856 777 7306"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 7,
                    "day": 24
                },
                "sex": "female",
                "parentName": "Thomas Wilson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/0.jpg"
            },
            "financialRecords": {
                "debt": "$73,684"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Samantha Wilson",
            "id": 123456001
        }, {
            "contact": {
                "email": "nicholas.jones@email.com",
                "phoneNumber": "+1 732 959 4776"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 11,
                    "day": 1
                },
                "sex": "male",
                "parentName": "Heather Jones",
                "profilePhoto": "https://randomuser.me/api/portraits/men/1.jpg"
            },
            "financialRecords": {
                "debt": "$81,917"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Nicholas Jones",
            "id": 123456002
        }, {
            "contact": {
                "email": "melissa.perez@email.com",
                "phoneNumber": "+1 undefined 975 1657"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 6,
                    "day": 7
                },
                "sex": "female",
                "parentName": "Kyle Perez",
                "profilePhoto": "https://randomuser.me/api/portraits/women/1.jpg"
            },
            "financialRecords": {
                "debt": "$75,720"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "business"
            },
            "isOnline": false,
            "studentName": "Melissa Perez",
            "id": 123456003
        }, {
            "contact": {
                "email": "mark.cooper@email.com",
                "phoneNumber": "+1 908 683 8491"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 1,
                    "day": 29
                },
                "sex": "male",
                "parentName": "Lisa Cooper",
                "profilePhoto": "https://randomuser.me/api/portraits/men/2.jpg"
            },
            "financialRecords": {
                "debt": "$6,034"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "psychology"
            },
            "isOnline": true,
            "studentName": "Mark Cooper",
            "id": 123456004
        }, {
            "contact": {
                "email": "sarah.chen@email.com",
                "phoneNumber": "+1 201 762 6040"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 18
                },
                "sex": "female",
                "parentName": "Christian Chen",
                "profilePhoto": "https://randomuser.me/api/portraits/women/2.jpg"
            },
            "financialRecords": {
                "debt": "$29,798"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Sarah Chen",
            "id": 123456005
        }, {
            "contact": {
                "email": "nicholas.miller@email.com",
                "phoneNumber": "+1 609 667 1183"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 9,
                    "day": 8
                },
                "sex": "male",
                "parentName": "Brittany Miller",
                "profilePhoto": "https://randomuser.me/api/portraits/men/3.jpg"
            },
            "financialRecords": {
                "debt": "$61,731"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "computer science"
            },
            "isOnline": true,
            "studentName": "Nicholas Miller",
            "id": 123456006
        }, {
            "contact": {
                "email": "ashley.ali@email.com",
                "phoneNumber": "+1 856 423 812"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 4,
                    "day": 10
                },
                "sex": "female",
                "parentName": "Kevin Ali",
                "profilePhoto": "https://randomuser.me/api/portraits/women/3.jpg"
            },
            "financialRecords": {
                "debt": "$79,350"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Ashley Ali",
            "id": 123456007
        }, {
            "contact": {
                "email": "andrew.zimmerman@email.com",
                "phoneNumber": "+1 908 913 3227"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 8,
                    "day": 27
                },
                "sex": "male",
                "parentName": "Taylor Zimmerman",
                "profilePhoto": "https://randomuser.me/api/portraits/men/4.jpg"
            },
            "financialRecords": {
                "debt": "$28,888"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": true,
            "studentName": "Andrew Zimmerman",
            "id": 123456008
        }, {
            "contact": {
                "email": "susan.schneider@email.com",
                "phoneNumber": "+1 609 449 1385"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 9,
                    "day": 30
                },
                "sex": "female",
                "parentName": "Christian Schneider",
                "profilePhoto": "https://randomuser.me/api/portraits/women/4.jpg"
            },
            "financialRecords": {
                "debt": "$8,797"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Susan Schneider",
            "id": 123456009
        }, {
            "contact": {
                "email": "daniel.nelson@email.com",
                "phoneNumber": "+1 609 428 2406"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 8,
                    "day": 10
                },
                "sex": "male",
                "parentName": "Amanda Nelson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/5.jpg"
            },
            "financialRecords": {
                "debt": "$90,000"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Daniel Nelson",
            "id": 123456010
        }, {
            "contact": {
                "email": "isabella.harris@email.com",
                "phoneNumber": "+1 undefined 505 8125"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 9,
                    "day": 4
                },
                "sex": "female",
                "parentName": "Austin Harris",
                "profilePhoto": "https://randomuser.me/api/portraits/women/5.jpg"
            },
            "financialRecords": {
                "debt": "$83,773"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "business"
            },
            "isOnline": true,
            "studentName": "Isabella Harris",
            "id": 123456011
        }, {
            "contact": {
                "email": "austin.müller@email.com",
                "phoneNumber": "+1 609 821 4376"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 4,
                    "day": 29
                },
                "sex": "male",
                "parentName": "Amanda Müller",
                "profilePhoto": "https://randomuser.me/api/portraits/men/6.jpg"
            },
            "financialRecords": {
                "debt": "$43,567"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Austin Müller",
            "id": 123456012
        }, {
            "contact": {
                "email": "angela.anderson@email.com",
                "phoneNumber": "+1 732 482 2721"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 5,
                    "day": 28
                },
                "sex": "female",
                "parentName": "Robert Anderson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/6.jpg"
            },
            "financialRecords": {
                "debt": "$44,904"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Angela Anderson",
            "id": 123456013
        }, {
            "contact": {
                "email": "james.müller@email.com",
                "phoneNumber": "+1 undefined 573 2169"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 9
                },
                "sex": "male",
                "parentName": "Jessica Müller",
                "profilePhoto": "https://randomuser.me/api/portraits/men/7.jpg"
            },
            "financialRecords": {
                "debt": "$17,264"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "James Müller",
            "id": 123456014
        }, {
            "contact": {
                "email": "amanda.schneider@email.com",
                "phoneNumber": "+1 732 483 9398"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 12
                },
                "sex": "female",
                "parentName": "Jonathan Schneider",
                "profilePhoto": "https://randomuser.me/api/portraits/women/7.jpg"
            },
            "financialRecords": {
                "debt": "$63,825"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Amanda Schneider",
            "id": 123456015
        }, {
            "contact": {
                "email": "christian.taylor@email.com",
                "phoneNumber": "+1 201 442 4752"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 10,
                    "day": 22
                },
                "sex": "male",
                "parentName": "Taylor Taylor",
                "profilePhoto": "https://randomuser.me/api/portraits/men/8.jpg"
            },
            "financialRecords": {
                "debt": "$63,056"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "architectural engineering"
            },
            "isOnline": true,
            "studentName": "Christian Taylor",
            "id": 123456016
        }, {
            "contact": {
                "email": "abigail.dupont@email.com",
                "phoneNumber": "+1 856 754 8743"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 3,
                    "day": 23
                },
                "sex": "female",
                "parentName": "Kevin Dupont",
                "profilePhoto": "https://randomuser.me/api/portraits/women/8.jpg"
            },
            "financialRecords": {
                "debt": "$80,879"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Abigail Dupont",
            "id": 123456017
        }, {
            "contact": {
                "email": "alexander.dubois@email.com",
                "phoneNumber": "+1 201 100 3837"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 6,
                    "day": 17
                },
                "sex": "male",
                "parentName": "Lillian Dubois",
                "profilePhoto": "https://randomuser.me/api/portraits/men/9.jpg"
            },
            "financialRecords": {
                "debt": "$44,535"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "childhood education"
            },
            "isOnline": true,
            "studentName": "Alexander Dubois",
            "id": 123456018
        }, {
            "contact": {
                "email": "jennifer.young@email.com",
                "phoneNumber": "+1 732 201 1204"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 6,
                    "day": 17
                },
                "sex": "female",
                "parentName": "Anthony Young",
                "profilePhoto": "https://randomuser.me/api/portraits/women/9.jpg"
            },
            "financialRecords": {
                "debt": "$35,791"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "communications"
            },
            "isOnline": true,
            "studentName": "Jennifer Young",
            "id": 123456019
        }, {
            "contact": {
                "email": "justin.white@email.com",
                "phoneNumber": "+1 856 149 1128"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 4,
                    "day": 28
                },
                "sex": "male",
                "parentName": "Melissa White",
                "profilePhoto": "https://randomuser.me/api/portraits/men/10.jpg"
            },
            "financialRecords": {
                "debt": "$42,863"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "Justin White",
            "id": 123456020
        }, {
            "contact": {
                "email": "jessica.liang@email.com",
                "phoneNumber": "+1 732 156 7865"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 8,
                    "day": 14
                },
                "sex": "female",
                "parentName": "Andrew Liang",
                "profilePhoto": "https://randomuser.me/api/portraits/women/10.jpg"
            },
            "financialRecords": {
                "debt": "$21,399"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Jessica Liang",
            "id": 123456021
        }, {
            "contact": {
                "email": "daniel.nelson@email.com",
                "phoneNumber": "+1 609 83 1737"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 3,
                    "day": 16
                },
                "sex": "male",
                "parentName": "Olivia Nelson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/11.jpg"
            },
            "financialRecords": {
                "debt": "$69,192"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "computer science"
            },
            "isOnline": true,
            "studentName": "Daniel Nelson",
            "id": 123456022
        }, {
            "contact": {
                "email": "emily.wright@email.com",
                "phoneNumber": "+1 undefined 865 232"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 6,
                    "day": 23
                },
                "sex": "female",
                "parentName": "Jonathan Wright",
                "profilePhoto": "https://randomuser.me/api/portraits/women/11.jpg"
            },
            "financialRecords": {
                "debt": "$32,198"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Emily Wright",
            "id": 123456023
        }, {
            "contact": {
                "email": "ethan.rodriguez@email.com",
                "phoneNumber": "+1 609 368 3924"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 7,
                    "day": 25
                },
                "sex": "male",
                "parentName": "Michelle Rodriguez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/12.jpg"
            },
            "financialRecords": {
                "debt": "$34,412"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "Ethan Rodriguez",
            "id": 123456024
        }, {
            "contact": {
                "email": "michelle.monet@email.com",
                "phoneNumber": "+1 856 472 173"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 9,
                    "day": 10
                },
                "sex": "female",
                "parentName": "Kevin Monet",
                "profilePhoto": "https://randomuser.me/api/portraits/women/12.jpg"
            },
            "financialRecords": {
                "debt": "$70,052"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Michelle Monet",
            "id": 123456025
        }, {
            "contact": {
                "email": "james.wilson@email.com",
                "phoneNumber": "+1 732 828 4091"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 6,
                    "day": 28
                },
                "sex": "male",
                "parentName": "Amanda Wilson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/13.jpg"
            },
            "financialRecords": {
                "debt": "$68,612"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "James Wilson",
            "id": 123456026
        }, {
            "contact": {
                "email": "emily.li@email.com",
                "phoneNumber": "+1 201 423 6764"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 8,
                    "day": 2
                },
                "sex": "female",
                "parentName": "Nathan Li",
                "profilePhoto": "https://randomuser.me/api/portraits/women/13.jpg"
            },
            "financialRecords": {
                "debt": "$81,582"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Emily Li",
            "id": 123456027
        }, {
            "contact": {
                "email": "christian.williams@email.com",
                "phoneNumber": "+1 201 467 2675"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 8,
                    "day": 12
                },
                "sex": "male",
                "parentName": "Susan Williams",
                "profilePhoto": "https://randomuser.me/api/portraits/men/14.jpg"
            },
            "financialRecords": {
                "debt": "$63,847"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "Christian Williams",
            "id": 123456028
        }, {
            "contact": {
                "email": "abigail.harris@email.com",
                "phoneNumber": "+1 732 555 2209"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 3,
                    "day": 7
                },
                "sex": "female",
                "parentName": "Jacob Harris",
                "profilePhoto": "https://randomuser.me/api/portraits/women/14.jpg"
            },
            "financialRecords": {
                "debt": "$65,023"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Abigail Harris",
            "id": 123456029
        }, {
            "contact": {
                "email": "joseph.taylor@email.com",
                "phoneNumber": "+1 undefined 723 9982"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 7,
                    "day": 26
                },
                "sex": "male",
                "parentName": "Lisa Taylor",
                "profilePhoto": "https://randomuser.me/api/portraits/men/15.jpg"
            },
            "financialRecords": {
                "debt": "$18,972"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Joseph Taylor",
            "id": 123456030
        }, {
            "contact": {
                "email": "lisa.miller@email.com",
                "phoneNumber": "+1 609 932 3480"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 2,
                    "day": 1
                },
                "sex": "female",
                "parentName": "Kevin Miller",
                "profilePhoto": "https://randomuser.me/api/portraits/women/15.jpg"
            },
            "financialRecords": {
                "debt": "$15,293"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Lisa Miller",
            "id": 123456031
        }, {
            "contact": {
                "email": "matthew.peterson@email.com",
                "phoneNumber": "+1 201 720 9911"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 4,
                    "day": 22
                },
                "sex": "male",
                "parentName": "Emma Peterson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/16.jpg"
            },
            "financialRecords": {
                "debt": "$17,945"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Matthew Peterson",
            "id": 123456032
        }, {
            "contact": {
                "email": "olivia.adams@email.com",
                "phoneNumber": "+1 201 767 7935"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 1,
                    "day": 16
                },
                "sex": "female",
                "parentName": "Kyle Adams",
                "profilePhoto": "https://randomuser.me/api/portraits/women/16.jpg"
            },
            "financialRecords": {
                "debt": "$46,963"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "psychology"
            },
            "isOnline": true,
            "studentName": "Olivia Adams",
            "id": 123456033
        }, {
            "contact": {
                "email": "james.rodriguez@email.com",
                "phoneNumber": "+1 732 855 1484"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 10,
                    "day": 1
                },
                "sex": "male",
                "parentName": "Megan Rodriguez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/17.jpg"
            },
            "financialRecords": {
                "debt": "$24,464"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "James Rodriguez",
            "id": 123456034
        }, {
            "contact": {
                "email": "madison.nguyen@email.com",
                "phoneNumber": "+1 732 834 1114"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 10,
                    "day": 10
                },
                "sex": "female",
                "parentName": "Nicholas Nguyen",
                "profilePhoto": "https://randomuser.me/api/portraits/women/17.jpg"
            },
            "financialRecords": {
                "debt": "$45,460"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "business"
            },
            "isOnline": true,
            "studentName": "Madison Nguyen",
            "id": 123456035
        }, {
            "contact": {
                "email": "matthew.toussaint@email.com",
                "phoneNumber": "+1 732 223 2719"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 5,
                    "day": 25
                },
                "sex": "male",
                "parentName": "Jennifer Toussaint",
                "profilePhoto": "https://randomuser.me/api/portraits/men/18.jpg"
            },
            "financialRecords": {
                "debt": "$86,322"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Matthew Toussaint",
            "id": 123456036
        }, {
            "contact": {
                "email": "madison.peterson@email.com",
                "phoneNumber": "+1 908 102 1056"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 9,
                    "day": 28
                },
                "sex": "female",
                "parentName": "Zachary Peterson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/18.jpg"
            },
            "financialRecords": {
                "debt": "$75,070"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "Madison Peterson",
            "id": 123456037
        }, {
            "contact": {
                "email": "kyle.martinez@email.com",
                "phoneNumber": "+1 732 977 3557"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 11,
                    "day": 6
                },
                "sex": "male",
                "parentName": "Sophia Martinez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/19.jpg"
            },
            "financialRecords": {
                "debt": "$9,141"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": true,
            "studentName": "Kyle Martinez",
            "id": 123456038
        }, {
            "contact": {
                "email": "kimberly.hall@email.com",
                "phoneNumber": "+1 609 431 5841"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 3,
                    "day": 18
                },
                "sex": "female",
                "parentName": "Ryan Hall",
                "profilePhoto": "https://randomuser.me/api/portraits/women/19.jpg"
            },
            "financialRecords": {
                "debt": "$43,941"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Kimberly Hall",
            "id": 123456039
        }, {
            "contact": {
                "email": "ethan.hall@email.com",
                "phoneNumber": "+1 856 496 1218"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 7,
                    "day": 17
                },
                "sex": "male",
                "parentName": "Jessica Hall",
                "profilePhoto": "https://randomuser.me/api/portraits/men/20.jpg"
            },
            "financialRecords": {
                "debt": "$71,815"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "Ethan Hall",
            "id": 123456040
        }, {
            "contact": {
                "email": "linda.gonzalez@email.com",
                "phoneNumber": "+1 201 356 6189"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 7,
                    "day": 16
                },
                "sex": "female",
                "parentName": "Matthew Gonzalez",
                "profilePhoto": "https://randomuser.me/api/portraits/women/20.jpg"
            },
            "financialRecords": {
                "debt": "$24,389"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "communications"
            },
            "isOnline": true,
            "studentName": "Linda Gonzalez",
            "id": 123456041
        }, {
            "contact": {
                "email": "joseph.edwards@email.com",
                "phoneNumber": "+1 732 724 2178"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 8,
                    "day": 21
                },
                "sex": "male",
                "parentName": "Heather Edwards",
                "profilePhoto": "https://randomuser.me/api/portraits/men/21.jpg"
            },
            "financialRecords": {
                "debt": "$9,922"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": true,
            "studentName": "Joseph Edwards",
            "id": 123456042
        }, {
            "contact": {
                "email": "sophia.jones@email.com",
                "phoneNumber": "+1 856 420 5536"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 10,
                    "day": 16
                },
                "sex": "female",
                "parentName": "Michael Jones",
                "profilePhoto": "https://randomuser.me/api/portraits/women/21.jpg"
            },
            "financialRecords": {
                "debt": "$96,783"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "business"
            },
            "isOnline": false,
            "studentName": "Sophia Jones",
            "id": 123456043
        }, {
            "contact": {
                "email": "nathan.davis@email.com",
                "phoneNumber": "+1 609 243 4168"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 9,
                    "day": 24
                },
                "sex": "male",
                "parentName": "Sarah Davis",
                "profilePhoto": "https://randomuser.me/api/portraits/men/22.jpg"
            },
            "financialRecords": {
                "debt": "$30,637"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Nathan Davis",
            "id": 123456044
        }, {
            "contact": {
                "email": "linda.schmidt@email.com",
                "phoneNumber": "+1 732 646 5387"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 10,
                    "day": 16
                },
                "sex": "female",
                "parentName": "Mark Schmidt",
                "profilePhoto": "https://randomuser.me/api/portraits/women/22.jpg"
            },
            "financialRecords": {
                "debt": "$75,745"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Linda Schmidt",
            "id": 123456045
        }, {
            "contact": {
                "email": "justin.roberts@email.com",
                "phoneNumber": "+1 732 396 4642"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 12,
                    "day": 18
                },
                "sex": "male",
                "parentName": "Madison Roberts",
                "profilePhoto": "https://randomuser.me/api/portraits/men/23.jpg"
            },
            "financialRecords": {
                "debt": "$69,595"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Justin Roberts",
            "id": 123456046
        }, {
            "contact": {
                "email": "olivia.miller@email.com",
                "phoneNumber": "+1 609 554 1694"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 6,
                    "day": 20
                },
                "sex": "female",
                "parentName": "Jason Miller",
                "profilePhoto": "https://randomuser.me/api/portraits/women/23.jpg"
            },
            "financialRecords": {
                "debt": "$46,647"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "Olivia Miller",
            "id": 123456047
        }, {
            "contact": {
                "email": "john.peterson@email.com",
                "phoneNumber": "+1 908 786 4296"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 5
                },
                "sex": "male",
                "parentName": "Sophia Peterson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/24.jpg"
            },
            "financialRecords": {
                "debt": "$97,810"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "John Peterson",
            "id": 123456048
        }, {
            "contact": {
                "email": "heather.nelson@email.com",
                "phoneNumber": "+1 undefined 532 5314"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 7,
                    "day": 27
                },
                "sex": "female",
                "parentName": "Ethan Nelson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/24.jpg"
            },
            "financialRecords": {
                "debt": "$5,507"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Heather Nelson",
            "id": 123456049
        }, {
            "contact": {
                "email": "gabriel.williams@email.com",
                "phoneNumber": "+1 856 874 3649"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 9,
                    "day": 5
                },
                "sex": "male",
                "parentName": "Sophia Williams",
                "profilePhoto": "https://randomuser.me/api/portraits/men/25.jpg"
            },
            "financialRecords": {
                "debt": "$89,166"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "electrical engineering"
            },
            "isOnline": false,
            "studentName": "Gabriel Williams",
            "id": 123456050
        }, {
            "contact": {
                "email": "isabella.lewis@email.com",
                "phoneNumber": "+1 201 317 3997"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 1,
                    "day": 8
                },
                "sex": "female",
                "parentName": "Jason Lewis",
                "profilePhoto": "https://randomuser.me/api/portraits/women/25.jpg"
            },
            "financialRecords": {
                "debt": "$69,997"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Isabella Lewis",
            "id": 123456051
        }, {
            "contact": {
                "email": "daniel.carter@email.com",
                "phoneNumber": "+1 undefined 529 7139"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 8,
                    "day": 7
                },
                "sex": "male",
                "parentName": "Jennifer Carter",
                "profilePhoto": "https://randomuser.me/api/portraits/men/26.jpg"
            },
            "financialRecords": {
                "debt": "$12,095"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Daniel Carter",
            "id": 123456052
        }, {
            "contact": {
                "email": "brittany.fournier@email.com",
                "phoneNumber": "+1 732 121 8845"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 10,
                    "day": 22
                },
                "sex": "female",
                "parentName": "Jason Fournier",
                "profilePhoto": "https://randomuser.me/api/portraits/women/26.jpg"
            },
            "financialRecords": {
                "debt": "$38,053"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "business"
            },
            "isOnline": false,
            "studentName": "Brittany Fournier",
            "id": 123456053
        }, {
            "contact": {
                "email": "joshua.liu@email.com",
                "phoneNumber": "+1 856 25 617"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 4,
                    "day": 29
                },
                "sex": "male",
                "parentName": "Karen Liu",
                "profilePhoto": "https://randomuser.me/api/portraits/men/27.jpg"
            },
            "financialRecords": {
                "debt": "$38,748"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": true,
            "studentName": "Joshua Liu",
            "id": 123456054
        }, {
            "contact": {
                "email": "brittany.moore@email.com",
                "phoneNumber": "+1 609 953 9449"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 5,
                    "day": 8
                },
                "sex": "female",
                "parentName": "Daniel Moore",
                "profilePhoto": "https://randomuser.me/api/portraits/women/27.jpg"
            },
            "financialRecords": {
                "debt": "$65,435"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Brittany Moore",
            "id": 123456055
        }, {
            "contact": {
                "email": "thomas.miller@email.com",
                "phoneNumber": "+1 undefined 403 2083"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 9,
                    "day": 12
                },
                "sex": "male",
                "parentName": "Amanda Miller",
                "profilePhoto": "https://randomuser.me/api/portraits/men/28.jpg"
            },
            "financialRecords": {
                "debt": "$11,565"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Thomas Miller",
            "id": 123456056
        }, {
            "contact": {
                "email": "linda.robinson@email.com",
                "phoneNumber": "+1 201 917 6198"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 11,
                    "day": 13
                },
                "sex": "female",
                "parentName": "Jason Robinson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/28.jpg"
            },
            "financialRecords": {
                "debt": "$63,338"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Linda Robinson",
            "id": 123456057
        }, {
            "contact": {
                "email": "brandon.hill@email.com",
                "phoneNumber": "+1 609 76 8728"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 2
                },
                "sex": "male",
                "parentName": "Hannah Hill",
                "profilePhoto": "https://randomuser.me/api/portraits/men/29.jpg"
            },
            "financialRecords": {
                "debt": "$95,243"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Brandon Hill",
            "id": 123456058
        }, {
            "contact": {
                "email": "olivia.robinson@email.com",
                "phoneNumber": "+1 201 79 9381"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 3,
                    "day": 12
                },
                "sex": "female",
                "parentName": "William Robinson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/29.jpg"
            },
            "financialRecords": {
                "debt": "$68,784"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Olivia Robinson",
            "id": 123456059
        }, {
            "contact": {
                "email": "zachary.peterson@email.com",
                "phoneNumber": "+1 609 136 2269"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 6,
                    "day": 27
                },
                "sex": "male",
                "parentName": "Susan Peterson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/30.jpg"
            },
            "financialRecords": {
                "debt": "$2,559"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "architectural engineering"
            },
            "isOnline": true,
            "studentName": "Zachary Peterson",
            "id": 123456060
        }, {
            "contact": {
                "email": "taylor.howard@email.com",
                "phoneNumber": "+1 908 851 8707"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 8,
                    "day": 10
                },
                "sex": "female",
                "parentName": "Robert Howard",
                "profilePhoto": "https://randomuser.me/api/portraits/women/30.jpg"
            },
            "financialRecords": {
                "debt": "$24,671"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "psychology"
            },
            "isOnline": true,
            "studentName": "Taylor Howard",
            "id": 123456061
        }, {
            "contact": {
                "email": "samuel.carter@email.com",
                "phoneNumber": "+1 732 995 987"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 5,
                    "day": 9
                },
                "sex": "male",
                "parentName": "Heather Carter",
                "profilePhoto": "https://randomuser.me/api/portraits/men/31.jpg"
            },
            "financialRecords": {
                "debt": "$44,405"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "architectural engineering"
            },
            "isOnline": true,
            "studentName": "Samuel Carter",
            "id": 123456062
        }, {
            "contact": {
                "email": "madison.harris@email.com",
                "phoneNumber": "+1 856 78 4319"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 6,
                    "day": 3
                },
                "sex": "female",
                "parentName": "Austin Harris",
                "profilePhoto": "https://randomuser.me/api/portraits/women/31.jpg"
            },
            "financialRecords": {
                "debt": "$17,397"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "Madison Harris",
            "id": 123456063
        }, {
            "contact": {
                "email": "kyle.bonnet@email.com",
                "phoneNumber": "+1 609 127 304"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 11,
                    "day": 3
                },
                "sex": "male",
                "parentName": "Emma Bonnet",
                "profilePhoto": "https://randomuser.me/api/portraits/men/32.jpg"
            },
            "financialRecords": {
                "debt": "$51,074"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Kyle Bonnet",
            "id": 123456064
        }, {
            "contact": {
                "email": "sarah.adams@email.com",
                "phoneNumber": "+1 609 627 5032"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 4,
                    "day": 8
                },
                "sex": "female",
                "parentName": "Matthew Adams",
                "profilePhoto": "https://randomuser.me/api/portraits/women/32.jpg"
            },
            "financialRecords": {
                "debt": "$58,741"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Sarah Adams",
            "id": 123456065
        }, {
            "contact": {
                "email": "christian.mitchell@email.com",
                "phoneNumber": "+1 856 351 4994"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 11,
                    "day": 4
                },
                "sex": "male",
                "parentName": "Alexis Mitchell",
                "profilePhoto": "https://randomuser.me/api/portraits/men/33.jpg"
            },
            "financialRecords": {
                "debt": "$83,108"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Christian Mitchell",
            "id": 123456066
        }, {
            "contact": {
                "email": "emily.schulz@email.com",
                "phoneNumber": "+1 201 82 9014"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 14
                },
                "sex": "female",
                "parentName": "Nicholas Schulz",
                "profilePhoto": "https://randomuser.me/api/portraits/women/33.jpg"
            },
            "financialRecords": {
                "debt": "$336"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Emily Schulz",
            "id": 123456067
        }, {
            "contact": {
                "email": "jacob.hall@email.com",
                "phoneNumber": "+1 908 667 7706"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 5,
                    "day": 28
                },
                "sex": "male",
                "parentName": "Patricia Hall",
                "profilePhoto": "https://randomuser.me/api/portraits/men/34.jpg"
            },
            "financialRecords": {
                "debt": "$1,781"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Jacob Hall",
            "id": 123456068
        }, {
            "contact": {
                "email": "kimberly.walker@email.com",
                "phoneNumber": "+1 609 381 1963"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 11
                },
                "sex": "female",
                "parentName": "James Walker",
                "profilePhoto": "https://randomuser.me/api/portraits/women/34.jpg"
            },
            "financialRecords": {
                "debt": "$84,181"
            },
            "academicRecords": {
                "class": "VII B"
            },
            "isOnline": true,
            "studentName": "Kimberly Walker",
            "id": 123456069
        }, {
            "contact": {
                "email": "gabriel.clark@email.com",
                "phoneNumber": "+1 856 192 7133"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 11,
                    "day": 23
                },
                "sex": "male",
                "parentName": "Linda Clark",
                "profilePhoto": "https://randomuser.me/api/portraits/men/35.jpg"
            },
            "financialRecords": {
                "debt": "$8,653"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Gabriel Clark",
            "id": 123456070
        }, {
            "contact": {
                "email": "sophia.moore@email.com",
                "phoneNumber": "+1 201 452 5787"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 1,
                    "day": 21
                },
                "sex": "female",
                "parentName": "David Moore",
                "profilePhoto": "https://randomuser.me/api/portraits/women/35.jpg"
            },
            "financialRecords": {
                "debt": "$58,158"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Sophia Moore",
            "id": 123456071
        }, {
            "contact": {
                "email": "jonathan.campbell@email.com",
                "phoneNumber": "+1 609 826 8166"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 4,
                    "day": 26
                },
                "sex": "male",
                "parentName": "Samantha Campbell",
                "profilePhoto": "https://randomuser.me/api/portraits/men/36.jpg"
            },
            "financialRecords": {
                "debt": "$5,071"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "Jonathan Campbell",
            "id": 123456072
        }, {
            "contact": {
                "email": "kayla.nelson@email.com",
                "phoneNumber": "+1 609 586 4366"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 12,
                    "day": 1
                },
                "sex": "female",
                "parentName": "Thomas Nelson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/36.jpg"
            },
            "financialRecords": {
                "debt": "$47,975"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Kayla Nelson",
            "id": 123456073
        }, {
            "contact": {
                "email": "christopher.hall@email.com",
                "phoneNumber": "+1 732 874 3391"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 6,
                    "day": 24
                },
                "sex": "male",
                "parentName": "Ashley Hall",
                "profilePhoto": "https://randomuser.me/api/portraits/men/37.jpg"
            },
            "financialRecords": {
                "debt": "$98,916"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Christopher Hall",
            "id": 123456074
        }, {
            "contact": {
                "email": "amanda.martinez@email.com",
                "phoneNumber": "+1 732 737 1893"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 9,
                    "day": 12
                },
                "sex": "female",
                "parentName": "Christian Martinez",
                "profilePhoto": "https://randomuser.me/api/portraits/women/37.jpg"
            },
            "financialRecords": {
                "debt": "$2,584"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "architectural engineering"
            },
            "isOnline": true,
            "studentName": "Amanda Martinez",
            "id": 123456075
        }, {
            "contact": {
                "email": "austin.miller@email.com",
                "phoneNumber": "+1 undefined 672 9038"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 11,
                    "day": 20
                },
                "sex": "male",
                "parentName": "Stephanie Miller",
                "profilePhoto": "https://randomuser.me/api/portraits/men/38.jpg"
            },
            "financialRecords": {
                "debt": "$87,915"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "business"
            },
            "isOnline": false,
            "studentName": "Austin Miller",
            "id": 123456076
        }, {
            "contact": {
                "email": "emma.harris@email.com",
                "phoneNumber": "+1 732 750 6560"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 4,
                    "day": 26
                },
                "sex": "female",
                "parentName": "Joseph Harris",
                "profilePhoto": "https://randomuser.me/api/portraits/women/38.jpg"
            },
            "financialRecords": {
                "debt": "$29,422"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "architectural engineering"
            },
            "isOnline": false,
            "studentName": "Emma Harris",
            "id": 123456077
        }, {
            "contact": {
                "email": "brian.robinson@email.com",
                "phoneNumber": "+1 908 470 5946"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 4,
                    "day": 18
                },
                "sex": "male",
                "parentName": "Megan Robinson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/39.jpg"
            },
            "financialRecords": {
                "debt": "$78,916"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "business"
            },
            "isOnline": false,
            "studentName": "Brian Robinson",
            "id": 123456078
        }, {
            "contact": {
                "email": "patricia.dupont@email.com",
                "phoneNumber": "+1 732 816 1348"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 7,
                    "day": 4
                },
                "sex": "female",
                "parentName": "Joseph Dupont",
                "profilePhoto": "https://randomuser.me/api/portraits/women/39.jpg"
            },
            "financialRecords": {
                "debt": "$56,510"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Patricia Dupont",
            "id": 123456079
        }, {
            "contact": {
                "email": "alexander.gonzalez@email.com",
                "phoneNumber": "+1 732 989 9097"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 12,
                    "day": 22
                },
                "sex": "male",
                "parentName": "Nicole Gonzalez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/40.jpg"
            },
            "financialRecords": {
                "debt": "$74,043"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "electrical engineering"
            },
            "isOnline": true,
            "studentName": "Alexander Gonzalez",
            "id": 123456080
        }, {
            "contact": {
                "email": "isabella.edwards@email.com",
                "phoneNumber": "+1 732 555 8879"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 11,
                    "day": 10
                },
                "sex": "female",
                "parentName": "Thomas Edwards",
                "profilePhoto": "https://randomuser.me/api/portraits/women/40.jpg"
            },
            "financialRecords": {
                "debt": "$11,407"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "civil engineering"
            },
            "isOnline": true,
            "studentName": "Isabella Edwards",
            "id": 123456081
        }, {
            "contact": {
                "email": "samuel.rogers@email.com",
                "phoneNumber": "+1 201 78 3516"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 4,
                    "day": 15
                },
                "sex": "male",
                "parentName": "Ashley Rogers",
                "profilePhoto": "https://randomuser.me/api/portraits/men/41.jpg"
            },
            "financialRecords": {
                "debt": "$22,248"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Samuel Rogers",
            "id": 123456082
        }, {
            "contact": {
                "email": "emma.flores@email.com",
                "phoneNumber": "+1 201 625 5207"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 2,
                    "day": 3
                },
                "sex": "female",
                "parentName": "Ryan Flores",
                "profilePhoto": "https://randomuser.me/api/portraits/women/41.jpg"
            },
            "financialRecords": {
                "debt": "$76,407"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Emma Flores",
            "id": 123456083
        }, {
            "contact": {
                "email": "austin.nelson@email.com",
                "phoneNumber": "+1 609 125 4762"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 11,
                    "day": 19
                },
                "sex": "male",
                "parentName": "Kimberly Nelson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/42.jpg"
            },
            "financialRecords": {
                "debt": "$79,262"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "Austin Nelson",
            "id": 123456084
        }, {
            "contact": {
                "email": "madison.taylor@email.com",
                "phoneNumber": "+1 856 755 8516"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 12,
                    "day": 16
                },
                "sex": "female",
                "parentName": "Gabriel Taylor",
                "profilePhoto": "https://randomuser.me/api/portraits/women/42.jpg"
            },
            "financialRecords": {
                "debt": "$56,445"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "communications"
            },
            "isOnline": true,
            "studentName": "Madison Taylor",
            "id": 123456085
        }, {
            "contact": {
                "email": "samuel.lee@email.com",
                "phoneNumber": "+1 856 805 1456"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 5
                },
                "sex": "male",
                "parentName": "Abigail Lee",
                "profilePhoto": "https://randomuser.me/api/portraits/men/43.jpg"
            },
            "financialRecords": {
                "debt": "$60,871"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "computer science"
            },
            "isOnline": true,
            "studentName": "Samuel Lee",
            "id": 123456086
        }, {
            "contact": {
                "email": "elizabeth.baker@email.com",
                "phoneNumber": "+1 201 208 8882"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 1,
                    "day": 11
                },
                "sex": "female",
                "parentName": "Jonathan Baker",
                "profilePhoto": "https://randomuser.me/api/portraits/women/43.jpg"
            },
            "financialRecords": {
                "debt": "$77,656"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Elizabeth Baker",
            "id": 123456087
        }, {
            "contact": {
                "email": "nathan.harris@email.com",
                "phoneNumber": "+1 732 807 2588"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 28
                },
                "sex": "male",
                "parentName": "Sarah Harris",
                "profilePhoto": "https://randomuser.me/api/portraits/men/44.jpg"
            },
            "financialRecords": {
                "debt": "$68,184"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Nathan Harris",
            "id": 123456088
        }, {
            "contact": {
                "email": "brittany.howard@email.com",
                "phoneNumber": "+1 201 945 1090"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 3,
                    "day": 7
                },
                "sex": "female",
                "parentName": "James Howard",
                "profilePhoto": "https://randomuser.me/api/portraits/women/44.jpg"
            },
            "financialRecords": {
                "debt": "$22,057"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "politcal science"
            },
            "isOnline": true,
            "studentName": "Brittany Howard",
            "id": 123456089
        }, {
            "contact": {
                "email": "william.scott@email.com",
                "phoneNumber": "+1 856 263 3784"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 1,
                    "day": 27
                },
                "sex": "male",
                "parentName": "Nicole Scott",
                "profilePhoto": "https://randomuser.me/api/portraits/men/45.jpg"
            },
            "financialRecords": {
                "debt": "$95,085"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "childhood education"
            },
            "isOnline": true,
            "studentName": "William Scott",
            "id": 123456090
        }, {
            "contact": {
                "email": "lisa.allen@email.com",
                "phoneNumber": "+1 609 304 87"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 6,
                    "day": 18
                },
                "sex": "female",
                "parentName": "William Allen",
                "profilePhoto": "https://randomuser.me/api/portraits/women/45.jpg"
            },
            "financialRecords": {
                "debt": "$3,097"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "architectural engineering"
            },
            "isOnline": false,
            "studentName": "Lisa Allen",
            "id": 123456091
        }, {
            "contact": {
                "email": "brian.liu@email.com",
                "phoneNumber": "+1 609 520 2485"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 5,
                    "day": 26
                },
                "sex": "male",
                "parentName": "Megan Liu",
                "profilePhoto": "https://randomuser.me/api/portraits/men/46.jpg"
            },
            "financialRecords": {
                "debt": "$69,095"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Brian Liu",
            "id": 123456092
        }, {
            "contact": {
                "email": "heather.scott@email.com",
                "phoneNumber": "+1 201 265 1811"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 8,
                    "day": 20
                },
                "sex": "female",
                "parentName": "Michael Scott",
                "profilePhoto": "https://randomuser.me/api/portraits/women/46.jpg"
            },
            "financialRecords": {
                "debt": "$600"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Heather Scott",
            "id": 123456093
        }, {
            "contact": {
                "email": "gabriel.hill@email.com",
                "phoneNumber": "+1 856 87 3553"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 7,
                    "day": 8
                },
                "sex": "male",
                "parentName": "Angela Hill",
                "profilePhoto": "https://randomuser.me/api/portraits/men/47.jpg"
            },
            "financialRecords": {
                "debt": "$69,143"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Gabriel Hill",
            "id": 123456094
        }, {
            "contact": {
                "email": "olivia.scott@email.com",
                "phoneNumber": "+1 732 298 4128"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 4,
                    "day": 25
                },
                "sex": "female",
                "parentName": "Jacob Scott",
                "profilePhoto": "https://randomuser.me/api/portraits/women/47.jpg"
            },
            "financialRecords": {
                "debt": "$45,212"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "Olivia Scott",
            "id": 123456095
        }, {
            "contact": {
                "email": "joshua.hall@email.com",
                "phoneNumber": "+1 undefined 281 6713"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 10,
                    "day": 18
                },
                "sex": "male",
                "parentName": "Jessica Hall",
                "profilePhoto": "https://randomuser.me/api/portraits/men/48.jpg"
            },
            "financialRecords": {
                "debt": "$44,863"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "psychology"
            },
            "isOnline": true,
            "studentName": "Joshua Hall",
            "id": 123456096
        }, {
            "contact": {
                "email": "ashley.nelson@email.com",
                "phoneNumber": "+1 732 315 7315"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 5,
                    "day": 5
                },
                "sex": "female",
                "parentName": "Thomas Nelson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/48.jpg"
            },
            "financialRecords": {
                "debt": "$59,941"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "business"
            },
            "isOnline": false,
            "studentName": "Ashley Nelson",
            "id": 123456097
        }, {
            "contact": {
                "email": "justin.roberts@email.com",
                "phoneNumber": "+1 856 735 4758"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 1,
                    "day": 24
                },
                "sex": "male",
                "parentName": "Abigail Roberts",
                "profilePhoto": "https://randomuser.me/api/portraits/men/49.jpg"
            },
            "financialRecords": {
                "debt": "$73,201"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Justin Roberts",
            "id": 123456098
        }, {
            "contact": {
                "email": "lisa.williams@email.com",
                "phoneNumber": "+1 201 409 2654"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 6,
                    "day": 17
                },
                "sex": "female",
                "parentName": "David Williams",
                "profilePhoto": "https://randomuser.me/api/portraits/women/49.jpg"
            },
            "financialRecords": {
                "debt": "$70,768"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "communications"
            },
            "isOnline": false,
            "studentName": "Lisa Williams",
            "id": 123456099
        }, {
            "contact": {
                "email": "ethan.flores@email.com",
                "phoneNumber": "+1 732 701 912"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 10,
                    "day": 25
                },
                "sex": "male",
                "parentName": "Ashley Flores",
                "profilePhoto": "https://randomuser.me/api/portraits/men/50.jpg"
            },
            "financialRecords": {
                "debt": "$48,425"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Ethan Flores",
            "id": 123456100
        }, {
            "contact": {
                "email": "alexis.perez@email.com",
                "phoneNumber": "+1 856 628 2653"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 2,
                    "day": 22
                },
                "sex": "female",
                "parentName": "Tyler Perez",
                "profilePhoto": "https://randomuser.me/api/portraits/women/50.jpg"
            },
            "financialRecords": {
                "debt": "$87,510"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "computer science"
            },
            "isOnline": true,
            "studentName": "Alexis Perez",
            "id": 123456101
        }, {
            "contact": {
                "email": "jason.roberts@email.com",
                "phoneNumber": "+1 609 193 3432"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 7,
                    "day": 29
                },
                "sex": "male",
                "parentName": "Brittany Roberts",
                "profilePhoto": "https://randomuser.me/api/portraits/men/51.jpg"
            },
            "financialRecords": {
                "debt": "$33,089"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Jason Roberts",
            "id": 123456102
        }, {
            "contact": {
                "email": "heather.anderson@email.com",
                "phoneNumber": "+1 908 655 5420"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 9,
                    "day": 14
                },
                "sex": "female",
                "parentName": "Ryan Anderson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/51.jpg"
            },
            "financialRecords": {
                "debt": "$46,803"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Heather Anderson",
            "id": 123456103
        }, {
            "contact": {
                "email": "tyler.wilson@email.com",
                "phoneNumber": "+1 732 344 3764"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 12,
                    "day": 27
                },
                "sex": "male",
                "parentName": "Sarah Wilson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/52.jpg"
            },
            "financialRecords": {
                "debt": "$12,750"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Tyler Wilson",
            "id": 123456104
        }, {
            "contact": {
                "email": "jessica.baker@email.com",
                "phoneNumber": "+1 856 549 7502"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 8,
                    "day": 9
                },
                "sex": "female",
                "parentName": "Christopher Baker",
                "profilePhoto": "https://randomuser.me/api/portraits/women/52.jpg"
            },
            "financialRecords": {
                "debt": "$27,653"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Jessica Baker",
            "id": 123456105
        }, {
            "contact": {
                "email": "gabriel.schneider@email.com",
                "phoneNumber": "+1 201 850 3920"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 12
                },
                "sex": "male",
                "parentName": "Isabella Schneider",
                "profilePhoto": "https://randomuser.me/api/portraits/men/53.jpg"
            },
            "financialRecords": {
                "debt": "$69,223"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Gabriel Schneider",
            "id": 123456106
        }, {
            "contact": {
                "email": "alexis.lee@email.com",
                "phoneNumber": "+1 856 558 5732"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 3,
                    "day": 5
                },
                "sex": "female",
                "parentName": "Ryan Lee",
                "profilePhoto": "https://randomuser.me/api/portraits/women/53.jpg"
            },
            "financialRecords": {
                "debt": "$653"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "Alexis Lee",
            "id": 123456107
        }, {
            "contact": {
                "email": "jack.brown@email.com",
                "phoneNumber": "+1 732 153 2628"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 1,
                    "day": 12
                },
                "sex": "male",
                "parentName": "Sarah Brown",
                "profilePhoto": "https://randomuser.me/api/portraits/men/54.jpg"
            },
            "financialRecords": {
                "debt": "$74,451"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "Jack Brown",
            "id": 123456108
        }, {
            "contact": {
                "email": "patricia.green@email.com",
                "phoneNumber": "+1 732 49 7761"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 2,
                    "day": 15
                },
                "sex": "female",
                "parentName": "Mark Green",
                "profilePhoto": "https://randomuser.me/api/portraits/women/54.jpg"
            },
            "financialRecords": {
                "debt": "$39,287"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Patricia Green",
            "id": 123456109
        }, {
            "contact": {
                "email": "tyler.campbell@email.com",
                "phoneNumber": "+1 609 594 9068"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 5,
                    "day": 18
                },
                "sex": "male",
                "parentName": "Amanda Campbell",
                "profilePhoto": "https://randomuser.me/api/portraits/men/55.jpg"
            },
            "financialRecords": {
                "debt": "$34,196"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "economics"
            },
            "isOnline": true,
            "studentName": "Tyler Campbell",
            "id": 123456110
        }, {
            "contact": {
                "email": "susan.nguyen@email.com",
                "phoneNumber": "+1 908 464 7693"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 8,
                    "day": 30
                },
                "sex": "female",
                "parentName": "Brandon Nguyen",
                "profilePhoto": "https://randomuser.me/api/portraits/women/55.jpg"
            },
            "financialRecords": {
                "debt": "$52,654"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Susan Nguyen",
            "id": 123456111
        }, {
            "contact": {
                "email": "zachary.schmidt@email.com",
                "phoneNumber": "+1 609 558 1055"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 31
                },
                "sex": "male",
                "parentName": "Megan Schmidt",
                "profilePhoto": "https://randomuser.me/api/portraits/men/56.jpg"
            },
            "financialRecords": {
                "debt": "$2,380"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": true,
            "studentName": "Zachary Schmidt",
            "id": 123456112
        }, {
            "contact": {
                "email": "melissa.flores@email.com",
                "phoneNumber": "+1 732 918 3693"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 6,
                    "day": 22
                },
                "sex": "female",
                "parentName": "Jacob Flores",
                "profilePhoto": "https://randomuser.me/api/portraits/women/56.jpg"
            },
            "financialRecords": {
                "debt": "$47,287"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "civil engineering"
            },
            "isOnline": true,
            "studentName": "Melissa Flores",
            "id": 123456113
        }, {
            "contact": {
                "email": "ethan.taylor@email.com",
                "phoneNumber": "+1 609 812 4552"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 10,
                    "day": 18
                },
                "sex": "male",
                "parentName": "Kayla Taylor",
                "profilePhoto": "https://randomuser.me/api/portraits/men/57.jpg"
            },
            "financialRecords": {
                "debt": "$49,133"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "Ethan Taylor",
            "id": 123456114
        }, {
            "contact": {
                "email": "emily.taylor@email.com",
                "phoneNumber": "+1 609 698 3630"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 7,
                    "day": 13
                },
                "sex": "female",
                "parentName": "Jason Taylor",
                "profilePhoto": "https://randomuser.me/api/portraits/women/57.jpg"
            },
            "financialRecords": {
                "debt": "$11,066"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "business"
            },
            "isOnline": true,
            "studentName": "Emily Taylor",
            "id": 123456115
        }, {
            "contact": {
                "email": "mark.lee@email.com",
                "phoneNumber": "+1 908 818 1258"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 9,
                    "day": 21
                },
                "sex": "male",
                "parentName": "Madison Lee",
                "profilePhoto": "https://randomuser.me/api/portraits/men/58.jpg"
            },
            "financialRecords": {
                "debt": "$58,040"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "Mark Lee",
            "id": 123456116
        }, {
            "contact": {
                "email": "taylor.moore@email.com",
                "phoneNumber": "+1 201 239 7336"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 9,
                    "day": 15
                },
                "sex": "female",
                "parentName": "Kevin Moore",
                "profilePhoto": "https://randomuser.me/api/portraits/women/58.jpg"
            },
            "financialRecords": {
                "debt": "$4,117"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Taylor Moore",
            "id": 123456117
        }, {
            "contact": {
                "email": "thomas.edwards@email.com",
                "phoneNumber": "+1 609 568 7737"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 10,
                    "day": 19
                },
                "sex": "male",
                "parentName": "Jennifer Edwards",
                "profilePhoto": "https://randomuser.me/api/portraits/men/59.jpg"
            },
            "financialRecords": {
                "debt": "$34,328"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Thomas Edwards",
            "id": 123456118
        }, {
            "contact": {
                "email": "ashley.zimmerman@email.com",
                "phoneNumber": "+1 609 573 7459"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 5,
                    "day": 25
                },
                "sex": "female",
                "parentName": "David Zimmerman",
                "profilePhoto": "https://randomuser.me/api/portraits/women/59.jpg"
            },
            "financialRecords": {
                "debt": "$67,902"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Ashley Zimmerman",
            "id": 123456119
        }, {
            "contact": {
                "email": "justin.miller@email.com",
                "phoneNumber": "+1 732 344 9088"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 4,
                    "day": 12
                },
                "sex": "male",
                "parentName": "Lisa Miller",
                "profilePhoto": "https://randomuser.me/api/portraits/men/60.jpg"
            },
            "financialRecords": {
                "debt": "$67,322"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "Justin Miller",
            "id": 123456120
        }, {
            "contact": {
                "email": "patricia.zhang@email.com",
                "phoneNumber": "+1 856 576 2714"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 11,
                    "day": 7
                },
                "sex": "female",
                "parentName": "Samuel Zhang",
                "profilePhoto": "https://randomuser.me/api/portraits/women/60.jpg"
            },
            "financialRecords": {
                "debt": "$11,352"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "communications"
            },
            "isOnline": false,
            "studentName": "Patricia Zhang",
            "id": 123456121
        }, {
            "contact": {
                "email": "austin.anderson@email.com",
                "phoneNumber": "+1 908 354 4483"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 4,
                    "day": 13
                },
                "sex": "male",
                "parentName": "Angela Anderson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/61.jpg"
            },
            "financialRecords": {
                "debt": "$70,023"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Austin Anderson",
            "id": 123456122
        }, {
            "contact": {
                "email": "lisa.cooper@email.com",
                "phoneNumber": "+1 201 83 5045"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 4,
                    "day": 1
                },
                "sex": "female",
                "parentName": "David Cooper",
                "profilePhoto": "https://randomuser.me/api/portraits/women/61.jpg"
            },
            "financialRecords": {
                "debt": "$77,217"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Lisa Cooper",
            "id": 123456123
        }, {
            "contact": {
                "email": "john.schneider@email.com",
                "phoneNumber": "+1 609 711 74"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 1,
                    "day": 14
                },
                "sex": "male",
                "parentName": "Mary Schneider",
                "profilePhoto": "https://randomuser.me/api/portraits/men/62.jpg"
            },
            "financialRecords": {
                "debt": "$47,884"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "John Schneider",
            "id": 123456124
        }, {
            "contact": {
                "email": "lisa.martinez@email.com",
                "phoneNumber": "+1 609 382 4653"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 5,
                    "day": 30
                },
                "sex": "female",
                "parentName": "Kevin Martinez",
                "profilePhoto": "https://randomuser.me/api/portraits/women/62.jpg"
            },
            "financialRecords": {
                "debt": "$83,115"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Lisa Martinez",
            "id": 123456125
        }, {
            "contact": {
                "email": "christopher.flores@email.com",
                "phoneNumber": "+1 undefined 691 5928"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 2,
                    "day": 1
                },
                "sex": "male",
                "parentName": "Susan Flores",
                "profilePhoto": "https://randomuser.me/api/portraits/men/63.jpg"
            },
            "financialRecords": {
                "debt": "$74,089"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Christopher Flores",
            "id": 123456126
        }, {
            "contact": {
                "email": "hannah.dupont@email.com",
                "phoneNumber": "+1 732 30 6694"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 10,
                    "day": 13
                },
                "sex": "female",
                "parentName": "Matthew Dupont",
                "profilePhoto": "https://randomuser.me/api/portraits/women/63.jpg"
            },
            "financialRecords": {
                "debt": "$13,365"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "electrical engineering"
            },
            "isOnline": false,
            "studentName": "Hannah Dupont",
            "id": 123456127
        }, {
            "contact": {
                "email": "anthony.smith@email.com",
                "phoneNumber": "+1 856 74 2811"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 2,
                    "day": 9
                },
                "sex": "male",
                "parentName": "Linda Smith",
                "profilePhoto": "https://randomuser.me/api/portraits/men/64.jpg"
            },
            "financialRecords": {
                "debt": "$48,410"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Anthony Smith",
            "id": 123456128
        }, {
            "contact": {
                "email": "heather.lavigne@email.com",
                "phoneNumber": "+1 609 577 5408"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 22
                },
                "sex": "female",
                "parentName": "Ethan Lavigne",
                "profilePhoto": "https://randomuser.me/api/portraits/women/64.jpg"
            },
            "financialRecords": {
                "debt": "$617"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Heather Lavigne",
            "id": 123456129
        }, {
            "contact": {
                "email": "christian.scott@email.com",
                "phoneNumber": "+1 undefined 856 7728"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 11,
                    "day": 21
                },
                "sex": "male",
                "parentName": "Samantha Scott",
                "profilePhoto": "https://randomuser.me/api/portraits/men/65.jpg"
            },
            "financialRecords": {
                "debt": "$4,178"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "economics"
            },
            "isOnline": true,
            "studentName": "Christian Scott",
            "id": 123456130
        }, {
            "contact": {
                "email": "lisa.müller@email.com",
                "phoneNumber": "+1 856 937 1341"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 12,
                    "day": 11
                },
                "sex": "female",
                "parentName": "Robert Müller",
                "profilePhoto": "https://randomuser.me/api/portraits/women/65.jpg"
            },
            "financialRecords": {
                "debt": "$38,774"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Lisa Müller",
            "id": 123456131
        }, {
            "contact": {
                "email": "thomas.moore@email.com",
                "phoneNumber": "+1 201 450 1765"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 5,
                    "day": 22
                },
                "sex": "male",
                "parentName": "Madison Moore",
                "profilePhoto": "https://randomuser.me/api/portraits/men/66.jpg"
            },
            "financialRecords": {
                "debt": "$18,762"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Thomas Moore",
            "id": 123456132
        }, {
            "contact": {
                "email": "samantha.thompson@email.com",
                "phoneNumber": "+1 908 686 326"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 9,
                    "day": 26
                },
                "sex": "female",
                "parentName": "Matthew Thompson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/66.jpg"
            },
            "financialRecords": {
                "debt": "$82,127"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "psychology"
            },
            "isOnline": true,
            "studentName": "Samantha Thompson",
            "id": 123456133
        }, {
            "contact": {
                "email": "andrew.nelson@email.com",
                "phoneNumber": "+1 609 39 8034"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 1,
                    "day": 18
                },
                "sex": "male",
                "parentName": "Melissa Nelson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/67.jpg"
            },
            "financialRecords": {
                "debt": "$83,798"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Andrew Nelson",
            "id": 123456134
        }, {
            "contact": {
                "email": "heather.fournier@email.com",
                "phoneNumber": "+1 201 590 5558"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 5,
                    "day": 22
                },
                "sex": "female",
                "parentName": "Nicholas Fournier",
                "profilePhoto": "https://randomuser.me/api/portraits/women/67.jpg"
            },
            "financialRecords": {
                "debt": "$160"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "communications"
            },
            "isOnline": false,
            "studentName": "Heather Fournier",
            "id": 123456135
        }, {
            "contact": {
                "email": "joseph.davis@email.com",
                "phoneNumber": "+1 856 809 3847"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 4,
                    "day": 20
                },
                "sex": "male",
                "parentName": "Emily Davis",
                "profilePhoto": "https://randomuser.me/api/portraits/men/68.jpg"
            },
            "financialRecords": {
                "debt": "$29,486"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "business"
            },
            "isOnline": true,
            "studentName": "Joseph Davis",
            "id": 123456136
        }, {
            "contact": {
                "email": "jessica.garnier@email.com",
                "phoneNumber": "+1 201 589 7457"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 4,
                    "day": 9
                },
                "sex": "female",
                "parentName": "Joseph Garnier",
                "profilePhoto": "https://randomuser.me/api/portraits/women/68.jpg"
            },
            "financialRecords": {
                "debt": "$67,291"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "computer science"
            },
            "isOnline": true,
            "studentName": "Jessica Garnier",
            "id": 123456137
        }, {
            "contact": {
                "email": "jack.lewis@email.com",
                "phoneNumber": "+1 856 806 9789"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 7,
                    "day": 13
                },
                "sex": "male",
                "parentName": "Alexis Lewis",
                "profilePhoto": "https://randomuser.me/api/portraits/men/69.jpg"
            },
            "financialRecords": {
                "debt": "$15,459"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Jack Lewis",
            "id": 123456138
        }, {
            "contact": {
                "email": "lisa.white@email.com",
                "phoneNumber": "+1 856 802 4056"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 2,
                    "day": 10
                },
                "sex": "female",
                "parentName": "Zachary White",
                "profilePhoto": "https://randomuser.me/api/portraits/women/69.jpg"
            },
            "financialRecords": {
                "debt": "$52,484"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "architectural engineering"
            },
            "isOnline": true,
            "studentName": "Lisa White",
            "id": 123456139
        }, {
            "contact": {
                "email": "thomas.young@email.com",
                "phoneNumber": "+1 856 183 1043"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 5,
                    "day": 4
                },
                "sex": "male",
                "parentName": "Alexis Young",
                "profilePhoto": "https://randomuser.me/api/portraits/men/70.jpg"
            },
            "financialRecords": {
                "debt": "$83,788"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "Thomas Young",
            "id": 123456140
        }, {
            "contact": {
                "email": "melissa.perez@email.com",
                "phoneNumber": "+1 609 83 1267"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 3,
                    "day": 9
                },
                "sex": "female",
                "parentName": "Anthony Perez",
                "profilePhoto": "https://randomuser.me/api/portraits/women/70.jpg"
            },
            "financialRecords": {
                "debt": "$81,455"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "Melissa Perez",
            "id": 123456141
        }, {
            "contact": {
                "email": "jonathan.scott@email.com",
                "phoneNumber": "+1 201 279 7408"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 4,
                    "day": 12
                },
                "sex": "male",
                "parentName": "Ashley Scott",
                "profilePhoto": "https://randomuser.me/api/portraits/men/71.jpg"
            },
            "financialRecords": {
                "debt": "$57,356"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "electrical engineering"
            },
            "isOnline": true,
            "studentName": "Jonathan Scott",
            "id": 123456142
        }, {
            "contact": {
                "email": "madison.rogers@email.com",
                "phoneNumber": "+1 908 397 3112"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 8,
                    "day": 17
                },
                "sex": "female",
                "parentName": "Daniel Rogers",
                "profilePhoto": "https://randomuser.me/api/portraits/women/71.jpg"
            },
            "financialRecords": {
                "debt": "$34,621"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Madison Rogers",
            "id": 123456143
        }, {
            "contact": {
                "email": "john.anderson@email.com",
                "phoneNumber": "+1 609 968 6522"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 8,
                    "day": 5
                },
                "sex": "male",
                "parentName": "Amy Anderson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/72.jpg"
            },
            "financialRecords": {
                "debt": "$29,023"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "John Anderson",
            "id": 123456144
        }, {
            "contact": {
                "email": "emma.moore@email.com",
                "phoneNumber": "+1 732 489 8860"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 10,
                    "day": 18
                },
                "sex": "female",
                "parentName": "Kevin Moore",
                "profilePhoto": "https://randomuser.me/api/portraits/women/72.jpg"
            },
            "financialRecords": {
                "debt": "$39,107"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "electrical engineering"
            },
            "isOnline": false,
            "studentName": "Emma Moore",
            "id": 123456145
        }, {
            "contact": {
                "email": "andrew.richardson@email.com",
                "phoneNumber": "+1 201 34 9875"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 10,
                    "day": 13
                },
                "sex": "male",
                "parentName": "Mary Richardson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/73.jpg"
            },
            "financialRecords": {
                "debt": "$1,639"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "civil engineering"
            },
            "isOnline": true,
            "studentName": "Andrew Richardson",
            "id": 123456146
        }, {
            "contact": {
                "email": "nicole.wilson@email.com",
                "phoneNumber": "+1 609 262 7240"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 7,
                    "day": 1
                },
                "sex": "female",
                "parentName": "Jason Wilson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/73.jpg"
            },
            "financialRecords": {
                "debt": "$49,670"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Nicole Wilson",
            "id": 123456147
        }, {
            "contact": {
                "email": "tyler.thompson@email.com",
                "phoneNumber": "+1 856 927 8992"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 4,
                    "day": 2
                },
                "sex": "male",
                "parentName": "Samantha Thompson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/74.jpg"
            },
            "financialRecords": {
                "debt": "$99,929"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "politcal science"
            },
            "isOnline": true,
            "studentName": "Tyler Thompson",
            "id": 123456148
        }, {
            "contact": {
                "email": "abigail.harris@email.com",
                "phoneNumber": "+1 609 565 1259"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 5,
                    "day": 8
                },
                "sex": "female",
                "parentName": "Brandon Harris",
                "profilePhoto": "https://randomuser.me/api/portraits/women/74.jpg"
            },
            "financialRecords": {
                "debt": "$76,953"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Abigail Harris",
            "id": 123456149
        }, {
            "contact": {
                "email": "mark.flores@email.com",
                "phoneNumber": "+1 undefined 189 8852"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 3,
                    "day": 21
                },
                "sex": "male",
                "parentName": "Stephanie Flores",
                "profilePhoto": "https://randomuser.me/api/portraits/men/75.jpg"
            },
            "financialRecords": {
                "debt": "$90,072"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "business"
            },
            "isOnline": false,
            "studentName": "Mark Flores",
            "id": 123456150
        }, {
            "contact": {
                "email": "sophia.williams@email.com",
                "phoneNumber": "+1 undefined 155 393"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 4,
                    "day": 13
                },
                "sex": "female",
                "parentName": "Jason Williams",
                "profilePhoto": "https://randomuser.me/api/portraits/women/75.jpg"
            },
            "financialRecords": {
                "debt": "$62,403"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Sophia Williams",
            "id": 123456151
        }, {
            "contact": {
                "email": "kyle.allen@email.com",
                "phoneNumber": "+1 856 536 1436"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 3,
                    "day": 6
                },
                "sex": "male",
                "parentName": "Abigail Allen",
                "profilePhoto": "https://randomuser.me/api/portraits/men/76.jpg"
            },
            "financialRecords": {
                "debt": "$97,989"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Kyle Allen",
            "id": 123456152
        }, {
            "contact": {
                "email": "linda.wilson@email.com",
                "phoneNumber": "+1 609 870 6190"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 11,
                    "day": 23
                },
                "sex": "female",
                "parentName": "Brandon Wilson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/76.jpg"
            },
            "financialRecords": {
                "debt": "$30,070"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "Linda Wilson",
            "id": 123456153
        }, {
            "contact": {
                "email": "anthony.campbell@email.com",
                "phoneNumber": "+1 undefined 301 6911"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 7
                },
                "sex": "male",
                "parentName": "Amanda Campbell",
                "profilePhoto": "https://randomuser.me/api/portraits/men/77.jpg"
            },
            "financialRecords": {
                "debt": "$78,033"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "architectural engineering"
            },
            "isOnline": true,
            "studentName": "Anthony Campbell",
            "id": 123456154
        }, {
            "contact": {
                "email": "heather.roberts@email.com",
                "phoneNumber": "+1 undefined 793 8424"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 4,
                    "day": 15
                },
                "sex": "female",
                "parentName": "Kevin Roberts",
                "profilePhoto": "https://randomuser.me/api/portraits/women/77.jpg"
            },
            "financialRecords": {
                "debt": "$23,958"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Heather Roberts",
            "id": 123456155
        }, {
            "contact": {
                "email": "jonathan.ali@email.com",
                "phoneNumber": "+1 908 430 9250"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 1,
                    "day": 19
                },
                "sex": "male",
                "parentName": "Megan Ali",
                "profilePhoto": "https://randomuser.me/api/portraits/men/78.jpg"
            },
            "financialRecords": {
                "debt": "$41,607"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Jonathan Ali",
            "id": 123456156
        }, {
            "contact": {
                "email": "amy.liang@email.com",
                "phoneNumber": "+1 908 830 171"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 8,
                    "day": 25
                },
                "sex": "female",
                "parentName": "Jonathan Liang",
                "profilePhoto": "https://randomuser.me/api/portraits/women/78.jpg"
            },
            "financialRecords": {
                "debt": "$37,162"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "politcal science"
            },
            "isOnline": true,
            "studentName": "Amy Liang",
            "id": 123456157
        }, {
            "contact": {
                "email": "jacob.toussaint@email.com",
                "phoneNumber": "+1 201 529 4026"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 4,
                    "day": 16
                },
                "sex": "male",
                "parentName": "Jennifer Toussaint",
                "profilePhoto": "https://randomuser.me/api/portraits/men/79.jpg"
            },
            "financialRecords": {
                "debt": "$31,999"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Jacob Toussaint",
            "id": 123456158
        }, {
            "contact": {
                "email": "melissa.scott@email.com",
                "phoneNumber": "+1 609 454 4520"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 10,
                    "day": 31
                },
                "sex": "female",
                "parentName": "Daniel Scott",
                "profilePhoto": "https://randomuser.me/api/portraits/women/79.jpg"
            },
            "financialRecords": {
                "debt": "$57,724"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Melissa Scott",
            "id": 123456159
        }, {
            "contact": {
                "email": "samuel.hill@email.com",
                "phoneNumber": "+1 609 780 6152"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 1,
                    "day": 1
                },
                "sex": "male",
                "parentName": "Hannah Hill",
                "profilePhoto": "https://randomuser.me/api/portraits/men/80.jpg"
            },
            "financialRecords": {
                "debt": "$44,395"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Samuel Hill",
            "id": 123456160
        }, {
            "contact": {
                "email": "sarah.lee@email.com",
                "phoneNumber": "+1 609 67 6581"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 6,
                    "day": 3
                },
                "sex": "female",
                "parentName": "Thomas Lee",
                "profilePhoto": "https://randomuser.me/api/portraits/women/80.jpg"
            },
            "financialRecords": {
                "debt": "$73,383"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Sarah Lee",
            "id": 123456161
        }, {
            "contact": {
                "email": "tyler.allen@email.com",
                "phoneNumber": "+1 609 704 5441"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 6,
                    "day": 17
                },
                "sex": "male",
                "parentName": "Madison Allen",
                "profilePhoto": "https://randomuser.me/api/portraits/men/81.jpg"
            },
            "financialRecords": {
                "debt": "$96,112"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "economics"
            },
            "isOnline": true,
            "studentName": "Tyler Allen",
            "id": 123456162
        }, {
            "contact": {
                "email": "heather.nguyen@email.com",
                "phoneNumber": "+1 undefined 846 4024"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 1,
                    "day": 12
                },
                "sex": "female",
                "parentName": "Kevin Nguyen",
                "profilePhoto": "https://randomuser.me/api/portraits/women/81.jpg"
            },
            "financialRecords": {
                "debt": "$44,707"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "Heather Nguyen",
            "id": 123456163
        }, {
            "contact": {
                "email": "brandon.roberts@email.com",
                "phoneNumber": "+1 856 259 4789"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 9,
                    "day": 23
                },
                "sex": "male",
                "parentName": "Elizabeth Roberts",
                "profilePhoto": "https://randomuser.me/api/portraits/men/82.jpg"
            },
            "financialRecords": {
                "debt": "$93,266"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "architectural engineering"
            },
            "isOnline": false,
            "studentName": "Brandon Roberts",
            "id": 123456164
        }, {
            "contact": {
                "email": "abigail.zimmerman@email.com",
                "phoneNumber": "+1 201 26 8362"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 11,
                    "day": 1
                },
                "sex": "female",
                "parentName": "John Zimmerman",
                "profilePhoto": "https://randomuser.me/api/portraits/women/82.jpg"
            },
            "financialRecords": {
                "debt": "$27,062"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Abigail Zimmerman",
            "id": 123456165
        }, {
            "contact": {
                "email": "james.lavigne@email.com",
                "phoneNumber": "+1 201 21 87"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 3,
                    "day": 12
                },
                "sex": "male",
                "parentName": "Lisa Lavigne",
                "profilePhoto": "https://randomuser.me/api/portraits/men/83.jpg"
            },
            "financialRecords": {
                "debt": "$63,364"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "architectural engineering"
            },
            "isOnline": true,
            "studentName": "James Lavigne",
            "id": 123456166
        }, {
            "contact": {
                "email": "susan.dubois@email.com",
                "phoneNumber": "+1 609 248 592"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 3,
                    "day": 17
                },
                "sex": "female",
                "parentName": "Joseph Dubois",
                "profilePhoto": "https://randomuser.me/api/portraits/women/83.jpg"
            },
            "financialRecords": {
                "debt": "$21,624"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "architectural engineering"
            },
            "isOnline": false,
            "studentName": "Susan Dubois",
            "id": 123456167
        }, {
            "contact": {
                "email": "nicholas.bonnet@email.com",
                "phoneNumber": "+1 908 765 8042"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 10,
                    "day": 3
                },
                "sex": "male",
                "parentName": "Angela Bonnet",
                "profilePhoto": "https://randomuser.me/api/portraits/men/84.jpg"
            },
            "financialRecords": {
                "debt": "$5,312"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Nicholas Bonnet",
            "id": 123456168
        }, {
            "contact": {
                "email": "sophia.green@email.com",
                "phoneNumber": "+1 732 526 5603"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 5,
                    "day": 22
                },
                "sex": "female",
                "parentName": "Michael Green",
                "profilePhoto": "https://randomuser.me/api/portraits/women/84.jpg"
            },
            "financialRecords": {
                "debt": "$93,838"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Sophia Green",
            "id": 123456169
        }, {
            "contact": {
                "email": "brian.hall@email.com",
                "phoneNumber": "+1 732 622 5427"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 7,
                    "day": 19
                },
                "sex": "male",
                "parentName": "Abigail Hall",
                "profilePhoto": "https://randomuser.me/api/portraits/men/85.jpg"
            },
            "financialRecords": {
                "debt": "$91,117"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Brian Hall",
            "id": 123456170
        }, {
            "contact": {
                "email": "jessica.roberts@email.com",
                "phoneNumber": "+1 908 256 3933"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 8,
                    "day": 29
                },
                "sex": "female",
                "parentName": "John Roberts",
                "profilePhoto": "https://randomuser.me/api/portraits/women/85.jpg"
            },
            "financialRecords": {
                "debt": "$29,317"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Jessica Roberts",
            "id": 123456171
        }, {
            "contact": {
                "email": "daniel.adams@email.com",
                "phoneNumber": "+1 908 288 7489"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 8,
                    "day": 19
                },
                "sex": "male",
                "parentName": "Mary Adams",
                "profilePhoto": "https://randomuser.me/api/portraits/men/86.jpg"
            },
            "financialRecords": {
                "debt": "$46,672"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Daniel Adams",
            "id": 123456172
        }, {
            "contact": {
                "email": "jessica.fournier@email.com",
                "phoneNumber": "+1 908 98 3791"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 10,
                    "day": 9
                },
                "sex": "female",
                "parentName": "Mark Fournier",
                "profilePhoto": "https://randomuser.me/api/portraits/women/86.jpg"
            },
            "financialRecords": {
                "debt": "$59,231"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Jessica Fournier",
            "id": 123456173
        }, {
            "contact": {
                "email": "robert.liu@email.com",
                "phoneNumber": "+1 856 331 3031"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 6,
                    "day": 17
                },
                "sex": "male",
                "parentName": "Heather Liu",
                "profilePhoto": "https://randomuser.me/api/portraits/men/87.jpg"
            },
            "financialRecords": {
                "debt": "$28,178"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "business"
            },
            "isOnline": true,
            "studentName": "Robert Liu",
            "id": 123456174
        }, {
            "contact": {
                "email": "jessica.nelson@email.com",
                "phoneNumber": "+1 732 218 1353"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 8,
                    "day": 1
                },
                "sex": "female",
                "parentName": "Kyle Nelson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/87.jpg"
            },
            "financialRecords": {
                "debt": "$75,588"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "communications"
            },
            "isOnline": true,
            "studentName": "Jessica Nelson",
            "id": 123456175
        }, {
            "contact": {
                "email": "nathan.chen@email.com",
                "phoneNumber": "+1 856 803 9907"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 9,
                    "day": 6
                },
                "sex": "male",
                "parentName": "Mary Chen",
                "profilePhoto": "https://randomuser.me/api/portraits/men/88.jpg"
            },
            "financialRecords": {
                "debt": "$12,492"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Nathan Chen",
            "id": 123456176
        }, {
            "contact": {
                "email": "elizabeth.anderson@email.com",
                "phoneNumber": "+1 201 462 4413"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 4,
                    "day": 15
                },
                "sex": "female",
                "parentName": "Samuel Anderson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/88.jpg"
            },
            "financialRecords": {
                "debt": "$24,869"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Elizabeth Anderson",
            "id": 123456177
        }, {
            "contact": {
                "email": "nicholas.schmidt@email.com",
                "phoneNumber": "+1 201 456 490"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 11,
                    "day": 8
                },
                "sex": "male",
                "parentName": "Brittany Schmidt",
                "profilePhoto": "https://randomuser.me/api/portraits/men/89.jpg"
            },
            "financialRecords": {
                "debt": "$95,795"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Nicholas Schmidt",
            "id": 123456178
        }, {
            "contact": {
                "email": "jennifer.schmidt@email.com",
                "phoneNumber": "+1 undefined 881 4460"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 2,
                    "day": 12
                },
                "sex": "female",
                "parentName": "Kevin Schmidt",
                "profilePhoto": "https://randomuser.me/api/portraits/women/89.jpg"
            },
            "financialRecords": {
                "debt": "$18,111"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Jennifer Schmidt",
            "id": 123456179
        }, {
            "contact": {
                "email": "ethan.green@email.com",
                "phoneNumber": "+1 908 685 4569"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 3,
                    "day": 5
                },
                "sex": "male",
                "parentName": "Brittany Green",
                "profilePhoto": "https://randomuser.me/api/portraits/men/90.jpg"
            },
            "financialRecords": {
                "debt": "$27,946"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "Ethan Green",
            "id": 123456180
        }, {
            "contact": {
                "email": "jessica.anderson@email.com",
                "phoneNumber": "+1 732 2 7006"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 11
                },
                "sex": "female",
                "parentName": "Nathan Anderson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/90.jpg"
            },
            "financialRecords": {
                "debt": "$41,127"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Jessica Anderson",
            "id": 123456181
        }, {
            "contact": {
                "email": "austin.wang@email.com",
                "phoneNumber": "+1 609 549 2458"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 6,
                    "day": 14
                },
                "sex": "male",
                "parentName": "Kayla Wang",
                "profilePhoto": "https://randomuser.me/api/portraits/men/91.jpg"
            },
            "financialRecords": {
                "debt": "$93,596"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Austin Wang",
            "id": 123456182
        }, {
            "contact": {
                "email": "kimberly.robinson@email.com",
                "phoneNumber": "+1 856 464 2177"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 1,
                    "day": 18
                },
                "sex": "female",
                "parentName": "Andrew Robinson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/91.jpg"
            },
            "financialRecords": {
                "debt": "$78,616"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Kimberly Robinson",
            "id": 123456183
        }, {
            "contact": {
                "email": "brian.chen@email.com",
                "phoneNumber": "+1 undefined 285 6752"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 5,
                    "day": 20
                },
                "sex": "male",
                "parentName": "Stephanie Chen",
                "profilePhoto": "https://randomuser.me/api/portraits/men/92.jpg"
            },
            "financialRecords": {
                "debt": "$22,053"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "architectural engineering"
            },
            "isOnline": true,
            "studentName": "Brian Chen",
            "id": 123456184
        }, {
            "contact": {
                "email": "samantha.nelson@email.com",
                "phoneNumber": "+1 undefined 279 6259"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 2,
                    "day": 19
                },
                "sex": "female",
                "parentName": "Tyler Nelson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/92.jpg"
            },
            "financialRecords": {
                "debt": "$29,641"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Samantha Nelson",
            "id": 123456185
        }, {
            "contact": {
                "email": "david.roberts@email.com",
                "phoneNumber": "+1 856 409 8492"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 4,
                    "day": 20
                },
                "sex": "male",
                "parentName": "Megan Roberts",
                "profilePhoto": "https://randomuser.me/api/portraits/men/93.jpg"
            },
            "financialRecords": {
                "debt": "$85,530"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "David Roberts",
            "id": 123456186
        }, {
            "contact": {
                "email": "melissa.moore@email.com",
                "phoneNumber": "+1 609 125 7285"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 12,
                    "day": 11
                },
                "sex": "female",
                "parentName": "Justin Moore",
                "profilePhoto": "https://randomuser.me/api/portraits/women/93.jpg"
            },
            "financialRecords": {
                "debt": "$37,945"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Melissa Moore",
            "id": 123456187
        }, {
            "contact": {
                "email": "andrew.müller@email.com",
                "phoneNumber": "+1 732 38 7189"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 2,
                    "day": 6
                },
                "sex": "male",
                "parentName": "Karen Müller",
                "profilePhoto": "https://randomuser.me/api/portraits/men/94.jpg"
            },
            "financialRecords": {
                "debt": "$15,184"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Andrew Müller",
            "id": 123456188
        }, {
            "contact": {
                "email": "jennifer.dupont@email.com",
                "phoneNumber": "+1 908 705 5593"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 12,
                    "day": 8
                },
                "sex": "female",
                "parentName": "Alexander Dupont",
                "profilePhoto": "https://randomuser.me/api/portraits/women/94.jpg"
            },
            "financialRecords": {
                "debt": "$59,906"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "Jennifer Dupont",
            "id": 123456189
        }, {
            "contact": {
                "email": "michael.adams@email.com",
                "phoneNumber": "+1 856 23 3469"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 10,
                    "day": 2
                },
                "sex": "male",
                "parentName": "Alexis Adams",
                "profilePhoto": "https://randomuser.me/api/portraits/men/95.jpg"
            },
            "financialRecords": {
                "debt": "$99,010"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "Michael Adams",
            "id": 123456190
        }, {
            "contact": {
                "email": "karen.gonzalez@email.com",
                "phoneNumber": "+1 732 948 6038"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 1,
                    "day": 25
                },
                "sex": "female",
                "parentName": "Brian Gonzalez",
                "profilePhoto": "https://randomuser.me/api/portraits/women/95.jpg"
            },
            "financialRecords": {
                "debt": "$66,973"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Karen Gonzalez",
            "id": 123456191
        }, {
            "contact": {
                "email": "jack.hill@email.com",
                "phoneNumber": "+1 732 563 5625"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 3,
                    "day": 15
                },
                "sex": "male",
                "parentName": "Kayla Hill",
                "profilePhoto": "https://randomuser.me/api/portraits/men/96.jpg"
            },
            "financialRecords": {
                "debt": "$98,145"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "electrical engineering"
            },
            "isOnline": true,
            "studentName": "Jack Hill",
            "id": 123456192
        }, {
            "contact": {
                "email": "heather.zhang@email.com",
                "phoneNumber": "+1 732 438 1140"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 9,
                    "day": 24
                },
                "sex": "female",
                "parentName": "Thomas Zhang",
                "profilePhoto": "https://randomuser.me/api/portraits/women/96.jpg"
            },
            "financialRecords": {
                "debt": "$38,772"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Heather Zhang",
            "id": 123456193
        }, {
            "contact": {
                "email": "austin.carter@email.com",
                "phoneNumber": "+1 732 155 1882"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 9,
                    "day": 14
                },
                "sex": "male",
                "parentName": "Elizabeth Carter",
                "profilePhoto": "https://randomuser.me/api/portraits/men/97.jpg"
            },
            "financialRecords": {
                "debt": "$61,047"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "architectural engineering"
            },
            "isOnline": true,
            "studentName": "Austin Carter",
            "id": 123456194
        }, {
            "contact": {
                "email": "hannah.li@email.com",
                "phoneNumber": "+1 856 728 5894"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 6,
                    "day": 28
                },
                "sex": "female",
                "parentName": "Brian Li",
                "profilePhoto": "https://randomuser.me/api/portraits/women/97.jpg"
            },
            "financialRecords": {
                "debt": "$83,935"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Hannah Li",
            "id": 123456195
        }, {
            "contact": {
                "email": "justin.toussaint@email.com",
                "phoneNumber": "+1 856 343 2979"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 9,
                    "day": 18
                },
                "sex": "male",
                "parentName": "Jennifer Toussaint",
                "profilePhoto": "https://randomuser.me/api/portraits/men/98.jpg"
            },
            "financialRecords": {
                "debt": "$904"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Justin Toussaint",
            "id": 123456196
        }, {
            "contact": {
                "email": "michelle.anderson@email.com",
                "phoneNumber": "+1 undefined 323 2572"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 7,
                    "day": 19
                },
                "sex": "female",
                "parentName": "Joseph Anderson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/98.jpg"
            },
            "financialRecords": {
                "debt": "$93,450"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "Michelle Anderson",
            "id": 123456197
        }, {
            "contact": {
                "email": "christian.li@email.com",
                "phoneNumber": "+1 856 649 6021"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 4,
                    "day": 29
                },
                "sex": "male",
                "parentName": "Nicole Li",
                "profilePhoto": "https://randomuser.me/api/portraits/men/99.jpg"
            },
            "financialRecords": {
                "debt": "$5,791"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Christian Li",
            "id": 123456198
        }, {
            "contact": {
                "email": "madison.cooper@email.com",
                "phoneNumber": "+1 201 478 6985"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 24
                },
                "sex": "female",
                "parentName": "Nathan Cooper",
                "profilePhoto": "https://randomuser.me/api/portraits/women/99.jpg"
            },
            "financialRecords": {
                "debt": "$27,410"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Madison Cooper",
            "id": 123456199
        }, {
            "contact": {
                "email": "kevin.peterson@email.com",
                "phoneNumber": "+1 609 628 5330"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 9,
                    "day": 28
                },
                "sex": "male",
                "parentName": "Nicole Peterson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/0.jpg"
            },
            "financialRecords": {
                "debt": "$39,915"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "Kevin Peterson",
            "id": 123456200
        }, {
            "contact": {
                "email": "jessica.wright@email.com",
                "phoneNumber": "+1 609 921 5150"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 6,
                    "day": 19
                },
                "sex": "female",
                "parentName": "Gabriel Wright",
                "profilePhoto": "https://randomuser.me/api/portraits/women/0.jpg"
            },
            "financialRecords": {
                "debt": "$24,807"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Jessica Wright",
            "id": 123456201
        }, {
            "contact": {
                "email": "tyler.martinez@email.com",
                "phoneNumber": "+1 908 896 8049"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 10,
                    "day": 8
                },
                "sex": "male",
                "parentName": "Brittany Martinez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/1.jpg"
            },
            "financialRecords": {
                "debt": "$60,834"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Tyler Martinez",
            "id": 123456202
        }, {
            "contact": {
                "email": "alexis.roberts@email.com",
                "phoneNumber": "+1 undefined 925 6274"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 6,
                    "day": 16
                },
                "sex": "female",
                "parentName": "Michael Roberts",
                "profilePhoto": "https://randomuser.me/api/portraits/women/1.jpg"
            },
            "financialRecords": {
                "debt": "$13,753"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "Alexis Roberts",
            "id": 123456203
        }, {
            "contact": {
                "email": "ryan.adams@email.com",
                "phoneNumber": "+1 609 673 9053"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 8,
                    "day": 29
                },
                "sex": "male",
                "parentName": "Ashley Adams",
                "profilePhoto": "https://randomuser.me/api/portraits/men/2.jpg"
            },
            "financialRecords": {
                "debt": "$8,486"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "business"
            },
            "isOnline": false,
            "studentName": "Ryan Adams",
            "id": 123456204
        }, {
            "contact": {
                "email": "mary.garnier@email.com",
                "phoneNumber": "+1 201 287 11"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 3,
                    "day": 25
                },
                "sex": "female",
                "parentName": "Kyle Garnier",
                "profilePhoto": "https://randomuser.me/api/portraits/women/2.jpg"
            },
            "financialRecords": {
                "debt": "$84,715"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "Mary Garnier",
            "id": 123456205
        }, {
            "contact": {
                "email": "anthony.hall@email.com",
                "phoneNumber": "+1 201 895 4789"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 9,
                    "day": 4
                },
                "sex": "male",
                "parentName": "Megan Hall",
                "profilePhoto": "https://randomuser.me/api/portraits/men/3.jpg"
            },
            "financialRecords": {
                "debt": "$99,781"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Anthony Hall",
            "id": 123456206
        }, {
            "contact": {
                "email": "alexis.harris@email.com",
                "phoneNumber": "+1 908 286 8992"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 5,
                    "day": 10
                },
                "sex": "female",
                "parentName": "Christian Harris",
                "profilePhoto": "https://randomuser.me/api/portraits/women/3.jpg"
            },
            "financialRecords": {
                "debt": "$15,155"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Alexis Harris",
            "id": 123456207
        }, {
            "contact": {
                "email": "anthony.bonnet@email.com",
                "phoneNumber": "+1 856 829 9463"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 15
                },
                "sex": "male",
                "parentName": "Lillian Bonnet",
                "profilePhoto": "https://randomuser.me/api/portraits/men/4.jpg"
            },
            "financialRecords": {
                "debt": "$68,786"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Anthony Bonnet",
            "id": 123456208
        }, {
            "contact": {
                "email": "hannah.harris@email.com",
                "phoneNumber": "+1 201 924 6746"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 1,
                    "day": 13
                },
                "sex": "female",
                "parentName": "Ryan Harris",
                "profilePhoto": "https://randomuser.me/api/portraits/women/4.jpg"
            },
            "financialRecords": {
                "debt": "$50,526"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Hannah Harris",
            "id": 123456209
        }, {
            "contact": {
                "email": "nathan.rogers@email.com",
                "phoneNumber": "+1 856 387 8494"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 2,
                    "day": 16
                },
                "sex": "male",
                "parentName": "Ashley Rogers",
                "profilePhoto": "https://randomuser.me/api/portraits/men/5.jpg"
            },
            "financialRecords": {
                "debt": "$89,992"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "Nathan Rogers",
            "id": 123456210
        }, {
            "contact": {
                "email": "brittany.garnier@email.com",
                "phoneNumber": "+1 732 497 5187"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 10,
                    "day": 13
                },
                "sex": "female",
                "parentName": "Joshua Garnier",
                "profilePhoto": "https://randomuser.me/api/portraits/women/5.jpg"
            },
            "financialRecords": {
                "debt": "$386"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Brittany Garnier",
            "id": 123456211
        }, {
            "contact": {
                "email": "matthew.baker@email.com",
                "phoneNumber": "+1 201 671 4974"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 11,
                    "day": 28
                },
                "sex": "male",
                "parentName": "Mary Baker",
                "profilePhoto": "https://randomuser.me/api/portraits/men/6.jpg"
            },
            "financialRecords": {
                "debt": "$12,175"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "business"
            },
            "isOnline": true,
            "studentName": "Matthew Baker",
            "id": 123456212
        }, {
            "contact": {
                "email": "sophia.lewis@email.com",
                "phoneNumber": "+1 732 84 3"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 1,
                    "day": 15
                },
                "sex": "female",
                "parentName": "Thomas Lewis",
                "profilePhoto": "https://randomuser.me/api/portraits/women/6.jpg"
            },
            "financialRecords": {
                "debt": "$96,362"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Sophia Lewis",
            "id": 123456213
        }, {
            "contact": {
                "email": "samuel.scott@email.com",
                "phoneNumber": "+1 908 443 2580"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 21
                },
                "sex": "male",
                "parentName": "Karen Scott",
                "profilePhoto": "https://randomuser.me/api/portraits/men/7.jpg"
            },
            "financialRecords": {
                "debt": "$11,902"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Samuel Scott",
            "id": 123456214
        }, {
            "contact": {
                "email": "amanda.schneider@email.com",
                "phoneNumber": "+1 609 866 2162"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 5,
                    "day": 13
                },
                "sex": "female",
                "parentName": "William Schneider",
                "profilePhoto": "https://randomuser.me/api/portraits/women/7.jpg"
            },
            "financialRecords": {
                "debt": "$23,569"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": true,
            "studentName": "Amanda Schneider",
            "id": 123456215
        }, {
            "contact": {
                "email": "nathan.brown@email.com",
                "phoneNumber": "+1 732 320 417"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 3,
                    "day": 26
                },
                "sex": "male",
                "parentName": "Ashley Brown",
                "profilePhoto": "https://randomuser.me/api/portraits/men/8.jpg"
            },
            "financialRecords": {
                "debt": "$42,252"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Nathan Brown",
            "id": 123456216
        }, {
            "contact": {
                "email": "lisa.schmidt@email.com",
                "phoneNumber": "+1 undefined 269 5692"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 7,
                    "day": 16
                },
                "sex": "female",
                "parentName": "Jason Schmidt",
                "profilePhoto": "https://randomuser.me/api/portraits/women/8.jpg"
            },
            "financialRecords": {
                "debt": "$52,025"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Lisa Schmidt",
            "id": 123456217
        }, {
            "contact": {
                "email": "daniel.williams@email.com",
                "phoneNumber": "+1 908 835 1838"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 1,
                    "day": 5
                },
                "sex": "male",
                "parentName": "Lisa Williams",
                "profilePhoto": "https://randomuser.me/api/portraits/men/9.jpg"
            },
            "financialRecords": {
                "debt": "$11,701"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "architectural engineering"
            },
            "isOnline": true,
            "studentName": "Daniel Williams",
            "id": 123456218
        }, {
            "contact": {
                "email": "olivia.schulz@email.com",
                "phoneNumber": "+1 201 617 2465"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 2,
                    "day": 24
                },
                "sex": "female",
                "parentName": "Justin Schulz",
                "profilePhoto": "https://randomuser.me/api/portraits/women/9.jpg"
            },
            "financialRecords": {
                "debt": "$91,037"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Olivia Schulz",
            "id": 123456219
        }, {
            "contact": {
                "email": "matthew.walker@email.com",
                "phoneNumber": "+1 856 949 1924"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 8,
                    "day": 30
                },
                "sex": "male",
                "parentName": "Sophia Walker",
                "profilePhoto": "https://randomuser.me/api/portraits/men/10.jpg"
            },
            "financialRecords": {
                "debt": "$87,531"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "business"
            },
            "isOnline": false,
            "studentName": "Matthew Walker",
            "id": 123456220
        }, {
            "contact": {
                "email": "lisa.adams@email.com",
                "phoneNumber": "+1 609 736 2718"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 6,
                    "day": 28
                },
                "sex": "female",
                "parentName": "Brandon Adams",
                "profilePhoto": "https://randomuser.me/api/portraits/women/10.jpg"
            },
            "financialRecords": {
                "debt": "$7,053"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "architectural engineering"
            },
            "isOnline": true,
            "studentName": "Lisa Adams",
            "id": 123456221
        }, {
            "contact": {
                "email": "mark.müller@email.com",
                "phoneNumber": "+1 609 564 1864"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 4,
                    "day": 4
                },
                "sex": "male",
                "parentName": "Amy Müller",
                "profilePhoto": "https://randomuser.me/api/portraits/men/11.jpg"
            },
            "financialRecords": {
                "debt": "$13,634"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Mark Müller",
            "id": 123456222
        }, {
            "contact": {
                "email": "lisa.brown@email.com",
                "phoneNumber": "+1 732 545 3390"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 7,
                    "day": 15
                },
                "sex": "female",
                "parentName": "Kevin Brown",
                "profilePhoto": "https://randomuser.me/api/portraits/women/11.jpg"
            },
            "financialRecords": {
                "debt": "$73,835"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Lisa Brown",
            "id": 123456223
        }, {
            "contact": {
                "email": "william.dubois@email.com",
                "phoneNumber": "+1 201 658 7073"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 6,
                    "day": 3
                },
                "sex": "male",
                "parentName": "Jessica Dubois",
                "profilePhoto": "https://randomuser.me/api/portraits/men/12.jpg"
            },
            "financialRecords": {
                "debt": "$57,554"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": true,
            "studentName": "William Dubois",
            "id": 123456224
        }, {
            "contact": {
                "email": "susan.richardson@email.com",
                "phoneNumber": "+1 201 8 8873"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 6,
                    "day": 1
                },
                "sex": "female",
                "parentName": "Nicholas Richardson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/12.jpg"
            },
            "financialRecords": {
                "debt": "$41,052"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "psychology"
            },
            "isOnline": true,
            "studentName": "Susan Richardson",
            "id": 123456225
        }, {
            "contact": {
                "email": "anthony.harris@email.com",
                "phoneNumber": "+1 732 403 9610"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 8,
                    "day": 2
                },
                "sex": "male",
                "parentName": "Angela Harris",
                "profilePhoto": "https://randomuser.me/api/portraits/men/13.jpg"
            },
            "financialRecords": {
                "debt": "$56,463"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Anthony Harris",
            "id": 123456226
        }, {
            "contact": {
                "email": "amy.li@email.com",
                "phoneNumber": "+1 732 140 3168"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 9,
                    "day": 23
                },
                "sex": "female",
                "parentName": "Jack Li",
                "profilePhoto": "https://randomuser.me/api/portraits/women/13.jpg"
            },
            "financialRecords": {
                "debt": "$99,709"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Amy Li",
            "id": 123456227
        }, {
            "contact": {
                "email": "james.toussaint@email.com",
                "phoneNumber": "+1 undefined 443 7791"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 7,
                    "day": 13
                },
                "sex": "male",
                "parentName": "Susan Toussaint",
                "profilePhoto": "https://randomuser.me/api/portraits/men/14.jpg"
            },
            "financialRecords": {
                "debt": "$21,288"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "architectural engineering"
            },
            "isOnline": false,
            "studentName": "James Toussaint",
            "id": 123456228
        }, {
            "contact": {
                "email": "emma.hill@email.com",
                "phoneNumber": "+1 201 230 5263"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 1,
                    "day": 29
                },
                "sex": "female",
                "parentName": "Andrew Hill",
                "profilePhoto": "https://randomuser.me/api/portraits/women/14.jpg"
            },
            "financialRecords": {
                "debt": "$36,612"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "Emma Hill",
            "id": 123456229
        }, {
            "contact": {
                "email": "justin.miller@email.com",
                "phoneNumber": "+1 732 341 3621"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 7,
                    "day": 16
                },
                "sex": "male",
                "parentName": "Ashley Miller",
                "profilePhoto": "https://randomuser.me/api/portraits/men/15.jpg"
            },
            "financialRecords": {
                "debt": "$58,947"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "economics"
            },
            "isOnline": true,
            "studentName": "Justin Miller",
            "id": 123456230
        }, {
            "contact": {
                "email": "nicole.rogers@email.com",
                "phoneNumber": "+1 856 49 1821"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 11,
                    "day": 29
                },
                "sex": "female",
                "parentName": "Brandon Rogers",
                "profilePhoto": "https://randomuser.me/api/portraits/women/15.jpg"
            },
            "financialRecords": {
                "debt": "$92,775"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "computer science"
            },
            "isOnline": true,
            "studentName": "Nicole Rogers",
            "id": 123456231
        }, {
            "contact": {
                "email": "william.edwards@email.com",
                "phoneNumber": "+1 609 503 7022"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 11,
                    "day": 11
                },
                "sex": "male",
                "parentName": "Patricia Edwards",
                "profilePhoto": "https://randomuser.me/api/portraits/men/16.jpg"
            },
            "financialRecords": {
                "debt": "$2,413"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "William Edwards",
            "id": 123456232
        }, {
            "contact": {
                "email": "taylor.fournier@email.com",
                "phoneNumber": "+1 609 446 8922"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 1,
                    "day": 29
                },
                "sex": "female",
                "parentName": "Jack Fournier",
                "profilePhoto": "https://randomuser.me/api/portraits/women/16.jpg"
            },
            "financialRecords": {
                "debt": "$62,827"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "communications"
            },
            "isOnline": false,
            "studentName": "Taylor Fournier",
            "id": 123456233
        }, {
            "contact": {
                "email": "thomas.white@email.com",
                "phoneNumber": "+1 undefined 582 4588"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 6,
                    "day": 15
                },
                "sex": "male",
                "parentName": "Brittany White",
                "profilePhoto": "https://randomuser.me/api/portraits/men/17.jpg"
            },
            "financialRecords": {
                "debt": "$80,423"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Thomas White",
            "id": 123456234
        }, {
            "contact": {
                "email": "michelle.howard@email.com",
                "phoneNumber": "+1 908 532 3147"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 8,
                    "day": 3
                },
                "sex": "female",
                "parentName": "Nicholas Howard",
                "profilePhoto": "https://randomuser.me/api/portraits/women/17.jpg"
            },
            "financialRecords": {
                "debt": "$95,438"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Michelle Howard",
            "id": 123456235
        }, {
            "contact": {
                "email": "daniel.garnier@email.com",
                "phoneNumber": "+1 201 200 8258"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 4,
                    "day": 20
                },
                "sex": "male",
                "parentName": "Ashley Garnier",
                "profilePhoto": "https://randomuser.me/api/portraits/men/18.jpg"
            },
            "financialRecords": {
                "debt": "$87,184"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Daniel Garnier",
            "id": 123456236
        }, {
            "contact": {
                "email": "abigail.bonnet@email.com",
                "phoneNumber": "+1 856 759 6112"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 4,
                    "day": 10
                },
                "sex": "female",
                "parentName": "Brandon Bonnet",
                "profilePhoto": "https://randomuser.me/api/portraits/women/18.jpg"
            },
            "financialRecords": {
                "debt": "$97,001"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "electrical engineering"
            },
            "isOnline": true,
            "studentName": "Abigail Bonnet",
            "id": 123456237
        }, {
            "contact": {
                "email": "joshua.taylor@email.com",
                "phoneNumber": "+1 undefined 99 5329"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 25
                },
                "sex": "male",
                "parentName": "Amanda Taylor",
                "profilePhoto": "https://randomuser.me/api/portraits/men/19.jpg"
            },
            "financialRecords": {
                "debt": "$97,675"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "economics"
            },
            "isOnline": true,
            "studentName": "Joshua Taylor",
            "id": 123456238
        }, {
            "contact": {
                "email": "emma.roberts@email.com",
                "phoneNumber": "+1 609 621 325"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 11,
                    "day": 2
                },
                "sex": "female",
                "parentName": "Kyle Roberts",
                "profilePhoto": "https://randomuser.me/api/portraits/women/19.jpg"
            },
            "financialRecords": {
                "debt": "$63,054"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Emma Roberts",
            "id": 123456239
        }, {
            "contact": {
                "email": "christopher.cooper@email.com",
                "phoneNumber": "+1 908 503 7198"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 1,
                    "day": 1
                },
                "sex": "male",
                "parentName": "Angela Cooper",
                "profilePhoto": "https://randomuser.me/api/portraits/men/20.jpg"
            },
            "financialRecords": {
                "debt": "$76,320"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Christopher Cooper",
            "id": 123456240
        }, {
            "contact": {
                "email": "ashley.cooper@email.com",
                "phoneNumber": "+1 201 251 9084"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 11,
                    "day": 19
                },
                "sex": "female",
                "parentName": "Andrew Cooper",
                "profilePhoto": "https://randomuser.me/api/portraits/women/20.jpg"
            },
            "financialRecords": {
                "debt": "$91,512"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "computer science"
            },
            "isOnline": true,
            "studentName": "Ashley Cooper",
            "id": 123456241
        }, {
            "contact": {
                "email": "matthew.taylor@email.com",
                "phoneNumber": "+1 732 752 8280"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 9,
                    "day": 1
                },
                "sex": "male",
                "parentName": "Jessica Taylor",
                "profilePhoto": "https://randomuser.me/api/portraits/men/21.jpg"
            },
            "financialRecords": {
                "debt": "$68,051"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "psychology"
            },
            "isOnline": true,
            "studentName": "Matthew Taylor",
            "id": 123456242
        }, {
            "contact": {
                "email": "isabella.cooper@email.com",
                "phoneNumber": "+1 856 481 3927"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 4,
                    "day": 2
                },
                "sex": "female",
                "parentName": "Robert Cooper",
                "profilePhoto": "https://randomuser.me/api/portraits/women/21.jpg"
            },
            "financialRecords": {
                "debt": "$62,767"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Isabella Cooper",
            "id": 123456243
        }, {
            "contact": {
                "email": "gabriel.wilson@email.com",
                "phoneNumber": "+1 201 214 8748"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 4,
                    "day": 6
                },
                "sex": "male",
                "parentName": "Karen Wilson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/22.jpg"
            },
            "financialRecords": {
                "debt": "$9,300"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "communications"
            },
            "isOnline": false,
            "studentName": "Gabriel Wilson",
            "id": 123456244
        }, {
            "contact": {
                "email": "isabella.garnier@email.com",
                "phoneNumber": "+1 201 200 2161"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 2,
                    "day": 15
                },
                "sex": "female",
                "parentName": "Daniel Garnier",
                "profilePhoto": "https://randomuser.me/api/portraits/women/22.jpg"
            },
            "financialRecords": {
                "debt": "$53,835"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Isabella Garnier",
            "id": 123456245
        }, {
            "contact": {
                "email": "gabriel.young@email.com",
                "phoneNumber": "+1 908 92 5766"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 6,
                    "day": 17
                },
                "sex": "male",
                "parentName": "Abigail Young",
                "profilePhoto": "https://randomuser.me/api/portraits/men/23.jpg"
            },
            "financialRecords": {
                "debt": "$41,549"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "electrical engineering"
            },
            "isOnline": true,
            "studentName": "Gabriel Young",
            "id": 123456246
        }, {
            "contact": {
                "email": "sarah.richardson@email.com",
                "phoneNumber": "+1 732 829 7726"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 5,
                    "day": 11
                },
                "sex": "female",
                "parentName": "Joseph Richardson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/23.jpg"
            },
            "financialRecords": {
                "debt": "$22,471"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Sarah Richardson",
            "id": 123456247
        }, {
            "contact": {
                "email": "brandon.allen@email.com",
                "phoneNumber": "+1 732 622 5851"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 4,
                    "day": 3
                },
                "sex": "male",
                "parentName": "Hannah Allen",
                "profilePhoto": "https://randomuser.me/api/portraits/men/24.jpg"
            },
            "financialRecords": {
                "debt": "$48,162"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Brandon Allen",
            "id": 123456248
        }, {
            "contact": {
                "email": "michelle.robinson@email.com",
                "phoneNumber": "+1 201 613 1512"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 10,
                    "day": 26
                },
                "sex": "female",
                "parentName": "Jonathan Robinson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/24.jpg"
            },
            "financialRecords": {
                "debt": "$69,732"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Michelle Robinson",
            "id": 123456249
        }, {
            "contact": {
                "email": "nathan.brown@email.com",
                "phoneNumber": "+1 201 132 6267"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 4,
                    "day": 5
                },
                "sex": "male",
                "parentName": "Melissa Brown",
                "profilePhoto": "https://randomuser.me/api/portraits/men/25.jpg"
            },
            "financialRecords": {
                "debt": "$51,773"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "business"
            },
            "isOnline": false,
            "studentName": "Nathan Brown",
            "id": 123456250
        }, {
            "contact": {
                "email": "megan.miller@email.com",
                "phoneNumber": "+1 201 676 5359"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 9,
                    "day": 4
                },
                "sex": "female",
                "parentName": "Alexander Miller",
                "profilePhoto": "https://randomuser.me/api/portraits/women/25.jpg"
            },
            "financialRecords": {
                "debt": "$55,500"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "Megan Miller",
            "id": 123456251
        }, {
            "contact": {
                "email": "samuel.baker@email.com",
                "phoneNumber": "+1 908 944 9613"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 3,
                    "day": 17
                },
                "sex": "male",
                "parentName": "Sophia Baker",
                "profilePhoto": "https://randomuser.me/api/portraits/men/26.jpg"
            },
            "financialRecords": {
                "debt": "$68,607"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Samuel Baker",
            "id": 123456252
        }, {
            "contact": {
                "email": "hannah.bonnet@email.com",
                "phoneNumber": "+1 201 696 6637"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 3,
                    "day": 17
                },
                "sex": "female",
                "parentName": "Gabriel Bonnet",
                "profilePhoto": "https://randomuser.me/api/portraits/women/26.jpg"
            },
            "financialRecords": {
                "debt": "$51,716"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Hannah Bonnet",
            "id": 123456253
        }, {
            "contact": {
                "email": "christopher.zhang@email.com",
                "phoneNumber": "+1 201 272 4249"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 6,
                    "day": 7
                },
                "sex": "male",
                "parentName": "Samantha Zhang",
                "profilePhoto": "https://randomuser.me/api/portraits/men/27.jpg"
            },
            "financialRecords": {
                "debt": "$8,105"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Christopher Zhang",
            "id": 123456254
        }, {
            "contact": {
                "email": "linda.smith@email.com",
                "phoneNumber": "+1 609 934 9780"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 4,
                    "day": 4
                },
                "sex": "female",
                "parentName": "Ethan Smith",
                "profilePhoto": "https://randomuser.me/api/portraits/women/27.jpg"
            },
            "financialRecords": {
                "debt": "$49,487"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "psychology"
            },
            "isOnline": true,
            "studentName": "Linda Smith",
            "id": 123456255
        }, {
            "contact": {
                "email": "andrew.gonzalez@email.com",
                "phoneNumber": "+1 609 604 5147"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 3,
                    "day": 1
                },
                "sex": "male",
                "parentName": "Nicole Gonzalez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/28.jpg"
            },
            "financialRecords": {
                "debt": "$86,063"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "communications"
            },
            "isOnline": false,
            "studentName": "Andrew Gonzalez",
            "id": 123456256
        }, {
            "contact": {
                "email": "jessica.chen@email.com",
                "phoneNumber": "+1 609 753 1123"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 10,
                    "day": 30
                },
                "sex": "female",
                "parentName": "Jonathan Chen",
                "profilePhoto": "https://randomuser.me/api/portraits/women/28.jpg"
            },
            "financialRecords": {
                "debt": "$41,805"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Jessica Chen",
            "id": 123456257
        }, {
            "contact": {
                "email": "jacob.schmidt@email.com",
                "phoneNumber": "+1 908 266 8227"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 7,
                    "day": 10
                },
                "sex": "male",
                "parentName": "Jennifer Schmidt",
                "profilePhoto": "https://randomuser.me/api/portraits/men/29.jpg"
            },
            "financialRecords": {
                "debt": "$36,312"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "electrical engineering"
            },
            "isOnline": true,
            "studentName": "Jacob Schmidt",
            "id": 123456258
        }, {
            "contact": {
                "email": "emma.schneider@email.com",
                "phoneNumber": "+1 908 333 6539"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 4,
                    "day": 13
                },
                "sex": "female",
                "parentName": "Daniel Schneider",
                "profilePhoto": "https://randomuser.me/api/portraits/women/29.jpg"
            },
            "financialRecords": {
                "debt": "$41,005"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Emma Schneider",
            "id": 123456259
        }, {
            "contact": {
                "email": "ryan.wilson@email.com",
                "phoneNumber": "+1 856 95 7637"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 1,
                    "day": 8
                },
                "sex": "male",
                "parentName": "Kimberly Wilson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/30.jpg"
            },
            "financialRecords": {
                "debt": "$1,847"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Ryan Wilson",
            "id": 123456260
        }, {
            "contact": {
                "email": "amanda.flores@email.com",
                "phoneNumber": "+1 201 462 575"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 5,
                    "day": 16
                },
                "sex": "female",
                "parentName": "Samuel Flores",
                "profilePhoto": "https://randomuser.me/api/portraits/women/30.jpg"
            },
            "financialRecords": {
                "debt": "$65,856"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Amanda Flores",
            "id": 123456261
        }, {
            "contact": {
                "email": "gabriel.dubois@email.com",
                "phoneNumber": "+1 732 287 4225"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 8,
                    "day": 23
                },
                "sex": "male",
                "parentName": "Emma Dubois",
                "profilePhoto": "https://randomuser.me/api/portraits/men/31.jpg"
            },
            "financialRecords": {
                "debt": "$94,004"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "economics"
            },
            "isOnline": true,
            "studentName": "Gabriel Dubois",
            "id": 123456262
        }, {
            "contact": {
                "email": "karen.wright@email.com",
                "phoneNumber": "+1 856 799 9096"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 4,
                    "day": 6
                },
                "sex": "female",
                "parentName": "Nicholas Wright",
                "profilePhoto": "https://randomuser.me/api/portraits/women/31.jpg"
            },
            "financialRecords": {
                "debt": "$41,712"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "psychology"
            },
            "isOnline": true,
            "studentName": "Karen Wright",
            "id": 123456263
        }, {
            "contact": {
                "email": "andrew.thompson@email.com",
                "phoneNumber": "+1 undefined 16 6270"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 12,
                    "day": 3
                },
                "sex": "male",
                "parentName": "Jessica Thompson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/32.jpg"
            },
            "financialRecords": {
                "debt": "$84,981"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Andrew Thompson",
            "id": 123456264
        }, {
            "contact": {
                "email": "abigail.flores@email.com",
                "phoneNumber": "+1 201 690 8660"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 3,
                    "day": 6
                },
                "sex": "female",
                "parentName": "Jonathan Flores",
                "profilePhoto": "https://randomuser.me/api/portraits/women/32.jpg"
            },
            "financialRecords": {
                "debt": "$30,225"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Abigail Flores",
            "id": 123456265
        }, {
            "contact": {
                "email": "christian.nguyen@email.com",
                "phoneNumber": "+1 undefined 196 1529"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 3,
                    "day": 16
                },
                "sex": "male",
                "parentName": "Amanda Nguyen",
                "profilePhoto": "https://randomuser.me/api/portraits/men/33.jpg"
            },
            "financialRecords": {
                "debt": "$4,216"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Christian Nguyen",
            "id": 123456266
        }, {
            "contact": {
                "email": "taylor.carter@email.com",
                "phoneNumber": "+1 undefined 374 8150"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 4,
                    "day": 10
                },
                "sex": "female",
                "parentName": "Daniel Carter",
                "profilePhoto": "https://randomuser.me/api/portraits/women/33.jpg"
            },
            "financialRecords": {
                "debt": "$99,567"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "architectural engineering"
            },
            "isOnline": true,
            "studentName": "Taylor Carter",
            "id": 123456267
        }, {
            "contact": {
                "email": "thomas.white@email.com",
                "phoneNumber": "+1 732 843 7760"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 31
                },
                "sex": "male",
                "parentName": "Madison White",
                "profilePhoto": "https://randomuser.me/api/portraits/men/34.jpg"
            },
            "financialRecords": {
                "debt": "$44,136"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Thomas White",
            "id": 123456268
        }, {
            "contact": {
                "email": "lisa.cooper@email.com",
                "phoneNumber": "+1 856 607 8312"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 3,
                    "day": 17
                },
                "sex": "female",
                "parentName": "Jonathan Cooper",
                "profilePhoto": "https://randomuser.me/api/portraits/women/34.jpg"
            },
            "financialRecords": {
                "debt": "$40,913"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Lisa Cooper",
            "id": 123456269
        }, {
            "contact": {
                "email": "kevin.richardson@email.com",
                "phoneNumber": "+1 201 79 6286"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 1,
                    "day": 5
                },
                "sex": "male",
                "parentName": "Mary Richardson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/35.jpg"
            },
            "financialRecords": {
                "debt": "$76,930"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "computer science"
            },
            "isOnline": true,
            "studentName": "Kevin Richardson",
            "id": 123456270
        }, {
            "contact": {
                "email": "nicole.lee@email.com",
                "phoneNumber": "+1 856 623 2491"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 6,
                    "day": 28
                },
                "sex": "female",
                "parentName": "Mark Lee",
                "profilePhoto": "https://randomuser.me/api/portraits/women/35.jpg"
            },
            "financialRecords": {
                "debt": "$92,292"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": true,
            "studentName": "Nicole Lee",
            "id": 123456271
        }, {
            "contact": {
                "email": "nathan.edwards@email.com",
                "phoneNumber": "+1 609 680 6036"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 5,
                    "day": 27
                },
                "sex": "male",
                "parentName": "Brittany Edwards",
                "profilePhoto": "https://randomuser.me/api/portraits/men/36.jpg"
            },
            "financialRecords": {
                "debt": "$28,069"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Nathan Edwards",
            "id": 123456272
        }, {
            "contact": {
                "email": "kayla.dubois@email.com",
                "phoneNumber": "+1 609 171 5031"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 5,
                    "day": 22
                },
                "sex": "female",
                "parentName": "Kevin Dubois",
                "profilePhoto": "https://randomuser.me/api/portraits/women/36.jpg"
            },
            "financialRecords": {
                "debt": "$54,869"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Kayla Dubois",
            "id": 123456273
        }, {
            "contact": {
                "email": "ryan.white@email.com",
                "phoneNumber": "+1 732 523 2613"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 11,
                    "day": 27
                },
                "sex": "male",
                "parentName": "Jennifer White",
                "profilePhoto": "https://randomuser.me/api/portraits/men/37.jpg"
            },
            "financialRecords": {
                "debt": "$99,655"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Ryan White",
            "id": 123456274
        }, {
            "contact": {
                "email": "kimberly.lavigne@email.com",
                "phoneNumber": "+1 908 226 5116"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 2,
                    "day": 4
                },
                "sex": "female",
                "parentName": "Robert Lavigne",
                "profilePhoto": "https://randomuser.me/api/portraits/women/37.jpg"
            },
            "financialRecords": {
                "debt": "$98,043"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "communications"
            },
            "isOnline": true,
            "studentName": "Kimberly Lavigne",
            "id": 123456275
        }, {
            "contact": {
                "email": "jonathan.dupont@email.com",
                "phoneNumber": "+1 201 883 2463"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 5,
                    "day": 22
                },
                "sex": "male",
                "parentName": "Sophia Dupont",
                "profilePhoto": "https://randomuser.me/api/portraits/men/38.jpg"
            },
            "financialRecords": {
                "debt": "$20,868"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Jonathan Dupont",
            "id": 123456276
        }, {
            "contact": {
                "email": "samantha.miller@email.com",
                "phoneNumber": "+1 undefined 151 4055"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 3,
                    "day": 31
                },
                "sex": "female",
                "parentName": "Ryan Miller",
                "profilePhoto": "https://randomuser.me/api/portraits/women/38.jpg"
            },
            "financialRecords": {
                "debt": "$86,043"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "business"
            },
            "isOnline": true,
            "studentName": "Samantha Miller",
            "id": 123456277
        }, {
            "contact": {
                "email": "christian.fournier@email.com",
                "phoneNumber": "+1 609 790 9971"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 26
                },
                "sex": "male",
                "parentName": "Karen Fournier",
                "profilePhoto": "https://randomuser.me/api/portraits/men/39.jpg"
            },
            "financialRecords": {
                "debt": "$48,226"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Christian Fournier",
            "id": 123456278
        }, {
            "contact": {
                "email": "megan.schmidt@email.com",
                "phoneNumber": "+1 undefined 142 7693"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 2,
                    "day": 22
                },
                "sex": "female",
                "parentName": "Jason Schmidt",
                "profilePhoto": "https://randomuser.me/api/portraits/women/39.jpg"
            },
            "financialRecords": {
                "debt": "$16,554"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "psychology"
            },
            "isOnline": true,
            "studentName": "Megan Schmidt",
            "id": 123456279
        }, {
            "contact": {
                "email": "matthew.moore@email.com",
                "phoneNumber": "+1 201 475 8564"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 2,
                    "day": 11
                },
                "sex": "male",
                "parentName": "Elizabeth Moore",
                "profilePhoto": "https://randomuser.me/api/portraits/men/40.jpg"
            },
            "financialRecords": {
                "debt": "$27,550"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Matthew Moore",
            "id": 123456280
        }, {
            "contact": {
                "email": "emma.toussaint@email.com",
                "phoneNumber": "+1 201 142 1390"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 8,
                    "day": 23
                },
                "sex": "female",
                "parentName": "Ryan Toussaint",
                "profilePhoto": "https://randomuser.me/api/portraits/women/40.jpg"
            },
            "financialRecords": {
                "debt": "$80,412"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Emma Toussaint",
            "id": 123456281
        }, {
            "contact": {
                "email": "robert.adams@email.com",
                "phoneNumber": "+1 609 992 7718"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 1,
                    "day": 14
                },
                "sex": "male",
                "parentName": "Lillian Adams",
                "profilePhoto": "https://randomuser.me/api/portraits/men/41.jpg"
            },
            "financialRecords": {
                "debt": "$29,415"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "business"
            },
            "isOnline": false,
            "studentName": "Robert Adams",
            "id": 123456282
        }, {
            "contact": {
                "email": "ashley.nguyen@email.com",
                "phoneNumber": "+1 201 694 8079"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 1,
                    "day": 8
                },
                "sex": "female",
                "parentName": "Michael Nguyen",
                "profilePhoto": "https://randomuser.me/api/portraits/women/41.jpg"
            },
            "financialRecords": {
                "debt": "$34,071"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "Ashley Nguyen",
            "id": 123456283
        }, {
            "contact": {
                "email": "jacob.young@email.com",
                "phoneNumber": "+1 732 952 6704"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 8,
                    "day": 29
                },
                "sex": "male",
                "parentName": "Kimberly Young",
                "profilePhoto": "https://randomuser.me/api/portraits/men/42.jpg"
            },
            "financialRecords": {
                "debt": "$87,109"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Jacob Young",
            "id": 123456284
        }, {
            "contact": {
                "email": "karen.lewis@email.com",
                "phoneNumber": "+1 856 909 8900"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 6,
                    "day": 29
                },
                "sex": "female",
                "parentName": "William Lewis",
                "profilePhoto": "https://randomuser.me/api/portraits/women/42.jpg"
            },
            "financialRecords": {
                "debt": "$72,134"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "Karen Lewis",
            "id": 123456285
        }, {
            "contact": {
                "email": "mark.thompson@email.com",
                "phoneNumber": "+1 732 826 5830"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 3,
                    "day": 18
                },
                "sex": "male",
                "parentName": "Susan Thompson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/43.jpg"
            },
            "financialRecords": {
                "debt": "$91,966"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Mark Thompson",
            "id": 123456286
        }, {
            "contact": {
                "email": "karen.campbell@email.com",
                "phoneNumber": "+1 908 350 8356"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 29
                },
                "sex": "female",
                "parentName": "Kyle Campbell",
                "profilePhoto": "https://randomuser.me/api/portraits/women/43.jpg"
            },
            "financialRecords": {
                "debt": "$17,696"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Karen Campbell",
            "id": 123456287
        }, {
            "contact": {
                "email": "samuel.green@email.com",
                "phoneNumber": "+1 732 394 7559"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 4,
                    "day": 24
                },
                "sex": "male",
                "parentName": "Jessica Green",
                "profilePhoto": "https://randomuser.me/api/portraits/men/44.jpg"
            },
            "financialRecords": {
                "debt": "$7,232"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "business"
            },
            "isOnline": false,
            "studentName": "Samuel Green",
            "id": 123456288
        }, {
            "contact": {
                "email": "michelle.jones@email.com",
                "phoneNumber": "+1 609 595 7303"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 4,
                    "day": 22
                },
                "sex": "female",
                "parentName": "Anthony Jones",
                "profilePhoto": "https://randomuser.me/api/portraits/women/44.jpg"
            },
            "financialRecords": {
                "debt": "$82,275"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Michelle Jones",
            "id": 123456289
        }, {
            "contact": {
                "email": "james.brown@email.com",
                "phoneNumber": "+1 201 377 174"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 1,
                    "day": 6
                },
                "sex": "male",
                "parentName": "Michelle Brown",
                "profilePhoto": "https://randomuser.me/api/portraits/men/45.jpg"
            },
            "financialRecords": {
                "debt": "$79,611"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "civil engineering"
            },
            "isOnline": true,
            "studentName": "James Brown",
            "id": 123456290
        }, {
            "contact": {
                "email": "susan.miller@email.com",
                "phoneNumber": "+1 609 446 1723"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 11,
                    "day": 7
                },
                "sex": "female",
                "parentName": "Alexander Miller",
                "profilePhoto": "https://randomuser.me/api/portraits/women/45.jpg"
            },
            "financialRecords": {
                "debt": "$59,868"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Susan Miller",
            "id": 123456291
        }, {
            "contact": {
                "email": "ethan.green@email.com",
                "phoneNumber": "+1 856 86 8465"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 10,
                    "day": 30
                },
                "sex": "male",
                "parentName": "Amanda Green",
                "profilePhoto": "https://randomuser.me/api/portraits/men/46.jpg"
            },
            "financialRecords": {
                "debt": "$69,030"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Ethan Green",
            "id": 123456292
        }, {
            "contact": {
                "email": "jennifer.braun@email.com",
                "phoneNumber": "+1 732 111 7697"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 9,
                    "day": 26
                },
                "sex": "female",
                "parentName": "Nathan Braun",
                "profilePhoto": "https://randomuser.me/api/portraits/women/46.jpg"
            },
            "financialRecords": {
                "debt": "$48,212"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "economics"
            },
            "isOnline": true,
            "studentName": "Jennifer Braun",
            "id": 123456293
        }, {
            "contact": {
                "email": "christopher.davis@email.com",
                "phoneNumber": "+1 201 675 9063"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 8,
                    "day": 18
                },
                "sex": "male",
                "parentName": "Taylor Davis",
                "profilePhoto": "https://randomuser.me/api/portraits/men/47.jpg"
            },
            "financialRecords": {
                "debt": "$93,296"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Christopher Davis",
            "id": 123456294
        }, {
            "contact": {
                "email": "brittany.peterson@email.com",
                "phoneNumber": "+1 856 164 4156"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 4,
                    "day": 18
                },
                "sex": "female",
                "parentName": "Kyle Peterson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/47.jpg"
            },
            "financialRecords": {
                "debt": "$35,219"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Brittany Peterson",
            "id": 123456295
        }, {
            "contact": {
                "email": "jonathan.williams@email.com",
                "phoneNumber": "+1 732 777 5955"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 2,
                    "day": 11
                },
                "sex": "male",
                "parentName": "Kimberly Williams",
                "profilePhoto": "https://randomuser.me/api/portraits/men/48.jpg"
            },
            "financialRecords": {
                "debt": "$11,130"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Jonathan Williams",
            "id": 123456296
        }, {
            "contact": {
                "email": "mary.rodriguez@email.com",
                "phoneNumber": "+1 856 433 8524"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 3,
                    "day": 31
                },
                "sex": "female",
                "parentName": "Mark Rodriguez",
                "profilePhoto": "https://randomuser.me/api/portraits/women/48.jpg"
            },
            "financialRecords": {
                "debt": "$67,225"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Mary Rodriguez",
            "id": 123456297
        }, {
            "contact": {
                "email": "ryan.lewis@email.com",
                "phoneNumber": "+1 201 230 3811"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 9,
                    "day": 21
                },
                "sex": "male",
                "parentName": "Susan Lewis",
                "profilePhoto": "https://randomuser.me/api/portraits/men/49.jpg"
            },
            "financialRecords": {
                "debt": "$74,836"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "Ryan Lewis",
            "id": 123456298
        }, {
            "contact": {
                "email": "isabella.lee@email.com",
                "phoneNumber": "+1 732 372 6893"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 10,
                    "day": 8
                },
                "sex": "female",
                "parentName": "Thomas Lee",
                "profilePhoto": "https://randomuser.me/api/portraits/women/49.jpg"
            },
            "financialRecords": {
                "debt": "$16,677"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Isabella Lee",
            "id": 123456299
        }, {
            "contact": {
                "email": "jacob.miller@email.com",
                "phoneNumber": "+1 609 664 4910"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 8,
                    "day": 24
                },
                "sex": "male",
                "parentName": "Stephanie Miller",
                "profilePhoto": "https://randomuser.me/api/portraits/men/50.jpg"
            },
            "financialRecords": {
                "debt": "$17,550"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Jacob Miller",
            "id": 123456300
        }, {
            "contact": {
                "email": "ashley.brown@email.com",
                "phoneNumber": "+1 856 725 5330"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 12,
                    "day": 9
                },
                "sex": "female",
                "parentName": "Austin Brown",
                "profilePhoto": "https://randomuser.me/api/portraits/women/50.jpg"
            },
            "financialRecords": {
                "debt": "$94,423"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Ashley Brown",
            "id": 123456301
        }, {
            "contact": {
                "email": "nathan.chen@email.com",
                "phoneNumber": "+1 609 218 6065"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 9,
                    "day": 4
                },
                "sex": "male",
                "parentName": "Emily Chen",
                "profilePhoto": "https://randomuser.me/api/portraits/men/51.jpg"
            },
            "financialRecords": {
                "debt": "$19,994"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "Nathan Chen",
            "id": 123456302
        }, {
            "contact": {
                "email": "nicole.liu@email.com",
                "phoneNumber": "+1 732 637 9603"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 10,
                    "day": 17
                },
                "sex": "female",
                "parentName": "Anthony Liu",
                "profilePhoto": "https://randomuser.me/api/portraits/women/51.jpg"
            },
            "financialRecords": {
                "debt": "$93,771"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": true,
            "studentName": "Nicole Liu",
            "id": 123456303
        }, {
            "contact": {
                "email": "ryan.allen@email.com",
                "phoneNumber": "+1 undefined 533 4820"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 4,
                    "day": 24
                },
                "sex": "male",
                "parentName": "Kimberly Allen",
                "profilePhoto": "https://randomuser.me/api/portraits/men/52.jpg"
            },
            "financialRecords": {
                "debt": "$60,896"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Ryan Allen",
            "id": 123456304
        }, {
            "contact": {
                "email": "kimberly.jones@email.com",
                "phoneNumber": "+1 908 783 3158"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 9,
                    "day": 2
                },
                "sex": "female",
                "parentName": "Jack Jones",
                "profilePhoto": "https://randomuser.me/api/portraits/women/52.jpg"
            },
            "financialRecords": {
                "debt": "$92,941"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Kimberly Jones",
            "id": 123456305
        }, {
            "contact": {
                "email": "joseph.hill@email.com",
                "phoneNumber": "+1 201 389 3726"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 7,
                    "day": 22
                },
                "sex": "male",
                "parentName": "Kayla Hill",
                "profilePhoto": "https://randomuser.me/api/portraits/men/53.jpg"
            },
            "financialRecords": {
                "debt": "$22,510"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": true,
            "studentName": "Joseph Hill",
            "id": 123456306
        }, {
            "contact": {
                "email": "samantha.anderson@email.com",
                "phoneNumber": "+1 201 11 6358"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 10,
                    "day": 19
                },
                "sex": "female",
                "parentName": "Austin Anderson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/53.jpg"
            },
            "financialRecords": {
                "debt": "$92,952"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Samantha Anderson",
            "id": 123456307
        }, {
            "contact": {
                "email": "matthew.nguyen@email.com",
                "phoneNumber": "+1 609 810 4096"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 1,
                    "day": 9
                },
                "sex": "male",
                "parentName": "Susan Nguyen",
                "profilePhoto": "https://randomuser.me/api/portraits/men/54.jpg"
            },
            "financialRecords": {
                "debt": "$27,311"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Matthew Nguyen",
            "id": 123456308
        }, {
            "contact": {
                "email": "susan.wright@email.com",
                "phoneNumber": "+1 732 49 2032"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 11,
                    "day": 16
                },
                "sex": "female",
                "parentName": "Jack Wright",
                "profilePhoto": "https://randomuser.me/api/portraits/women/54.jpg"
            },
            "financialRecords": {
                "debt": "$65,670"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Susan Wright",
            "id": 123456309
        }, {
            "contact": {
                "email": "daniel.roberts@email.com",
                "phoneNumber": "+1 856 998 9356"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 10,
                    "day": 3
                },
                "sex": "male",
                "parentName": "Karen Roberts",
                "profilePhoto": "https://randomuser.me/api/portraits/men/55.jpg"
            },
            "financialRecords": {
                "debt": "$97,867"
            },
            "academicRecords": {
                "class": "VII B"
            },
            "isOnline": false,
            "studentName": "Daniel Roberts",
            "id": 123456310
        }, {
            "contact": {
                "email": "ashley.li@email.com",
                "phoneNumber": "+1 856 346 5120"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 8,
                    "day": 14
                },
                "sex": "female",
                "parentName": "Christian Li",
                "profilePhoto": "https://randomuser.me/api/portraits/women/55.jpg"
            },
            "financialRecords": {
                "debt": "$21,351"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Ashley Li",
            "id": 123456311
        }, {
            "contact": {
                "email": "james.jones@email.com",
                "phoneNumber": "+1 856 740 1669"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 6,
                    "day": 4
                },
                "sex": "male",
                "parentName": "Angela Jones",
                "profilePhoto": "https://randomuser.me/api/portraits/men/56.jpg"
            },
            "financialRecords": {
                "debt": "$38,868"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "James Jones",
            "id": 123456312
        }, {
            "contact": {
                "email": "emma.adams@email.com",
                "phoneNumber": "+1 908 29 3390"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 5,
                    "day": 28
                },
                "sex": "female",
                "parentName": "Ethan Adams",
                "profilePhoto": "https://randomuser.me/api/portraits/women/56.jpg"
            },
            "financialRecords": {
                "debt": "$20,561"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "Emma Adams",
            "id": 123456313
        }, {
            "contact": {
                "email": "ethan.lewis@email.com",
                "phoneNumber": "+1 732 856 9381"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 5,
                    "day": 11
                },
                "sex": "male",
                "parentName": "Brittany Lewis",
                "profilePhoto": "https://randomuser.me/api/portraits/men/57.jpg"
            },
            "financialRecords": {
                "debt": "$42,770"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Ethan Lewis",
            "id": 123456314
        }, {
            "contact": {
                "email": "nicole.nelson@email.com",
                "phoneNumber": "+1 856 524 8016"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 10,
                    "day": 5
                },
                "sex": "female",
                "parentName": "Austin Nelson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/57.jpg"
            },
            "financialRecords": {
                "debt": "$47,964"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "computer science"
            },
            "isOnline": true,
            "studentName": "Nicole Nelson",
            "id": 123456315
        }, {
            "contact": {
                "email": "joseph.peterson@email.com",
                "phoneNumber": "+1 856 237 6546"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 5,
                    "day": 1
                },
                "sex": "male",
                "parentName": "Lisa Peterson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/58.jpg"
            },
            "financialRecords": {
                "debt": "$16,238"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Joseph Peterson",
            "id": 123456316
        }, {
            "contact": {
                "email": "kimberly.wilson@email.com",
                "phoneNumber": "+1 201 173 1630"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 10,
                    "day": 25
                },
                "sex": "female",
                "parentName": "Joseph Wilson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/58.jpg"
            },
            "financialRecords": {
                "debt": "$17,735"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "Kimberly Wilson",
            "id": 123456317
        }, {
            "contact": {
                "email": "kevin.bonnet@email.com",
                "phoneNumber": "+1 856 371 8966"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 9,
                    "day": 7
                },
                "sex": "male",
                "parentName": "Elizabeth Bonnet",
                "profilePhoto": "https://randomuser.me/api/portraits/men/59.jpg"
            },
            "financialRecords": {
                "debt": "$94,249"
            },
            "academicRecords": {
                "class": "VII C"
            },
            "isOnline": false,
            "studentName": "Kevin Bonnet",
            "id": 123456318
        }, {
            "contact": {
                "email": "melissa.schneider@email.com",
                "phoneNumber": "+1 908 164 9985"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 2,
                    "day": 15
                },
                "sex": "female",
                "parentName": "Ethan Schneider",
                "profilePhoto": "https://randomuser.me/api/portraits/women/59.jpg"
            },
            "financialRecords": {
                "debt": "$58,719"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Melissa Schneider",
            "id": 123456319
        }, {
            "contact": {
                "email": "david.young@email.com",
                "phoneNumber": "+1 732 58 6882"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 20
                },
                "sex": "male",
                "parentName": "Emma Young",
                "profilePhoto": "https://randomuser.me/api/portraits/men/60.jpg"
            },
            "financialRecords": {
                "debt": "$25,576"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "David Young",
            "id": 123456320
        }, {
            "contact": {
                "email": "michelle.braun@email.com",
                "phoneNumber": "+1 undefined 28 6787"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 9,
                    "day": 9
                },
                "sex": "female",
                "parentName": "Nicholas Braun",
                "profilePhoto": "https://randomuser.me/api/portraits/women/60.jpg"
            },
            "financialRecords": {
                "debt": "$94,441"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": true,
            "studentName": "Michelle Braun",
            "id": 123456321
        }, {
            "contact": {
                "email": "michael.monet@email.com",
                "phoneNumber": "+1 609 359 8481"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 8,
                    "day": 19
                },
                "sex": "male",
                "parentName": "Melissa Monet",
                "profilePhoto": "https://randomuser.me/api/portraits/men/61.jpg"
            },
            "financialRecords": {
                "debt": "$22,608"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Michael Monet",
            "id": 123456322
        }, {
            "contact": {
                "email": "amanda.zhang@email.com",
                "phoneNumber": "+1 609 610 3813"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 9,
                    "day": 22
                },
                "sex": "female",
                "parentName": "Joseph Zhang",
                "profilePhoto": "https://randomuser.me/api/portraits/women/61.jpg"
            },
            "financialRecords": {
                "debt": "$46,564"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Amanda Zhang",
            "id": 123456323
        }, {
            "contact": {
                "email": "joshua.peterson@email.com",
                "phoneNumber": "+1 732 119 2799"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 7,
                    "day": 10
                },
                "sex": "male",
                "parentName": "Brittany Peterson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/62.jpg"
            },
            "financialRecords": {
                "debt": "$8,600"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "Joshua Peterson",
            "id": 123456324
        }, {
            "contact": {
                "email": "brittany.harris@email.com",
                "phoneNumber": "+1 609 57 67"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 9,
                    "day": 10
                },
                "sex": "female",
                "parentName": "Brandon Harris",
                "profilePhoto": "https://randomuser.me/api/portraits/women/62.jpg"
            },
            "financialRecords": {
                "debt": "$70,629"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "Brittany Harris",
            "id": 123456325
        }, {
            "contact": {
                "email": "david.dupont@email.com",
                "phoneNumber": "+1 609 834 3393"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 4,
                    "day": 7
                },
                "sex": "male",
                "parentName": "Emily Dupont",
                "profilePhoto": "https://randomuser.me/api/portraits/men/63.jpg"
            },
            "financialRecords": {
                "debt": "$62,417"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "David Dupont",
            "id": 123456326
        }, {
            "contact": {
                "email": "megan.lewis@email.com",
                "phoneNumber": "+1 732 444 9375"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 8,
                    "day": 16
                },
                "sex": "female",
                "parentName": "Tyler Lewis",
                "profilePhoto": "https://randomuser.me/api/portraits/women/63.jpg"
            },
            "financialRecords": {
                "debt": "$65,273"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Megan Lewis",
            "id": 123456327
        }, {
            "contact": {
                "email": "jason.bonnet@email.com",
                "phoneNumber": "+1 856 129 5443"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 5,
                    "day": 14
                },
                "sex": "male",
                "parentName": "Michelle Bonnet",
                "profilePhoto": "https://randomuser.me/api/portraits/men/64.jpg"
            },
            "financialRecords": {
                "debt": "$28,485"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "Jason Bonnet",
            "id": 123456328
        }, {
            "contact": {
                "email": "samantha.miller@email.com",
                "phoneNumber": "+1 856 154 2055"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 10,
                    "day": 6
                },
                "sex": "female",
                "parentName": "Matthew Miller",
                "profilePhoto": "https://randomuser.me/api/portraits/women/64.jpg"
            },
            "financialRecords": {
                "debt": "$47,457"
            },
            "academicRecords": {
                "class": "VII C"
            },
            "isOnline": false,
            "studentName": "Samantha Miller",
            "id": 123456329
        }, {
            "contact": {
                "email": "brandon.wang@email.com",
                "phoneNumber": "+1 908 249 2757"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 9,
                    "day": 4
                },
                "sex": "male",
                "parentName": "Sophia Wang",
                "profilePhoto": "https://randomuser.me/api/portraits/men/65.jpg"
            },
            "financialRecords": {
                "debt": "$92,594"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Brandon Wang",
            "id": 123456330
        }, {
            "contact": {
                "email": "stephanie.chen@email.com",
                "phoneNumber": "+1 856 751 5506"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 2,
                    "day": 23
                },
                "sex": "female",
                "parentName": "Mark Chen",
                "profilePhoto": "https://randomuser.me/api/portraits/women/65.jpg"
            },
            "financialRecords": {
                "debt": "$2,744"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Stephanie Chen",
            "id": 123456331
        }, {
            "contact": {
                "email": "daniel.scott@email.com",
                "phoneNumber": "+1 201 701 8778"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 3,
                    "day": 4
                },
                "sex": "male",
                "parentName": "Alexis Scott",
                "profilePhoto": "https://randomuser.me/api/portraits/men/66.jpg"
            },
            "financialRecords": {
                "debt": "$88,112"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "psychology"
            },
            "isOnline": true,
            "studentName": "Daniel Scott",
            "id": 123456332
        }, {
            "contact": {
                "email": "melissa.liang@email.com",
                "phoneNumber": "+1 609 0 9438"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 12,
                    "day": 8
                },
                "sex": "female",
                "parentName": "Samuel Liang",
                "profilePhoto": "https://randomuser.me/api/portraits/women/66.jpg"
            },
            "financialRecords": {
                "debt": "$6,806"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "economics"
            },
            "isOnline": true,
            "studentName": "Melissa Liang",
            "id": 123456333
        }, {
            "contact": {
                "email": "david.white@email.com",
                "phoneNumber": "+1 201 896 2669"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 6,
                    "day": 28
                },
                "sex": "male",
                "parentName": "Olivia White",
                "profilePhoto": "https://randomuser.me/api/portraits/men/67.jpg"
            },
            "financialRecords": {
                "debt": "$50,429"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "David White",
            "id": 123456334
        }, {
            "contact": {
                "email": "sophia.hill@email.com",
                "phoneNumber": "+1 609 878 9597"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 4,
                    "day": 6
                },
                "sex": "female",
                "parentName": "Mark Hill",
                "profilePhoto": "https://randomuser.me/api/portraits/women/67.jpg"
            },
            "financialRecords": {
                "debt": "$36,457"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Sophia Hill",
            "id": 123456335
        }, {
            "contact": {
                "email": "nathan.müller@email.com",
                "phoneNumber": "+1 856 870 4570"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 12,
                    "day": 15
                },
                "sex": "male",
                "parentName": "Samantha Müller",
                "profilePhoto": "https://randomuser.me/api/portraits/men/68.jpg"
            },
            "financialRecords": {
                "debt": "$83,688"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Nathan Müller",
            "id": 123456336
        }, {
            "contact": {
                "email": "jessica.lavigne@email.com",
                "phoneNumber": "+1 732 355 6801"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 5,
                    "day": 6
                },
                "sex": "female",
                "parentName": "James Lavigne",
                "profilePhoto": "https://randomuser.me/api/portraits/women/68.jpg"
            },
            "financialRecords": {
                "debt": "$79,737"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "Jessica Lavigne",
            "id": 123456337
        }, {
            "contact": {
                "email": "william.peterson@email.com",
                "phoneNumber": "+1 201 538 3875"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 3,
                    "day": 16
                },
                "sex": "male",
                "parentName": "Michelle Peterson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/69.jpg"
            },
            "financialRecords": {
                "debt": "$12,712"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "William Peterson",
            "id": 123456338
        }, {
            "contact": {
                "email": "angela.fournier@email.com",
                "phoneNumber": "+1 609 44 6869"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 5,
                    "day": 11
                },
                "sex": "female",
                "parentName": "Austin Fournier",
                "profilePhoto": "https://randomuser.me/api/portraits/women/69.jpg"
            },
            "financialRecords": {
                "debt": "$17,793"
            },
            "academicRecords": {
                "class": "VII C"
            },
            "isOnline": true,
            "studentName": "Angela Fournier",
            "id": 123456339
        }, {
            "contact": {
                "email": "tyler.white@email.com",
                "phoneNumber": "+1 732 613 4746"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 4,
                    "day": 8
                },
                "sex": "male",
                "parentName": "Angela White",
                "profilePhoto": "https://randomuser.me/api/portraits/men/70.jpg"
            },
            "financialRecords": {
                "debt": "$55,413"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "business"
            },
            "isOnline": false,
            "studentName": "Tyler White",
            "id": 123456340
        }, {
            "contact": {
                "email": "kimberly.thompson@email.com",
                "phoneNumber": "+1 856 450 7648"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 24
                },
                "sex": "female",
                "parentName": "Andrew Thompson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/70.jpg"
            },
            "financialRecords": {
                "debt": "$67,318"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Kimberly Thompson",
            "id": 123456341
        }, {
            "contact": {
                "email": "michael.moore@email.com",
                "phoneNumber": "+1 201 112 5961"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 12,
                    "day": 3
                },
                "sex": "male",
                "parentName": "Sophia Moore",
                "profilePhoto": "https://randomuser.me/api/portraits/men/71.jpg"
            },
            "financialRecords": {
                "debt": "$51,373"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "business"
            },
            "isOnline": false,
            "studentName": "Michael Moore",
            "id": 123456342
        }, {
            "contact": {
                "email": "mary.schneider@email.com",
                "phoneNumber": "+1 609 566 1015"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 12,
                    "day": 15
                },
                "sex": "female",
                "parentName": "Thomas Schneider",
                "profilePhoto": "https://randomuser.me/api/portraits/women/71.jpg"
            },
            "financialRecords": {
                "debt": "$89,066"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "Mary Schneider",
            "id": 123456343
        }, {
            "contact": {
                "email": "mark.campbell@email.com",
                "phoneNumber": "+1 undefined 97 3678"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 7,
                    "day": 31
                },
                "sex": "male",
                "parentName": "Brittany Campbell",
                "profilePhoto": "https://randomuser.me/api/portraits/men/72.jpg"
            },
            "financialRecords": {
                "debt": "$63,640"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Mark Campbell",
            "id": 123456344
        }, {
            "contact": {
                "email": "samantha.davis@email.com",
                "phoneNumber": "+1 732 890 1849"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 4,
                    "day": 8
                },
                "sex": "female",
                "parentName": "Brandon Davis",
                "profilePhoto": "https://randomuser.me/api/portraits/women/72.jpg"
            },
            "financialRecords": {
                "debt": "$53,549"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Samantha Davis",
            "id": 123456345
        }, {
            "contact": {
                "email": "andrew.davis@email.com",
                "phoneNumber": "+1 856 338 4766"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 10,
                    "day": 15
                },
                "sex": "male",
                "parentName": "Melissa Davis",
                "profilePhoto": "https://randomuser.me/api/portraits/men/73.jpg"
            },
            "financialRecords": {
                "debt": "$45,635"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Andrew Davis",
            "id": 123456346
        }, {
            "contact": {
                "email": "amanda.white@email.com",
                "phoneNumber": "+1 201 546 7514"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 11,
                    "day": 30
                },
                "sex": "female",
                "parentName": "William White",
                "profilePhoto": "https://randomuser.me/api/portraits/women/73.jpg"
            },
            "financialRecords": {
                "debt": "$70,691"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "Amanda White",
            "id": 123456347
        }, {
            "contact": {
                "email": "christopher.lewis@email.com",
                "phoneNumber": "+1 908 605 350"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 9,
                    "day": 3
                },
                "sex": "male",
                "parentName": "Elizabeth Lewis",
                "profilePhoto": "https://randomuser.me/api/portraits/men/74.jpg"
            },
            "financialRecords": {
                "debt": "$89,225"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Christopher Lewis",
            "id": 123456348
        }, {
            "contact": {
                "email": "elizabeth.moore@email.com",
                "phoneNumber": "+1 856 870 995"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 10,
                    "day": 24
                },
                "sex": "female",
                "parentName": "Daniel Moore",
                "profilePhoto": "https://randomuser.me/api/portraits/women/74.jpg"
            },
            "financialRecords": {
                "debt": "$50,344"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Elizabeth Moore",
            "id": 123456349
        }, {
            "contact": {
                "email": "ryan.nelson@email.com",
                "phoneNumber": "+1 732 753 6878"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 4,
                    "day": 23
                },
                "sex": "male",
                "parentName": "Amy Nelson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/75.jpg"
            },
            "financialRecords": {
                "debt": "$44,031"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "business"
            },
            "isOnline": false,
            "studentName": "Ryan Nelson",
            "id": 123456350
        }, {
            "contact": {
                "email": "kayla.fournier@email.com",
                "phoneNumber": "+1 908 177 6790"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 7,
                    "day": 9
                },
                "sex": "female",
                "parentName": "James Fournier",
                "profilePhoto": "https://randomuser.me/api/portraits/women/75.jpg"
            },
            "financialRecords": {
                "debt": "$3,117"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "Kayla Fournier",
            "id": 123456351
        }, {
            "contact": {
                "email": "christian.schmidt@email.com",
                "phoneNumber": "+1 201 660 8001"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 7,
                    "day": 21
                },
                "sex": "male",
                "parentName": "Megan Schmidt",
                "profilePhoto": "https://randomuser.me/api/portraits/men/76.jpg"
            },
            "financialRecords": {
                "debt": "$45,453"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Christian Schmidt",
            "id": 123456352
        }, {
            "contact": {
                "email": "nicole.brown@email.com",
                "phoneNumber": "+1 609 427 4443"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 1,
                    "day": 10
                },
                "sex": "female",
                "parentName": "Andrew Brown",
                "profilePhoto": "https://randomuser.me/api/portraits/women/76.jpg"
            },
            "financialRecords": {
                "debt": "$33,629"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "politcal science"
            },
            "isOnline": true,
            "studentName": "Nicole Brown",
            "id": 123456353
        }, {
            "contact": {
                "email": "gabriel.liang@email.com",
                "phoneNumber": "+1 609 998 6738"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 1,
                    "day": 1
                },
                "sex": "male",
                "parentName": "Angela Liang",
                "profilePhoto": "https://randomuser.me/api/portraits/men/77.jpg"
            },
            "financialRecords": {
                "debt": "$69,706"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "business"
            },
            "isOnline": true,
            "studentName": "Gabriel Liang",
            "id": 123456354
        }, {
            "contact": {
                "email": "samantha.zhang@email.com",
                "phoneNumber": "+1 732 787 1468"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 6,
                    "day": 8
                },
                "sex": "female",
                "parentName": "Jacob Zhang",
                "profilePhoto": "https://randomuser.me/api/portraits/women/77.jpg"
            },
            "financialRecords": {
                "debt": "$20,756"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "Samantha Zhang",
            "id": 123456355
        }, {
            "contact": {
                "email": "matthew.davis@email.com",
                "phoneNumber": "+1 732 115 2979"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 9,
                    "day": 27
                },
                "sex": "male",
                "parentName": "Jennifer Davis",
                "profilePhoto": "https://randomuser.me/api/portraits/men/78.jpg"
            },
            "financialRecords": {
                "debt": "$17,682"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Matthew Davis",
            "id": 123456356
        }, {
            "contact": {
                "email": "elizabeth.adams@email.com",
                "phoneNumber": "+1 201 546 63"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 8,
                    "day": 17
                },
                "sex": "female",
                "parentName": "Zachary Adams",
                "profilePhoto": "https://randomuser.me/api/portraits/women/78.jpg"
            },
            "financialRecords": {
                "debt": "$52,832"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "communications"
            },
            "isOnline": false,
            "studentName": "Elizabeth Adams",
            "id": 123456357
        }, {
            "contact": {
                "email": "joshua.ali@email.com",
                "phoneNumber": "+1 732 396 4486"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 10,
                    "day": 7
                },
                "sex": "male",
                "parentName": "Olivia Ali",
                "profilePhoto": "https://randomuser.me/api/portraits/men/79.jpg"
            },
            "financialRecords": {
                "debt": "$83,986"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "electrical engineering"
            },
            "isOnline": true,
            "studentName": "Joshua Ali",
            "id": 123456358
        }, {
            "contact": {
                "email": "angela.brown@email.com",
                "phoneNumber": "+1 609 786 3842"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 2,
                    "day": 13
                },
                "sex": "female",
                "parentName": "Jacob Brown",
                "profilePhoto": "https://randomuser.me/api/portraits/women/79.jpg"
            },
            "financialRecords": {
                "debt": "$68,707"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "communications"
            },
            "isOnline": false,
            "studentName": "Angela Brown",
            "id": 123456359
        }, {
            "contact": {
                "email": "james.taylor@email.com",
                "phoneNumber": "+1 856 7 369"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 1,
                    "day": 16
                },
                "sex": "male",
                "parentName": "Isabella Taylor",
                "profilePhoto": "https://randomuser.me/api/portraits/men/80.jpg"
            },
            "financialRecords": {
                "debt": "$70,742"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "James Taylor",
            "id": 123456360
        }, {
            "contact": {
                "email": "isabella.cooper@email.com",
                "phoneNumber": "+1 856 571 5711"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 3,
                    "day": 19
                },
                "sex": "female",
                "parentName": "Daniel Cooper",
                "profilePhoto": "https://randomuser.me/api/portraits/women/80.jpg"
            },
            "financialRecords": {
                "debt": "$20,892"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "childhood education"
            },
            "isOnline": true,
            "studentName": "Isabella Cooper",
            "id": 123456361
        }, {
            "contact": {
                "email": "james.ali@email.com",
                "phoneNumber": "+1 609 480 5874"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 7,
                    "day": 21
                },
                "sex": "male",
                "parentName": "Heather Ali",
                "profilePhoto": "https://randomuser.me/api/portraits/men/81.jpg"
            },
            "financialRecords": {
                "debt": "$33,913"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "James Ali",
            "id": 123456362
        }, {
            "contact": {
                "email": "nicole.liu@email.com",
                "phoneNumber": "+1 856 306 6797"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 4,
                    "day": 3
                },
                "sex": "female",
                "parentName": "David Liu",
                "profilePhoto": "https://randomuser.me/api/portraits/women/81.jpg"
            },
            "financialRecords": {
                "debt": "$49,679"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "Nicole Liu",
            "id": 123456363
        }, {
            "contact": {
                "email": "james.lewis@email.com",
                "phoneNumber": "+1 201 137 558"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 7,
                    "day": 6
                },
                "sex": "male",
                "parentName": "Stephanie Lewis",
                "profilePhoto": "https://randomuser.me/api/portraits/men/82.jpg"
            },
            "financialRecords": {
                "debt": "$59,323"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "communications"
            },
            "isOnline": true,
            "studentName": "James Lewis",
            "id": 123456364
        }, {
            "contact": {
                "email": "ashley.smith@email.com",
                "phoneNumber": "+1 609 787 7914"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 1,
                    "day": 30
                },
                "sex": "female",
                "parentName": "Samuel Smith",
                "profilePhoto": "https://randomuser.me/api/portraits/women/82.jpg"
            },
            "financialRecords": {
                "debt": "$84,364"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "Ashley Smith",
            "id": 123456365
        }, {
            "contact": {
                "email": "nathan.scott@email.com",
                "phoneNumber": "+1 609 76 4205"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 2,
                    "day": 5
                },
                "sex": "male",
                "parentName": "Jennifer Scott",
                "profilePhoto": "https://randomuser.me/api/portraits/men/83.jpg"
            },
            "financialRecords": {
                "debt": "$65,649"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "Nathan Scott",
            "id": 123456366
        }, {
            "contact": {
                "email": "angela.ali@email.com",
                "phoneNumber": "+1 609 914 7135"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 2,
                    "day": 4
                },
                "sex": "female",
                "parentName": "Ryan Ali",
                "profilePhoto": "https://randomuser.me/api/portraits/women/83.jpg"
            },
            "financialRecords": {
                "debt": "$44,371"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "economics"
            },
            "isOnline": true,
            "studentName": "Angela Ali",
            "id": 123456367
        }, {
            "contact": {
                "email": "david.baker@email.com",
                "phoneNumber": "+1 908 733 5599"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 4,
                    "day": 15
                },
                "sex": "male",
                "parentName": "Jessica Baker",
                "profilePhoto": "https://randomuser.me/api/portraits/men/84.jpg"
            },
            "financialRecords": {
                "debt": "$70,053"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "David Baker",
            "id": 123456368
        }, {
            "contact": {
                "email": "madison.walker@email.com",
                "phoneNumber": "+1 732 197 3480"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 1,
                    "day": 31
                },
                "sex": "female",
                "parentName": "Andrew Walker",
                "profilePhoto": "https://randomuser.me/api/portraits/women/84.jpg"
            },
            "financialRecords": {
                "debt": "$84,997"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Madison Walker",
            "id": 123456369
        }, {
            "contact": {
                "email": "joseph.nelson@email.com",
                "phoneNumber": "+1 732 524 2955"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 10,
                    "day": 2
                },
                "sex": "male",
                "parentName": "Mary Nelson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/85.jpg"
            },
            "financialRecords": {
                "debt": "$34,186"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Joseph Nelson",
            "id": 123456370
        }, {
            "contact": {
                "email": "michelle.li@email.com",
                "phoneNumber": "+1 856 119 6282"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 3,
                    "day": 12
                },
                "sex": "female",
                "parentName": "Michael Li",
                "profilePhoto": "https://randomuser.me/api/portraits/women/85.jpg"
            },
            "financialRecords": {
                "debt": "$96,747"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "Michelle Li",
            "id": 123456371
        }, {
            "contact": {
                "email": "alexander.li@email.com",
                "phoneNumber": "+1 856 867 6599"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 12,
                    "day": 29
                },
                "sex": "male",
                "parentName": "Amy Li",
                "profilePhoto": "https://randomuser.me/api/portraits/men/86.jpg"
            },
            "financialRecords": {
                "debt": "$76,666"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "Alexander Li",
            "id": 123456372
        }, {
            "contact": {
                "email": "sophia.braun@email.com",
                "phoneNumber": "+1 609 73 8467"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 3,
                    "day": 23
                },
                "sex": "female",
                "parentName": "Michael Braun",
                "profilePhoto": "https://randomuser.me/api/portraits/women/86.jpg"
            },
            "financialRecords": {
                "debt": "$29,622"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Sophia Braun",
            "id": 123456373
        }, {
            "contact": {
                "email": "robert.white@email.com",
                "phoneNumber": "+1 856 434 7810"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 8,
                    "day": 10
                },
                "sex": "male",
                "parentName": "Samantha White",
                "profilePhoto": "https://randomuser.me/api/portraits/men/87.jpg"
            },
            "financialRecords": {
                "debt": "$26,114"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Robert White",
            "id": 123456374
        }, {
            "contact": {
                "email": "michelle.zhang@email.com",
                "phoneNumber": "+1 908 951 6841"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 1,
                    "day": 7
                },
                "sex": "female",
                "parentName": "Alexander Zhang",
                "profilePhoto": "https://randomuser.me/api/portraits/women/87.jpg"
            },
            "financialRecords": {
                "debt": "$83,717"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "architectural engineering"
            },
            "isOnline": true,
            "studentName": "Michelle Zhang",
            "id": 123456375
        }, {
            "contact": {
                "email": "austin.mitchell@email.com",
                "phoneNumber": "+1 609 703 4317"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 15
                },
                "sex": "male",
                "parentName": "Samantha Mitchell",
                "profilePhoto": "https://randomuser.me/api/portraits/men/88.jpg"
            },
            "financialRecords": {
                "debt": "$60,577"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "economics"
            },
            "isOnline": true,
            "studentName": "Austin Mitchell",
            "id": 123456376
        }, {
            "contact": {
                "email": "heather.davis@email.com",
                "phoneNumber": "+1 856 323 3884"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 3,
                    "day": 1
                },
                "sex": "female",
                "parentName": "Brandon Davis",
                "profilePhoto": "https://randomuser.me/api/portraits/women/88.jpg"
            },
            "financialRecords": {
                "debt": "$63,989"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Heather Davis",
            "id": 123456377
        }, {
            "contact": {
                "email": "austin.dubois@email.com",
                "phoneNumber": "+1 856 366 519"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 8,
                    "day": 2
                },
                "sex": "male",
                "parentName": "Lisa Dubois",
                "profilePhoto": "https://randomuser.me/api/portraits/men/89.jpg"
            },
            "financialRecords": {
                "debt": "$34,498"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "communications"
            },
            "isOnline": false,
            "studentName": "Austin Dubois",
            "id": 123456378
        }, {
            "contact": {
                "email": "sarah.brown@email.com",
                "phoneNumber": "+1 609 160 3873"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 5,
                    "day": 28
                },
                "sex": "female",
                "parentName": "Christopher Brown",
                "profilePhoto": "https://randomuser.me/api/portraits/women/89.jpg"
            },
            "financialRecords": {
                "debt": "$77,358"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "architectural engineering"
            },
            "isOnline": true,
            "studentName": "Sarah Brown",
            "id": 123456379
        }, {
            "contact": {
                "email": "alexander.gonzalez@email.com",
                "phoneNumber": "+1 201 478 5471"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 10,
                    "day": 4
                },
                "sex": "male",
                "parentName": "Heather Gonzalez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/90.jpg"
            },
            "financialRecords": {
                "debt": "$50,531"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Alexander Gonzalez",
            "id": 123456380
        }, {
            "contact": {
                "email": "samantha.monet@email.com",
                "phoneNumber": "+1 856 794 7421"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 5,
                    "day": 26
                },
                "sex": "female",
                "parentName": "Gabriel Monet",
                "profilePhoto": "https://randomuser.me/api/portraits/women/90.jpg"
            },
            "financialRecords": {
                "debt": "$48,334"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Samantha Monet",
            "id": 123456381
        }, {
            "contact": {
                "email": "ethan.adams@email.com",
                "phoneNumber": "+1 856 675 8788"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 2,
                    "day": 23
                },
                "sex": "male",
                "parentName": "Amy Adams",
                "profilePhoto": "https://randomuser.me/api/portraits/men/91.jpg"
            },
            "financialRecords": {
                "debt": "$21,722"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Ethan Adams",
            "id": 123456382
        }, {
            "contact": {
                "email": "michelle.flores@email.com",
                "phoneNumber": "+1 732 837 5171"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 6,
                    "day": 8
                },
                "sex": "female",
                "parentName": "Austin Flores",
                "profilePhoto": "https://randomuser.me/api/portraits/women/91.jpg"
            },
            "financialRecords": {
                "debt": "$55,057"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "politcal science"
            },
            "isOnline": true,
            "studentName": "Michelle Flores",
            "id": 123456383
        }, {
            "contact": {
                "email": "kyle.miller@email.com",
                "phoneNumber": "+1 732 394 3057"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 5,
                    "day": 27
                },
                "sex": "male",
                "parentName": "Brittany Miller",
                "profilePhoto": "https://randomuser.me/api/portraits/men/92.jpg"
            },
            "financialRecords": {
                "debt": "$64,946"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "Kyle Miller",
            "id": 123456384
        }, {
            "contact": {
                "email": "patricia.davis@email.com",
                "phoneNumber": "+1 732 995 3511"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 1,
                    "day": 14
                },
                "sex": "female",
                "parentName": "Brandon Davis",
                "profilePhoto": "https://randomuser.me/api/portraits/women/92.jpg"
            },
            "financialRecords": {
                "debt": "$65,669"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Patricia Davis",
            "id": 123456385
        }, {
            "contact": {
                "email": "anthony.miller@email.com",
                "phoneNumber": "+1 609 630 9797"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 23
                },
                "sex": "male",
                "parentName": "Emma Miller",
                "profilePhoto": "https://randomuser.me/api/portraits/men/93.jpg"
            },
            "financialRecords": {
                "debt": "$49,758"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "politcal science"
            },
            "isOnline": true,
            "studentName": "Anthony Miller",
            "id": 123456386
        }, {
            "contact": {
                "email": "nicole.zhang@email.com",
                "phoneNumber": "+1 201 822 7813"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 9,
                    "day": 27
                },
                "sex": "female",
                "parentName": "Kevin Zhang",
                "profilePhoto": "https://randomuser.me/api/portraits/women/93.jpg"
            },
            "financialRecords": {
                "debt": "$7,965"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "computer science"
            },
            "isOnline": true,
            "studentName": "Nicole Zhang",
            "id": 123456387
        }, {
            "contact": {
                "email": "jason.garnier@email.com",
                "phoneNumber": "+1 undefined 170 2244"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 11,
                    "day": 13
                },
                "sex": "male",
                "parentName": "Ashley Garnier",
                "profilePhoto": "https://randomuser.me/api/portraits/men/94.jpg"
            },
            "financialRecords": {
                "debt": "$61,329"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "Jason Garnier",
            "id": 123456388
        }, {
            "contact": {
                "email": "ashley.mitchell@email.com",
                "phoneNumber": "+1 201 373 1555"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 8,
                    "day": 15
                },
                "sex": "female",
                "parentName": "Alexander Mitchell",
                "profilePhoto": "https://randomuser.me/api/portraits/women/94.jpg"
            },
            "financialRecords": {
                "debt": "$91,371"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "psychology"
            },
            "isOnline": true,
            "studentName": "Ashley Mitchell",
            "id": 123456389
        }, {
            "contact": {
                "email": "jonathan.thompson@email.com",
                "phoneNumber": "+1 856 38 2914"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 10,
                    "day": 11
                },
                "sex": "male",
                "parentName": "Melissa Thompson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/95.jpg"
            },
            "financialRecords": {
                "debt": "$99,383"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": true,
            "studentName": "Jonathan Thompson",
            "id": 123456390
        }, {
            "contact": {
                "email": "emily.dupont@email.com",
                "phoneNumber": "+1 201 813 289"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 2,
                    "day": 4
                },
                "sex": "female",
                "parentName": "Matthew Dupont",
                "profilePhoto": "https://randomuser.me/api/portraits/women/95.jpg"
            },
            "financialRecords": {
                "debt": "$9,795"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Emily Dupont",
            "id": 123456391
        }, {
            "contact": {
                "email": "daniel.green@email.com",
                "phoneNumber": "+1 609 804 2552"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 2,
                    "day": 20
                },
                "sex": "male",
                "parentName": "Taylor Green",
                "profilePhoto": "https://randomuser.me/api/portraits/men/96.jpg"
            },
            "financialRecords": {
                "debt": "$52,412"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Daniel Green",
            "id": 123456392
        }, {
            "contact": {
                "email": "amy.rodriguez@email.com",
                "phoneNumber": "+1 201 122 3235"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 8,
                    "day": 5
                },
                "sex": "female",
                "parentName": "Robert Rodriguez",
                "profilePhoto": "https://randomuser.me/api/portraits/women/96.jpg"
            },
            "financialRecords": {
                "debt": "$42,742"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "civil engineering"
            },
            "isOnline": true,
            "studentName": "Amy Rodriguez",
            "id": 123456393
        }, {
            "contact": {
                "email": "nathan.chen@email.com",
                "phoneNumber": "+1 732 848 7283"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 20
                },
                "sex": "male",
                "parentName": "Patricia Chen",
                "profilePhoto": "https://randomuser.me/api/portraits/men/97.jpg"
            },
            "financialRecords": {
                "debt": "$48,646"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "Nathan Chen",
            "id": 123456394
        }, {
            "contact": {
                "email": "patricia.roberts@email.com",
                "phoneNumber": "+1 609 386 1782"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 31
                },
                "sex": "female",
                "parentName": "Jack Roberts",
                "profilePhoto": "https://randomuser.me/api/portraits/women/97.jpg"
            },
            "financialRecords": {
                "debt": "$67,257"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Patricia Roberts",
            "id": 123456395
        }, {
            "contact": {
                "email": "jack.miller@email.com",
                "phoneNumber": "+1 201 891 3965"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 2,
                    "day": 5
                },
                "sex": "male",
                "parentName": "Sarah Miller",
                "profilePhoto": "https://randomuser.me/api/portraits/men/98.jpg"
            },
            "financialRecords": {
                "debt": "$70,575"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Jack Miller",
            "id": 123456396
        }, {
            "contact": {
                "email": "stephanie.miller@email.com",
                "phoneNumber": "+1 201 178 8138"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 5,
                    "day": 31
                },
                "sex": "female",
                "parentName": "Ethan Miller",
                "profilePhoto": "https://randomuser.me/api/portraits/women/98.jpg"
            },
            "financialRecords": {
                "debt": "$64,863"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Stephanie Miller",
            "id": 123456397
        }, {
            "contact": {
                "email": "kevin.liang@email.com",
                "phoneNumber": "+1 undefined 520 3818"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 9,
                    "day": 23
                },
                "sex": "male",
                "parentName": "Lisa Liang",
                "profilePhoto": "https://randomuser.me/api/portraits/men/99.jpg"
            },
            "financialRecords": {
                "debt": "$41,837"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "architectural engineering"
            },
            "isOnline": false,
            "studentName": "Kevin Liang",
            "id": 123456398
        }, {
            "contact": {
                "email": "samantha.taylor@email.com",
                "phoneNumber": "+1 856 122 7265"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 4,
                    "day": 2
                },
                "sex": "female",
                "parentName": "Brandon Taylor",
                "profilePhoto": "https://randomuser.me/api/portraits/women/99.jpg"
            },
            "financialRecords": {
                "debt": "$80,832"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Samantha Taylor",
            "id": 123456399
        }, {
            "contact": {
                "email": "jonathan.perez@email.com",
                "phoneNumber": "+1 856 571 3386"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 10,
                    "day": 3
                },
                "sex": "male",
                "parentName": "Mary Perez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/0.jpg"
            },
            "financialRecords": {
                "debt": "$47,734"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Jonathan Perez",
            "id": 123456400
        }, {
            "contact": {
                "email": "melissa.lewis@email.com",
                "phoneNumber": "+1 908 499 9205"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 1,
                    "day": 2
                },
                "sex": "female",
                "parentName": "David Lewis",
                "profilePhoto": "https://randomuser.me/api/portraits/women/0.jpg"
            },
            "financialRecords": {
                "debt": "$93,157"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "electrical engineering"
            },
            "isOnline": true,
            "studentName": "Melissa Lewis",
            "id": 123456401
        }, {
            "contact": {
                "email": "william.roberts@email.com",
                "phoneNumber": "+1 732 955 4051"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 7,
                    "day": 15
                },
                "sex": "male",
                "parentName": "Taylor Roberts",
                "profilePhoto": "https://randomuser.me/api/portraits/men/1.jpg"
            },
            "financialRecords": {
                "debt": "$37,130"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "William Roberts",
            "id": 123456402
        }, {
            "contact": {
                "email": "stephanie.hall@email.com",
                "phoneNumber": "+1 201 787 3889"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 5,
                    "day": 12
                },
                "sex": "female",
                "parentName": "Joshua Hall",
                "profilePhoto": "https://randomuser.me/api/portraits/women/1.jpg"
            },
            "financialRecords": {
                "debt": "$41,623"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "economics"
            },
            "isOnline": true,
            "studentName": "Stephanie Hall",
            "id": 123456403
        }, {
            "contact": {
                "email": "samuel.harris@email.com",
                "phoneNumber": "+1 908 963 9011"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 5,
                    "day": 2
                },
                "sex": "male",
                "parentName": "Brittany Harris",
                "profilePhoto": "https://randomuser.me/api/portraits/men/2.jpg"
            },
            "financialRecords": {
                "debt": "$28,916"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Samuel Harris",
            "id": 123456404
        }, {
            "contact": {
                "email": "karen.bonnet@email.com",
                "phoneNumber": "+1 609 627 4730"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 1,
                    "day": 17
                },
                "sex": "female",
                "parentName": "Andrew Bonnet",
                "profilePhoto": "https://randomuser.me/api/portraits/women/2.jpg"
            },
            "financialRecords": {
                "debt": "$61,469"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "Karen Bonnet",
            "id": 123456405
        }, {
            "contact": {
                "email": "daniel.davis@email.com",
                "phoneNumber": "+1 856 197 3967"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 3,
                    "day": 10
                },
                "sex": "male",
                "parentName": "Sophia Davis",
                "profilePhoto": "https://randomuser.me/api/portraits/men/3.jpg"
            },
            "financialRecords": {
                "debt": "$95,505"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "civil engineering"
            },
            "isOnline": true,
            "studentName": "Daniel Davis",
            "id": 123456406
        }, {
            "contact": {
                "email": "taylor.roberts@email.com",
                "phoneNumber": "+1 732 887 8433"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 5,
                    "day": 15
                },
                "sex": "female",
                "parentName": "Thomas Roberts",
                "profilePhoto": "https://randomuser.me/api/portraits/women/3.jpg"
            },
            "financialRecords": {
                "debt": "$91,244"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "psychology"
            },
            "isOnline": true,
            "studentName": "Taylor Roberts",
            "id": 123456407
        }, {
            "contact": {
                "email": "kyle.mitchell@email.com",
                "phoneNumber": "+1 856 683 2199"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 4,
                    "day": 17
                },
                "sex": "male",
                "parentName": "Susan Mitchell",
                "profilePhoto": "https://randomuser.me/api/portraits/men/4.jpg"
            },
            "financialRecords": {
                "debt": "$73,467"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "architectural engineering"
            },
            "isOnline": false,
            "studentName": "Kyle Mitchell",
            "id": 123456408
        }, {
            "contact": {
                "email": "hannah.campbell@email.com",
                "phoneNumber": "+1 201 664 9421"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 8,
                    "day": 14
                },
                "sex": "female",
                "parentName": "Nathan Campbell",
                "profilePhoto": "https://randomuser.me/api/portraits/women/4.jpg"
            },
            "financialRecords": {
                "debt": "$52,902"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "civil engineering"
            },
            "isOnline": true,
            "studentName": "Hannah Campbell",
            "id": 123456409
        }, {
            "contact": {
                "email": "william.carter@email.com",
                "phoneNumber": "+1 609 641 7421"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 11,
                    "day": 19
                },
                "sex": "male",
                "parentName": "Olivia Carter",
                "profilePhoto": "https://randomuser.me/api/portraits/men/5.jpg"
            },
            "financialRecords": {
                "debt": "$21,249"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "architectural engineering"
            },
            "isOnline": false,
            "studentName": "William Carter",
            "id": 123456410
        }, {
            "contact": {
                "email": "heather.williams@email.com",
                "phoneNumber": "+1 908 297 3882"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 11,
                    "day": 21
                },
                "sex": "female",
                "parentName": "Christopher Williams",
                "profilePhoto": "https://randomuser.me/api/portraits/women/5.jpg"
            },
            "financialRecords": {
                "debt": "$38,817"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "Heather Williams",
            "id": 123456411
        }, {
            "contact": {
                "email": "john.scott@email.com",
                "phoneNumber": "+1 732 805 9726"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 8,
                    "day": 25
                },
                "sex": "male",
                "parentName": "Alexis Scott",
                "profilePhoto": "https://randomuser.me/api/portraits/men/6.jpg"
            },
            "financialRecords": {
                "debt": "$8,296"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "John Scott",
            "id": 123456412
        }, {
            "contact": {
                "email": "samantha.liu@email.com",
                "phoneNumber": "+1 732 553 8546"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 10,
                    "day": 13
                },
                "sex": "female",
                "parentName": "Joshua Liu",
                "profilePhoto": "https://randomuser.me/api/portraits/women/6.jpg"
            },
            "financialRecords": {
                "debt": "$32,430"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Samantha Liu",
            "id": 123456413
        }, {
            "contact": {
                "email": "brian.moore@email.com",
                "phoneNumber": "+1 undefined 874 5321"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 5,
                    "day": 17
                },
                "sex": "male",
                "parentName": "Sarah Moore",
                "profilePhoto": "https://randomuser.me/api/portraits/men/7.jpg"
            },
            "financialRecords": {
                "debt": "$25,425"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Brian Moore",
            "id": 123456414
        }, {
            "contact": {
                "email": "taylor.zhang@email.com",
                "phoneNumber": "+1 856 8 597"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 4,
                    "day": 20
                },
                "sex": "female",
                "parentName": "Anthony Zhang",
                "profilePhoto": "https://randomuser.me/api/portraits/women/7.jpg"
            },
            "financialRecords": {
                "debt": "$40,654"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Taylor Zhang",
            "id": 123456415
        }, {
            "contact": {
                "email": "michael.edwards@email.com",
                "phoneNumber": "+1 856 883 6444"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 5,
                    "day": 27
                },
                "sex": "male",
                "parentName": "Melissa Edwards",
                "profilePhoto": "https://randomuser.me/api/portraits/men/8.jpg"
            },
            "financialRecords": {
                "debt": "$10,843"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "computer science"
            },
            "isOnline": true,
            "studentName": "Michael Edwards",
            "id": 123456416
        }, {
            "contact": {
                "email": "amanda.martinez@email.com",
                "phoneNumber": "+1 201 755 3011"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 1,
                    "day": 12
                },
                "sex": "female",
                "parentName": "David Martinez",
                "profilePhoto": "https://randomuser.me/api/portraits/women/8.jpg"
            },
            "financialRecords": {
                "debt": "$21,194"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "Amanda Martinez",
            "id": 123456417
        }, {
            "contact": {
                "email": "christopher.liu@email.com",
                "phoneNumber": "+1 908 23 7998"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 2,
                    "day": 6
                },
                "sex": "male",
                "parentName": "Emma Liu",
                "profilePhoto": "https://randomuser.me/api/portraits/men/9.jpg"
            },
            "financialRecords": {
                "debt": "$46,338"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "architectural engineering"
            },
            "isOnline": true,
            "studentName": "Christopher Liu",
            "id": 123456418
        }, {
            "contact": {
                "email": "megan.carter@email.com",
                "phoneNumber": "+1 908 470 2611"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 9,
                    "day": 28
                },
                "sex": "female",
                "parentName": "Jason Carter",
                "profilePhoto": "https://randomuser.me/api/portraits/women/9.jpg"
            },
            "financialRecords": {
                "debt": "$82,553"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "business"
            },
            "isOnline": false,
            "studentName": "Megan Carter",
            "id": 123456419
        }, {
            "contact": {
                "email": "jason.garnier@email.com",
                "phoneNumber": "+1 732 467 1028"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 12,
                    "day": 8
                },
                "sex": "male",
                "parentName": "Heather Garnier",
                "profilePhoto": "https://randomuser.me/api/portraits/men/10.jpg"
            },
            "financialRecords": {
                "debt": "$68,977"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "politcal science"
            },
            "isOnline": true,
            "studentName": "Jason Garnier",
            "id": 123456420
        }, {
            "contact": {
                "email": "ashley.williams@email.com",
                "phoneNumber": "+1 undefined 336 4394"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 11,
                    "day": 5
                },
                "sex": "female",
                "parentName": "Jack Williams",
                "profilePhoto": "https://randomuser.me/api/portraits/women/10.jpg"
            },
            "financialRecords": {
                "debt": "$52,141"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Ashley Williams",
            "id": 123456421
        }, {
            "contact": {
                "email": "ethan.davis@email.com",
                "phoneNumber": "+1 856 857 3790"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 4,
                    "day": 9
                },
                "sex": "male",
                "parentName": "Kayla Davis",
                "profilePhoto": "https://randomuser.me/api/portraits/men/11.jpg"
            },
            "financialRecords": {
                "debt": "$58,780"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": true,
            "studentName": "Ethan Davis",
            "id": 123456422
        }, {
            "contact": {
                "email": "susan.young@email.com",
                "phoneNumber": "+1 undefined 237 2539"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 5,
                    "day": 2
                },
                "sex": "female",
                "parentName": "Samuel Young",
                "profilePhoto": "https://randomuser.me/api/portraits/women/11.jpg"
            },
            "financialRecords": {
                "debt": "$98,967"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Susan Young",
            "id": 123456423
        }, {
            "contact": {
                "email": "justin.perez@email.com",
                "phoneNumber": "+1 201 654 4707"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 12,
                    "day": 9
                },
                "sex": "male",
                "parentName": "Sarah Perez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/12.jpg"
            },
            "financialRecords": {
                "debt": "$5,562"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Justin Perez",
            "id": 123456424
        }, {
            "contact": {
                "email": "angela.scott@email.com",
                "phoneNumber": "+1 856 804 2024"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 3,
                    "day": 7
                },
                "sex": "female",
                "parentName": "Tyler Scott",
                "profilePhoto": "https://randomuser.me/api/portraits/women/12.jpg"
            },
            "financialRecords": {
                "debt": "$65,557"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Angela Scott",
            "id": 123456425
        }, {
            "contact": {
                "email": "nathan.bonnet@email.com",
                "phoneNumber": "+1 908 611 3399"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 3,
                    "day": 4
                },
                "sex": "male",
                "parentName": "Samantha Bonnet",
                "profilePhoto": "https://randomuser.me/api/portraits/men/13.jpg"
            },
            "financialRecords": {
                "debt": "$89,933"
            },
            "academicRecords": {
                "class": "VII A"
            },
            "isOnline": false,
            "studentName": "Nathan Bonnet",
            "id": 123456426
        }, {
            "contact": {
                "email": "madison.wang@email.com",
                "phoneNumber": "+1 201 439 4592"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 7,
                    "day": 18
                },
                "sex": "female",
                "parentName": "Austin Wang",
                "profilePhoto": "https://randomuser.me/api/portraits/women/13.jpg"
            },
            "financialRecords": {
                "debt": "$55,267"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": true,
            "studentName": "Madison Wang",
            "id": 123456427
        }, {
            "contact": {
                "email": "thomas.jones@email.com",
                "phoneNumber": "+1 732 836 365"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 8,
                    "day": 1
                },
                "sex": "male",
                "parentName": "Nicole Jones",
                "profilePhoto": "https://randomuser.me/api/portraits/men/14.jpg"
            },
            "financialRecords": {
                "debt": "$67,229"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "business"
            },
            "isOnline": false,
            "studentName": "Thomas Jones",
            "id": 123456428
        }, {
            "contact": {
                "email": "amy.harris@email.com",
                "phoneNumber": "+1 856 156 2292"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 12,
                    "day": 8
                },
                "sex": "female",
                "parentName": "Michael Harris",
                "profilePhoto": "https://randomuser.me/api/portraits/women/14.jpg"
            },
            "financialRecords": {
                "debt": "$2,778"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "computer science"
            },
            "isOnline": true,
            "studentName": "Amy Harris",
            "id": 123456429
        }, {
            "contact": {
                "email": "christian.baker@email.com",
                "phoneNumber": "+1 732 352 9202"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 12,
                    "day": 26
                },
                "sex": "male",
                "parentName": "Melissa Baker",
                "profilePhoto": "https://randomuser.me/api/portraits/men/15.jpg"
            },
            "financialRecords": {
                "debt": "$81,367"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Christian Baker",
            "id": 123456430
        }, {
            "contact": {
                "email": "michelle.hall@email.com",
                "phoneNumber": "+1 908 292 3674"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 17
                },
                "sex": "female",
                "parentName": "William Hall",
                "profilePhoto": "https://randomuser.me/api/portraits/women/15.jpg"
            },
            "financialRecords": {
                "debt": "$13,065"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Michelle Hall",
            "id": 123456431
        }, {
            "contact": {
                "email": "john.hill@email.com",
                "phoneNumber": "+1 732 665 5697"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 1,
                    "day": 14
                },
                "sex": "male",
                "parentName": "Elizabeth Hill",
                "profilePhoto": "https://randomuser.me/api/portraits/men/16.jpg"
            },
            "financialRecords": {
                "debt": "$39,625"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "John Hill",
            "id": 123456432
        }, {
            "contact": {
                "email": "brittany.richardson@email.com",
                "phoneNumber": "+1 732 929 1723"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 10,
                    "day": 26
                },
                "sex": "female",
                "parentName": "Christopher Richardson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/16.jpg"
            },
            "financialRecords": {
                "debt": "$84,897"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Brittany Richardson",
            "id": 123456433
        }, {
            "contact": {
                "email": "joshua.rogers@email.com",
                "phoneNumber": "+1 908 578 4581"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 19
                },
                "sex": "male",
                "parentName": "Lillian Rogers",
                "profilePhoto": "https://randomuser.me/api/portraits/men/17.jpg"
            },
            "financialRecords": {
                "debt": "$38,935"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "Joshua Rogers",
            "id": 123456434
        }, {
            "contact": {
                "email": "jennifer.robinson@email.com",
                "phoneNumber": "+1 undefined 412 4555"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 5,
                    "day": 11
                },
                "sex": "female",
                "parentName": "Kevin Robinson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/17.jpg"
            },
            "financialRecords": {
                "debt": "$85,735"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "business"
            },
            "isOnline": true,
            "studentName": "Jennifer Robinson",
            "id": 123456435
        }, {
            "contact": {
                "email": "ethan.robinson@email.com",
                "phoneNumber": "+1 856 589 9511"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 9,
                    "day": 27
                },
                "sex": "male",
                "parentName": "Emily Robinson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/18.jpg"
            },
            "financialRecords": {
                "debt": "$43,752"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "architectural engineering"
            },
            "isOnline": true,
            "studentName": "Ethan Robinson",
            "id": 123456436
        }, {
            "contact": {
                "email": "amy.robinson@email.com",
                "phoneNumber": "+1 609 523 7616"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 8,
                    "day": 21
                },
                "sex": "female",
                "parentName": "James Robinson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/18.jpg"
            },
            "financialRecords": {
                "debt": "$50,192"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "architectural engineering"
            },
            "isOnline": false,
            "studentName": "Amy Robinson",
            "id": 123456437
        }, {
            "contact": {
                "email": "gabriel.edwards@email.com",
                "phoneNumber": "+1 609 86 9854"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 9,
                    "day": 15
                },
                "sex": "male",
                "parentName": "Karen Edwards",
                "profilePhoto": "https://randomuser.me/api/portraits/men/19.jpg"
            },
            "financialRecords": {
                "debt": "$15,415"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Gabriel Edwards",
            "id": 123456438
        }, {
            "contact": {
                "email": "karen.clark@email.com",
                "phoneNumber": "+1 908 647 2876"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 8,
                    "day": 26
                },
                "sex": "female",
                "parentName": "Samuel Clark",
                "profilePhoto": "https://randomuser.me/api/portraits/women/19.jpg"
            },
            "financialRecords": {
                "debt": "$48,209"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Karen Clark",
            "id": 123456439
        }, {
            "contact": {
                "email": "william.scott@email.com",
                "phoneNumber": "+1 732 412 3389"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 5,
                    "day": 8
                },
                "sex": "male",
                "parentName": "Alexis Scott",
                "profilePhoto": "https://randomuser.me/api/portraits/men/20.jpg"
            },
            "financialRecords": {
                "debt": "$79,095"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "computer science"
            },
            "isOnline": true,
            "studentName": "William Scott",
            "id": 123456440
        }, {
            "contact": {
                "email": "angela.lewis@email.com",
                "phoneNumber": "+1 732 219 9267"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 1,
                    "day": 16
                },
                "sex": "female",
                "parentName": "Justin Lewis",
                "profilePhoto": "https://randomuser.me/api/portraits/women/20.jpg"
            },
            "financialRecords": {
                "debt": "$69,027"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Angela Lewis",
            "id": 123456441
        }, {
            "contact": {
                "email": "mark.rogers@email.com",
                "phoneNumber": "+1 856 677 5933"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 7,
                    "day": 19
                },
                "sex": "male",
                "parentName": "Elizabeth Rogers",
                "profilePhoto": "https://randomuser.me/api/portraits/men/21.jpg"
            },
            "financialRecords": {
                "debt": "$1,960"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Mark Rogers",
            "id": 123456442
        }, {
            "contact": {
                "email": "michelle.garnier@email.com",
                "phoneNumber": "+1 856 588 2076"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 6,
                    "day": 4
                },
                "sex": "female",
                "parentName": "Nicholas Garnier",
                "profilePhoto": "https://randomuser.me/api/portraits/women/21.jpg"
            },
            "financialRecords": {
                "debt": "$27,993"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Michelle Garnier",
            "id": 123456443
        }, {
            "contact": {
                "email": "justin.wang@email.com",
                "phoneNumber": "+1 732 1 3832"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 8,
                    "day": 1
                },
                "sex": "male",
                "parentName": "Alexis Wang",
                "profilePhoto": "https://randomuser.me/api/portraits/men/22.jpg"
            },
            "financialRecords": {
                "debt": "$51,338"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "architectural engineering"
            },
            "isOnline": false,
            "studentName": "Justin Wang",
            "id": 123456444
        }, {
            "contact": {
                "email": "emily.fournier@email.com",
                "phoneNumber": "+1 856 404 6785"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 4,
                    "day": 24
                },
                "sex": "female",
                "parentName": "Brian Fournier",
                "profilePhoto": "https://randomuser.me/api/portraits/women/22.jpg"
            },
            "financialRecords": {
                "debt": "$76,985"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "communications"
            },
            "isOnline": true,
            "studentName": "Emily Fournier",
            "id": 123456445
        }, {
            "contact": {
                "email": "matthew.white@email.com",
                "phoneNumber": "+1 201 447 5546"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 12,
                    "day": 15
                },
                "sex": "male",
                "parentName": "Heather White",
                "profilePhoto": "https://randomuser.me/api/portraits/men/23.jpg"
            },
            "financialRecords": {
                "debt": "$5,996"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "childhood education"
            },
            "isOnline": true,
            "studentName": "Matthew White",
            "id": 123456446
        }, {
            "contact": {
                "email": "isabella.gonzalez@email.com",
                "phoneNumber": "+1 201 722 8174"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 1,
                    "day": 7
                },
                "sex": "female",
                "parentName": "Michael Gonzalez",
                "profilePhoto": "https://randomuser.me/api/portraits/women/23.jpg"
            },
            "financialRecords": {
                "debt": "$88,844"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "electrical engineering"
            },
            "isOnline": true,
            "studentName": "Isabella Gonzalez",
            "id": 123456447
        }, {
            "contact": {
                "email": "ryan.adams@email.com",
                "phoneNumber": "+1 201 570 2508"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 7,
                    "day": 26
                },
                "sex": "male",
                "parentName": "Isabella Adams",
                "profilePhoto": "https://randomuser.me/api/portraits/men/24.jpg"
            },
            "financialRecords": {
                "debt": "$52,163"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Ryan Adams",
            "id": 123456448
        }, {
            "contact": {
                "email": "michelle.green@email.com",
                "phoneNumber": "+1 732 400 4419"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 3,
                    "day": 2
                },
                "sex": "female",
                "parentName": "Ethan Green",
                "profilePhoto": "https://randomuser.me/api/portraits/women/24.jpg"
            },
            "financialRecords": {
                "debt": "$96,208"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "Michelle Green",
            "id": 123456449
        }, {
            "contact": {
                "email": "david.toussaint@email.com",
                "phoneNumber": "+1 609 231 6123"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 5,
                    "day": 16
                },
                "sex": "male",
                "parentName": "Linda Toussaint",
                "profilePhoto": "https://randomuser.me/api/portraits/men/25.jpg"
            },
            "financialRecords": {
                "debt": "$97,418"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "David Toussaint",
            "id": 123456450
        }, {
            "contact": {
                "email": "taylor.zimmerman@email.com",
                "phoneNumber": "+1 609 334 5822"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 3,
                    "day": 28
                },
                "sex": "female",
                "parentName": "Alexander Zimmerman",
                "profilePhoto": "https://randomuser.me/api/portraits/women/25.jpg"
            },
            "financialRecords": {
                "debt": "$61,785"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Taylor Zimmerman",
            "id": 123456451
        }, {
            "contact": {
                "email": "jack.hall@email.com",
                "phoneNumber": "+1 856 517 2722"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 6,
                    "day": 3
                },
                "sex": "male",
                "parentName": "Amy Hall",
                "profilePhoto": "https://randomuser.me/api/portraits/men/26.jpg"
            },
            "financialRecords": {
                "debt": "$90,404"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Jack Hall",
            "id": 123456452
        }, {
            "contact": {
                "email": "karen.robinson@email.com",
                "phoneNumber": "+1 609 915 7442"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 10,
                    "day": 1
                },
                "sex": "female",
                "parentName": "John Robinson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/26.jpg"
            },
            "financialRecords": {
                "debt": "$50,721"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Karen Robinson",
            "id": 123456453
        }, {
            "contact": {
                "email": "andrew.thompson@email.com",
                "phoneNumber": "+1 609 996 7158"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 9,
                    "day": 11
                },
                "sex": "male",
                "parentName": "Linda Thompson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/27.jpg"
            },
            "financialRecords": {
                "debt": "$30,993"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "business"
            },
            "isOnline": false,
            "studentName": "Andrew Thompson",
            "id": 123456454
        }, {
            "contact": {
                "email": "amanda.smith@email.com",
                "phoneNumber": "+1 732 388 8708"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 10,
                    "day": 25
                },
                "sex": "female",
                "parentName": "Jacob Smith",
                "profilePhoto": "https://randomuser.me/api/portraits/women/27.jpg"
            },
            "financialRecords": {
                "debt": "$8,353"
            },
            "academicRecords": {
                "class": "VII C"
            },
            "isOnline": true,
            "studentName": "Amanda Smith",
            "id": 123456455
        }, {
            "contact": {
                "email": "john.scott@email.com",
                "phoneNumber": "+1 856 661 8143"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 2,
                    "day": 10
                },
                "sex": "male",
                "parentName": "Jennifer Scott",
                "profilePhoto": "https://randomuser.me/api/portraits/men/28.jpg"
            },
            "financialRecords": {
                "debt": "$25,035"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "John Scott",
            "id": 123456456
        }, {
            "contact": {
                "email": "kimberly.moore@email.com",
                "phoneNumber": "+1 201 64 9888"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 10,
                    "day": 1
                },
                "sex": "female",
                "parentName": "Robert Moore",
                "profilePhoto": "https://randomuser.me/api/portraits/women/28.jpg"
            },
            "financialRecords": {
                "debt": "$99,191"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "Kimberly Moore",
            "id": 123456457
        }, {
            "contact": {
                "email": "tyler.perez@email.com",
                "phoneNumber": "+1 609 343 1618"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 9,
                    "day": 22
                },
                "sex": "male",
                "parentName": "Madison Perez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/29.jpg"
            },
            "financialRecords": {
                "debt": "$59,872"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "childhood education"
            },
            "isOnline": true,
            "studentName": "Tyler Perez",
            "id": 123456458
        }, {
            "contact": {
                "email": "emily.young@email.com",
                "phoneNumber": "+1 201 547 8420"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 4,
                    "day": 19
                },
                "sex": "female",
                "parentName": "Jack Young",
                "profilePhoto": "https://randomuser.me/api/portraits/women/29.jpg"
            },
            "financialRecords": {
                "debt": "$81,590"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Emily Young",
            "id": 123456459
        }, {
            "contact": {
                "email": "ethan.scott@email.com",
                "phoneNumber": "+1 732 972 7711"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 1,
                    "day": 16
                },
                "sex": "male",
                "parentName": "Sarah Scott",
                "profilePhoto": "https://randomuser.me/api/portraits/men/30.jpg"
            },
            "financialRecords": {
                "debt": "$55,661"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Ethan Scott",
            "id": 123456460
        }, {
            "contact": {
                "email": "isabella.moore@email.com",
                "phoneNumber": "+1 609 311 1865"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 6,
                    "day": 22
                },
                "sex": "female",
                "parentName": "Ryan Moore",
                "profilePhoto": "https://randomuser.me/api/portraits/women/30.jpg"
            },
            "financialRecords": {
                "debt": "$56,969"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "computer science"
            },
            "isOnline": true,
            "studentName": "Isabella Moore",
            "id": 123456461
        }, {
            "contact": {
                "email": "brian.walker@email.com",
                "phoneNumber": "+1 732 175 9809"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 9,
                    "day": 26
                },
                "sex": "male",
                "parentName": "Megan Walker",
                "profilePhoto": "https://randomuser.me/api/portraits/men/31.jpg"
            },
            "financialRecords": {
                "debt": "$24,934"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "Brian Walker",
            "id": 123456462
        }, {
            "contact": {
                "email": "nicole.martinez@email.com",
                "phoneNumber": "+1 201 129 8353"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 4,
                    "day": 28
                },
                "sex": "female",
                "parentName": "Austin Martinez",
                "profilePhoto": "https://randomuser.me/api/portraits/women/31.jpg"
            },
            "financialRecords": {
                "debt": "$33,591"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Nicole Martinez",
            "id": 123456463
        }, {
            "contact": {
                "email": "james.monet@email.com",
                "phoneNumber": "+1 732 812 255"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 12,
                    "day": 23
                },
                "sex": "male",
                "parentName": "Emma Monet",
                "profilePhoto": "https://randomuser.me/api/portraits/men/32.jpg"
            },
            "financialRecords": {
                "debt": "$92,981"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "James Monet",
            "id": 123456464
        }, {
            "contact": {
                "email": "samantha.liu@email.com",
                "phoneNumber": "+1 908 471 8104"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 2,
                    "day": 24
                },
                "sex": "female",
                "parentName": "William Liu",
                "profilePhoto": "https://randomuser.me/api/portraits/women/32.jpg"
            },
            "financialRecords": {
                "debt": "$83,726"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Samantha Liu",
            "id": 123456465
        }, {
            "contact": {
                "email": "zachary.roberts@email.com",
                "phoneNumber": "+1 201 750 6205"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 1,
                    "day": 8
                },
                "sex": "male",
                "parentName": "Nicole Roberts",
                "profilePhoto": "https://randomuser.me/api/portraits/men/33.jpg"
            },
            "financialRecords": {
                "debt": "$76,687"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "Zachary Roberts",
            "id": 123456466
        }, {
            "contact": {
                "email": "isabella.monet@email.com",
                "phoneNumber": "+1 undefined 568 8318"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 11,
                    "day": 25
                },
                "sex": "female",
                "parentName": "Brandon Monet",
                "profilePhoto": "https://randomuser.me/api/portraits/women/33.jpg"
            },
            "financialRecords": {
                "debt": "$88,746"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "Isabella Monet",
            "id": 123456467
        }, {
            "contact": {
                "email": "jason.gonzalez@email.com",
                "phoneNumber": "+1 856 801 5700"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 1,
                    "day": 12
                },
                "sex": "male",
                "parentName": "Melissa Gonzalez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/34.jpg"
            },
            "financialRecords": {
                "debt": "$90,729"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "communications"
            },
            "isOnline": true,
            "studentName": "Jason Gonzalez",
            "id": 123456468
        }, {
            "contact": {
                "email": "emily.adams@email.com",
                "phoneNumber": "+1 609 363 2739"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 3,
                    "day": 30
                },
                "sex": "female",
                "parentName": "Christian Adams",
                "profilePhoto": "https://randomuser.me/api/portraits/women/34.jpg"
            },
            "financialRecords": {
                "debt": "$78,164"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "computer science"
            },
            "isOnline": true,
            "studentName": "Emily Adams",
            "id": 123456469
        }, {
            "contact": {
                "email": "daniel.roberts@email.com",
                "phoneNumber": "+1 609 347 6971"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 4,
                    "day": 20
                },
                "sex": "male",
                "parentName": "Sarah Roberts",
                "profilePhoto": "https://randomuser.me/api/portraits/men/35.jpg"
            },
            "financialRecords": {
                "debt": "$525"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "communications"
            },
            "isOnline": true,
            "studentName": "Daniel Roberts",
            "id": 123456470
        }, {
            "contact": {
                "email": "nicole.liu@email.com",
                "phoneNumber": "+1 856 414 4956"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 5,
                    "day": 16
                },
                "sex": "female",
                "parentName": "Jonathan Liu",
                "profilePhoto": "https://randomuser.me/api/portraits/women/35.jpg"
            },
            "financialRecords": {
                "debt": "$35,360"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Nicole Liu",
            "id": 123456471
        }, {
            "contact": {
                "email": "jason.scott@email.com",
                "phoneNumber": "+1 732 66 3136"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 7,
                    "day": 11
                },
                "sex": "male",
                "parentName": "Abigail Scott",
                "profilePhoto": "https://randomuser.me/api/portraits/men/36.jpg"
            },
            "financialRecords": {
                "debt": "$40,297"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Jason Scott",
            "id": 123456472
        }, {
            "contact": {
                "email": "olivia.peterson@email.com",
                "phoneNumber": "+1 undefined 201 7737"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 3,
                    "day": 29
                },
                "sex": "female",
                "parentName": "Ethan Peterson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/36.jpg"
            },
            "financialRecords": {
                "debt": "$8,121"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Olivia Peterson",
            "id": 123456473
        }, {
            "contact": {
                "email": "john.taylor@email.com",
                "phoneNumber": "+1 732 774 9463"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 1
                },
                "sex": "male",
                "parentName": "Sophia Taylor",
                "profilePhoto": "https://randomuser.me/api/portraits/men/37.jpg"
            },
            "financialRecords": {
                "debt": "$12,863"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "John Taylor",
            "id": 123456474
        }, {
            "contact": {
                "email": "alexis.müller@email.com",
                "phoneNumber": "+1 609 975 9136"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 10
                },
                "sex": "female",
                "parentName": "Anthony Müller",
                "profilePhoto": "https://randomuser.me/api/portraits/women/37.jpg"
            },
            "financialRecords": {
                "debt": "$82,475"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "business"
            },
            "isOnline": true,
            "studentName": "Alexis Müller",
            "id": 123456475
        }, {
            "contact": {
                "email": "kevin.miller@email.com",
                "phoneNumber": "+1 908 897 6211"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 3,
                    "day": 30
                },
                "sex": "male",
                "parentName": "Sarah Miller",
                "profilePhoto": "https://randomuser.me/api/portraits/men/38.jpg"
            },
            "financialRecords": {
                "debt": "$90,821"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Kevin Miller",
            "id": 123456476
        }, {
            "contact": {
                "email": "samantha.clark@email.com",
                "phoneNumber": "+1 856 504 4655"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 9,
                    "day": 26
                },
                "sex": "female",
                "parentName": "Justin Clark",
                "profilePhoto": "https://randomuser.me/api/portraits/women/38.jpg"
            },
            "financialRecords": {
                "debt": "$78,702"
            },
            "academicRecords": {
                "class": "VII C"
            },
            "isOnline": false,
            "studentName": "Samantha Clark",
            "id": 123456477
        }, {
            "contact": {
                "email": "kyle.schmidt@email.com",
                "phoneNumber": "+1 732 932 8023"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 5,
                    "day": 8
                },
                "sex": "male",
                "parentName": "Jessica Schmidt",
                "profilePhoto": "https://randomuser.me/api/portraits/men/39.jpg"
            },
            "financialRecords": {
                "debt": "$5,087"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Kyle Schmidt",
            "id": 123456478
        }, {
            "contact": {
                "email": "kayla.jones@email.com",
                "phoneNumber": "+1 609 122 7687"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 7,
                    "day": 21
                },
                "sex": "female",
                "parentName": "Nathan Jones",
                "profilePhoto": "https://randomuser.me/api/portraits/women/39.jpg"
            },
            "financialRecords": {
                "debt": "$17,052"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "Kayla Jones",
            "id": 123456479
        }, {
            "contact": {
                "email": "alexander.garnier@email.com",
                "phoneNumber": "+1 undefined 898 9066"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 7,
                    "day": 24
                },
                "sex": "male",
                "parentName": "Brittany Garnier",
                "profilePhoto": "https://randomuser.me/api/portraits/men/40.jpg"
            },
            "financialRecords": {
                "debt": "$82,251"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "business"
            },
            "isOnline": false,
            "studentName": "Alexander Garnier",
            "id": 123456480
        }, {
            "contact": {
                "email": "ashley.allen@email.com",
                "phoneNumber": "+1 609 95 5904"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 24
                },
                "sex": "female",
                "parentName": "Joseph Allen",
                "profilePhoto": "https://randomuser.me/api/portraits/women/40.jpg"
            },
            "financialRecords": {
                "debt": "$22,489"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "electrical engineering"
            },
            "isOnline": false,
            "studentName": "Ashley Allen",
            "id": 123456481
        }, {
            "contact": {
                "email": "christian.thompson@email.com",
                "phoneNumber": "+1 undefined 733 9532"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 2,
                    "day": 22
                },
                "sex": "male",
                "parentName": "Alexis Thompson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/41.jpg"
            },
            "financialRecords": {
                "debt": "$99,588"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Christian Thompson",
            "id": 123456482
        }, {
            "contact": {
                "email": "angela.smith@email.com",
                "phoneNumber": "+1 856 636 8887"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 7,
                    "day": 15
                },
                "sex": "female",
                "parentName": "James Smith",
                "profilePhoto": "https://randomuser.me/api/portraits/women/41.jpg"
            },
            "financialRecords": {
                "debt": "$30,920"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "business"
            },
            "isOnline": true,
            "studentName": "Angela Smith",
            "id": 123456483
        }, {
            "contact": {
                "email": "kevin.liu@email.com",
                "phoneNumber": "+1 856 843 5290"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 5,
                    "day": 24
                },
                "sex": "male",
                "parentName": "Taylor Liu",
                "profilePhoto": "https://randomuser.me/api/portraits/men/42.jpg"
            },
            "financialRecords": {
                "debt": "$69,261"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "electrical engineering"
            },
            "isOnline": true,
            "studentName": "Kevin Liu",
            "id": 123456484
        }, {
            "contact": {
                "email": "melissa.lavigne@email.com",
                "phoneNumber": "+1 201 651 2510"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 8,
                    "day": 8
                },
                "sex": "female",
                "parentName": "Samuel Lavigne",
                "profilePhoto": "https://randomuser.me/api/portraits/women/42.jpg"
            },
            "financialRecords": {
                "debt": "$12,132"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "Melissa Lavigne",
            "id": 123456485
        }, {
            "contact": {
                "email": "joshua.thompson@email.com",
                "phoneNumber": "+1 856 560 6749"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 8,
                    "day": 22
                },
                "sex": "male",
                "parentName": "Mary Thompson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/43.jpg"
            },
            "financialRecords": {
                "debt": "$67,572"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "Joshua Thompson",
            "id": 123456486
        }, {
            "contact": {
                "email": "melissa.peterson@email.com",
                "phoneNumber": "+1 732 938 9762"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 6,
                    "day": 19
                },
                "sex": "female",
                "parentName": "Brian Peterson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/43.jpg"
            },
            "financialRecords": {
                "debt": "$61,871"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Melissa Peterson",
            "id": 123456487
        }, {
            "contact": {
                "email": "samuel.roberts@email.com",
                "phoneNumber": "+1 609 800 5158"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 9,
                    "day": 27
                },
                "sex": "male",
                "parentName": "Jessica Roberts",
                "profilePhoto": "https://randomuser.me/api/portraits/men/44.jpg"
            },
            "financialRecords": {
                "debt": "$87,367"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": true,
            "studentName": "Samuel Roberts",
            "id": 123456488
        }, {
            "contact": {
                "email": "amy.walker@email.com",
                "phoneNumber": "+1 609 179 7709"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 10,
                    "day": 7
                },
                "sex": "female",
                "parentName": "Gabriel Walker",
                "profilePhoto": "https://randomuser.me/api/portraits/women/44.jpg"
            },
            "financialRecords": {
                "debt": "$42,987"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Amy Walker",
            "id": 123456489
        }, {
            "contact": {
                "email": "jason.robinson@email.com",
                "phoneNumber": "+1 201 659 8878"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 5,
                    "day": 22
                },
                "sex": "male",
                "parentName": "Sarah Robinson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/45.jpg"
            },
            "financialRecords": {
                "debt": "$77,199"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "business"
            },
            "isOnline": false,
            "studentName": "Jason Robinson",
            "id": 123456490
        }, {
            "contact": {
                "email": "amanda.scott@email.com",
                "phoneNumber": "+1 undefined 923 7475"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 5,
                    "day": 9
                },
                "sex": "female",
                "parentName": "Christopher Scott",
                "profilePhoto": "https://randomuser.me/api/portraits/women/45.jpg"
            },
            "financialRecords": {
                "debt": "$26,507"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "communications"
            },
            "isOnline": false,
            "studentName": "Amanda Scott",
            "id": 123456491
        }, {
            "contact": {
                "email": "gabriel.monet@email.com",
                "phoneNumber": "+1 201 711 820"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 6,
                    "day": 6
                },
                "sex": "male",
                "parentName": "Karen Monet",
                "profilePhoto": "https://randomuser.me/api/portraits/men/46.jpg"
            },
            "financialRecords": {
                "debt": "$17,628"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "computer science"
            },
            "isOnline": true,
            "studentName": "Gabriel Monet",
            "id": 123456492
        }, {
            "contact": {
                "email": "samantha.nelson@email.com",
                "phoneNumber": "+1 732 925 2869"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 3,
                    "day": 1
                },
                "sex": "female",
                "parentName": "Anthony Nelson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/46.jpg"
            },
            "financialRecords": {
                "debt": "$27,602"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Samantha Nelson",
            "id": 123456493
        }, {
            "contact": {
                "email": "kyle.anderson@email.com",
                "phoneNumber": "+1 undefined 811 8895"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 2,
                    "day": 5
                },
                "sex": "male",
                "parentName": "Angela Anderson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/47.jpg"
            },
            "financialRecords": {
                "debt": "$48,343"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Kyle Anderson",
            "id": 123456494
        }, {
            "contact": {
                "email": "alexis.gonzalez@email.com",
                "phoneNumber": "+1 609 349 4210"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 8,
                    "day": 6
                },
                "sex": "female",
                "parentName": "Daniel Gonzalez",
                "profilePhoto": "https://randomuser.me/api/portraits/women/47.jpg"
            },
            "financialRecords": {
                "debt": "$2,183"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "Alexis Gonzalez",
            "id": 123456495
        }, {
            "contact": {
                "email": "william.martinez@email.com",
                "phoneNumber": "+1 856 869 8719"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 10,
                    "day": 11
                },
                "sex": "male",
                "parentName": "Linda Martinez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/48.jpg"
            },
            "financialRecords": {
                "debt": "$68,801"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "William Martinez",
            "id": 123456496
        }, {
            "contact": {
                "email": "linda.nguyen@email.com",
                "phoneNumber": "+1 609 491 4225"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 8,
                    "day": 31
                },
                "sex": "female",
                "parentName": "James Nguyen",
                "profilePhoto": "https://randomuser.me/api/portraits/women/48.jpg"
            },
            "financialRecords": {
                "debt": "$50,310"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "communications"
            },
            "isOnline": true,
            "studentName": "Linda Nguyen",
            "id": 123456497
        }, {
            "contact": {
                "email": "nicholas.liu@email.com",
                "phoneNumber": "+1 732 381 8023"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 6,
                    "day": 25
                },
                "sex": "male",
                "parentName": "Amy Liu",
                "profilePhoto": "https://randomuser.me/api/portraits/men/49.jpg"
            },
            "financialRecords": {
                "debt": "$72,071"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Nicholas Liu",
            "id": 123456498
        }, {
            "contact": {
                "email": "angela.robinson@email.com",
                "phoneNumber": "+1 undefined 445 2862"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 10,
                    "day": 4
                },
                "sex": "female",
                "parentName": "Tyler Robinson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/49.jpg"
            },
            "financialRecords": {
                "debt": "$26,651"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Angela Robinson",
            "id": 123456499
        }, {
            "contact": {
                "email": "john.taylor@email.com",
                "phoneNumber": "+1 609 468 4375"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 8,
                    "day": 27
                },
                "sex": "male",
                "parentName": "Michelle Taylor",
                "profilePhoto": "https://randomuser.me/api/portraits/men/50.jpg"
            },
            "financialRecords": {
                "debt": "$3,363"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "business"
            },
            "isOnline": true,
            "studentName": "John Taylor",
            "id": 123456500
        }, {
            "contact": {
                "email": "elizabeth.lee@email.com",
                "phoneNumber": "+1 908 627 9470"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 7,
                    "day": 21
                },
                "sex": "female",
                "parentName": "Samuel Lee",
                "profilePhoto": "https://randomuser.me/api/portraits/women/50.jpg"
            },
            "financialRecords": {
                "debt": "$85,452"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Elizabeth Lee",
            "id": 123456501
        }, {
            "contact": {
                "email": "samuel.edwards@email.com",
                "phoneNumber": "+1 609 32 5469"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 8,
                    "day": 8
                },
                "sex": "male",
                "parentName": "Kayla Edwards",
                "profilePhoto": "https://randomuser.me/api/portraits/men/51.jpg"
            },
            "financialRecords": {
                "debt": "$88,214"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "business"
            },
            "isOnline": true,
            "studentName": "Samuel Edwards",
            "id": 123456502
        }, {
            "contact": {
                "email": "susan.allen@email.com",
                "phoneNumber": "+1 732 865 675"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 8,
                    "day": 12
                },
                "sex": "female",
                "parentName": "Mark Allen",
                "profilePhoto": "https://randomuser.me/api/portraits/women/51.jpg"
            },
            "financialRecords": {
                "debt": "$87,341"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Susan Allen",
            "id": 123456503
        }, {
            "contact": {
                "email": "john.schneider@email.com",
                "phoneNumber": "+1 201 774 1972"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 4,
                    "day": 15
                },
                "sex": "male",
                "parentName": "Lillian Schneider",
                "profilePhoto": "https://randomuser.me/api/portraits/men/52.jpg"
            },
            "financialRecords": {
                "debt": "$23,739"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "John Schneider",
            "id": 123456504
        }, {
            "contact": {
                "email": "amanda.green@email.com",
                "phoneNumber": "+1 609 276 3476"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 11,
                    "day": 11
                },
                "sex": "female",
                "parentName": "Brandon Green",
                "profilePhoto": "https://randomuser.me/api/portraits/women/52.jpg"
            },
            "financialRecords": {
                "debt": "$36,065"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Amanda Green",
            "id": 123456505
        }, {
            "contact": {
                "email": "alexander.baker@email.com",
                "phoneNumber": "+1 609 178 3964"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 5,
                    "day": 5
                },
                "sex": "male",
                "parentName": "Karen Baker",
                "profilePhoto": "https://randomuser.me/api/portraits/men/53.jpg"
            },
            "financialRecords": {
                "debt": "$51,806"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "architectural engineering"
            },
            "isOnline": false,
            "studentName": "Alexander Baker",
            "id": 123456506
        }, {
            "contact": {
                "email": "melissa.clark@email.com",
                "phoneNumber": "+1 undefined 642 7555"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 12,
                    "day": 28
                },
                "sex": "female",
                "parentName": "Andrew Clark",
                "profilePhoto": "https://randomuser.me/api/portraits/women/53.jpg"
            },
            "financialRecords": {
                "debt": "$54,195"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "architectural engineering"
            },
            "isOnline": true,
            "studentName": "Melissa Clark",
            "id": 123456507
        }, {
            "contact": {
                "email": "ethan.wang@email.com",
                "phoneNumber": "+1 732 269 3283"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 4,
                    "day": 14
                },
                "sex": "male",
                "parentName": "Michelle Wang",
                "profilePhoto": "https://randomuser.me/api/portraits/men/54.jpg"
            },
            "financialRecords": {
                "debt": "$72,310"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "architectural engineering"
            },
            "isOnline": true,
            "studentName": "Ethan Wang",
            "id": 123456508
        }, {
            "contact": {
                "email": "patricia.flores@email.com",
                "phoneNumber": "+1 201 9 1109"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 1,
                    "day": 18
                },
                "sex": "female",
                "parentName": "Samuel Flores",
                "profilePhoto": "https://randomuser.me/api/portraits/women/54.jpg"
            },
            "financialRecords": {
                "debt": "$56,867"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "psychology"
            },
            "isOnline": true,
            "studentName": "Patricia Flores",
            "id": 123456509
        }, {
            "contact": {
                "email": "kevin.jones@email.com",
                "phoneNumber": "+1 201 73 5235"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 9,
                    "day": 17
                },
                "sex": "male",
                "parentName": "Nicole Jones",
                "profilePhoto": "https://randomuser.me/api/portraits/men/55.jpg"
            },
            "financialRecords": {
                "debt": "$6,634"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "electrical engineering"
            },
            "isOnline": false,
            "studentName": "Kevin Jones",
            "id": 123456510
        }, {
            "contact": {
                "email": "jennifer.nguyen@email.com",
                "phoneNumber": "+1 201 318 2828"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 3,
                    "day": 26
                },
                "sex": "female",
                "parentName": "Alexander Nguyen",
                "profilePhoto": "https://randomuser.me/api/portraits/women/55.jpg"
            },
            "financialRecords": {
                "debt": "$74,530"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Jennifer Nguyen",
            "id": 123456511
        }, {
            "contact": {
                "email": "matthew.chen@email.com",
                "phoneNumber": "+1 undefined 483 4851"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 7,
                    "day": 27
                },
                "sex": "male",
                "parentName": "Sophia Chen",
                "profilePhoto": "https://randomuser.me/api/portraits/men/56.jpg"
            },
            "financialRecords": {
                "debt": "$50,068"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Matthew Chen",
            "id": 123456512
        }, {
            "contact": {
                "email": "patricia.campbell@email.com",
                "phoneNumber": "+1 856 906 3792"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 7,
                    "day": 1
                },
                "sex": "female",
                "parentName": "William Campbell",
                "profilePhoto": "https://randomuser.me/api/portraits/women/56.jpg"
            },
            "financialRecords": {
                "debt": "$99,668"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "Patricia Campbell",
            "id": 123456513
        }, {
            "contact": {
                "email": "jason.gonzalez@email.com",
                "phoneNumber": "+1 201 769 1436"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 12,
                    "day": 26
                },
                "sex": "male",
                "parentName": "Megan Gonzalez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/57.jpg"
            },
            "financialRecords": {
                "debt": "$61,597"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Jason Gonzalez",
            "id": 123456514
        }, {
            "contact": {
                "email": "sarah.white@email.com",
                "phoneNumber": "+1 609 30 9548"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 7,
                    "day": 17
                },
                "sex": "female",
                "parentName": "Anthony White",
                "profilePhoto": "https://randomuser.me/api/portraits/women/57.jpg"
            },
            "financialRecords": {
                "debt": "$31,921"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Sarah White",
            "id": 123456515
        }, {
            "contact": {
                "email": "christian.liu@email.com",
                "phoneNumber": "+1 609 298 5343"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 12,
                    "day": 6
                },
                "sex": "male",
                "parentName": "Samantha Liu",
                "profilePhoto": "https://randomuser.me/api/portraits/men/58.jpg"
            },
            "financialRecords": {
                "debt": "$92,240"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Christian Liu",
            "id": 123456516
        }, {
            "contact": {
                "email": "nicole.dupont@email.com",
                "phoneNumber": "+1 732 175 9883"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 5,
                    "day": 29
                },
                "sex": "female",
                "parentName": "Nathan Dupont",
                "profilePhoto": "https://randomuser.me/api/portraits/women/58.jpg"
            },
            "financialRecords": {
                "debt": "$73,121"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "business"
            },
            "isOnline": true,
            "studentName": "Nicole Dupont",
            "id": 123456517
        }, {
            "contact": {
                "email": "mark.edwards@email.com",
                "phoneNumber": "+1 908 340 9995"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 8,
                    "day": 21
                },
                "sex": "male",
                "parentName": "Megan Edwards",
                "profilePhoto": "https://randomuser.me/api/portraits/men/59.jpg"
            },
            "financialRecords": {
                "debt": "$83,842"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Mark Edwards",
            "id": 123456518
        }, {
            "contact": {
                "email": "amanda.howard@email.com",
                "phoneNumber": "+1 201 106 9168"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 10
                },
                "sex": "female",
                "parentName": "Nathan Howard",
                "profilePhoto": "https://randomuser.me/api/portraits/women/59.jpg"
            },
            "financialRecords": {
                "debt": "$24,650"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Amanda Howard",
            "id": 123456519
        }, {
            "contact": {
                "email": "james.moore@email.com",
                "phoneNumber": "+1 856 645 3028"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 1,
                    "day": 15
                },
                "sex": "male",
                "parentName": "Hannah Moore",
                "profilePhoto": "https://randomuser.me/api/portraits/men/60.jpg"
            },
            "financialRecords": {
                "debt": "$15,154"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "computer science"
            },
            "isOnline": true,
            "studentName": "James Moore",
            "id": 123456520
        }, {
            "contact": {
                "email": "susan.zhang@email.com",
                "phoneNumber": "+1 609 178 8871"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 3,
                    "day": 1
                },
                "sex": "female",
                "parentName": "David Zhang",
                "profilePhoto": "https://randomuser.me/api/portraits/women/60.jpg"
            },
            "financialRecords": {
                "debt": "$66,669"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Susan Zhang",
            "id": 123456521
        }, {
            "contact": {
                "email": "gabriel.miller@email.com",
                "phoneNumber": "+1 856 479 7486"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 7,
                    "day": 19
                },
                "sex": "male",
                "parentName": "Brittany Miller",
                "profilePhoto": "https://randomuser.me/api/portraits/men/61.jpg"
            },
            "financialRecords": {
                "debt": "$82,319"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "business"
            },
            "isOnline": false,
            "studentName": "Gabriel Miller",
            "id": 123456522
        }, {
            "contact": {
                "email": "abigail.robinson@email.com",
                "phoneNumber": "+1 609 921 3305"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 3,
                    "day": 4
                },
                "sex": "female",
                "parentName": "Jacob Robinson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/61.jpg"
            },
            "financialRecords": {
                "debt": "$22,225"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "politcal science"
            },
            "isOnline": true,
            "studentName": "Abigail Robinson",
            "id": 123456523
        }, {
            "contact": {
                "email": "jack.wilson@email.com",
                "phoneNumber": "+1 732 705 376"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 9,
                    "day": 1
                },
                "sex": "male",
                "parentName": "Karen Wilson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/62.jpg"
            },
            "financialRecords": {
                "debt": "$33,770"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "Jack Wilson",
            "id": 123456524
        }, {
            "contact": {
                "email": "emma.harris@email.com",
                "phoneNumber": "+1 732 962 372"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 3,
                    "day": 3
                },
                "sex": "female",
                "parentName": "William Harris",
                "profilePhoto": "https://randomuser.me/api/portraits/women/62.jpg"
            },
            "financialRecords": {
                "debt": "$20,466"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "Emma Harris",
            "id": 123456525
        }, {
            "contact": {
                "email": "william.lavigne@email.com",
                "phoneNumber": "+1 undefined 646 5975"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 5,
                    "day": 15
                },
                "sex": "male",
                "parentName": "Amy Lavigne",
                "profilePhoto": "https://randomuser.me/api/portraits/men/63.jpg"
            },
            "financialRecords": {
                "debt": "$43,900"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "William Lavigne",
            "id": 123456526
        }, {
            "contact": {
                "email": "mary.moore@email.com",
                "phoneNumber": "+1 201 305 8399"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 10,
                    "day": 6
                },
                "sex": "female",
                "parentName": "Christopher Moore",
                "profilePhoto": "https://randomuser.me/api/portraits/women/63.jpg"
            },
            "financialRecords": {
                "debt": "$92,908"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "Mary Moore",
            "id": 123456527
        }, {
            "contact": {
                "email": "kevin.thompson@email.com",
                "phoneNumber": "+1 609 528 9291"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 4,
                    "day": 13
                },
                "sex": "male",
                "parentName": "Amanda Thompson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/64.jpg"
            },
            "financialRecords": {
                "debt": "$46,002"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Kevin Thompson",
            "id": 123456528
        }, {
            "contact": {
                "email": "patricia.braun@email.com",
                "phoneNumber": "+1 undefined 146 646"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 8,
                    "day": 28
                },
                "sex": "female",
                "parentName": "John Braun",
                "profilePhoto": "https://randomuser.me/api/portraits/women/64.jpg"
            },
            "financialRecords": {
                "debt": "$89,374"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "politcal science"
            },
            "isOnline": true,
            "studentName": "Patricia Braun",
            "id": 123456529
        }, {
            "contact": {
                "email": "christopher.clark@email.com",
                "phoneNumber": "+1 609 983 816"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 1,
                    "day": 10
                },
                "sex": "male",
                "parentName": "Amy Clark",
                "profilePhoto": "https://randomuser.me/api/portraits/men/65.jpg"
            },
            "financialRecords": {
                "debt": "$80,609"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Christopher Clark",
            "id": 123456530
        }, {
            "contact": {
                "email": "angela.mitchell@email.com",
                "phoneNumber": "+1 908 887 5514"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 9,
                    "day": 10
                },
                "sex": "female",
                "parentName": "David Mitchell",
                "profilePhoto": "https://randomuser.me/api/portraits/women/65.jpg"
            },
            "financialRecords": {
                "debt": "$9,570"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Angela Mitchell",
            "id": 123456531
        }, {
            "contact": {
                "email": "daniel.braun@email.com",
                "phoneNumber": "+1 201 562 4131"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 6,
                    "day": 1
                },
                "sex": "male",
                "parentName": "Linda Braun",
                "profilePhoto": "https://randomuser.me/api/portraits/men/66.jpg"
            },
            "financialRecords": {
                "debt": "$992"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "Daniel Braun",
            "id": 123456532
        }, {
            "contact": {
                "email": "jessica.harris@email.com",
                "phoneNumber": "+1 undefined 908 2727"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 10,
                    "day": 10
                },
                "sex": "female",
                "parentName": "Gabriel Harris",
                "profilePhoto": "https://randomuser.me/api/portraits/women/66.jpg"
            },
            "financialRecords": {
                "debt": "$64,957"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "computer science"
            },
            "isOnline": true,
            "studentName": "Jessica Harris",
            "id": 123456533
        }, {
            "contact": {
                "email": "anthony.wright@email.com",
                "phoneNumber": "+1 908 853 9919"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 1,
                    "day": 16
                },
                "sex": "male",
                "parentName": "Linda Wright",
                "profilePhoto": "https://randomuser.me/api/portraits/men/67.jpg"
            },
            "financialRecords": {
                "debt": "$16,796"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "Anthony Wright",
            "id": 123456534
        }, {
            "contact": {
                "email": "lisa.toussaint@email.com",
                "phoneNumber": "+1 609 553 9719"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 10,
                    "day": 10
                },
                "sex": "female",
                "parentName": "Alexander Toussaint",
                "profilePhoto": "https://randomuser.me/api/portraits/women/67.jpg"
            },
            "financialRecords": {
                "debt": "$79,481"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Lisa Toussaint",
            "id": 123456535
        }, {
            "contact": {
                "email": "nathan.richardson@email.com",
                "phoneNumber": "+1 908 511 5104"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 1,
                    "day": 12
                },
                "sex": "male",
                "parentName": "Lisa Richardson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/68.jpg"
            },
            "financialRecords": {
                "debt": "$41,167"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "Nathan Richardson",
            "id": 123456536
        }, {
            "contact": {
                "email": "taylor.garnier@email.com",
                "phoneNumber": "+1 856 234 2626"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 9,
                    "day": 7
                },
                "sex": "female",
                "parentName": "John Garnier",
                "profilePhoto": "https://randomuser.me/api/portraits/women/68.jpg"
            },
            "financialRecords": {
                "debt": "$76,522"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "communications"
            },
            "isOnline": true,
            "studentName": "Taylor Garnier",
            "id": 123456537
        }, {
            "contact": {
                "email": "james.jones@email.com",
                "phoneNumber": "+1 732 613 3502"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 10,
                    "day": 1
                },
                "sex": "male",
                "parentName": "Megan Jones",
                "profilePhoto": "https://randomuser.me/api/portraits/men/69.jpg"
            },
            "financialRecords": {
                "debt": "$33,235"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "communications"
            },
            "isOnline": true,
            "studentName": "James Jones",
            "id": 123456538
        }, {
            "contact": {
                "email": "alexis.schneider@email.com",
                "phoneNumber": "+1 609 507 3078"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 5,
                    "day": 11
                },
                "sex": "female",
                "parentName": "Anthony Schneider",
                "profilePhoto": "https://randomuser.me/api/portraits/women/69.jpg"
            },
            "financialRecords": {
                "debt": "$60,827"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "business"
            },
            "isOnline": true,
            "studentName": "Alexis Schneider",
            "id": 123456539
        }, {
            "contact": {
                "email": "zachary.smith@email.com",
                "phoneNumber": "+1 609 206 1443"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 9,
                    "day": 3
                },
                "sex": "male",
                "parentName": "Patricia Smith",
                "profilePhoto": "https://randomuser.me/api/portraits/men/70.jpg"
            },
            "financialRecords": {
                "debt": "$62,639"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": true,
            "studentName": "Zachary Smith",
            "id": 123456540
        }, {
            "contact": {
                "email": "isabella.robinson@email.com",
                "phoneNumber": "+1 609 946 8147"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 9,
                    "day": 28
                },
                "sex": "female",
                "parentName": "Thomas Robinson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/70.jpg"
            },
            "financialRecords": {
                "debt": "$6,615"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Isabella Robinson",
            "id": 123456541
        }, {
            "contact": {
                "email": "anthony.dupont@email.com",
                "phoneNumber": "+1 201 148 5891"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 5,
                    "day": 21
                },
                "sex": "male",
                "parentName": "Brittany Dupont",
                "profilePhoto": "https://randomuser.me/api/portraits/men/71.jpg"
            },
            "financialRecords": {
                "debt": "$99,805"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "psychology"
            },
            "isOnline": true,
            "studentName": "Anthony Dupont",
            "id": 123456542
        }, {
            "contact": {
                "email": "samantha.roberts@email.com",
                "phoneNumber": "+1 732 152 2422"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 5,
                    "day": 13
                },
                "sex": "female",
                "parentName": "Ryan Roberts",
                "profilePhoto": "https://randomuser.me/api/portraits/women/71.jpg"
            },
            "financialRecords": {
                "debt": "$45,610"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Samantha Roberts",
            "id": 123456543
        }, {
            "contact": {
                "email": "jason.harris@email.com",
                "phoneNumber": "+1 undefined 221 2599"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 8,
                    "day": 16
                },
                "sex": "male",
                "parentName": "Jennifer Harris",
                "profilePhoto": "https://randomuser.me/api/portraits/men/72.jpg"
            },
            "financialRecords": {
                "debt": "$55,434"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "politcal science"
            },
            "isOnline": true,
            "studentName": "Jason Harris",
            "id": 123456544
        }, {
            "contact": {
                "email": "linda.schulz@email.com",
                "phoneNumber": "+1 609 456 3669"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 5,
                    "day": 7
                },
                "sex": "female",
                "parentName": "David Schulz",
                "profilePhoto": "https://randomuser.me/api/portraits/women/72.jpg"
            },
            "financialRecords": {
                "debt": "$11,242"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Linda Schulz",
            "id": 123456545
        }, {
            "contact": {
                "email": "ryan.wright@email.com",
                "phoneNumber": "+1 609 911 4165"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 5,
                    "day": 18
                },
                "sex": "male",
                "parentName": "Karen Wright",
                "profilePhoto": "https://randomuser.me/api/portraits/men/73.jpg"
            },
            "financialRecords": {
                "debt": "$7,084"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Ryan Wright",
            "id": 123456546
        }, {
            "contact": {
                "email": "samantha.miller@email.com",
                "phoneNumber": "+1 201 171 9084"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 1,
                    "day": 14
                },
                "sex": "female",
                "parentName": "Thomas Miller",
                "profilePhoto": "https://randomuser.me/api/portraits/women/73.jpg"
            },
            "financialRecords": {
                "debt": "$33,886"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "Samantha Miller",
            "id": 123456547
        }, {
            "contact": {
                "email": "jason.perez@email.com",
                "phoneNumber": "+1 609 923 1952"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 3,
                    "day": 30
                },
                "sex": "male",
                "parentName": "Amanda Perez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/74.jpg"
            },
            "financialRecords": {
                "debt": "$1,448"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "communications"
            },
            "isOnline": false,
            "studentName": "Jason Perez",
            "id": 123456548
        }, {
            "contact": {
                "email": "karen.roberts@email.com",
                "phoneNumber": "+1 908 357 4106"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 9,
                    "day": 31
                },
                "sex": "female",
                "parentName": "Daniel Roberts",
                "profilePhoto": "https://randomuser.me/api/portraits/women/74.jpg"
            },
            "financialRecords": {
                "debt": "$32,601"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Karen Roberts",
            "id": 123456549
        }, {
            "contact": {
                "email": "michael.moore@email.com",
                "phoneNumber": "+1 732 127 5615"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 5,
                    "day": 11
                },
                "sex": "male",
                "parentName": "Olivia Moore",
                "profilePhoto": "https://randomuser.me/api/portraits/men/75.jpg"
            },
            "financialRecords": {
                "debt": "$86,293"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Michael Moore",
            "id": 123456550
        }, {
            "contact": {
                "email": "jennifer.clark@email.com",
                "phoneNumber": "+1 609 514 8904"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 1,
                    "day": 19
                },
                "sex": "female",
                "parentName": "Jason Clark",
                "profilePhoto": "https://randomuser.me/api/portraits/women/75.jpg"
            },
            "financialRecords": {
                "debt": "$80,887"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Jennifer Clark",
            "id": 123456551
        }, {
            "contact": {
                "email": "jacob.li@email.com",
                "phoneNumber": "+1 908 490 3755"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 5,
                    "day": 4
                },
                "sex": "male",
                "parentName": "Heather Li",
                "profilePhoto": "https://randomuser.me/api/portraits/men/76.jpg"
            },
            "financialRecords": {
                "debt": "$86,568"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Jacob Li",
            "id": 123456552
        }, {
            "contact": {
                "email": "stephanie.garnier@email.com",
                "phoneNumber": "+1 856 140 1688"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 3,
                    "day": 20
                },
                "sex": "female",
                "parentName": "Nathan Garnier",
                "profilePhoto": "https://randomuser.me/api/portraits/women/76.jpg"
            },
            "financialRecords": {
                "debt": "$39,981"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Stephanie Garnier",
            "id": 123456553
        }, {
            "contact": {
                "email": "nathan.müller@email.com",
                "phoneNumber": "+1 856 442 4028"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 2,
                    "day": 18
                },
                "sex": "male",
                "parentName": "Amanda Müller",
                "profilePhoto": "https://randomuser.me/api/portraits/men/77.jpg"
            },
            "financialRecords": {
                "debt": "$84,176"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Nathan Müller",
            "id": 123456554
        }, {
            "contact": {
                "email": "linda.fournier@email.com",
                "phoneNumber": "+1 undefined 974 3739"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 4,
                    "day": 28
                },
                "sex": "female",
                "parentName": "Christian Fournier",
                "profilePhoto": "https://randomuser.me/api/portraits/women/77.jpg"
            },
            "financialRecords": {
                "debt": "$51,818"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Linda Fournier",
            "id": 123456555
        }, {
            "contact": {
                "email": "christian.chen@email.com",
                "phoneNumber": "+1 856 513 6966"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 29
                },
                "sex": "male",
                "parentName": "Sarah Chen",
                "profilePhoto": "https://randomuser.me/api/portraits/men/78.jpg"
            },
            "financialRecords": {
                "debt": "$63,809"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "psychology"
            },
            "isOnline": true,
            "studentName": "Christian Chen",
            "id": 123456556
        }, {
            "contact": {
                "email": "amanda.anderson@email.com",
                "phoneNumber": "+1 856 474 8223"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 5,
                    "day": 27
                },
                "sex": "female",
                "parentName": "Joseph Anderson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/78.jpg"
            },
            "financialRecords": {
                "debt": "$69,189"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Amanda Anderson",
            "id": 123456557
        }, {
            "contact": {
                "email": "samuel.perez@email.com",
                "phoneNumber": "+1 undefined 159 7464"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 15
                },
                "sex": "male",
                "parentName": "Mary Perez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/79.jpg"
            },
            "financialRecords": {
                "debt": "$31,697"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "childhood education"
            },
            "isOnline": true,
            "studentName": "Samuel Perez",
            "id": 123456558
        }, {
            "contact": {
                "email": "amanda.williams@email.com",
                "phoneNumber": "+1 609 233 6815"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 8,
                    "day": 25
                },
                "sex": "female",
                "parentName": "James Williams",
                "profilePhoto": "https://randomuser.me/api/portraits/women/79.jpg"
            },
            "financialRecords": {
                "debt": "$5,046"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "computer science"
            },
            "isOnline": true,
            "studentName": "Amanda Williams",
            "id": 123456559
        }, {
            "contact": {
                "email": "brandon.lavigne@email.com",
                "phoneNumber": "+1 609 604 4681"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 1,
                    "day": 22
                },
                "sex": "male",
                "parentName": "Taylor Lavigne",
                "profilePhoto": "https://randomuser.me/api/portraits/men/80.jpg"
            },
            "financialRecords": {
                "debt": "$4,177"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "economics"
            },
            "isOnline": true,
            "studentName": "Brandon Lavigne",
            "id": 123456560
        }, {
            "contact": {
                "email": "elizabeth.clark@email.com",
                "phoneNumber": "+1 908 523 4224"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 7,
                    "day": 8
                },
                "sex": "female",
                "parentName": "Kevin Clark",
                "profilePhoto": "https://randomuser.me/api/portraits/women/80.jpg"
            },
            "financialRecords": {
                "debt": "$28,484"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Elizabeth Clark",
            "id": 123456561
        }, {
            "contact": {
                "email": "samuel.peterson@email.com",
                "phoneNumber": "+1 908 11 6428"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 4,
                    "day": 25
                },
                "sex": "male",
                "parentName": "Jessica Peterson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/81.jpg"
            },
            "financialRecords": {
                "debt": "$83,921"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Samuel Peterson",
            "id": 123456562
        }, {
            "contact": {
                "email": "ashley.ali@email.com",
                "phoneNumber": "+1 732 281 7401"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 8,
                    "day": 16
                },
                "sex": "female",
                "parentName": "Christopher Ali",
                "profilePhoto": "https://randomuser.me/api/portraits/women/81.jpg"
            },
            "financialRecords": {
                "debt": "$14,123"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "Ashley Ali",
            "id": 123456563
        }, {
            "contact": {
                "email": "michael.adams@email.com",
                "phoneNumber": "+1 856 242 4042"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 5,
                    "day": 10
                },
                "sex": "male",
                "parentName": "Emily Adams",
                "profilePhoto": "https://randomuser.me/api/portraits/men/82.jpg"
            },
            "financialRecords": {
                "debt": "$85,970"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Michael Adams",
            "id": 123456564
        }, {
            "contact": {
                "email": "sophia.moore@email.com",
                "phoneNumber": "+1 609 893 2171"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 2,
                    "day": 9
                },
                "sex": "female",
                "parentName": "Samuel Moore",
                "profilePhoto": "https://randomuser.me/api/portraits/women/82.jpg"
            },
            "financialRecords": {
                "debt": "$97,350"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "Sophia Moore",
            "id": 123456565
        }, {
            "contact": {
                "email": "john.ali@email.com",
                "phoneNumber": "+1 undefined 544 2879"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 9,
                    "day": 27
                },
                "sex": "male",
                "parentName": "Karen Ali",
                "profilePhoto": "https://randomuser.me/api/portraits/men/83.jpg"
            },
            "financialRecords": {
                "debt": "$13,758"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "John Ali",
            "id": 123456566
        }, {
            "contact": {
                "email": "sarah.jones@email.com",
                "phoneNumber": "+1 201 30 4486"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 4,
                    "day": 6
                },
                "sex": "female",
                "parentName": "Mark Jones",
                "profilePhoto": "https://randomuser.me/api/portraits/women/83.jpg"
            },
            "financialRecords": {
                "debt": "$85,257"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "architectural engineering"
            },
            "isOnline": false,
            "studentName": "Sarah Jones",
            "id": 123456567
        }, {
            "contact": {
                "email": "samuel.roberts@email.com",
                "phoneNumber": "+1 609 949 9539"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 9,
                    "day": 23
                },
                "sex": "male",
                "parentName": "Megan Roberts",
                "profilePhoto": "https://randomuser.me/api/portraits/men/84.jpg"
            },
            "financialRecords": {
                "debt": "$6,690"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Samuel Roberts",
            "id": 123456568
        }, {
            "contact": {
                "email": "amy.harris@email.com",
                "phoneNumber": "+1 609 262 4336"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 10,
                    "day": 3
                },
                "sex": "female",
                "parentName": "Anthony Harris",
                "profilePhoto": "https://randomuser.me/api/portraits/women/84.jpg"
            },
            "financialRecords": {
                "debt": "$61,981"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "Amy Harris",
            "id": 123456569
        }, {
            "contact": {
                "email": "christian.wilson@email.com",
                "phoneNumber": "+1 201 272 9946"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 6,
                    "day": 14
                },
                "sex": "male",
                "parentName": "Mary Wilson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/85.jpg"
            },
            "financialRecords": {
                "debt": "$70,491"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "architectural engineering"
            },
            "isOnline": false,
            "studentName": "Christian Wilson",
            "id": 123456570
        }, {
            "contact": {
                "email": "emily.lee@email.com",
                "phoneNumber": "+1 201 482 2889"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 10,
                    "day": 28
                },
                "sex": "female",
                "parentName": "Kevin Lee",
                "profilePhoto": "https://randomuser.me/api/portraits/women/85.jpg"
            },
            "financialRecords": {
                "debt": "$25,865"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Emily Lee",
            "id": 123456571
        }, {
            "contact": {
                "email": "gabriel.mitchell@email.com",
                "phoneNumber": "+1 856 965 1489"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 11,
                    "day": 8
                },
                "sex": "male",
                "parentName": "Ashley Mitchell",
                "profilePhoto": "https://randomuser.me/api/portraits/men/86.jpg"
            },
            "financialRecords": {
                "debt": "$46,862"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Gabriel Mitchell",
            "id": 123456572
        }, {
            "contact": {
                "email": "emily.garnier@email.com",
                "phoneNumber": "+1 732 418 498"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 10,
                    "day": 9
                },
                "sex": "female",
                "parentName": "Jack Garnier",
                "profilePhoto": "https://randomuser.me/api/portraits/women/86.jpg"
            },
            "financialRecords": {
                "debt": "$83,337"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "Emily Garnier",
            "id": 123456573
        }, {
            "contact": {
                "email": "nathan.allen@email.com",
                "phoneNumber": "+1 undefined 271 2649"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 7,
                    "day": 12
                },
                "sex": "male",
                "parentName": "Kayla Allen",
                "profilePhoto": "https://randomuser.me/api/portraits/men/87.jpg"
            },
            "financialRecords": {
                "debt": "$47,283"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Nathan Allen",
            "id": 123456574
        }, {
            "contact": {
                "email": "linda.clark@email.com",
                "phoneNumber": "+1 908 420 5870"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 9,
                    "day": 15
                },
                "sex": "female",
                "parentName": "Matthew Clark",
                "profilePhoto": "https://randomuser.me/api/portraits/women/87.jpg"
            },
            "financialRecords": {
                "debt": "$57,144"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Linda Clark",
            "id": 123456575
        }, {
            "contact": {
                "email": "christian.fournier@email.com",
                "phoneNumber": "+1 609 868 7106"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 2,
                    "day": 2
                },
                "sex": "male",
                "parentName": "Linda Fournier",
                "profilePhoto": "https://randomuser.me/api/portraits/men/88.jpg"
            },
            "financialRecords": {
                "debt": "$4,921"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "communications"
            },
            "isOnline": true,
            "studentName": "Christian Fournier",
            "id": 123456576
        }, {
            "contact": {
                "email": "kayla.bonnet@email.com",
                "phoneNumber": "+1 908 585 2170"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 8,
                    "day": 9
                },
                "sex": "female",
                "parentName": "Anthony Bonnet",
                "profilePhoto": "https://randomuser.me/api/portraits/women/88.jpg"
            },
            "financialRecords": {
                "debt": "$57,893"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Kayla Bonnet",
            "id": 123456577
        }, {
            "contact": {
                "email": "alexander.rogers@email.com",
                "phoneNumber": "+1 732 716 5058"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 7
                },
                "sex": "male",
                "parentName": "Madison Rogers",
                "profilePhoto": "https://randomuser.me/api/portraits/men/89.jpg"
            },
            "financialRecords": {
                "debt": "$74,082"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "communications"
            },
            "isOnline": true,
            "studentName": "Alexander Rogers",
            "id": 123456578
        }, {
            "contact": {
                "email": "megan.young@email.com",
                "phoneNumber": "+1 732 156 3276"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 6,
                    "day": 3
                },
                "sex": "female",
                "parentName": "James Young",
                "profilePhoto": "https://randomuser.me/api/portraits/women/89.jpg"
            },
            "financialRecords": {
                "debt": "$21,075"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Megan Young",
            "id": 123456579
        }, {
            "contact": {
                "email": "gabriel.hill@email.com",
                "phoneNumber": "+1 732 897 2667"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 9,
                    "day": 27
                },
                "sex": "male",
                "parentName": "Karen Hill",
                "profilePhoto": "https://randomuser.me/api/portraits/men/90.jpg"
            },
            "financialRecords": {
                "debt": "$66,469"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Gabriel Hill",
            "id": 123456580
        }, {
            "contact": {
                "email": "isabella.adams@email.com",
                "phoneNumber": "+1 201 222 4783"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 2,
                    "day": 18
                },
                "sex": "female",
                "parentName": "Christopher Adams",
                "profilePhoto": "https://randomuser.me/api/portraits/women/90.jpg"
            },
            "financialRecords": {
                "debt": "$83,386"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Isabella Adams",
            "id": 123456581
        }, {
            "contact": {
                "email": "jason.young@email.com",
                "phoneNumber": "+1 undefined 427 8476"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 7,
                    "day": 11
                },
                "sex": "male",
                "parentName": "Alexis Young",
                "profilePhoto": "https://randomuser.me/api/portraits/men/91.jpg"
            },
            "financialRecords": {
                "debt": "$88,525"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": true,
            "studentName": "Jason Young",
            "id": 123456582
        }, {
            "contact": {
                "email": "mary.nguyen@email.com",
                "phoneNumber": "+1 856 43 4566"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 6,
                    "day": 9
                },
                "sex": "female",
                "parentName": "Tyler Nguyen",
                "profilePhoto": "https://randomuser.me/api/portraits/women/91.jpg"
            },
            "financialRecords": {
                "debt": "$18,709"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Mary Nguyen",
            "id": 123456583
        }, {
            "contact": {
                "email": "samuel.wilson@email.com",
                "phoneNumber": "+1 undefined 263 4806"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 9,
                    "day": 24
                },
                "sex": "male",
                "parentName": "Michelle Wilson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/92.jpg"
            },
            "financialRecords": {
                "debt": "$70,286"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "communications"
            },
            "isOnline": true,
            "studentName": "Samuel Wilson",
            "id": 123456584
        }, {
            "contact": {
                "email": "kimberly.scott@email.com",
                "phoneNumber": "+1 732 147 5608"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 9,
                    "day": 14
                },
                "sex": "female",
                "parentName": "Joshua Scott",
                "profilePhoto": "https://randomuser.me/api/portraits/women/92.jpg"
            },
            "financialRecords": {
                "debt": "$88,226"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Kimberly Scott",
            "id": 123456585
        }, {
            "contact": {
                "email": "jason.ali@email.com",
                "phoneNumber": "+1 732 654 1347"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 4,
                    "day": 11
                },
                "sex": "male",
                "parentName": "Lillian Ali",
                "profilePhoto": "https://randomuser.me/api/portraits/men/93.jpg"
            },
            "financialRecords": {
                "debt": "$40,963"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "Jason Ali",
            "id": 123456586
        }, {
            "contact": {
                "email": "hannah.white@email.com",
                "phoneNumber": "+1 856 752 9501"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 3,
                    "day": 3
                },
                "sex": "female",
                "parentName": "Anthony White",
                "profilePhoto": "https://randomuser.me/api/portraits/women/93.jpg"
            },
            "financialRecords": {
                "debt": "$10,827"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Hannah White",
            "id": 123456587
        }, {
            "contact": {
                "email": "robert.flores@email.com",
                "phoneNumber": "+1 856 88 9333"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 11,
                    "day": 31
                },
                "sex": "male",
                "parentName": "Melissa Flores",
                "profilePhoto": "https://randomuser.me/api/portraits/men/94.jpg"
            },
            "financialRecords": {
                "debt": "$24,198"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "Robert Flores",
            "id": 123456588
        }, {
            "contact": {
                "email": "emma.dupont@email.com",
                "phoneNumber": "+1 856 977 6629"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 10,
                    "day": 16
                },
                "sex": "female",
                "parentName": "Jack Dupont",
                "profilePhoto": "https://randomuser.me/api/portraits/women/94.jpg"
            },
            "financialRecords": {
                "debt": "$87,810"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Emma Dupont",
            "id": 123456589
        }, {
            "contact": {
                "email": "david.dubois@email.com",
                "phoneNumber": "+1 609 418 2235"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 8,
                    "day": 26
                },
                "sex": "male",
                "parentName": "Angela Dubois",
                "profilePhoto": "https://randomuser.me/api/portraits/men/95.jpg"
            },
            "financialRecords": {
                "debt": "$99,018"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "David Dubois",
            "id": 123456590
        }, {
            "contact": {
                "email": "megan.richardson@email.com",
                "phoneNumber": "+1 856 400 7583"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 8,
                    "day": 14
                },
                "sex": "female",
                "parentName": "Gabriel Richardson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/95.jpg"
            },
            "financialRecords": {
                "debt": "$27,784"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "politcal science"
            },
            "isOnline": true,
            "studentName": "Megan Richardson",
            "id": 123456591
        }, {
            "contact": {
                "email": "ryan.young@email.com",
                "phoneNumber": "+1 732 787 8845"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 10,
                    "day": 23
                },
                "sex": "male",
                "parentName": "Patricia Young",
                "profilePhoto": "https://randomuser.me/api/portraits/men/96.jpg"
            },
            "financialRecords": {
                "debt": "$54,822"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Ryan Young",
            "id": 123456592
        }, {
            "contact": {
                "email": "isabella.bonnet@email.com",
                "phoneNumber": "+1 609 504 7316"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 3,
                    "day": 12
                },
                "sex": "female",
                "parentName": "Brian Bonnet",
                "profilePhoto": "https://randomuser.me/api/portraits/women/96.jpg"
            },
            "financialRecords": {
                "debt": "$8,789"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Isabella Bonnet",
            "id": 123456593
        }, {
            "contact": {
                "email": "john.garnier@email.com",
                "phoneNumber": "+1 856 305 9577"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 8,
                    "day": 28
                },
                "sex": "male",
                "parentName": "Jennifer Garnier",
                "profilePhoto": "https://randomuser.me/api/portraits/men/97.jpg"
            },
            "financialRecords": {
                "debt": "$27,862"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "John Garnier",
            "id": 123456594
        }, {
            "contact": {
                "email": "patricia.monet@email.com",
                "phoneNumber": "+1 undefined 56 5838"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 4,
                    "day": 6
                },
                "sex": "female",
                "parentName": "Daniel Monet",
                "profilePhoto": "https://randomuser.me/api/portraits/women/97.jpg"
            },
            "financialRecords": {
                "debt": "$41,876"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "communications"
            },
            "isOnline": true,
            "studentName": "Patricia Monet",
            "id": 123456595
        }, {
            "contact": {
                "email": "anthony.lee@email.com",
                "phoneNumber": "+1 609 930 7925"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 1,
                    "day": 29
                },
                "sex": "male",
                "parentName": "Lisa Lee",
                "profilePhoto": "https://randomuser.me/api/portraits/men/98.jpg"
            },
            "financialRecords": {
                "debt": "$92,118"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Anthony Lee",
            "id": 123456596
        }, {
            "contact": {
                "email": "taylor.anderson@email.com",
                "phoneNumber": "+1 609 492 2393"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 11,
                    "day": 3
                },
                "sex": "female",
                "parentName": "David Anderson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/98.jpg"
            },
            "financialRecords": {
                "debt": "$40,635"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Taylor Anderson",
            "id": 123456597
        }, {
            "contact": {
                "email": "justin.scott@email.com",
                "phoneNumber": "+1 201 896 4677"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 1,
                    "day": 5
                },
                "sex": "male",
                "parentName": "Madison Scott",
                "profilePhoto": "https://randomuser.me/api/portraits/men/99.jpg"
            },
            "financialRecords": {
                "debt": "$41,290"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Justin Scott",
            "id": 123456598
        }, {
            "contact": {
                "email": "emma.martinez@email.com",
                "phoneNumber": "+1 908 996 2250"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 10,
                    "day": 6
                },
                "sex": "female",
                "parentName": "David Martinez",
                "profilePhoto": "https://randomuser.me/api/portraits/women/99.jpg"
            },
            "financialRecords": {
                "debt": "$70,747"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "childhood education"
            },
            "isOnline": true,
            "studentName": "Emma Martinez",
            "id": 123456599
        }, {
            "contact": {
                "email": "brandon.adams@email.com",
                "phoneNumber": "+1 609 804 3229"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 8,
                    "day": 4
                },
                "sex": "male",
                "parentName": "Emma Adams",
                "profilePhoto": "https://randomuser.me/api/portraits/men/0.jpg"
            },
            "financialRecords": {
                "debt": "$14,915"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Brandon Adams",
            "id": 123456600
        }, {
            "contact": {
                "email": "olivia.roberts@email.com",
                "phoneNumber": "+1 201 38 4759"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 12,
                    "day": 6
                },
                "sex": "female",
                "parentName": "Jacob Roberts",
                "profilePhoto": "https://randomuser.me/api/portraits/women/0.jpg"
            },
            "financialRecords": {
                "debt": "$49,667"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "electrical engineering"
            },
            "isOnline": false,
            "studentName": "Olivia Roberts",
            "id": 123456601
        }, {
            "contact": {
                "email": "kyle.robinson@email.com",
                "phoneNumber": "+1 609 638 2303"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 10,
                    "day": 2
                },
                "sex": "male",
                "parentName": "Sophia Robinson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/1.jpg"
            },
            "financialRecords": {
                "debt": "$49,207"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "childhood education"
            },
            "isOnline": true,
            "studentName": "Kyle Robinson",
            "id": 123456602
        }, {
            "contact": {
                "email": "samantha.nguyen@email.com",
                "phoneNumber": "+1 732 324 6883"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 11,
                    "day": 14
                },
                "sex": "female",
                "parentName": "Nathan Nguyen",
                "profilePhoto": "https://randomuser.me/api/portraits/women/1.jpg"
            },
            "financialRecords": {
                "debt": "$92,548"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": true,
            "studentName": "Samantha Nguyen",
            "id": 123456603
        }, {
            "contact": {
                "email": "samuel.thompson@email.com",
                "phoneNumber": "+1 908 784 6152"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 7,
                    "day": 16
                },
                "sex": "male",
                "parentName": "Lillian Thompson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/2.jpg"
            },
            "financialRecords": {
                "debt": "$92,635"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "business"
            },
            "isOnline": true,
            "studentName": "Samuel Thompson",
            "id": 123456604
        }, {
            "contact": {
                "email": "emma.smith@email.com",
                "phoneNumber": "+1 201 216 7955"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 4,
                    "day": 12
                },
                "sex": "female",
                "parentName": "Christian Smith",
                "profilePhoto": "https://randomuser.me/api/portraits/women/2.jpg"
            },
            "financialRecords": {
                "debt": "$28,977"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "Emma Smith",
            "id": 123456605
        }, {
            "contact": {
                "email": "jonathan.li@email.com",
                "phoneNumber": "+1 856 42 2620"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 5,
                    "day": 29
                },
                "sex": "male",
                "parentName": "Ashley Li",
                "profilePhoto": "https://randomuser.me/api/portraits/men/3.jpg"
            },
            "financialRecords": {
                "debt": "$35,217"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "Jonathan Li",
            "id": 123456606
        }, {
            "contact": {
                "email": "elizabeth.scott@email.com",
                "phoneNumber": "+1 201 127 1933"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 9,
                    "day": 11
                },
                "sex": "female",
                "parentName": "Zachary Scott",
                "profilePhoto": "https://randomuser.me/api/portraits/women/3.jpg"
            },
            "financialRecords": {
                "debt": "$50,007"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "business"
            },
            "isOnline": true,
            "studentName": "Elizabeth Scott",
            "id": 123456607
        }, {
            "contact": {
                "email": "jacob.roberts@email.com",
                "phoneNumber": "+1 856 284 8983"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 2,
                    "day": 7
                },
                "sex": "male",
                "parentName": "Jennifer Roberts",
                "profilePhoto": "https://randomuser.me/api/portraits/men/4.jpg"
            },
            "financialRecords": {
                "debt": "$81,523"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Jacob Roberts",
            "id": 123456608
        }, {
            "contact": {
                "email": "hannah.cooper@email.com",
                "phoneNumber": "+1 609 967 8342"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 8,
                    "day": 17
                },
                "sex": "female",
                "parentName": "Gabriel Cooper",
                "profilePhoto": "https://randomuser.me/api/portraits/women/4.jpg"
            },
            "financialRecords": {
                "debt": "$54,157"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "architectural engineering"
            },
            "isOnline": false,
            "studentName": "Hannah Cooper",
            "id": 123456609
        }, {
            "contact": {
                "email": "andrew.williams@email.com",
                "phoneNumber": "+1 732 951 2719"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 4,
                    "day": 28
                },
                "sex": "male",
                "parentName": "Michelle Williams",
                "profilePhoto": "https://randomuser.me/api/portraits/men/5.jpg"
            },
            "financialRecords": {
                "debt": "$44,025"
            },
            "academicRecords": {
                "class": "VII A"
            },
            "isOnline": false,
            "studentName": "Andrew Williams",
            "id": 123456610
        }, {
            "contact": {
                "email": "nicole.bonnet@email.com",
                "phoneNumber": "+1 856 686 3695"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 6,
                    "day": 12
                },
                "sex": "female",
                "parentName": "Jacob Bonnet",
                "profilePhoto": "https://randomuser.me/api/portraits/women/5.jpg"
            },
            "financialRecords": {
                "debt": "$17,105"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Nicole Bonnet",
            "id": 123456611
        }, {
            "contact": {
                "email": "justin.clark@email.com",
                "phoneNumber": "+1 732 851 2554"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 15
                },
                "sex": "male",
                "parentName": "Kayla Clark",
                "profilePhoto": "https://randomuser.me/api/portraits/men/6.jpg"
            },
            "financialRecords": {
                "debt": "$58,282"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Justin Clark",
            "id": 123456612
        }, {
            "contact": {
                "email": "samantha.jones@email.com",
                "phoneNumber": "+1 856 353 5277"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 10,
                    "day": 4
                },
                "sex": "female",
                "parentName": "Jacob Jones",
                "profilePhoto": "https://randomuser.me/api/portraits/women/6.jpg"
            },
            "financialRecords": {
                "debt": "$1,747"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "architectural engineering"
            },
            "isOnline": true,
            "studentName": "Samantha Jones",
            "id": 123456613
        }, {
            "contact": {
                "email": "ethan.liang@email.com",
                "phoneNumber": "+1 732 88 713"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 7,
                    "day": 23
                },
                "sex": "male",
                "parentName": "Emma Liang",
                "profilePhoto": "https://randomuser.me/api/portraits/men/7.jpg"
            },
            "financialRecords": {
                "debt": "$75,402"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Ethan Liang",
            "id": 123456614
        }, {
            "contact": {
                "email": "stephanie.allen@email.com",
                "phoneNumber": "+1 908 811 5116"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 5,
                    "day": 3
                },
                "sex": "female",
                "parentName": "Samuel Allen",
                "profilePhoto": "https://randomuser.me/api/portraits/women/7.jpg"
            },
            "financialRecords": {
                "debt": "$78,001"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "economics"
            },
            "isOnline": true,
            "studentName": "Stephanie Allen",
            "id": 123456615
        }, {
            "contact": {
                "email": "thomas.mitchell@email.com",
                "phoneNumber": "+1 undefined 79 2102"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 11
                },
                "sex": "male",
                "parentName": "Emma Mitchell",
                "profilePhoto": "https://randomuser.me/api/portraits/men/8.jpg"
            },
            "financialRecords": {
                "debt": "$3,459"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Thomas Mitchell",
            "id": 123456616
        }, {
            "contact": {
                "email": "hannah.li@email.com",
                "phoneNumber": "+1 609 869 1316"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 1,
                    "day": 6
                },
                "sex": "female",
                "parentName": "Zachary Li",
                "profilePhoto": "https://randomuser.me/api/portraits/women/8.jpg"
            },
            "financialRecords": {
                "debt": "$45,222"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "electrical engineering"
            },
            "isOnline": true,
            "studentName": "Hannah Li",
            "id": 123456617
        }, {
            "contact": {
                "email": "anthony.davis@email.com",
                "phoneNumber": "+1 732 710 7634"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 8,
                    "day": 4
                },
                "sex": "male",
                "parentName": "Linda Davis",
                "profilePhoto": "https://randomuser.me/api/portraits/men/9.jpg"
            },
            "financialRecords": {
                "debt": "$98,256"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "business"
            },
            "isOnline": true,
            "studentName": "Anthony Davis",
            "id": 123456618
        }, {
            "contact": {
                "email": "lisa.toussaint@email.com",
                "phoneNumber": "+1 201 733 7761"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 11,
                    "day": 28
                },
                "sex": "female",
                "parentName": "Nicholas Toussaint",
                "profilePhoto": "https://randomuser.me/api/portraits/women/9.jpg"
            },
            "financialRecords": {
                "debt": "$87,480"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "Lisa Toussaint",
            "id": 123456619
        }, {
            "contact": {
                "email": "kyle.wilson@email.com",
                "phoneNumber": "+1 856 825 9618"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 18
                },
                "sex": "male",
                "parentName": "Lisa Wilson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/10.jpg"
            },
            "financialRecords": {
                "debt": "$83,725"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "economics"
            },
            "isOnline": true,
            "studentName": "Kyle Wilson",
            "id": 123456620
        }, {
            "contact": {
                "email": "linda.carter@email.com",
                "phoneNumber": "+1 908 921 8329"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 5,
                    "day": 1
                },
                "sex": "female",
                "parentName": "Jonathan Carter",
                "profilePhoto": "https://randomuser.me/api/portraits/women/10.jpg"
            },
            "financialRecords": {
                "debt": "$5,428"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "politcal science"
            },
            "isOnline": true,
            "studentName": "Linda Carter",
            "id": 123456621
        }, {
            "contact": {
                "email": "austin.green@email.com",
                "phoneNumber": "+1 856 891 512"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 2,
                    "day": 24
                },
                "sex": "male",
                "parentName": "Mary Green",
                "profilePhoto": "https://randomuser.me/api/portraits/men/11.jpg"
            },
            "financialRecords": {
                "debt": "$64,162"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Austin Green",
            "id": 123456622
        }, {
            "contact": {
                "email": "brittany.anderson@email.com",
                "phoneNumber": "+1 732 883 1515"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 5,
                    "day": 15
                },
                "sex": "female",
                "parentName": "Jason Anderson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/11.jpg"
            },
            "financialRecords": {
                "debt": "$5,475"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "Brittany Anderson",
            "id": 123456623
        }, {
            "contact": {
                "email": "christopher.richardson@email.com",
                "phoneNumber": "+1 908 240 5741"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 9,
                    "day": 29
                },
                "sex": "male",
                "parentName": "Olivia Richardson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/12.jpg"
            },
            "financialRecords": {
                "debt": "$83,333"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Christopher Richardson",
            "id": 123456624
        }, {
            "contact": {
                "email": "kimberly.liang@email.com",
                "phoneNumber": "+1 609 113 3895"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 6,
                    "day": 24
                },
                "sex": "female",
                "parentName": "William Liang",
                "profilePhoto": "https://randomuser.me/api/portraits/women/12.jpg"
            },
            "financialRecords": {
                "debt": "$55,811"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "Kimberly Liang",
            "id": 123456625
        }, {
            "contact": {
                "email": "thomas.hill@email.com",
                "phoneNumber": "+1 609 307 2779"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 10,
                    "day": 25
                },
                "sex": "male",
                "parentName": "Hannah Hill",
                "profilePhoto": "https://randomuser.me/api/portraits/men/13.jpg"
            },
            "financialRecords": {
                "debt": "$45,198"
            },
            "academicRecords": {
                "class": "VII C"
            },
            "isOnline": false,
            "studentName": "Thomas Hill",
            "id": 123456626
        }, {
            "contact": {
                "email": "karen.adams@email.com",
                "phoneNumber": "+1 732 857 55"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 3,
                    "day": 6
                },
                "sex": "female",
                "parentName": "Gabriel Adams",
                "profilePhoto": "https://randomuser.me/api/portraits/women/13.jpg"
            },
            "financialRecords": {
                "debt": "$331"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Karen Adams",
            "id": 123456627
        }, {
            "contact": {
                "email": "william.moore@email.com",
                "phoneNumber": "+1 undefined 190 3470"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 3,
                    "day": 18
                },
                "sex": "male",
                "parentName": "Jennifer Moore",
                "profilePhoto": "https://randomuser.me/api/portraits/men/14.jpg"
            },
            "financialRecords": {
                "debt": "$20,760"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "William Moore",
            "id": 123456628
        }, {
            "contact": {
                "email": "nicole.rogers@email.com",
                "phoneNumber": "+1 732 611 7433"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 3,
                    "day": 1
                },
                "sex": "female",
                "parentName": "Matthew Rogers",
                "profilePhoto": "https://randomuser.me/api/portraits/women/14.jpg"
            },
            "financialRecords": {
                "debt": "$96,954"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Nicole Rogers",
            "id": 123456629
        }, {
            "contact": {
                "email": "jonathan.smith@email.com",
                "phoneNumber": "+1 201 683 4541"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 2,
                    "day": 5
                },
                "sex": "male",
                "parentName": "Amy Smith",
                "profilePhoto": "https://randomuser.me/api/portraits/men/15.jpg"
            },
            "financialRecords": {
                "debt": "$7,373"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "Jonathan Smith",
            "id": 123456630
        }, {
            "contact": {
                "email": "amanda.wilson@email.com",
                "phoneNumber": "+1 201 995 819"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 5,
                    "day": 3
                },
                "sex": "female",
                "parentName": "Kevin Wilson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/15.jpg"
            },
            "financialRecords": {
                "debt": "$75,375"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "economics"
            },
            "isOnline": true,
            "studentName": "Amanda Wilson",
            "id": 123456631
        }, {
            "contact": {
                "email": "tyler.green@email.com",
                "phoneNumber": "+1 856 51 8748"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 4,
                    "day": 6
                },
                "sex": "male",
                "parentName": "Michelle Green",
                "profilePhoto": "https://randomuser.me/api/portraits/men/16.jpg"
            },
            "financialRecords": {
                "debt": "$41,795"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Tyler Green",
            "id": 123456632
        }, {
            "contact": {
                "email": "kayla.gonzalez@email.com",
                "phoneNumber": "+1 732 4 1007"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 10,
                    "day": 13
                },
                "sex": "female",
                "parentName": "Mark Gonzalez",
                "profilePhoto": "https://randomuser.me/api/portraits/women/16.jpg"
            },
            "financialRecords": {
                "debt": "$19,680"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Kayla Gonzalez",
            "id": 123456633
        }, {
            "contact": {
                "email": "jack.mitchell@email.com",
                "phoneNumber": "+1 732 305 8975"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 8,
                    "day": 13
                },
                "sex": "male",
                "parentName": "Angela Mitchell",
                "profilePhoto": "https://randomuser.me/api/portraits/men/17.jpg"
            },
            "financialRecords": {
                "debt": "$77,290"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Jack Mitchell",
            "id": 123456634
        }, {
            "contact": {
                "email": "lillian.müller@email.com",
                "phoneNumber": "+1 908 58 6480"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 9,
                    "day": 6
                },
                "sex": "female",
                "parentName": "Brian Müller",
                "profilePhoto": "https://randomuser.me/api/portraits/women/17.jpg"
            },
            "financialRecords": {
                "debt": "$26,711"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "electrical engineering"
            },
            "isOnline": false,
            "studentName": "Lillian Müller",
            "id": 123456635
        }, {
            "contact": {
                "email": "mark.gonzalez@email.com",
                "phoneNumber": "+1 609 11 3814"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 3,
                    "day": 25
                },
                "sex": "male",
                "parentName": "Amanda Gonzalez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/18.jpg"
            },
            "financialRecords": {
                "debt": "$73,990"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Mark Gonzalez",
            "id": 123456636
        }, {
            "contact": {
                "email": "stephanie.davis@email.com",
                "phoneNumber": "+1 201 921 6674"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 1,
                    "day": 19
                },
                "sex": "female",
                "parentName": "Anthony Davis",
                "profilePhoto": "https://randomuser.me/api/portraits/women/18.jpg"
            },
            "financialRecords": {
                "debt": "$8,291"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Stephanie Davis",
            "id": 123456637
        }, {
            "contact": {
                "email": "brandon.zhang@email.com",
                "phoneNumber": "+1 201 478 3442"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 8,
                    "day": 28
                },
                "sex": "male",
                "parentName": "Stephanie Zhang",
                "profilePhoto": "https://randomuser.me/api/portraits/men/19.jpg"
            },
            "financialRecords": {
                "debt": "$41,794"
            },
            "academicRecords": {
                "class": "VII B"
            },
            "isOnline": false,
            "studentName": "Brandon Zhang",
            "id": 123456638
        }, {
            "contact": {
                "email": "nicole.wang@email.com",
                "phoneNumber": "+1 908 815 7960"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 8,
                    "day": 17
                },
                "sex": "female",
                "parentName": "Ethan Wang",
                "profilePhoto": "https://randomuser.me/api/portraits/women/19.jpg"
            },
            "financialRecords": {
                "debt": "$22,283"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Nicole Wang",
            "id": 123456639
        }, {
            "contact": {
                "email": "jack.nelson@email.com",
                "phoneNumber": "+1 undefined 721 3971"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 6,
                    "day": 2
                },
                "sex": "male",
                "parentName": "Kimberly Nelson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/20.jpg"
            },
            "financialRecords": {
                "debt": "$65,910"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "computer science"
            },
            "isOnline": true,
            "studentName": "Jack Nelson",
            "id": 123456640
        }, {
            "contact": {
                "email": "kayla.nguyen@email.com",
                "phoneNumber": "+1 609 176 8067"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 9,
                    "day": 23
                },
                "sex": "female",
                "parentName": "Anthony Nguyen",
                "profilePhoto": "https://randomuser.me/api/portraits/women/20.jpg"
            },
            "financialRecords": {
                "debt": "$64,021"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "Kayla Nguyen",
            "id": 123456641
        }, {
            "contact": {
                "email": "andrew.green@email.com",
                "phoneNumber": "+1 201 282 8057"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 9,
                    "day": 27
                },
                "sex": "male",
                "parentName": "Susan Green",
                "profilePhoto": "https://randomuser.me/api/portraits/men/21.jpg"
            },
            "financialRecords": {
                "debt": "$64,104"
            },
            "academicRecords": {
                "class": "VII B"
            },
            "isOnline": false,
            "studentName": "Andrew Green",
            "id": 123456642
        }, {
            "contact": {
                "email": "megan.bonnet@email.com",
                "phoneNumber": "+1 856 695 1795"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 10,
                    "day": 25
                },
                "sex": "female",
                "parentName": "Mark Bonnet",
                "profilePhoto": "https://randomuser.me/api/portraits/women/21.jpg"
            },
            "financialRecords": {
                "debt": "$36,984"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "Megan Bonnet",
            "id": 123456643
        }, {
            "contact": {
                "email": "michael.roberts@email.com",
                "phoneNumber": "+1 856 845 5727"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 4,
                    "day": 31
                },
                "sex": "male",
                "parentName": "Kimberly Roberts",
                "profilePhoto": "https://randomuser.me/api/portraits/men/22.jpg"
            },
            "financialRecords": {
                "debt": "$26,961"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "Michael Roberts",
            "id": 123456644
        }, {
            "contact": {
                "email": "amanda.müller@email.com",
                "phoneNumber": "+1 609 729 5400"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 10,
                    "day": 9
                },
                "sex": "female",
                "parentName": "Alexander Müller",
                "profilePhoto": "https://randomuser.me/api/portraits/women/22.jpg"
            },
            "financialRecords": {
                "debt": "$38,139"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Amanda Müller",
            "id": 123456645
        }, {
            "contact": {
                "email": "daniel.williams@email.com",
                "phoneNumber": "+1 201 401 6575"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 9,
                    "day": 8
                },
                "sex": "male",
                "parentName": "Brittany Williams",
                "profilePhoto": "https://randomuser.me/api/portraits/men/23.jpg"
            },
            "financialRecords": {
                "debt": "$63,505"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "computer science"
            },
            "isOnline": true,
            "studentName": "Daniel Williams",
            "id": 123456646
        }, {
            "contact": {
                "email": "amy.li@email.com",
                "phoneNumber": "+1 856 692 5378"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 6,
                    "day": 19
                },
                "sex": "female",
                "parentName": "Austin Li",
                "profilePhoto": "https://randomuser.me/api/portraits/women/23.jpg"
            },
            "financialRecords": {
                "debt": "$21,450"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "Amy Li",
            "id": 123456647
        }, {
            "contact": {
                "email": "daniel.wang@email.com",
                "phoneNumber": "+1 201 970 9792"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 8,
                    "day": 1
                },
                "sex": "male",
                "parentName": "Megan Wang",
                "profilePhoto": "https://randomuser.me/api/portraits/men/24.jpg"
            },
            "financialRecords": {
                "debt": "$39,196"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "Daniel Wang",
            "id": 123456648
        }, {
            "contact": {
                "email": "megan.wright@email.com",
                "phoneNumber": "+1 732 707 6194"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 3,
                    "day": 19
                },
                "sex": "female",
                "parentName": "Jonathan Wright",
                "profilePhoto": "https://randomuser.me/api/portraits/women/24.jpg"
            },
            "financialRecords": {
                "debt": "$69,328"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Megan Wright",
            "id": 123456649
        }, {
            "contact": {
                "email": "nathan.walker@email.com",
                "phoneNumber": "+1 856 100 8709"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 3,
                    "day": 8
                },
                "sex": "male",
                "parentName": "Kayla Walker",
                "profilePhoto": "https://randomuser.me/api/portraits/men/25.jpg"
            },
            "financialRecords": {
                "debt": "$54,919"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Nathan Walker",
            "id": 123456650
        }, {
            "contact": {
                "email": "taylor.nelson@email.com",
                "phoneNumber": "+1 856 468 5779"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 9,
                    "day": 31
                },
                "sex": "female",
                "parentName": "James Nelson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/25.jpg"
            },
            "financialRecords": {
                "debt": "$73,177"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Taylor Nelson",
            "id": 123456651
        }, {
            "contact": {
                "email": "christopher.zimmerman@email.com",
                "phoneNumber": "+1 609 867 4714"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 7,
                    "day": 20
                },
                "sex": "male",
                "parentName": "Taylor Zimmerman",
                "profilePhoto": "https://randomuser.me/api/portraits/men/26.jpg"
            },
            "financialRecords": {
                "debt": "$7,029"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "Christopher Zimmerman",
            "id": 123456652
        }, {
            "contact": {
                "email": "isabella.hall@email.com",
                "phoneNumber": "+1 609 110 8712"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 6,
                    "day": 2
                },
                "sex": "female",
                "parentName": "Ethan Hall",
                "profilePhoto": "https://randomuser.me/api/portraits/women/26.jpg"
            },
            "financialRecords": {
                "debt": "$20,998"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": true,
            "studentName": "Isabella Hall",
            "id": 123456653
        }, {
            "contact": {
                "email": "thomas.rodriguez@email.com",
                "phoneNumber": "+1 856 247 6027"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 5,
                    "day": 23
                },
                "sex": "male",
                "parentName": "Jennifer Rodriguez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/27.jpg"
            },
            "financialRecords": {
                "debt": "$86,190"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Thomas Rodriguez",
            "id": 123456654
        }, {
            "contact": {
                "email": "emily.jones@email.com",
                "phoneNumber": "+1 201 767 6656"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 3,
                    "day": 18
                },
                "sex": "female",
                "parentName": "Andrew Jones",
                "profilePhoto": "https://randomuser.me/api/portraits/women/27.jpg"
            },
            "financialRecords": {
                "debt": "$75,530"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Emily Jones",
            "id": 123456655
        }, {
            "contact": {
                "email": "james.flores@email.com",
                "phoneNumber": "+1 609 38 1543"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 1,
                    "day": 22
                },
                "sex": "male",
                "parentName": "Angela Flores",
                "profilePhoto": "https://randomuser.me/api/portraits/men/28.jpg"
            },
            "financialRecords": {
                "debt": "$14,796"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "James Flores",
            "id": 123456656
        }, {
            "contact": {
                "email": "madison.thompson@email.com",
                "phoneNumber": "+1 732 958 708"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 4,
                    "day": 1
                },
                "sex": "female",
                "parentName": "John Thompson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/28.jpg"
            },
            "financialRecords": {
                "debt": "$63,092"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Madison Thompson",
            "id": 123456657
        }, {
            "contact": {
                "email": "andrew.edwards@email.com",
                "phoneNumber": "+1 908 458 4982"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 3,
                    "day": 29
                },
                "sex": "male",
                "parentName": "Hannah Edwards",
                "profilePhoto": "https://randomuser.me/api/portraits/men/29.jpg"
            },
            "financialRecords": {
                "debt": "$86,452"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": true,
            "studentName": "Andrew Edwards",
            "id": 123456658
        }, {
            "contact": {
                "email": "mary.edwards@email.com",
                "phoneNumber": "+1 732 101 8993"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 3,
                    "day": 23
                },
                "sex": "female",
                "parentName": "William Edwards",
                "profilePhoto": "https://randomuser.me/api/portraits/women/29.jpg"
            },
            "financialRecords": {
                "debt": "$35,873"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Mary Edwards",
            "id": 123456659
        }, {
            "contact": {
                "email": "mark.hill@email.com",
                "phoneNumber": "+1 732 672 8876"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 4,
                    "day": 26
                },
                "sex": "male",
                "parentName": "Kimberly Hill",
                "profilePhoto": "https://randomuser.me/api/portraits/men/30.jpg"
            },
            "financialRecords": {
                "debt": "$20,088"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Mark Hill",
            "id": 123456660
        }, {
            "contact": {
                "email": "melissa.miller@email.com",
                "phoneNumber": "+1 609 253 3450"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 9,
                    "day": 29
                },
                "sex": "female",
                "parentName": "Joshua Miller",
                "profilePhoto": "https://randomuser.me/api/portraits/women/30.jpg"
            },
            "financialRecords": {
                "debt": "$28,584"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Melissa Miller",
            "id": 123456661
        }, {
            "contact": {
                "email": "daniel.hill@email.com",
                "phoneNumber": "+1 732 45 4655"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 29
                },
                "sex": "male",
                "parentName": "Brittany Hill",
                "profilePhoto": "https://randomuser.me/api/portraits/men/31.jpg"
            },
            "financialRecords": {
                "debt": "$77,955"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Daniel Hill",
            "id": 123456662
        }, {
            "contact": {
                "email": "lillian.toussaint@email.com",
                "phoneNumber": "+1 908 294 7034"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 2,
                    "day": 10
                },
                "sex": "female",
                "parentName": "Thomas Toussaint",
                "profilePhoto": "https://randomuser.me/api/portraits/women/31.jpg"
            },
            "financialRecords": {
                "debt": "$80,193"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Lillian Toussaint",
            "id": 123456663
        }, {
            "contact": {
                "email": "jason.ali@email.com",
                "phoneNumber": "+1 856 228 7849"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 6,
                    "day": 29
                },
                "sex": "male",
                "parentName": "Linda Ali",
                "profilePhoto": "https://randomuser.me/api/portraits/men/32.jpg"
            },
            "financialRecords": {
                "debt": "$98,192"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Jason Ali",
            "id": 123456664
        }, {
            "contact": {
                "email": "heather.monet@email.com",
                "phoneNumber": "+1 201 727 5650"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 7,
                    "day": 1
                },
                "sex": "female",
                "parentName": "David Monet",
                "profilePhoto": "https://randomuser.me/api/portraits/women/32.jpg"
            },
            "financialRecords": {
                "debt": "$33,977"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Heather Monet",
            "id": 123456665
        }, {
            "contact": {
                "email": "anthony.rodriguez@email.com",
                "phoneNumber": "+1 609 383 4622"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 10,
                    "day": 15
                },
                "sex": "male",
                "parentName": "Olivia Rodriguez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/33.jpg"
            },
            "financialRecords": {
                "debt": "$46,709"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Anthony Rodriguez",
            "id": 123456666
        }, {
            "contact": {
                "email": "megan.monet@email.com",
                "phoneNumber": "+1 undefined 50 5962"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 4,
                    "day": 26
                },
                "sex": "female",
                "parentName": "Joseph Monet",
                "profilePhoto": "https://randomuser.me/api/portraits/women/33.jpg"
            },
            "financialRecords": {
                "debt": "$49,357"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "economics"
            },
            "isOnline": true,
            "studentName": "Megan Monet",
            "id": 123456667
        }, {
            "contact": {
                "email": "kevin.harris@email.com",
                "phoneNumber": "+1 609 595 8176"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 9,
                    "day": 19
                },
                "sex": "male",
                "parentName": "Heather Harris",
                "profilePhoto": "https://randomuser.me/api/portraits/men/34.jpg"
            },
            "financialRecords": {
                "debt": "$13,892"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Kevin Harris",
            "id": 123456668
        }, {
            "contact": {
                "email": "abigail.schulz@email.com",
                "phoneNumber": "+1 856 271 8230"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 4,
                    "day": 25
                },
                "sex": "female",
                "parentName": "David Schulz",
                "profilePhoto": "https://randomuser.me/api/portraits/women/34.jpg"
            },
            "financialRecords": {
                "debt": "$11,769"
            },
            "academicRecords": {
                "class": "VII B"
            },
            "isOnline": true,
            "studentName": "Abigail Schulz",
            "id": 123456669
        }, {
            "contact": {
                "email": "jacob.adams@email.com",
                "phoneNumber": "+1 609 190 1660"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 6,
                    "day": 31
                },
                "sex": "male",
                "parentName": "Angela Adams",
                "profilePhoto": "https://randomuser.me/api/portraits/men/35.jpg"
            },
            "financialRecords": {
                "debt": "$18,514"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "electrical engineering"
            },
            "isOnline": false,
            "studentName": "Jacob Adams",
            "id": 123456670
        }, {
            "contact": {
                "email": "susan.scott@email.com",
                "phoneNumber": "+1 undefined 477 7945"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 2,
                    "day": 21
                },
                "sex": "female",
                "parentName": "James Scott",
                "profilePhoto": "https://randomuser.me/api/portraits/women/35.jpg"
            },
            "financialRecords": {
                "debt": "$37,806"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "communications"
            },
            "isOnline": false,
            "studentName": "Susan Scott",
            "id": 123456671
        }, {
            "contact": {
                "email": "alexander.roberts@email.com",
                "phoneNumber": "+1 856 249 5391"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 2,
                    "day": 9
                },
                "sex": "male",
                "parentName": "Emma Roberts",
                "profilePhoto": "https://randomuser.me/api/portraits/men/36.jpg"
            },
            "financialRecords": {
                "debt": "$43,253"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Alexander Roberts",
            "id": 123456672
        }, {
            "contact": {
                "email": "emily.roberts@email.com",
                "phoneNumber": "+1 856 292 252"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 10,
                    "day": 15
                },
                "sex": "female",
                "parentName": "Gabriel Roberts",
                "profilePhoto": "https://randomuser.me/api/portraits/women/36.jpg"
            },
            "financialRecords": {
                "debt": "$95,071"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Emily Roberts",
            "id": 123456673
        }, {
            "contact": {
                "email": "alexander.green@email.com",
                "phoneNumber": "+1 201 987 3135"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 5,
                    "day": 3
                },
                "sex": "male",
                "parentName": "Emily Green",
                "profilePhoto": "https://randomuser.me/api/portraits/men/37.jpg"
            },
            "financialRecords": {
                "debt": "$23,932"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "computer science"
            },
            "isOnline": true,
            "studentName": "Alexander Green",
            "id": 123456674
        }, {
            "contact": {
                "email": "patricia.williams@email.com",
                "phoneNumber": "+1 732 180 439"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 4,
                    "day": 2
                },
                "sex": "female",
                "parentName": "Joshua Williams",
                "profilePhoto": "https://randomuser.me/api/portraits/women/37.jpg"
            },
            "financialRecords": {
                "debt": "$21,669"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Patricia Williams",
            "id": 123456675
        }, {
            "contact": {
                "email": "joseph.rodriguez@email.com",
                "phoneNumber": "+1 609 984 8109"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 9,
                    "day": 21
                },
                "sex": "male",
                "parentName": "Patricia Rodriguez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/38.jpg"
            },
            "financialRecords": {
                "debt": "$71,613"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Joseph Rodriguez",
            "id": 123456676
        }, {
            "contact": {
                "email": "samantha.chen@email.com",
                "phoneNumber": "+1 201 437 6484"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 9,
                    "day": 24
                },
                "sex": "female",
                "parentName": "Justin Chen",
                "profilePhoto": "https://randomuser.me/api/portraits/women/38.jpg"
            },
            "financialRecords": {
                "debt": "$79,732"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Samantha Chen",
            "id": 123456677
        }, {
            "contact": {
                "email": "christopher.davis@email.com",
                "phoneNumber": "+1 856 932 8217"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 2,
                    "day": 20
                },
                "sex": "male",
                "parentName": "Jennifer Davis",
                "profilePhoto": "https://randomuser.me/api/portraits/men/39.jpg"
            },
            "financialRecords": {
                "debt": "$8,714"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Christopher Davis",
            "id": 123456678
        }, {
            "contact": {
                "email": "olivia.nguyen@email.com",
                "phoneNumber": "+1 732 624 2652"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 2,
                    "day": 5
                },
                "sex": "female",
                "parentName": "Ethan Nguyen",
                "profilePhoto": "https://randomuser.me/api/portraits/women/39.jpg"
            },
            "financialRecords": {
                "debt": "$93,472"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "business"
            },
            "isOnline": true,
            "studentName": "Olivia Nguyen",
            "id": 123456679
        }, {
            "contact": {
                "email": "david.campbell@email.com",
                "phoneNumber": "+1 732 897 4855"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 8,
                    "day": 26
                },
                "sex": "male",
                "parentName": "Nicole Campbell",
                "profilePhoto": "https://randomuser.me/api/portraits/men/40.jpg"
            },
            "financialRecords": {
                "debt": "$8,947"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "economics"
            },
            "isOnline": true,
            "studentName": "David Campbell",
            "id": 123456680
        }, {
            "contact": {
                "email": "patricia.garnier@email.com",
                "phoneNumber": "+1 856 601 7503"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 7,
                    "day": 14
                },
                "sex": "female",
                "parentName": "Mark Garnier",
                "profilePhoto": "https://randomuser.me/api/portraits/women/40.jpg"
            },
            "financialRecords": {
                "debt": "$82,649"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Patricia Garnier",
            "id": 123456681
        }, {
            "contact": {
                "email": "justin.brown@email.com",
                "phoneNumber": "+1 201 603 7792"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 6,
                    "day": 23
                },
                "sex": "male",
                "parentName": "Emily Brown",
                "profilePhoto": "https://randomuser.me/api/portraits/men/41.jpg"
            },
            "financialRecords": {
                "debt": "$13,441"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "Justin Brown",
            "id": 123456682
        }, {
            "contact": {
                "email": "mary.lewis@email.com",
                "phoneNumber": "+1 856 343 9695"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 14
                },
                "sex": "female",
                "parentName": "Christian Lewis",
                "profilePhoto": "https://randomuser.me/api/portraits/women/41.jpg"
            },
            "financialRecords": {
                "debt": "$32,199"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Mary Lewis",
            "id": 123456683
        }, {
            "contact": {
                "email": "jason.hall@email.com",
                "phoneNumber": "+1 856 606 1198"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 3,
                    "day": 13
                },
                "sex": "male",
                "parentName": "Emily Hall",
                "profilePhoto": "https://randomuser.me/api/portraits/men/42.jpg"
            },
            "financialRecords": {
                "debt": "$12,708"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Jason Hall",
            "id": 123456684
        }, {
            "contact": {
                "email": "lillian.roberts@email.com",
                "phoneNumber": "+1 732 848 4154"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 4,
                    "day": 21
                },
                "sex": "female",
                "parentName": "Ethan Roberts",
                "profilePhoto": "https://randomuser.me/api/portraits/women/42.jpg"
            },
            "financialRecords": {
                "debt": "$22,292"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "Lillian Roberts",
            "id": 123456685
        }, {
            "contact": {
                "email": "anthony.peterson@email.com",
                "phoneNumber": "+1 201 638 2847"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 23
                },
                "sex": "male",
                "parentName": "Jennifer Peterson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/43.jpg"
            },
            "financialRecords": {
                "debt": "$33,850"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "psychology"
            },
            "isOnline": true,
            "studentName": "Anthony Peterson",
            "id": 123456686
        }, {
            "contact": {
                "email": "lisa.jones@email.com",
                "phoneNumber": "+1 201 825 6398"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 12,
                    "day": 30
                },
                "sex": "female",
                "parentName": "Kyle Jones",
                "profilePhoto": "https://randomuser.me/api/portraits/women/43.jpg"
            },
            "financialRecords": {
                "debt": "$52,698"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "business"
            },
            "isOnline": true,
            "studentName": "Lisa Jones",
            "id": 123456687
        }, {
            "contact": {
                "email": "anthony.campbell@email.com",
                "phoneNumber": "+1 908 238 5535"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 2,
                    "day": 1
                },
                "sex": "male",
                "parentName": "Sophia Campbell",
                "profilePhoto": "https://randomuser.me/api/portraits/men/44.jpg"
            },
            "financialRecords": {
                "debt": "$66,729"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Anthony Campbell",
            "id": 123456688
        }, {
            "contact": {
                "email": "stephanie.wright@email.com",
                "phoneNumber": "+1 201 156 2217"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 1,
                    "day": 29
                },
                "sex": "female",
                "parentName": "Nathan Wright",
                "profilePhoto": "https://randomuser.me/api/portraits/women/44.jpg"
            },
            "financialRecords": {
                "debt": "$1,910"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Stephanie Wright",
            "id": 123456689
        }, {
            "contact": {
                "email": "mark.thompson@email.com",
                "phoneNumber": "+1 856 231 7263"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 8,
                    "day": 5
                },
                "sex": "male",
                "parentName": "Elizabeth Thompson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/45.jpg"
            },
            "financialRecords": {
                "debt": "$68,938"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "Mark Thompson",
            "id": 123456690
        }, {
            "contact": {
                "email": "sophia.dupont@email.com",
                "phoneNumber": "+1 856 945 7144"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 7,
                    "day": 30
                },
                "sex": "female",
                "parentName": "Christian Dupont",
                "profilePhoto": "https://randomuser.me/api/portraits/women/45.jpg"
            },
            "financialRecords": {
                "debt": "$66,090"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "architectural engineering"
            },
            "isOnline": false,
            "studentName": "Sophia Dupont",
            "id": 123456691
        }, {
            "contact": {
                "email": "thomas.bonnet@email.com",
                "phoneNumber": "+1 908 566 8714"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 4,
                    "day": 12
                },
                "sex": "male",
                "parentName": "Samantha Bonnet",
                "profilePhoto": "https://randomuser.me/api/portraits/men/46.jpg"
            },
            "financialRecords": {
                "debt": "$41,130"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Thomas Bonnet",
            "id": 123456692
        }, {
            "contact": {
                "email": "alexis.moore@email.com",
                "phoneNumber": "+1 732 274 1675"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 7,
                    "day": 12
                },
                "sex": "female",
                "parentName": "David Moore",
                "profilePhoto": "https://randomuser.me/api/portraits/women/46.jpg"
            },
            "financialRecords": {
                "debt": "$91,961"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Alexis Moore",
            "id": 123456693
        }, {
            "contact": {
                "email": "jason.scott@email.com",
                "phoneNumber": "+1 856 146 6541"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 3,
                    "day": 8
                },
                "sex": "male",
                "parentName": "Sarah Scott",
                "profilePhoto": "https://randomuser.me/api/portraits/men/47.jpg"
            },
            "financialRecords": {
                "debt": "$47,645"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Jason Scott",
            "id": 123456694
        }, {
            "contact": {
                "email": "sarah.liu@email.com",
                "phoneNumber": "+1 609 679 539"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 8,
                    "day": 20
                },
                "sex": "female",
                "parentName": "Nathan Liu",
                "profilePhoto": "https://randomuser.me/api/portraits/women/47.jpg"
            },
            "financialRecords": {
                "debt": "$14,568"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Sarah Liu",
            "id": 123456695
        }, {
            "contact": {
                "email": "justin.wright@email.com",
                "phoneNumber": "+1 908 603 3178"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 4,
                    "day": 30
                },
                "sex": "male",
                "parentName": "Melissa Wright",
                "profilePhoto": "https://randomuser.me/api/portraits/men/48.jpg"
            },
            "financialRecords": {
                "debt": "$46,624"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Justin Wright",
            "id": 123456696
        }, {
            "contact": {
                "email": "emily.thompson@email.com",
                "phoneNumber": "+1 undefined 323 3369"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 3,
                    "day": 21
                },
                "sex": "female",
                "parentName": "Jacob Thompson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/48.jpg"
            },
            "financialRecords": {
                "debt": "$137"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "communications"
            },
            "isOnline": false,
            "studentName": "Emily Thompson",
            "id": 123456697
        }, {
            "contact": {
                "email": "jonathan.schneider@email.com",
                "phoneNumber": "+1 856 891 1050"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 10,
                    "day": 3
                },
                "sex": "male",
                "parentName": "Melissa Schneider",
                "profilePhoto": "https://randomuser.me/api/portraits/men/49.jpg"
            },
            "financialRecords": {
                "debt": "$83,983"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Jonathan Schneider",
            "id": 123456698
        }, {
            "contact": {
                "email": "hannah.nguyen@email.com",
                "phoneNumber": "+1 856 715 7852"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 4
                },
                "sex": "female",
                "parentName": "Jason Nguyen",
                "profilePhoto": "https://randomuser.me/api/portraits/women/49.jpg"
            },
            "financialRecords": {
                "debt": "$96,971"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "Hannah Nguyen",
            "id": 123456699
        }, {
            "contact": {
                "email": "justin.anderson@email.com",
                "phoneNumber": "+1 908 596 784"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 12
                },
                "sex": "male",
                "parentName": "Amanda Anderson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/50.jpg"
            },
            "financialRecords": {
                "debt": "$18,972"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Justin Anderson",
            "id": 123456700
        }, {
            "contact": {
                "email": "sophia.chen@email.com",
                "phoneNumber": "+1 undefined 642 7878"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 1,
                    "day": 14
                },
                "sex": "female",
                "parentName": "Jason Chen",
                "profilePhoto": "https://randomuser.me/api/portraits/women/50.jpg"
            },
            "financialRecords": {
                "debt": "$62,179"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Sophia Chen",
            "id": 123456701
        }, {
            "contact": {
                "email": "michael.peterson@email.com",
                "phoneNumber": "+1 609 419 5192"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 9,
                    "day": 13
                },
                "sex": "male",
                "parentName": "Alexis Peterson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/51.jpg"
            },
            "financialRecords": {
                "debt": "$91,314"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Michael Peterson",
            "id": 123456702
        }, {
            "contact": {
                "email": "alexis.green@email.com",
                "phoneNumber": "+1 609 259 2875"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 1,
                    "day": 7
                },
                "sex": "female",
                "parentName": "Joshua Green",
                "profilePhoto": "https://randomuser.me/api/portraits/women/51.jpg"
            },
            "financialRecords": {
                "debt": "$98,519"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "architectural engineering"
            },
            "isOnline": true,
            "studentName": "Alexis Green",
            "id": 123456703
        }, {
            "contact": {
                "email": "michael.cooper@email.com",
                "phoneNumber": "+1 732 868 1219"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 4,
                    "day": 12
                },
                "sex": "male",
                "parentName": "Amanda Cooper",
                "profilePhoto": "https://randomuser.me/api/portraits/men/52.jpg"
            },
            "financialRecords": {
                "debt": "$75,800"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "communications"
            },
            "isOnline": false,
            "studentName": "Michael Cooper",
            "id": 123456704
        }, {
            "contact": {
                "email": "heather.baker@email.com",
                "phoneNumber": "+1 201 171 8728"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 5,
                    "day": 7
                },
                "sex": "female",
                "parentName": "Zachary Baker",
                "profilePhoto": "https://randomuser.me/api/portraits/women/52.jpg"
            },
            "financialRecords": {
                "debt": "$41,637"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Heather Baker",
            "id": 123456705
        }, {
            "contact": {
                "email": "samuel.adams@email.com",
                "phoneNumber": "+1 201 757 1240"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 3,
                    "day": 19
                },
                "sex": "male",
                "parentName": "Emma Adams",
                "profilePhoto": "https://randomuser.me/api/portraits/men/53.jpg"
            },
            "financialRecords": {
                "debt": "$44,934"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "communications"
            },
            "isOnline": false,
            "studentName": "Samuel Adams",
            "id": 123456706
        }, {
            "contact": {
                "email": "lillian.zhang@email.com",
                "phoneNumber": "+1 609 422 2165"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 10,
                    "day": 5
                },
                "sex": "female",
                "parentName": "Samuel Zhang",
                "profilePhoto": "https://randomuser.me/api/portraits/women/53.jpg"
            },
            "financialRecords": {
                "debt": "$79,890"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Lillian Zhang",
            "id": 123456707
        }, {
            "contact": {
                "email": "jonathan.lewis@email.com",
                "phoneNumber": "+1 732 457 3215"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 7,
                    "day": 31
                },
                "sex": "male",
                "parentName": "Ashley Lewis",
                "profilePhoto": "https://randomuser.me/api/portraits/men/54.jpg"
            },
            "financialRecords": {
                "debt": "$89,194"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Jonathan Lewis",
            "id": 123456708
        }, {
            "contact": {
                "email": "elizabeth.smith@email.com",
                "phoneNumber": "+1 908 612 6503"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 5,
                    "day": 31
                },
                "sex": "female",
                "parentName": "Tyler Smith",
                "profilePhoto": "https://randomuser.me/api/portraits/women/54.jpg"
            },
            "financialRecords": {
                "debt": "$48,590"
            },
            "academicRecords": {
                "class": "VII A"
            },
            "isOnline": true,
            "studentName": "Elizabeth Smith",
            "id": 123456709
        }, {
            "contact": {
                "email": "ryan.dubois@email.com",
                "phoneNumber": "+1 609 297 5202"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 6,
                    "day": 16
                },
                "sex": "male",
                "parentName": "Emily Dubois",
                "profilePhoto": "https://randomuser.me/api/portraits/men/55.jpg"
            },
            "financialRecords": {
                "debt": "$84,402"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Ryan Dubois",
            "id": 123456710
        }, {
            "contact": {
                "email": "emma.williams@email.com",
                "phoneNumber": "+1 732 862 7695"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 8,
                    "day": 23
                },
                "sex": "female",
                "parentName": "Christian Williams",
                "profilePhoto": "https://randomuser.me/api/portraits/women/55.jpg"
            },
            "financialRecords": {
                "debt": "$38,557"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Emma Williams",
            "id": 123456711
        }, {
            "contact": {
                "email": "anthony.carter@email.com",
                "phoneNumber": "+1 908 963 8506"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 8,
                    "day": 1
                },
                "sex": "male",
                "parentName": "Elizabeth Carter",
                "profilePhoto": "https://randomuser.me/api/portraits/men/56.jpg"
            },
            "financialRecords": {
                "debt": "$89,519"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "psychology"
            },
            "isOnline": true,
            "studentName": "Anthony Carter",
            "id": 123456712
        }, {
            "contact": {
                "email": "kimberly.zimmerman@email.com",
                "phoneNumber": "+1 732 707 9217"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 24
                },
                "sex": "female",
                "parentName": "Jason Zimmerman",
                "profilePhoto": "https://randomuser.me/api/portraits/women/56.jpg"
            },
            "financialRecords": {
                "debt": "$23,119"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "communications"
            },
            "isOnline": true,
            "studentName": "Kimberly Zimmerman",
            "id": 123456713
        }, {
            "contact": {
                "email": "james.baker@email.com",
                "phoneNumber": "+1 609 879 2948"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 1,
                    "day": 24
                },
                "sex": "male",
                "parentName": "Melissa Baker",
                "profilePhoto": "https://randomuser.me/api/portraits/men/57.jpg"
            },
            "financialRecords": {
                "debt": "$11,876"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "James Baker",
            "id": 123456714
        }, {
            "contact": {
                "email": "emily.perez@email.com",
                "phoneNumber": "+1 908 874 3470"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 8,
                    "day": 28
                },
                "sex": "female",
                "parentName": "Joshua Perez",
                "profilePhoto": "https://randomuser.me/api/portraits/women/57.jpg"
            },
            "financialRecords": {
                "debt": "$16,441"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": true,
            "studentName": "Emily Perez",
            "id": 123456715
        }, {
            "contact": {
                "email": "kevin.walker@email.com",
                "phoneNumber": "+1 201 65 2960"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 2,
                    "day": 22
                },
                "sex": "male",
                "parentName": "Brittany Walker",
                "profilePhoto": "https://randomuser.me/api/portraits/men/58.jpg"
            },
            "financialRecords": {
                "debt": "$71,814"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Kevin Walker",
            "id": 123456716
        }, {
            "contact": {
                "email": "sophia.schmidt@email.com",
                "phoneNumber": "+1 732 749 9027"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 1,
                    "day": 29
                },
                "sex": "female",
                "parentName": "Daniel Schmidt",
                "profilePhoto": "https://randomuser.me/api/portraits/women/58.jpg"
            },
            "financialRecords": {
                "debt": "$20,975"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "Sophia Schmidt",
            "id": 123456717
        }, {
            "contact": {
                "email": "daniel.smith@email.com",
                "phoneNumber": "+1 201 997 4489"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 4,
                    "day": 18
                },
                "sex": "male",
                "parentName": "Samantha Smith",
                "profilePhoto": "https://randomuser.me/api/portraits/men/59.jpg"
            },
            "financialRecords": {
                "debt": "$20,400"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "Daniel Smith",
            "id": 123456718
        }, {
            "contact": {
                "email": "sophia.li@email.com",
                "phoneNumber": "+1 609 15 3765"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 8,
                    "day": 15
                },
                "sex": "female",
                "parentName": "Gabriel Li",
                "profilePhoto": "https://randomuser.me/api/portraits/women/59.jpg"
            },
            "financialRecords": {
                "debt": "$93,624"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Sophia Li",
            "id": 123456719
        }, {
            "contact": {
                "email": "jonathan.smith@email.com",
                "phoneNumber": "+1 201 23 5057"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 6,
                    "day": 6
                },
                "sex": "male",
                "parentName": "Michelle Smith",
                "profilePhoto": "https://randomuser.me/api/portraits/men/60.jpg"
            },
            "financialRecords": {
                "debt": "$25,228"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Jonathan Smith",
            "id": 123456720
        }, {
            "contact": {
                "email": "lillian.taylor@email.com",
                "phoneNumber": "+1 609 39 5647"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 5,
                    "day": 19
                },
                "sex": "female",
                "parentName": "Thomas Taylor",
                "profilePhoto": "https://randomuser.me/api/portraits/women/60.jpg"
            },
            "financialRecords": {
                "debt": "$37,033"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Lillian Taylor",
            "id": 123456721
        }, {
            "contact": {
                "email": "christopher.lewis@email.com",
                "phoneNumber": "+1 856 336 6521"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 7,
                    "day": 22
                },
                "sex": "male",
                "parentName": "Sophia Lewis",
                "profilePhoto": "https://randomuser.me/api/portraits/men/61.jpg"
            },
            "financialRecords": {
                "debt": "$89,889"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Christopher Lewis",
            "id": 123456722
        }, {
            "contact": {
                "email": "melissa.braun@email.com",
                "phoneNumber": "+1 732 484 6241"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 10,
                    "day": 31
                },
                "sex": "female",
                "parentName": "Ryan Braun",
                "profilePhoto": "https://randomuser.me/api/portraits/women/61.jpg"
            },
            "financialRecords": {
                "debt": "$26,043"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Melissa Braun",
            "id": 123456723
        }, {
            "contact": {
                "email": "jack.moore@email.com",
                "phoneNumber": "+1 732 483 50"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 7,
                    "day": 28
                },
                "sex": "male",
                "parentName": "Melissa Moore",
                "profilePhoto": "https://randomuser.me/api/portraits/men/62.jpg"
            },
            "financialRecords": {
                "debt": "$28,634"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Jack Moore",
            "id": 123456724
        }, {
            "contact": {
                "email": "jennifer.toussaint@email.com",
                "phoneNumber": "+1 201 333 1845"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 8,
                    "day": 4
                },
                "sex": "female",
                "parentName": "Christopher Toussaint",
                "profilePhoto": "https://randomuser.me/api/portraits/women/62.jpg"
            },
            "financialRecords": {
                "debt": "$71,595"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Jennifer Toussaint",
            "id": 123456725
        }, {
            "contact": {
                "email": "david.campbell@email.com",
                "phoneNumber": "+1 609 5 9426"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 5,
                    "day": 29
                },
                "sex": "male",
                "parentName": "Sarah Campbell",
                "profilePhoto": "https://randomuser.me/api/portraits/men/63.jpg"
            },
            "financialRecords": {
                "debt": "$53,666"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "psychology"
            },
            "isOnline": true,
            "studentName": "David Campbell",
            "id": 123456726
        }, {
            "contact": {
                "email": "abigail.zhang@email.com",
                "phoneNumber": "+1 609 847 600"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 9,
                    "day": 2
                },
                "sex": "female",
                "parentName": "Tyler Zhang",
                "profilePhoto": "https://randomuser.me/api/portraits/women/63.jpg"
            },
            "financialRecords": {
                "debt": "$94,005"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "Abigail Zhang",
            "id": 123456727
        }, {
            "contact": {
                "email": "brandon.davis@email.com",
                "phoneNumber": "+1 201 149 2905"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 2
                },
                "sex": "male",
                "parentName": "Elizabeth Davis",
                "profilePhoto": "https://randomuser.me/api/portraits/men/64.jpg"
            },
            "financialRecords": {
                "debt": "$58,848"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Brandon Davis",
            "id": 123456728
        }, {
            "contact": {
                "email": "melissa.allen@email.com",
                "phoneNumber": "+1 908 769 5207"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 10,
                    "day": 15
                },
                "sex": "female",
                "parentName": "Gabriel Allen",
                "profilePhoto": "https://randomuser.me/api/portraits/women/64.jpg"
            },
            "financialRecords": {
                "debt": "$93,954"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "Melissa Allen",
            "id": 123456729
        }, {
            "contact": {
                "email": "jonathan.müller@email.com",
                "phoneNumber": "+1 undefined 686 6828"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 5,
                    "day": 18
                },
                "sex": "male",
                "parentName": "Angela Müller",
                "profilePhoto": "https://randomuser.me/api/portraits/men/65.jpg"
            },
            "financialRecords": {
                "debt": "$9,732"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "childhood education"
            },
            "isOnline": true,
            "studentName": "Jonathan Müller",
            "id": 123456730
        }, {
            "contact": {
                "email": "sarah.schulz@email.com",
                "phoneNumber": "+1 732 494 1434"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 3,
                    "day": 2
                },
                "sex": "female",
                "parentName": "Samuel Schulz",
                "profilePhoto": "https://randomuser.me/api/portraits/women/65.jpg"
            },
            "financialRecords": {
                "debt": "$68,264"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Sarah Schulz",
            "id": 123456731
        }, {
            "contact": {
                "email": "james.lee@email.com",
                "phoneNumber": "+1 732 489 6103"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 1,
                    "day": 22
                },
                "sex": "male",
                "parentName": "Ashley Lee",
                "profilePhoto": "https://randomuser.me/api/portraits/men/66.jpg"
            },
            "financialRecords": {
                "debt": "$96,393"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "James Lee",
            "id": 123456732
        }, {
            "contact": {
                "email": "sophia.rogers@email.com",
                "phoneNumber": "+1 908 31 3376"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 3,
                    "day": 14
                },
                "sex": "female",
                "parentName": "Ethan Rogers",
                "profilePhoto": "https://randomuser.me/api/portraits/women/66.jpg"
            },
            "financialRecords": {
                "debt": "$4,836"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Sophia Rogers",
            "id": 123456733
        }, {
            "contact": {
                "email": "daniel.anderson@email.com",
                "phoneNumber": "+1 undefined 472 8455"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 3,
                    "day": 30
                },
                "sex": "male",
                "parentName": "Kayla Anderson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/67.jpg"
            },
            "financialRecords": {
                "debt": "$92,256"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Daniel Anderson",
            "id": 123456734
        }, {
            "contact": {
                "email": "kimberly.martinez@email.com",
                "phoneNumber": "+1 609 395 3906"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 10,
                    "day": 20
                },
                "sex": "female",
                "parentName": "David Martinez",
                "profilePhoto": "https://randomuser.me/api/portraits/women/67.jpg"
            },
            "financialRecords": {
                "debt": "$91,658"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "Kimberly Martinez",
            "id": 123456735
        }, {
            "contact": {
                "email": "zachary.liang@email.com",
                "phoneNumber": "+1 undefined 803 5464"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 4,
                    "day": 5
                },
                "sex": "male",
                "parentName": "Elizabeth Liang",
                "profilePhoto": "https://randomuser.me/api/portraits/men/68.jpg"
            },
            "financialRecords": {
                "debt": "$14,000"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "Zachary Liang",
            "id": 123456736
        }, {
            "contact": {
                "email": "taylor.zhang@email.com",
                "phoneNumber": "+1 732 524 5506"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 5,
                    "day": 17
                },
                "sex": "female",
                "parentName": "Matthew Zhang",
                "profilePhoto": "https://randomuser.me/api/portraits/women/68.jpg"
            },
            "financialRecords": {
                "debt": "$69,173"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "business"
            },
            "isOnline": false,
            "studentName": "Taylor Zhang",
            "id": 123456737
        }, {
            "contact": {
                "email": "anthony.edwards@email.com",
                "phoneNumber": "+1 201 362 5053"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 1,
                    "day": 17
                },
                "sex": "male",
                "parentName": "Taylor Edwards",
                "profilePhoto": "https://randomuser.me/api/portraits/men/69.jpg"
            },
            "financialRecords": {
                "debt": "$70,575"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "architectural engineering"
            },
            "isOnline": true,
            "studentName": "Anthony Edwards",
            "id": 123456738
        }, {
            "contact": {
                "email": "olivia.wright@email.com",
                "phoneNumber": "+1 undefined 299 4873"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 1,
                    "day": 8
                },
                "sex": "female",
                "parentName": "Kyle Wright",
                "profilePhoto": "https://randomuser.me/api/portraits/women/69.jpg"
            },
            "financialRecords": {
                "debt": "$63,273"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Olivia Wright",
            "id": 123456739
        }, {
            "contact": {
                "email": "jack.scott@email.com",
                "phoneNumber": "+1 201 951 9827"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 6,
                    "day": 17
                },
                "sex": "male",
                "parentName": "Alexis Scott",
                "profilePhoto": "https://randomuser.me/api/portraits/men/70.jpg"
            },
            "financialRecords": {
                "debt": "$81,905"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Jack Scott",
            "id": 123456740
        }, {
            "contact": {
                "email": "linda.hill@email.com",
                "phoneNumber": "+1 609 458 9565"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 11,
                    "day": 28
                },
                "sex": "female",
                "parentName": "Nicholas Hill",
                "profilePhoto": "https://randomuser.me/api/portraits/women/70.jpg"
            },
            "financialRecords": {
                "debt": "$75,795"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "Linda Hill",
            "id": 123456741
        }, {
            "contact": {
                "email": "nathan.perez@email.com",
                "phoneNumber": "+1 732 533 7621"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 8,
                    "day": 29
                },
                "sex": "male",
                "parentName": "Brittany Perez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/71.jpg"
            },
            "financialRecords": {
                "debt": "$6,752"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Nathan Perez",
            "id": 123456742
        }, {
            "contact": {
                "email": "brittany.lewis@email.com",
                "phoneNumber": "+1 732 982 5553"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 4,
                    "day": 18
                },
                "sex": "female",
                "parentName": "Thomas Lewis",
                "profilePhoto": "https://randomuser.me/api/portraits/women/71.jpg"
            },
            "financialRecords": {
                "debt": "$44,461"
            },
            "academicRecords": {
                "class": "VII A"
            },
            "isOnline": false,
            "studentName": "Brittany Lewis",
            "id": 123456743
        }, {
            "contact": {
                "email": "ryan.garnier@email.com",
                "phoneNumber": "+1 609 5 8913"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 10,
                    "day": 6
                },
                "sex": "male",
                "parentName": "Sophia Garnier",
                "profilePhoto": "https://randomuser.me/api/portraits/men/72.jpg"
            },
            "financialRecords": {
                "debt": "$64,364"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Ryan Garnier",
            "id": 123456744
        }, {
            "contact": {
                "email": "emma.jones@email.com",
                "phoneNumber": "+1 201 562 395"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 12,
                    "day": 30
                },
                "sex": "female",
                "parentName": "Thomas Jones",
                "profilePhoto": "https://randomuser.me/api/portraits/women/72.jpg"
            },
            "financialRecords": {
                "debt": "$33,212"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "communications"
            },
            "isOnline": false,
            "studentName": "Emma Jones",
            "id": 123456745
        }, {
            "contact": {
                "email": "joseph.young@email.com",
                "phoneNumber": "+1 609 473 1149"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 4,
                    "day": 1
                },
                "sex": "male",
                "parentName": "Hannah Young",
                "profilePhoto": "https://randomuser.me/api/portraits/men/73.jpg"
            },
            "financialRecords": {
                "debt": "$41,118"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Joseph Young",
            "id": 123456746
        }, {
            "contact": {
                "email": "elizabeth.zhang@email.com",
                "phoneNumber": "+1 856 610 7433"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 7,
                    "day": 1
                },
                "sex": "female",
                "parentName": "Austin Zhang",
                "profilePhoto": "https://randomuser.me/api/portraits/women/73.jpg"
            },
            "financialRecords": {
                "debt": "$92,681"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "Elizabeth Zhang",
            "id": 123456747
        }, {
            "contact": {
                "email": "jason.taylor@email.com",
                "phoneNumber": "+1 732 752 6726"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 6,
                    "day": 30
                },
                "sex": "male",
                "parentName": "Madison Taylor",
                "profilePhoto": "https://randomuser.me/api/portraits/men/74.jpg"
            },
            "financialRecords": {
                "debt": "$95,071"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "communications"
            },
            "isOnline": false,
            "studentName": "Jason Taylor",
            "id": 123456748
        }, {
            "contact": {
                "email": "brittany.lavigne@email.com",
                "phoneNumber": "+1 609 74 6951"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 5,
                    "day": 15
                },
                "sex": "female",
                "parentName": "Mark Lavigne",
                "profilePhoto": "https://randomuser.me/api/portraits/women/74.jpg"
            },
            "financialRecords": {
                "debt": "$99,108"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "architectural engineering"
            },
            "isOnline": false,
            "studentName": "Brittany Lavigne",
            "id": 123456749
        }, {
            "contact": {
                "email": "mark.mitchell@email.com",
                "phoneNumber": "+1 201 832 5870"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 6,
                    "day": 17
                },
                "sex": "male",
                "parentName": "Elizabeth Mitchell",
                "profilePhoto": "https://randomuser.me/api/portraits/men/75.jpg"
            },
            "financialRecords": {
                "debt": "$85,774"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Mark Mitchell",
            "id": 123456750
        }, {
            "contact": {
                "email": "jessica.jones@email.com",
                "phoneNumber": "+1 609 525 8579"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 7,
                    "day": 5
                },
                "sex": "female",
                "parentName": "Jonathan Jones",
                "profilePhoto": "https://randomuser.me/api/portraits/women/75.jpg"
            },
            "financialRecords": {
                "debt": "$76,436"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "business"
            },
            "isOnline": true,
            "studentName": "Jessica Jones",
            "id": 123456751
        }, {
            "contact": {
                "email": "nathan.garnier@email.com",
                "phoneNumber": "+1 undefined 834 1592"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 8,
                    "day": 17
                },
                "sex": "male",
                "parentName": "Kimberly Garnier",
                "profilePhoto": "https://randomuser.me/api/portraits/men/76.jpg"
            },
            "financialRecords": {
                "debt": "$96,346"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "communications"
            },
            "isOnline": true,
            "studentName": "Nathan Garnier",
            "id": 123456752
        }, {
            "contact": {
                "email": "nicole.monet@email.com",
                "phoneNumber": "+1 856 940 4913"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 4,
                    "day": 28
                },
                "sex": "female",
                "parentName": "Ryan Monet",
                "profilePhoto": "https://randomuser.me/api/portraits/women/76.jpg"
            },
            "financialRecords": {
                "debt": "$84,525"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Nicole Monet",
            "id": 123456753
        }, {
            "contact": {
                "email": "thomas.nelson@email.com",
                "phoneNumber": "+1 201 537 2717"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 7,
                    "day": 31
                },
                "sex": "male",
                "parentName": "Jessica Nelson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/77.jpg"
            },
            "financialRecords": {
                "debt": "$5,280"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "architectural engineering"
            },
            "isOnline": true,
            "studentName": "Thomas Nelson",
            "id": 123456754
        }, {
            "contact": {
                "email": "ashley.müller@email.com",
                "phoneNumber": "+1 609 757 9580"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 4,
                    "day": 17
                },
                "sex": "female",
                "parentName": "Thomas Müller",
                "profilePhoto": "https://randomuser.me/api/portraits/women/77.jpg"
            },
            "financialRecords": {
                "debt": "$3,070"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "architectural engineering"
            },
            "isOnline": true,
            "studentName": "Ashley Müller",
            "id": 123456755
        }, {
            "contact": {
                "email": "christopher.perez@email.com",
                "phoneNumber": "+1 856 750 869"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 10,
                    "day": 5
                },
                "sex": "male",
                "parentName": "Angela Perez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/78.jpg"
            },
            "financialRecords": {
                "debt": "$57,511"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "Christopher Perez",
            "id": 123456756
        }, {
            "contact": {
                "email": "stephanie.edwards@email.com",
                "phoneNumber": "+1 856 835 4683"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 2,
                    "day": 15
                },
                "sex": "female",
                "parentName": "Christian Edwards",
                "profilePhoto": "https://randomuser.me/api/portraits/women/78.jpg"
            },
            "financialRecords": {
                "debt": "$74,082"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Stephanie Edwards",
            "id": 123456757
        }, {
            "contact": {
                "email": "justin.mitchell@email.com",
                "phoneNumber": "+1 201 104 7309"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 7,
                    "day": 16
                },
                "sex": "male",
                "parentName": "Alexis Mitchell",
                "profilePhoto": "https://randomuser.me/api/portraits/men/79.jpg"
            },
            "financialRecords": {
                "debt": "$66,983"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Justin Mitchell",
            "id": 123456758
        }, {
            "contact": {
                "email": "abigail.lee@email.com",
                "phoneNumber": "+1 609 425 6509"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 10,
                    "day": 24
                },
                "sex": "female",
                "parentName": "John Lee",
                "profilePhoto": "https://randomuser.me/api/portraits/women/79.jpg"
            },
            "financialRecords": {
                "debt": "$61,062"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Abigail Lee",
            "id": 123456759
        }, {
            "contact": {
                "email": "james.wilson@email.com",
                "phoneNumber": "+1 856 458 6320"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 10,
                    "day": 23
                },
                "sex": "male",
                "parentName": "Nicole Wilson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/80.jpg"
            },
            "financialRecords": {
                "debt": "$68,096"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "James Wilson",
            "id": 123456760
        }, {
            "contact": {
                "email": "emma.harris@email.com",
                "phoneNumber": "+1 609 788 9535"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 5,
                    "day": 27
                },
                "sex": "female",
                "parentName": "Gabriel Harris",
                "profilePhoto": "https://randomuser.me/api/portraits/women/80.jpg"
            },
            "financialRecords": {
                "debt": "$68,155"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "Emma Harris",
            "id": 123456761
        }, {
            "contact": {
                "email": "andrew.schulz@email.com",
                "phoneNumber": "+1 856 170 6092"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 10,
                    "day": 27
                },
                "sex": "male",
                "parentName": "Brittany Schulz",
                "profilePhoto": "https://randomuser.me/api/portraits/men/81.jpg"
            },
            "financialRecords": {
                "debt": "$94,902"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "Andrew Schulz",
            "id": 123456762
        }, {
            "contact": {
                "email": "madison.moore@email.com",
                "phoneNumber": "+1 856 197 2307"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 3,
                    "day": 21
                },
                "sex": "female",
                "parentName": "Austin Moore",
                "profilePhoto": "https://randomuser.me/api/portraits/women/81.jpg"
            },
            "financialRecords": {
                "debt": "$30,178"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "Madison Moore",
            "id": 123456763
        }, {
            "contact": {
                "email": "tyler.taylor@email.com",
                "phoneNumber": "+1 undefined 546 8097"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 3,
                    "day": 27
                },
                "sex": "male",
                "parentName": "Amy Taylor",
                "profilePhoto": "https://randomuser.me/api/portraits/men/82.jpg"
            },
            "financialRecords": {
                "debt": "$42,999"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "Tyler Taylor",
            "id": 123456764
        }, {
            "contact": {
                "email": "lillian.cooper@email.com",
                "phoneNumber": "+1 609 689 5978"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 2,
                    "day": 11
                },
                "sex": "female",
                "parentName": "Kyle Cooper",
                "profilePhoto": "https://randomuser.me/api/portraits/women/82.jpg"
            },
            "financialRecords": {
                "debt": "$36,805"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "Lillian Cooper",
            "id": 123456765
        }, {
            "contact": {
                "email": "james.richardson@email.com",
                "phoneNumber": "+1 undefined 433 3303"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 12,
                    "day": 10
                },
                "sex": "male",
                "parentName": "Sarah Richardson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/83.jpg"
            },
            "financialRecords": {
                "debt": "$20,708"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "James Richardson",
            "id": 123456766
        }, {
            "contact": {
                "email": "patricia.braun@email.com",
                "phoneNumber": "+1 732 863 1779"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 1,
                    "day": 24
                },
                "sex": "female",
                "parentName": "Justin Braun",
                "profilePhoto": "https://randomuser.me/api/portraits/women/83.jpg"
            },
            "financialRecords": {
                "debt": "$27,150"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "Patricia Braun",
            "id": 123456767
        }, {
            "contact": {
                "email": "zachary.peterson@email.com",
                "phoneNumber": "+1 609 73 907"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 5,
                    "day": 9
                },
                "sex": "male",
                "parentName": "Jessica Peterson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/84.jpg"
            },
            "financialRecords": {
                "debt": "$88,607"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": true,
            "studentName": "Zachary Peterson",
            "id": 123456768
        }, {
            "contact": {
                "email": "lisa.liang@email.com",
                "phoneNumber": "+1 856 298 3298"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 10,
                    "day": 30
                },
                "sex": "female",
                "parentName": "Austin Liang",
                "profilePhoto": "https://randomuser.me/api/portraits/women/84.jpg"
            },
            "financialRecords": {
                "debt": "$46,786"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Lisa Liang",
            "id": 123456769
        }, {
            "contact": {
                "email": "ryan.jones@email.com",
                "phoneNumber": "+1 908 717 7391"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 8,
                    "day": 22
                },
                "sex": "male",
                "parentName": "Nicole Jones",
                "profilePhoto": "https://randomuser.me/api/portraits/men/85.jpg"
            },
            "financialRecords": {
                "debt": "$94,810"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "Ryan Jones",
            "id": 123456770
        }, {
            "contact": {
                "email": "jessica.robinson@email.com",
                "phoneNumber": "+1 609 624 2268"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 2,
                    "day": 18
                },
                "sex": "female",
                "parentName": "Thomas Robinson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/85.jpg"
            },
            "financialRecords": {
                "debt": "$4,238"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Jessica Robinson",
            "id": 123456771
        }, {
            "contact": {
                "email": "jason.garnier@email.com",
                "phoneNumber": "+1 201 528 6811"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 5,
                    "day": 17
                },
                "sex": "male",
                "parentName": "Sophia Garnier",
                "profilePhoto": "https://randomuser.me/api/portraits/men/86.jpg"
            },
            "financialRecords": {
                "debt": "$61,048"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "economics"
            },
            "isOnline": true,
            "studentName": "Jason Garnier",
            "id": 123456772
        }, {
            "contact": {
                "email": "alexis.young@email.com",
                "phoneNumber": "+1 856 577 7636"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 9,
                    "day": 15
                },
                "sex": "female",
                "parentName": "Nicholas Young",
                "profilePhoto": "https://randomuser.me/api/portraits/women/86.jpg"
            },
            "financialRecords": {
                "debt": "$88,416"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "Alexis Young",
            "id": 123456773
        }, {
            "contact": {
                "email": "jonathan.lewis@email.com",
                "phoneNumber": "+1 201 688 8721"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 1,
                    "day": 21
                },
                "sex": "male",
                "parentName": "Emma Lewis",
                "profilePhoto": "https://randomuser.me/api/portraits/men/87.jpg"
            },
            "financialRecords": {
                "debt": "$14,217"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Jonathan Lewis",
            "id": 123456774
        }, {
            "contact": {
                "email": "amy.gonzalez@email.com",
                "phoneNumber": "+1 201 488 1799"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 3,
                    "day": 20
                },
                "sex": "female",
                "parentName": "Nicholas Gonzalez",
                "profilePhoto": "https://randomuser.me/api/portraits/women/87.jpg"
            },
            "financialRecords": {
                "debt": "$15,388"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Amy Gonzalez",
            "id": 123456775
        }, {
            "contact": {
                "email": "john.miller@email.com",
                "phoneNumber": "+1 856 897 9230"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 8,
                    "day": 19
                },
                "sex": "male",
                "parentName": "Lisa Miller",
                "profilePhoto": "https://randomuser.me/api/portraits/men/88.jpg"
            },
            "financialRecords": {
                "debt": "$56,622"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "business"
            },
            "isOnline": true,
            "studentName": "John Miller",
            "id": 123456776
        }, {
            "contact": {
                "email": "kayla.fournier@email.com",
                "phoneNumber": "+1 856 598 8848"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 8,
                    "day": 15
                },
                "sex": "female",
                "parentName": "Christian Fournier",
                "profilePhoto": "https://randomuser.me/api/portraits/women/88.jpg"
            },
            "financialRecords": {
                "debt": "$59,131"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "Kayla Fournier",
            "id": 123456777
        }, {
            "contact": {
                "email": "kevin.liu@email.com",
                "phoneNumber": "+1 732 384 5191"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 8,
                    "day": 3
                },
                "sex": "male",
                "parentName": "Jennifer Liu",
                "profilePhoto": "https://randomuser.me/api/portraits/men/89.jpg"
            },
            "financialRecords": {
                "debt": "$84,878"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Kevin Liu",
            "id": 123456778
        }, {
            "contact": {
                "email": "angela.nguyen@email.com",
                "phoneNumber": "+1 201 382 7862"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 11,
                    "day": 3
                },
                "sex": "female",
                "parentName": "Gabriel Nguyen",
                "profilePhoto": "https://randomuser.me/api/portraits/women/89.jpg"
            },
            "financialRecords": {
                "debt": "$51,483"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": true,
            "studentName": "Angela Nguyen",
            "id": 123456779
        }, {
            "contact": {
                "email": "jason.green@email.com",
                "phoneNumber": "+1 201 128 4380"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 8,
                    "day": 3
                },
                "sex": "male",
                "parentName": "Heather Green",
                "profilePhoto": "https://randomuser.me/api/portraits/men/90.jpg"
            },
            "financialRecords": {
                "debt": "$54,517"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Jason Green",
            "id": 123456780
        }, {
            "contact": {
                "email": "patricia.garnier@email.com",
                "phoneNumber": "+1 201 206 920"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 1,
                    "day": 4
                },
                "sex": "female",
                "parentName": "Daniel Garnier",
                "profilePhoto": "https://randomuser.me/api/portraits/women/90.jpg"
            },
            "financialRecords": {
                "debt": "$80,233"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Patricia Garnier",
            "id": 123456781
        }, {
            "contact": {
                "email": "zachary.li@email.com",
                "phoneNumber": "+1 856 100 2748"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 11,
                    "day": 26
                },
                "sex": "male",
                "parentName": "Lillian Li",
                "profilePhoto": "https://randomuser.me/api/portraits/men/91.jpg"
            },
            "financialRecords": {
                "debt": "$58,510"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Zachary Li",
            "id": 123456782
        }, {
            "contact": {
                "email": "lisa.adams@email.com",
                "phoneNumber": "+1 732 917 6194"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 8,
                    "day": 1
                },
                "sex": "female",
                "parentName": "Jack Adams",
                "profilePhoto": "https://randomuser.me/api/portraits/women/91.jpg"
            },
            "financialRecords": {
                "debt": "$11,572"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "business"
            },
            "isOnline": true,
            "studentName": "Lisa Adams",
            "id": 123456783
        }, {
            "contact": {
                "email": "robert.schmidt@email.com",
                "phoneNumber": "+1 609 127 4969"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 1,
                    "day": 21
                },
                "sex": "male",
                "parentName": "Angela Schmidt",
                "profilePhoto": "https://randomuser.me/api/portraits/men/92.jpg"
            },
            "financialRecords": {
                "debt": "$33,289"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Robert Schmidt",
            "id": 123456784
        }, {
            "contact": {
                "email": "amanda.walker@email.com",
                "phoneNumber": "+1 undefined 339 6836"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 7,
                    "day": 27
                },
                "sex": "female",
                "parentName": "Robert Walker",
                "profilePhoto": "https://randomuser.me/api/portraits/women/92.jpg"
            },
            "financialRecords": {
                "debt": "$2,634"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "civil engineering"
            },
            "isOnline": true,
            "studentName": "Amanda Walker",
            "id": 123456785
        }, {
            "contact": {
                "email": "robert.moore@email.com",
                "phoneNumber": "+1 732 128 8988"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 7,
                    "day": 3
                },
                "sex": "male",
                "parentName": "Emily Moore",
                "profilePhoto": "https://randomuser.me/api/portraits/men/93.jpg"
            },
            "financialRecords": {
                "debt": "$16,551"
            },
            "academicRecords": {
                "class": "VII B"
            },
            "isOnline": true,
            "studentName": "Robert Moore",
            "id": 123456786
        }, {
            "contact": {
                "email": "amy.green@email.com",
                "phoneNumber": "+1 732 278 5212"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 22
                },
                "sex": "female",
                "parentName": "Nicholas Green",
                "profilePhoto": "https://randomuser.me/api/portraits/women/93.jpg"
            },
            "financialRecords": {
                "debt": "$74,144"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "Amy Green",
            "id": 123456787
        }, {
            "contact": {
                "email": "ethan.edwards@email.com",
                "phoneNumber": "+1 609 303 8743"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 3,
                    "day": 1
                },
                "sex": "male",
                "parentName": "Angela Edwards",
                "profilePhoto": "https://randomuser.me/api/portraits/men/94.jpg"
            },
            "financialRecords": {
                "debt": "$23,501"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Ethan Edwards",
            "id": 123456788
        }, {
            "contact": {
                "email": "samantha.gonzalez@email.com",
                "phoneNumber": "+1 609 50 2516"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 3,
                    "day": 25
                },
                "sex": "female",
                "parentName": "Jack Gonzalez",
                "profilePhoto": "https://randomuser.me/api/portraits/women/94.jpg"
            },
            "financialRecords": {
                "debt": "$26,339"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "Samantha Gonzalez",
            "id": 123456789
        }, {
            "contact": {
                "email": "kevin.cooper@email.com",
                "phoneNumber": "+1 201 974 529"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 7,
                    "day": 18
                },
                "sex": "male",
                "parentName": "Abigail Cooper",
                "profilePhoto": "https://randomuser.me/api/portraits/men/95.jpg"
            },
            "financialRecords": {
                "debt": "$15,692"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "economics"
            },
            "isOnline": true,
            "studentName": "Kevin Cooper",
            "id": 123456790
        }, {
            "contact": {
                "email": "nicole.gonzalez@email.com",
                "phoneNumber": "+1 609 115 1598"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 8,
                    "day": 25
                },
                "sex": "female",
                "parentName": "Justin Gonzalez",
                "profilePhoto": "https://randomuser.me/api/portraits/women/95.jpg"
            },
            "financialRecords": {
                "debt": "$97,716"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "architectural engineering"
            },
            "isOnline": true,
            "studentName": "Nicole Gonzalez",
            "id": 123456791
        }, {
            "contact": {
                "email": "anthony.fournier@email.com",
                "phoneNumber": "+1 609 522 4393"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 7,
                    "day": 12
                },
                "sex": "male",
                "parentName": "Angela Fournier",
                "profilePhoto": "https://randomuser.me/api/portraits/men/96.jpg"
            },
            "financialRecords": {
                "debt": "$9,436"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": true,
            "studentName": "Anthony Fournier",
            "id": 123456792
        }, {
            "contact": {
                "email": "elizabeth.nguyen@email.com",
                "phoneNumber": "+1 609 838 9934"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 9,
                    "day": 4
                },
                "sex": "female",
                "parentName": "Justin Nguyen",
                "profilePhoto": "https://randomuser.me/api/portraits/women/96.jpg"
            },
            "financialRecords": {
                "debt": "$61,898"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "Elizabeth Nguyen",
            "id": 123456793
        }, {
            "contact": {
                "email": "jacob.lewis@email.com",
                "phoneNumber": "+1 908 464 9709"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 5,
                    "day": 2
                },
                "sex": "male",
                "parentName": "Angela Lewis",
                "profilePhoto": "https://randomuser.me/api/portraits/men/97.jpg"
            },
            "financialRecords": {
                "debt": "$88,027"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Jacob Lewis",
            "id": 123456794
        }, {
            "contact": {
                "email": "susan.lavigne@email.com",
                "phoneNumber": "+1 856 301 3095"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 3,
                    "day": 25
                },
                "sex": "female",
                "parentName": "Michael Lavigne",
                "profilePhoto": "https://randomuser.me/api/portraits/women/97.jpg"
            },
            "financialRecords": {
                "debt": "$40,915"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Susan Lavigne",
            "id": 123456795
        }, {
            "contact": {
                "email": "kyle.bonnet@email.com",
                "phoneNumber": "+1 201 863 9445"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 12,
                    "day": 21
                },
                "sex": "male",
                "parentName": "Linda Bonnet",
                "profilePhoto": "https://randomuser.me/api/portraits/men/98.jpg"
            },
            "financialRecords": {
                "debt": "$47,345"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Kyle Bonnet",
            "id": 123456796
        }, {
            "contact": {
                "email": "patricia.braun@email.com",
                "phoneNumber": "+1 201 104 5931"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 12,
                    "day": 19
                },
                "sex": "female",
                "parentName": "Nathan Braun",
                "profilePhoto": "https://randomuser.me/api/portraits/women/98.jpg"
            },
            "financialRecords": {
                "debt": "$93,839"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "civil engineering"
            },
            "isOnline": true,
            "studentName": "Patricia Braun",
            "id": 123456797
        }, {
            "contact": {
                "email": "ryan.campbell@email.com",
                "phoneNumber": "+1 732 753 6941"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 9,
                    "day": 8
                },
                "sex": "male",
                "parentName": "Brittany Campbell",
                "profilePhoto": "https://randomuser.me/api/portraits/men/99.jpg"
            },
            "financialRecords": {
                "debt": "$29,745"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Ryan Campbell",
            "id": 123456798
        }, {
            "contact": {
                "email": "brittany.campbell@email.com",
                "phoneNumber": "+1 732 793 8536"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 10,
                    "day": 17
                },
                "sex": "female",
                "parentName": "Brian Campbell",
                "profilePhoto": "https://randomuser.me/api/portraits/women/99.jpg"
            },
            "financialRecords": {
                "debt": "$3,036"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Brittany Campbell",
            "id": 123456799
        }, {
            "contact": {
                "email": "ryan.campbell@email.com",
                "phoneNumber": "+1 201 508 9752"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 1,
                    "day": 15
                },
                "sex": "male",
                "parentName": "Mary Campbell",
                "profilePhoto": "https://randomuser.me/api/portraits/men/0.jpg"
            },
            "financialRecords": {
                "debt": "$58,360"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Ryan Campbell",
            "id": 123456800
        }, {
            "contact": {
                "email": "michelle.anderson@email.com",
                "phoneNumber": "+1 856 981 6862"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 6,
                    "day": 23
                },
                "sex": "female",
                "parentName": "Nicholas Anderson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/0.jpg"
            },
            "financialRecords": {
                "debt": "$84,753"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "childhood education"
            },
            "isOnline": true,
            "studentName": "Michelle Anderson",
            "id": 123456801
        }, {
            "contact": {
                "email": "nathan.adams@email.com",
                "phoneNumber": "+1 856 23 7904"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 1,
                    "day": 7
                },
                "sex": "male",
                "parentName": "Sophia Adams",
                "profilePhoto": "https://randomuser.me/api/portraits/men/1.jpg"
            },
            "financialRecords": {
                "debt": "$53,735"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "economics"
            },
            "isOnline": true,
            "studentName": "Nathan Adams",
            "id": 123456802
        }, {
            "contact": {
                "email": "samantha.edwards@email.com",
                "phoneNumber": "+1 732 733 6825"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 9,
                    "day": 23
                },
                "sex": "female",
                "parentName": "Joseph Edwards",
                "profilePhoto": "https://randomuser.me/api/portraits/women/1.jpg"
            },
            "financialRecords": {
                "debt": "$64,688"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "computer science"
            },
            "isOnline": true,
            "studentName": "Samantha Edwards",
            "id": 123456803
        }, {
            "contact": {
                "email": "jason.harris@email.com",
                "phoneNumber": "+1 201 861 9000"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 3,
                    "day": 1
                },
                "sex": "male",
                "parentName": "Melissa Harris",
                "profilePhoto": "https://randomuser.me/api/portraits/men/2.jpg"
            },
            "financialRecords": {
                "debt": "$7,289"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "communications"
            },
            "isOnline": true,
            "studentName": "Jason Harris",
            "id": 123456804
        }, {
            "contact": {
                "email": "lisa.davis@email.com",
                "phoneNumber": "+1 856 709 6778"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 9,
                    "day": 6
                },
                "sex": "female",
                "parentName": "Christopher Davis",
                "profilePhoto": "https://randomuser.me/api/portraits/women/2.jpg"
            },
            "financialRecords": {
                "debt": "$79,943"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Lisa Davis",
            "id": 123456805
        }, {
            "contact": {
                "email": "samuel.chen@email.com",
                "phoneNumber": "+1 201 775 3573"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 4,
                    "day": 2
                },
                "sex": "male",
                "parentName": "Amanda Chen",
                "profilePhoto": "https://randomuser.me/api/portraits/men/3.jpg"
            },
            "financialRecords": {
                "debt": "$20,575"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "Samuel Chen",
            "id": 123456806
        }, {
            "contact": {
                "email": "amanda.schmidt@email.com",
                "phoneNumber": "+1 732 944 2297"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 2,
                    "day": 16
                },
                "sex": "female",
                "parentName": "Alexander Schmidt",
                "profilePhoto": "https://randomuser.me/api/portraits/women/3.jpg"
            },
            "financialRecords": {
                "debt": "$10,196"
            },
            "academicRecords": {
                "class": "VII B"
            },
            "isOnline": true,
            "studentName": "Amanda Schmidt",
            "id": 123456807
        }, {
            "contact": {
                "email": "samuel.miller@email.com",
                "phoneNumber": "+1 201 171 4777"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 3,
                    "day": 2
                },
                "sex": "male",
                "parentName": "Amy Miller",
                "profilePhoto": "https://randomuser.me/api/portraits/men/4.jpg"
            },
            "financialRecords": {
                "debt": "$34,303"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "architectural engineering"
            },
            "isOnline": false,
            "studentName": "Samuel Miller",
            "id": 123456808
        }, {
            "contact": {
                "email": "brittany.liang@email.com",
                "phoneNumber": "+1 856 83 2264"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 11,
                    "day": 23
                },
                "sex": "female",
                "parentName": "Michael Liang",
                "profilePhoto": "https://randomuser.me/api/portraits/women/4.jpg"
            },
            "financialRecords": {
                "debt": "$43,270"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "politcal science"
            },
            "isOnline": true,
            "studentName": "Brittany Liang",
            "id": 123456809
        }, {
            "contact": {
                "email": "joseph.moore@email.com",
                "phoneNumber": "+1 201 252 1663"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 4,
                    "day": 13
                },
                "sex": "male",
                "parentName": "Michelle Moore",
                "profilePhoto": "https://randomuser.me/api/portraits/men/5.jpg"
            },
            "financialRecords": {
                "debt": "$88,226"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Joseph Moore",
            "id": 123456810
        }, {
            "contact": {
                "email": "karen.mitchell@email.com",
                "phoneNumber": "+1 609 776 9685"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 8,
                    "day": 20
                },
                "sex": "female",
                "parentName": "Tyler Mitchell",
                "profilePhoto": "https://randomuser.me/api/portraits/women/5.jpg"
            },
            "financialRecords": {
                "debt": "$54,636"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "computer science"
            },
            "isOnline": true,
            "studentName": "Karen Mitchell",
            "id": 123456811
        }, {
            "contact": {
                "email": "jacob.zimmerman@email.com",
                "phoneNumber": "+1 201 228 3770"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 3,
                    "day": 24
                },
                "sex": "male",
                "parentName": "Emily Zimmerman",
                "profilePhoto": "https://randomuser.me/api/portraits/men/6.jpg"
            },
            "financialRecords": {
                "debt": "$32,063"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "Jacob Zimmerman",
            "id": 123456812
        }, {
            "contact": {
                "email": "sarah.flores@email.com",
                "phoneNumber": "+1 609 839 808"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 6,
                    "day": 26
                },
                "sex": "female",
                "parentName": "Jack Flores",
                "profilePhoto": "https://randomuser.me/api/portraits/women/6.jpg"
            },
            "financialRecords": {
                "debt": "$57,495"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Sarah Flores",
            "id": 123456813
        }, {
            "contact": {
                "email": "david.anderson@email.com",
                "phoneNumber": "+1 609 602 9003"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 7,
                    "day": 15
                },
                "sex": "male",
                "parentName": "Olivia Anderson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/7.jpg"
            },
            "financialRecords": {
                "debt": "$65,981"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "David Anderson",
            "id": 123456814
        }, {
            "contact": {
                "email": "karen.gonzalez@email.com",
                "phoneNumber": "+1 732 664 8105"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 7,
                    "day": 11
                },
                "sex": "female",
                "parentName": "Jonathan Gonzalez",
                "profilePhoto": "https://randomuser.me/api/portraits/women/7.jpg"
            },
            "financialRecords": {
                "debt": "$50,103"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "Karen Gonzalez",
            "id": 123456815
        }, {
            "contact": {
                "email": "jonathan.richardson@email.com",
                "phoneNumber": "+1 856 812 8554"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 1,
                    "day": 20
                },
                "sex": "male",
                "parentName": "Ashley Richardson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/8.jpg"
            },
            "financialRecords": {
                "debt": "$43,473"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "civil engineering"
            },
            "isOnline": true,
            "studentName": "Jonathan Richardson",
            "id": 123456816
        }, {
            "contact": {
                "email": "isabella.baker@email.com",
                "phoneNumber": "+1 undefined 697 4500"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 3,
                    "day": 6
                },
                "sex": "female",
                "parentName": "Thomas Baker",
                "profilePhoto": "https://randomuser.me/api/portraits/women/8.jpg"
            },
            "financialRecords": {
                "debt": "$70,234"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "electrical engineering"
            },
            "isOnline": false,
            "studentName": "Isabella Baker",
            "id": 123456817
        }, {
            "contact": {
                "email": "austin.cooper@email.com",
                "phoneNumber": "+1 856 884 1540"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 9,
                    "day": 7
                },
                "sex": "male",
                "parentName": "Madison Cooper",
                "profilePhoto": "https://randomuser.me/api/portraits/men/9.jpg"
            },
            "financialRecords": {
                "debt": "$64,394"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Austin Cooper",
            "id": 123456818
        }, {
            "contact": {
                "email": "heather.scott@email.com",
                "phoneNumber": "+1 908 612 6051"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 9,
                    "day": 29
                },
                "sex": "female",
                "parentName": "Christopher Scott",
                "profilePhoto": "https://randomuser.me/api/portraits/women/9.jpg"
            },
            "financialRecords": {
                "debt": "$18,738"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "business"
            },
            "isOnline": true,
            "studentName": "Heather Scott",
            "id": 123456819
        }, {
            "contact": {
                "email": "john.lavigne@email.com",
                "phoneNumber": "+1 908 689 3610"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 3,
                    "day": 7
                },
                "sex": "male",
                "parentName": "Taylor Lavigne",
                "profilePhoto": "https://randomuser.me/api/portraits/men/10.jpg"
            },
            "financialRecords": {
                "debt": "$89,353"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "John Lavigne",
            "id": 123456820
        }, {
            "contact": {
                "email": "heather.fournier@email.com",
                "phoneNumber": "+1 609 794 6910"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 7,
                    "day": 11
                },
                "sex": "female",
                "parentName": "Jacob Fournier",
                "profilePhoto": "https://randomuser.me/api/portraits/women/10.jpg"
            },
            "financialRecords": {
                "debt": "$36,764"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "Heather Fournier",
            "id": 123456821
        }, {
            "contact": {
                "email": "joshua.nguyen@email.com",
                "phoneNumber": "+1 908 729 8336"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 7,
                    "day": 22
                },
                "sex": "male",
                "parentName": "Nicole Nguyen",
                "profilePhoto": "https://randomuser.me/api/portraits/men/11.jpg"
            },
            "financialRecords": {
                "debt": "$90,008"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "Joshua Nguyen",
            "id": 123456822
        }, {
            "contact": {
                "email": "nicole.lavigne@email.com",
                "phoneNumber": "+1 609 198 1337"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 8,
                    "day": 15
                },
                "sex": "female",
                "parentName": "Robert Lavigne",
                "profilePhoto": "https://randomuser.me/api/portraits/women/11.jpg"
            },
            "financialRecords": {
                "debt": "$21,746"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Nicole Lavigne",
            "id": 123456823
        }, {
            "contact": {
                "email": "christopher.mitchell@email.com",
                "phoneNumber": "+1 201 615 4913"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 10,
                    "day": 23
                },
                "sex": "male",
                "parentName": "Patricia Mitchell",
                "profilePhoto": "https://randomuser.me/api/portraits/men/12.jpg"
            },
            "financialRecords": {
                "debt": "$52,357"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": true,
            "studentName": "Christopher Mitchell",
            "id": 123456824
        }, {
            "contact": {
                "email": "sophia.wang@email.com",
                "phoneNumber": "+1 732 876 3764"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 7,
                    "day": 22
                },
                "sex": "female",
                "parentName": "David Wang",
                "profilePhoto": "https://randomuser.me/api/portraits/women/12.jpg"
            },
            "financialRecords": {
                "debt": "$45,858"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "business"
            },
            "isOnline": true,
            "studentName": "Sophia Wang",
            "id": 123456825
        }, {
            "contact": {
                "email": "christian.chen@email.com",
                "phoneNumber": "+1 201 119 1522"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 10,
                    "day": 6
                },
                "sex": "male",
                "parentName": "Karen Chen",
                "profilePhoto": "https://randomuser.me/api/portraits/men/13.jpg"
            },
            "financialRecords": {
                "debt": "$15,250"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Christian Chen",
            "id": 123456826
        }, {
            "contact": {
                "email": "madison.li@email.com",
                "phoneNumber": "+1 undefined 243 1029"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 4,
                    "day": 5
                },
                "sex": "female",
                "parentName": "Nathan Li",
                "profilePhoto": "https://randomuser.me/api/portraits/women/13.jpg"
            },
            "financialRecords": {
                "debt": "$57,798"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "business"
            },
            "isOnline": true,
            "studentName": "Madison Li",
            "id": 123456827
        }, {
            "contact": {
                "email": "anthony.chen@email.com",
                "phoneNumber": "+1 856 819 2473"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 4,
                    "day": 3
                },
                "sex": "male",
                "parentName": "Megan Chen",
                "profilePhoto": "https://randomuser.me/api/portraits/men/14.jpg"
            },
            "financialRecords": {
                "debt": "$42,652"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "Anthony Chen",
            "id": 123456828
        }, {
            "contact": {
                "email": "nicole.allen@email.com",
                "phoneNumber": "+1 201 791 5410"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 7,
                    "day": 12
                },
                "sex": "female",
                "parentName": "Joseph Allen",
                "profilePhoto": "https://randomuser.me/api/portraits/women/14.jpg"
            },
            "financialRecords": {
                "debt": "$34,697"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": true,
            "studentName": "Nicole Allen",
            "id": 123456829
        }, {
            "contact": {
                "email": "jason.braun@email.com",
                "phoneNumber": "+1 856 578 7935"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 12,
                    "day": 17
                },
                "sex": "male",
                "parentName": "Lillian Braun",
                "profilePhoto": "https://randomuser.me/api/portraits/men/15.jpg"
            },
            "financialRecords": {
                "debt": "$9,333"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "economics"
            },
            "isOnline": true,
            "studentName": "Jason Braun",
            "id": 123456830
        }, {
            "contact": {
                "email": "nicole.anderson@email.com",
                "phoneNumber": "+1 609 134 2845"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 10,
                    "day": 21
                },
                "sex": "female",
                "parentName": "Daniel Anderson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/15.jpg"
            },
            "financialRecords": {
                "debt": "$3,807"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "Nicole Anderson",
            "id": 123456831
        }, {
            "contact": {
                "email": "matthew.zhang@email.com",
                "phoneNumber": "+1 856 279 638"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 7,
                    "day": 12
                },
                "sex": "male",
                "parentName": "Ashley Zhang",
                "profilePhoto": "https://randomuser.me/api/portraits/men/16.jpg"
            },
            "financialRecords": {
                "debt": "$52,756"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Matthew Zhang",
            "id": 123456832
        }, {
            "contact": {
                "email": "patricia.white@email.com",
                "phoneNumber": "+1 609 766 8264"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 1,
                    "day": 30
                },
                "sex": "female",
                "parentName": "William White",
                "profilePhoto": "https://randomuser.me/api/portraits/women/16.jpg"
            },
            "financialRecords": {
                "debt": "$12,581"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "civil engineering"
            },
            "isOnline": true,
            "studentName": "Patricia White",
            "id": 123456833
        }, {
            "contact": {
                "email": "michael.miller@email.com",
                "phoneNumber": "+1 201 998 9253"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 9,
                    "day": 7
                },
                "sex": "male",
                "parentName": "Amy Miller",
                "profilePhoto": "https://randomuser.me/api/portraits/men/17.jpg"
            },
            "financialRecords": {
                "debt": "$48,123"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "business"
            },
            "isOnline": false,
            "studentName": "Michael Miller",
            "id": 123456834
        }, {
            "contact": {
                "email": "nicole.roberts@email.com",
                "phoneNumber": "+1 201 4 7090"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 1,
                    "day": 30
                },
                "sex": "female",
                "parentName": "Joseph Roberts",
                "profilePhoto": "https://randomuser.me/api/portraits/women/17.jpg"
            },
            "financialRecords": {
                "debt": "$47,952"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Nicole Roberts",
            "id": 123456835
        }, {
            "contact": {
                "email": "ethan.baker@email.com",
                "phoneNumber": "+1 undefined 193 8369"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 1,
                    "day": 21
                },
                "sex": "male",
                "parentName": "Heather Baker",
                "profilePhoto": "https://randomuser.me/api/portraits/men/18.jpg"
            },
            "financialRecords": {
                "debt": "$9,741"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "economics"
            },
            "isOnline": true,
            "studentName": "Ethan Baker",
            "id": 123456836
        }, {
            "contact": {
                "email": "sophia.roberts@email.com",
                "phoneNumber": "+1 201 394 1793"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 8,
                    "day": 31
                },
                "sex": "female",
                "parentName": "Nathan Roberts",
                "profilePhoto": "https://randomuser.me/api/portraits/women/18.jpg"
            },
            "financialRecords": {
                "debt": "$20,030"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Sophia Roberts",
            "id": 123456837
        }, {
            "contact": {
                "email": "mark.schneider@email.com",
                "phoneNumber": "+1 732 564 4379"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 3,
                    "day": 11
                },
                "sex": "male",
                "parentName": "Jennifer Schneider",
                "profilePhoto": "https://randomuser.me/api/portraits/men/19.jpg"
            },
            "financialRecords": {
                "debt": "$56,705"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Mark Schneider",
            "id": 123456838
        }, {
            "contact": {
                "email": "abigail.rogers@email.com",
                "phoneNumber": "+1 201 296 1814"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 6,
                    "day": 11
                },
                "sex": "female",
                "parentName": "Austin Rogers",
                "profilePhoto": "https://randomuser.me/api/portraits/women/19.jpg"
            },
            "financialRecords": {
                "debt": "$63,473"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "communications"
            },
            "isOnline": false,
            "studentName": "Abigail Rogers",
            "id": 123456839
        }, {
            "contact": {
                "email": "jonathan.wilson@email.com",
                "phoneNumber": "+1 732 258 1836"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 3,
                    "day": 26
                },
                "sex": "male",
                "parentName": "Olivia Wilson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/20.jpg"
            },
            "financialRecords": {
                "debt": "$687"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Jonathan Wilson",
            "id": 123456840
        }, {
            "contact": {
                "email": "emma.howard@email.com",
                "phoneNumber": "+1 856 672 2511"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 7,
                    "day": 15
                },
                "sex": "female",
                "parentName": "Tyler Howard",
                "profilePhoto": "https://randomuser.me/api/portraits/women/20.jpg"
            },
            "financialRecords": {
                "debt": "$62,976"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Emma Howard",
            "id": 123456841
        }, {
            "contact": {
                "email": "john.rodriguez@email.com",
                "phoneNumber": "+1 609 443 6414"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 8,
                    "day": 22
                },
                "sex": "male",
                "parentName": "Samantha Rodriguez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/21.jpg"
            },
            "financialRecords": {
                "debt": "$61,457"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "communications"
            },
            "isOnline": false,
            "studentName": "John Rodriguez",
            "id": 123456842
        }, {
            "contact": {
                "email": "stephanie.garnier@email.com",
                "phoneNumber": "+1 856 341 7745"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 10,
                    "day": 13
                },
                "sex": "female",
                "parentName": "Brandon Garnier",
                "profilePhoto": "https://randomuser.me/api/portraits/women/21.jpg"
            },
            "financialRecords": {
                "debt": "$74,872"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "electrical engineering"
            },
            "isOnline": true,
            "studentName": "Stephanie Garnier",
            "id": 123456843
        }, {
            "contact": {
                "email": "kyle.perez@email.com",
                "phoneNumber": "+1 908 24 210"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 5,
                    "day": 11
                },
                "sex": "male",
                "parentName": "Jessica Perez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/22.jpg"
            },
            "financialRecords": {
                "debt": "$3,002"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "communications"
            },
            "isOnline": true,
            "studentName": "Kyle Perez",
            "id": 123456844
        }, {
            "contact": {
                "email": "amanda.ali@email.com",
                "phoneNumber": "+1 732 881 7141"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 6,
                    "day": 5
                },
                "sex": "female",
                "parentName": "Zachary Ali",
                "profilePhoto": "https://randomuser.me/api/portraits/women/22.jpg"
            },
            "financialRecords": {
                "debt": "$75,130"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Amanda Ali",
            "id": 123456845
        }, {
            "contact": {
                "email": "christian.bonnet@email.com",
                "phoneNumber": "+1 201 104 5239"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 2,
                    "day": 15
                },
                "sex": "male",
                "parentName": "Jennifer Bonnet",
                "profilePhoto": "https://randomuser.me/api/portraits/men/23.jpg"
            },
            "financialRecords": {
                "debt": "$57,280"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Christian Bonnet",
            "id": 123456846
        }, {
            "contact": {
                "email": "sophia.dupont@email.com",
                "phoneNumber": "+1 856 402 4141"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 10
                },
                "sex": "female",
                "parentName": "Andrew Dupont",
                "profilePhoto": "https://randomuser.me/api/portraits/women/23.jpg"
            },
            "financialRecords": {
                "debt": "$47,685"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "Sophia Dupont",
            "id": 123456847
        }, {
            "contact": {
                "email": "robert.fournier@email.com",
                "phoneNumber": "+1 732 969 8910"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 15
                },
                "sex": "male",
                "parentName": "Amanda Fournier",
                "profilePhoto": "https://randomuser.me/api/portraits/men/24.jpg"
            },
            "financialRecords": {
                "debt": "$39,558"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "economics"
            },
            "isOnline": true,
            "studentName": "Robert Fournier",
            "id": 123456848
        }, {
            "contact": {
                "email": "stephanie.baker@email.com",
                "phoneNumber": "+1 908 791 2293"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 2,
                    "day": 4
                },
                "sex": "female",
                "parentName": "Robert Baker",
                "profilePhoto": "https://randomuser.me/api/portraits/women/24.jpg"
            },
            "financialRecords": {
                "debt": "$19,743"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "childhood education"
            },
            "isOnline": true,
            "studentName": "Stephanie Baker",
            "id": 123456849
        }, {
            "contact": {
                "email": "jonathan.baker@email.com",
                "phoneNumber": "+1 undefined 784 8362"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 4,
                    "day": 29
                },
                "sex": "male",
                "parentName": "Elizabeth Baker",
                "profilePhoto": "https://randomuser.me/api/portraits/men/25.jpg"
            },
            "financialRecords": {
                "debt": "$99,228"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Jonathan Baker",
            "id": 123456850
        }, {
            "contact": {
                "email": "patricia.thompson@email.com",
                "phoneNumber": "+1 201 790 5440"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 10,
                    "day": 1
                },
                "sex": "female",
                "parentName": "Ethan Thompson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/25.jpg"
            },
            "financialRecords": {
                "debt": "$81,505"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "politcal science"
            },
            "isOnline": false,
            "studentName": "Patricia Thompson",
            "id": 123456851
        }, {
            "contact": {
                "email": "samuel.taylor@email.com",
                "phoneNumber": "+1 609 358 3319"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 1,
                    "day": 31
                },
                "sex": "male",
                "parentName": "Michelle Taylor",
                "profilePhoto": "https://randomuser.me/api/portraits/men/26.jpg"
            },
            "financialRecords": {
                "debt": "$97,092"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "Samuel Taylor",
            "id": 123456852
        }, {
            "contact": {
                "email": "linda.carter@email.com",
                "phoneNumber": "+1 201 538 6045"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 4,
                    "day": 18
                },
                "sex": "female",
                "parentName": "Joshua Carter",
                "profilePhoto": "https://randomuser.me/api/portraits/women/26.jpg"
            },
            "financialRecords": {
                "debt": "$27,568"
            },
            "academicRecords": {
                "class": "VII C"
            },
            "isOnline": false,
            "studentName": "Linda Carter",
            "id": 123456853
        }, {
            "contact": {
                "email": "ryan.zhang@email.com",
                "phoneNumber": "+1 856 71 8220"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 7,
                    "day": 8
                },
                "sex": "male",
                "parentName": "Stephanie Zhang",
                "profilePhoto": "https://randomuser.me/api/portraits/men/27.jpg"
            },
            "financialRecords": {
                "debt": "$23,032"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "politcal science"
            },
            "isOnline": true,
            "studentName": "Ryan Zhang",
            "id": 123456854
        }, {
            "contact": {
                "email": "ashley.allen@email.com",
                "phoneNumber": "+1 732 840 1898"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 1,
                    "day": 15
                },
                "sex": "female",
                "parentName": "David Allen",
                "profilePhoto": "https://randomuser.me/api/portraits/women/27.jpg"
            },
            "financialRecords": {
                "debt": "$18,230"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Ashley Allen",
            "id": 123456855
        }, {
            "contact": {
                "email": "kevin.martinez@email.com",
                "phoneNumber": "+1 201 534 7785"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 6,
                    "day": 19
                },
                "sex": "male",
                "parentName": "Karen Martinez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/28.jpg"
            },
            "financialRecords": {
                "debt": "$13,171"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Kevin Martinez",
            "id": 123456856
        }, {
            "contact": {
                "email": "amy.robinson@email.com",
                "phoneNumber": "+1 856 155 8508"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 10,
                    "day": 23
                },
                "sex": "female",
                "parentName": "Gabriel Robinson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/28.jpg"
            },
            "financialRecords": {
                "debt": "$7,066"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "business"
            },
            "isOnline": false,
            "studentName": "Amy Robinson",
            "id": 123456857
        }, {
            "contact": {
                "email": "ethan.campbell@email.com",
                "phoneNumber": "+1 732 305 7044"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 9,
                    "day": 1
                },
                "sex": "male",
                "parentName": "Alexis Campbell",
                "profilePhoto": "https://randomuser.me/api/portraits/men/29.jpg"
            },
            "financialRecords": {
                "debt": "$95,715"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "civil engineering"
            },
            "isOnline": true,
            "studentName": "Ethan Campbell",
            "id": 123456858
        }, {
            "contact": {
                "email": "melissa.white@email.com",
                "phoneNumber": "+1 609 420 9875"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 10,
                    "day": 23
                },
                "sex": "female",
                "parentName": "Anthony White",
                "profilePhoto": "https://randomuser.me/api/portraits/women/29.jpg"
            },
            "financialRecords": {
                "debt": "$8,376"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "communications"
            },
            "isOnline": true,
            "studentName": "Melissa White",
            "id": 123456859
        }, {
            "contact": {
                "email": "christopher.thompson@email.com",
                "phoneNumber": "+1 201 900 7756"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 9,
                    "day": 28
                },
                "sex": "male",
                "parentName": "Kimberly Thompson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/30.jpg"
            },
            "financialRecords": {
                "debt": "$87,142"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Christopher Thompson",
            "id": 123456860
        }, {
            "contact": {
                "email": "isabella.garnier@email.com",
                "phoneNumber": "+1 856 545 7239"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 12,
                    "day": 6
                },
                "sex": "female",
                "parentName": "Jonathan Garnier",
                "profilePhoto": "https://randomuser.me/api/portraits/women/30.jpg"
            },
            "financialRecords": {
                "debt": "$28,182"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Isabella Garnier",
            "id": 123456861
        }, {
            "contact": {
                "email": "jason.wilson@email.com",
                "phoneNumber": "+1 201 816 52"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 29
                },
                "sex": "male",
                "parentName": "Patricia Wilson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/31.jpg"
            },
            "financialRecords": {
                "debt": "$99,071"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Jason Wilson",
            "id": 123456862
        }, {
            "contact": {
                "email": "kayla.green@email.com",
                "phoneNumber": "+1 201 12 197"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 3
                },
                "sex": "female",
                "parentName": "Ethan Green",
                "profilePhoto": "https://randomuser.me/api/portraits/women/31.jpg"
            },
            "financialRecords": {
                "debt": "$65,695"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "civil engineering"
            },
            "isOnline": true,
            "studentName": "Kayla Green",
            "id": 123456863
        }, {
            "contact": {
                "email": "alexander.dubois@email.com",
                "phoneNumber": "+1 609 575 9318"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 7,
                    "day": 20
                },
                "sex": "male",
                "parentName": "Kimberly Dubois",
                "profilePhoto": "https://randomuser.me/api/portraits/men/32.jpg"
            },
            "financialRecords": {
                "debt": "$18,549"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "civil engineering"
            },
            "isOnline": true,
            "studentName": "Alexander Dubois",
            "id": 123456864
        }, {
            "contact": {
                "email": "patricia.perez@email.com",
                "phoneNumber": "+1 undefined 868 1694"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 11,
                    "day": 18
                },
                "sex": "female",
                "parentName": "John Perez",
                "profilePhoto": "https://randomuser.me/api/portraits/women/32.jpg"
            },
            "financialRecords": {
                "debt": "$69,452"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Patricia Perez",
            "id": 123456865
        }, {
            "contact": {
                "email": "john.richardson@email.com",
                "phoneNumber": "+1 201 156 7265"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 1,
                    "day": 24
                },
                "sex": "male",
                "parentName": "Isabella Richardson",
                "profilePhoto": "https://randomuser.me/api/portraits/men/33.jpg"
            },
            "financialRecords": {
                "debt": "$46,616"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "business"
            },
            "isOnline": true,
            "studentName": "John Richardson",
            "id": 123456866
        }, {
            "contact": {
                "email": "heather.nguyen@email.com",
                "phoneNumber": "+1 609 720 4694"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 1,
                    "day": 16
                },
                "sex": "female",
                "parentName": "Joshua Nguyen",
                "profilePhoto": "https://randomuser.me/api/portraits/women/33.jpg"
            },
            "financialRecords": {
                "debt": "$58,975"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Heather Nguyen",
            "id": 123456867
        }, {
            "contact": {
                "email": "anthony.li@email.com",
                "phoneNumber": "+1 609 736 4440"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 7,
                    "day": 9
                },
                "sex": "male",
                "parentName": "Brittany Li",
                "profilePhoto": "https://randomuser.me/api/portraits/men/34.jpg"
            },
            "financialRecords": {
                "debt": "$288"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "Anthony Li",
            "id": 123456868
        }, {
            "contact": {
                "email": "elizabeth.wang@email.com",
                "phoneNumber": "+1 732 898 2982"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 3,
                    "day": 23
                },
                "sex": "female",
                "parentName": "Ethan Wang",
                "profilePhoto": "https://randomuser.me/api/portraits/women/34.jpg"
            },
            "financialRecords": {
                "debt": "$87,720"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Elizabeth Wang",
            "id": 123456869
        }, {
            "contact": {
                "email": "gabriel.chen@email.com",
                "phoneNumber": "+1 732 541 210"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 10,
                    "day": 27
                },
                "sex": "male",
                "parentName": "Nicole Chen",
                "profilePhoto": "https://randomuser.me/api/portraits/men/35.jpg"
            },
            "financialRecords": {
                "debt": "$44,780"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "politcal science"
            },
            "isOnline": true,
            "studentName": "Gabriel Chen",
            "id": 123456870
        }, {
            "contact": {
                "email": "melissa.martinez@email.com",
                "phoneNumber": "+1 609 82 1482"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 5,
                    "day": 7
                },
                "sex": "female",
                "parentName": "David Martinez",
                "profilePhoto": "https://randomuser.me/api/portraits/women/35.jpg"
            },
            "financialRecords": {
                "debt": "$46,124"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "Melissa Martinez",
            "id": 123456871
        }, {
            "contact": {
                "email": "nathan.perez@email.com",
                "phoneNumber": "+1 732 279 9344"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 7,
                    "day": 23
                },
                "sex": "male",
                "parentName": "Lisa Perez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/36.jpg"
            },
            "financialRecords": {
                "debt": "$5,979"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "Nathan Perez",
            "id": 123456872
        }, {
            "contact": {
                "email": "michelle.harris@email.com",
                "phoneNumber": "+1 609 22 80"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 22
                },
                "sex": "female",
                "parentName": "Justin Harris",
                "profilePhoto": "https://randomuser.me/api/portraits/women/36.jpg"
            },
            "financialRecords": {
                "debt": "$37,723"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "Michelle Harris",
            "id": 123456873
        }, {
            "contact": {
                "email": "thomas.roberts@email.com",
                "phoneNumber": "+1 908 700 8084"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 5,
                    "day": 14
                },
                "sex": "male",
                "parentName": "Sophia Roberts",
                "profilePhoto": "https://randomuser.me/api/portraits/men/37.jpg"
            },
            "financialRecords": {
                "debt": "$9,969"
            },
            "academicRecords": {
                "class": "VII C"
            },
            "isOnline": false,
            "studentName": "Thomas Roberts",
            "id": 123456874
        }, {
            "contact": {
                "email": "emma.davis@email.com",
                "phoneNumber": "+1 908 878 1449"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 1,
                    "day": 13
                },
                "sex": "female",
                "parentName": "Nicholas Davis",
                "profilePhoto": "https://randomuser.me/api/portraits/women/37.jpg"
            },
            "financialRecords": {
                "debt": "$74,208"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Emma Davis",
            "id": 123456875
        }, {
            "contact": {
                "email": "andrew.fournier@email.com",
                "phoneNumber": "+1 732 236 9438"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 7,
                    "day": 27
                },
                "sex": "male",
                "parentName": "Mary Fournier",
                "profilePhoto": "https://randomuser.me/api/portraits/men/38.jpg"
            },
            "financialRecords": {
                "debt": "$98,906"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Andrew Fournier",
            "id": 123456876
        }, {
            "contact": {
                "email": "ashley.hall@email.com",
                "phoneNumber": "+1 609 267 9175"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 9,
                    "day": 31
                },
                "sex": "female",
                "parentName": "Michael Hall",
                "profilePhoto": "https://randomuser.me/api/portraits/women/38.jpg"
            },
            "financialRecords": {
                "debt": "$95,449"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "computer science"
            },
            "isOnline": true,
            "studentName": "Ashley Hall",
            "id": 123456877
        }, {
            "contact": {
                "email": "ryan.green@email.com",
                "phoneNumber": "+1 908 677 3915"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 6,
                    "day": 20
                },
                "sex": "male",
                "parentName": "Amy Green",
                "profilePhoto": "https://randomuser.me/api/portraits/men/39.jpg"
            },
            "financialRecords": {
                "debt": "$14,555"
            },
            "academicRecords": {
                "class": "VII A"
            },
            "isOnline": false,
            "studentName": "Ryan Green",
            "id": 123456878
        }, {
            "contact": {
                "email": "sophia.moore@email.com",
                "phoneNumber": "+1 856 341 3816"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 8,
                    "day": 2
                },
                "sex": "female",
                "parentName": "Zachary Moore",
                "profilePhoto": "https://randomuser.me/api/portraits/women/39.jpg"
            },
            "financialRecords": {
                "debt": "$28,450"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "nursing"
            },
            "isOnline": false,
            "studentName": "Sophia Moore",
            "id": 123456879
        }, {
            "contact": {
                "email": "andrew.martinez@email.com",
                "phoneNumber": "+1 undefined 336 7592"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 9,
                    "day": 6
                },
                "sex": "male",
                "parentName": "Samantha Martinez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/40.jpg"
            },
            "financialRecords": {
                "debt": "$63,181"
            },
            "academicRecords": {
                "class": "VII C"
            },
            "isOnline": false,
            "studentName": "Andrew Martinez",
            "id": 123456880
        }, {
            "contact": {
                "email": "brittany.wright@email.com",
                "phoneNumber": "+1 732 377 9001"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 4,
                    "day": 18
                },
                "sex": "female",
                "parentName": "Michael Wright",
                "profilePhoto": "https://randomuser.me/api/portraits/women/40.jpg"
            },
            "financialRecords": {
                "debt": "$35,159"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Brittany Wright",
            "id": 123456881
        }, {
            "contact": {
                "email": "justin.davis@email.com",
                "phoneNumber": "+1 609 958 2133"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 12,
                    "day": 26
                },
                "sex": "male",
                "parentName": "Amy Davis",
                "profilePhoto": "https://randomuser.me/api/portraits/men/41.jpg"
            },
            "financialRecords": {
                "debt": "$75,818"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Justin Davis",
            "id": 123456882
        }, {
            "contact": {
                "email": "kayla.rodriguez@email.com",
                "phoneNumber": "+1 732 305 6960"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 20
                },
                "sex": "female",
                "parentName": "Justin Rodriguez",
                "profilePhoto": "https://randomuser.me/api/portraits/women/41.jpg"
            },
            "financialRecords": {
                "debt": "$78,701"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "computer science"
            },
            "isOnline": false,
            "studentName": "Kayla Rodriguez",
            "id": 123456883
        }, {
            "contact": {
                "email": "michael.davis@email.com",
                "phoneNumber": "+1 908 284 4350"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 9,
                    "day": 15
                },
                "sex": "male",
                "parentName": "Hannah Davis",
                "profilePhoto": "https://randomuser.me/api/portraits/men/42.jpg"
            },
            "financialRecords": {
                "debt": "$32,417"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "Michael Davis",
            "id": 123456884
        }, {
            "contact": {
                "email": "alexis.liu@email.com",
                "phoneNumber": "+1 undefined 819 2327"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 12,
                    "day": 12
                },
                "sex": "female",
                "parentName": "Kyle Liu",
                "profilePhoto": "https://randomuser.me/api/portraits/women/42.jpg"
            },
            "financialRecords": {
                "debt": "$73,869"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "architectural engineering"
            },
            "isOnline": true,
            "studentName": "Alexis Liu",
            "id": 123456885
        }, {
            "contact": {
                "email": "samuel.garnier@email.com",
                "phoneNumber": "+1 732 759 6354"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 9,
                    "day": 14
                },
                "sex": "male",
                "parentName": "Samantha Garnier",
                "profilePhoto": "https://randomuser.me/api/portraits/men/43.jpg"
            },
            "financialRecords": {
                "debt": "$83,653"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Samuel Garnier",
            "id": 123456886
        }, {
            "contact": {
                "email": "lisa.lavigne@email.com",
                "phoneNumber": "+1 856 699 5322"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 10
                },
                "sex": "female",
                "parentName": "Jonathan Lavigne",
                "profilePhoto": "https://randomuser.me/api/portraits/women/43.jpg"
            },
            "financialRecords": {
                "debt": "$12,438"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Lisa Lavigne",
            "id": 123456887
        }, {
            "contact": {
                "email": "jason.dubois@email.com",
                "phoneNumber": "+1 609 348 374"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 2,
                    "day": 17
                },
                "sex": "male",
                "parentName": "Sophia Dubois",
                "profilePhoto": "https://randomuser.me/api/portraits/men/44.jpg"
            },
            "financialRecords": {
                "debt": "$5,120"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "Jason Dubois",
            "id": 123456888
        }, {
            "contact": {
                "email": "amy.moore@email.com",
                "phoneNumber": "+1 201 954 5865"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 5,
                    "day": 2
                },
                "sex": "female",
                "parentName": "Kevin Moore",
                "profilePhoto": "https://randomuser.me/api/portraits/women/44.jpg"
            },
            "financialRecords": {
                "debt": "$8,870"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "business"
            },
            "isOnline": true,
            "studentName": "Amy Moore",
            "id": 123456889
        }, {
            "contact": {
                "email": "christopher.liu@email.com",
                "phoneNumber": "+1 609 16 3931"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 4,
                    "day": 10
                },
                "sex": "male",
                "parentName": "Amy Liu",
                "profilePhoto": "https://randomuser.me/api/portraits/men/45.jpg"
            },
            "financialRecords": {
                "debt": "$54,352"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "psychology"
            },
            "isOnline": true,
            "studentName": "Christopher Liu",
            "id": 123456890
        }, {
            "contact": {
                "email": "amanda.davis@email.com",
                "phoneNumber": "+1 201 256 7377"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 4,
                    "day": 22
                },
                "sex": "female",
                "parentName": "Nicholas Davis",
                "profilePhoto": "https://randomuser.me/api/portraits/women/45.jpg"
            },
            "financialRecords": {
                "debt": "$63,901"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Amanda Davis",
            "id": 123456891
        }, {
            "contact": {
                "email": "samuel.gonzalez@email.com",
                "phoneNumber": "+1 609 927 8405"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 4,
                    "day": 10
                },
                "sex": "male",
                "parentName": "Amy Gonzalez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/46.jpg"
            },
            "financialRecords": {
                "debt": "$92,801"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "psychology"
            },
            "isOnline": true,
            "studentName": "Samuel Gonzalez",
            "id": 123456892
        }, {
            "contact": {
                "email": "lisa.bonnet@email.com",
                "phoneNumber": "+1 856 332 6719"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 14
                },
                "sex": "female",
                "parentName": "Samuel Bonnet",
                "profilePhoto": "https://randomuser.me/api/portraits/women/46.jpg"
            },
            "financialRecords": {
                "debt": "$97,962"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Lisa Bonnet",
            "id": 123456893
        }, {
            "contact": {
                "email": "jonathan.lee@email.com",
                "phoneNumber": "+1 856 674 5703"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 1,
                    "day": 24
                },
                "sex": "male",
                "parentName": "Karen Lee",
                "profilePhoto": "https://randomuser.me/api/portraits/men/47.jpg"
            },
            "financialRecords": {
                "debt": "$98,675"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "literature"
            },
            "isOnline": false,
            "studentName": "Jonathan Lee",
            "id": 123456894
        }, {
            "contact": {
                "email": "abigail.martinez@email.com",
                "phoneNumber": "+1 856 712 5446"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 7,
                    "day": 14
                },
                "sex": "female",
                "parentName": "Kyle Martinez",
                "profilePhoto": "https://randomuser.me/api/portraits/women/47.jpg"
            },
            "financialRecords": {
                "debt": "$113"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Abigail Martinez",
            "id": 123456895
        }, {
            "contact": {
                "email": "kyle.green@email.com",
                "phoneNumber": "+1 908 53 4322"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 3,
                    "day": 1
                },
                "sex": "male",
                "parentName": "Amanda Green",
                "profilePhoto": "https://randomuser.me/api/portraits/men/48.jpg"
            },
            "financialRecords": {
                "debt": "$93,103"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Kyle Green",
            "id": 123456896
        }, {
            "contact": {
                "email": "amanda.young@email.com",
                "phoneNumber": "+1 732 213 9256"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 6,
                    "day": 5
                },
                "sex": "female",
                "parentName": "John Young",
                "profilePhoto": "https://randomuser.me/api/portraits/women/48.jpg"
            },
            "financialRecords": {
                "debt": "$70,363"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "economics"
            },
            "isOnline": false,
            "studentName": "Amanda Young",
            "id": 123456897
        }, {
            "contact": {
                "email": "nathan.dupont@email.com",
                "phoneNumber": "+1 609 194 428"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 10,
                    "day": 9
                },
                "sex": "male",
                "parentName": "Madison Dupont",
                "profilePhoto": "https://randomuser.me/api/portraits/men/49.jpg"
            },
            "financialRecords": {
                "debt": "$48,269"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "chemical engineering"
            },
            "isOnline": false,
            "studentName": "Nathan Dupont",
            "id": 123456898
        }, {
            "contact": {
                "email": "michelle.adams@email.com",
                "phoneNumber": "+1 908 362 9506"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 4,
                    "day": 20
                },
                "sex": "female",
                "parentName": "Jonathan Adams",
                "profilePhoto": "https://randomuser.me/api/portraits/women/49.jpg"
            },
            "financialRecords": {
                "debt": "$46,307"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "childhood education"
            },
            "isOnline": true,
            "studentName": "Michelle Adams",
            "id": 123456899
        }, {
            "contact": {
                "email": "james.liang@email.com",
                "phoneNumber": "+1 908 855 5903"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 2,
                    "day": 2
                },
                "sex": "male",
                "parentName": "Abigail Liang",
                "profilePhoto": "https://randomuser.me/api/portraits/men/50.jpg"
            },
            "financialRecords": {
                "debt": "$74,207"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "James Liang",
            "id": 123456900
        }, {
            "contact": {
                "email": "emily.walker@email.com",
                "phoneNumber": "+1 732 19 9303"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 2,
                    "day": 14
                },
                "sex": "female",
                "parentName": "John Walker",
                "profilePhoto": "https://randomuser.me/api/portraits/women/50.jpg"
            },
            "financialRecords": {
                "debt": "$53,331"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Emily Walker",
            "id": 123456901
        }, {
            "contact": {
                "email": "justin.braun@email.com",
                "phoneNumber": "+1 908 22 7944"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 7,
                    "day": 29
                },
                "sex": "male",
                "parentName": "Lisa Braun",
                "profilePhoto": "https://randomuser.me/api/portraits/men/51.jpg"
            },
            "financialRecords": {
                "debt": "$6,370"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "psychology"
            },
            "isOnline": false,
            "studentName": "Justin Braun",
            "id": 123456902
        }, {
            "contact": {
                "email": "angela.moore@email.com",
                "phoneNumber": "+1 856 520 9916"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 13
                },
                "sex": "female",
                "parentName": "John Moore",
                "profilePhoto": "https://randomuser.me/api/portraits/women/51.jpg"
            },
            "financialRecords": {
                "debt": "$40,166"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "mechanical engineering"
            },
            "isOnline": false,
            "studentName": "Angela Moore",
            "id": 123456903
        }, {
            "contact": {
                "email": "samuel.flores@email.com",
                "phoneNumber": "+1 856 275 196"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 10,
                    "day": 27
                },
                "sex": "male",
                "parentName": "Stephanie Flores",
                "profilePhoto": "https://randomuser.me/api/portraits/men/52.jpg"
            },
            "financialRecords": {
                "debt": "$15,251"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "business"
            },
            "isOnline": false,
            "studentName": "Samuel Flores",
            "id": 123456904
        }, {
            "contact": {
                "email": "susan.nelson@email.com",
                "phoneNumber": "+1 201 19 3441"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 5,
                    "day": 5
                },
                "sex": "female",
                "parentName": "Andrew Nelson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/52.jpg"
            },
            "financialRecords": {
                "debt": "$51,124"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "literature"
            },
            "isOnline": true,
            "studentName": "Susan Nelson",
            "id": 123456905
        }, {
            "contact": {
                "email": "william.rogers@email.com",
                "phoneNumber": "+1 undefined 387 485"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 12,
                    "day": 23
                },
                "sex": "male",
                "parentName": "Olivia Rogers",
                "profilePhoto": "https://randomuser.me/api/portraits/men/53.jpg"
            },
            "financialRecords": {
                "debt": "$41,441"
            },
            "academicRecords": {
                "class": "VII B"
            },
            "isOnline": false,
            "studentName": "William Rogers",
            "id": 123456906
        }, {
            "contact": {
                "email": "patricia.harris@email.com",
                "phoneNumber": "+1 201 322 2648"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 6,
                    "day": 21
                },
                "sex": "female",
                "parentName": "Christopher Harris",
                "profilePhoto": "https://randomuser.me/api/portraits/women/53.jpg"
            },
            "financialRecords": {
                "debt": "$89,818"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "Patricia Harris",
            "id": 123456907
        }, {
            "contact": {
                "email": "michael.nguyen@email.com",
                "phoneNumber": "+1 908 645 9504"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 4,
                    "day": 8
                },
                "sex": "male",
                "parentName": "Melissa Nguyen",
                "profilePhoto": "https://randomuser.me/api/portraits/men/54.jpg"
            },
            "financialRecords": {
                "debt": "$15,075"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "architectural engineering"
            },
            "isOnline": false,
            "studentName": "Michael Nguyen",
            "id": 123456908
        }, {
            "contact": {
                "email": "megan.wang@email.com",
                "phoneNumber": "+1 732 343 1801"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 3
                },
                "sex": "female",
                "parentName": "Kyle Wang",
                "profilePhoto": "https://randomuser.me/api/portraits/women/54.jpg"
            },
            "financialRecords": {
                "debt": "$22,205"
            },
            "academicRecords": {
                "class": "VII B"
            },
            "isOnline": false,
            "studentName": "Megan Wang",
            "id": 123456909
        }, {
            "contact": {
                "email": "ethan.wright@email.com",
                "phoneNumber": "+1 908 325 3291"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 7,
                    "day": 3
                },
                "sex": "male",
                "parentName": "Jennifer Wright",
                "profilePhoto": "https://randomuser.me/api/portraits/men/55.jpg"
            },
            "financialRecords": {
                "debt": "$54,904"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "electrical engineering"
            },
            "isOnline": false,
            "studentName": "Ethan Wright",
            "id": 123456910
        }, {
            "contact": {
                "email": "lisa.wright@email.com",
                "phoneNumber": "+1 609 983 490"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 3
                },
                "sex": "female",
                "parentName": "Anthony Wright",
                "profilePhoto": "https://randomuser.me/api/portraits/women/55.jpg"
            },
            "financialRecords": {
                "debt": "$10,480"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Lisa Wright",
            "id": 123456911
        }, {
            "contact": {
                "email": "jack.perez@email.com",
                "phoneNumber": "+1 609 535 952"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 6,
                    "day": 11
                },
                "sex": "male",
                "parentName": "Linda Perez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/56.jpg"
            },
            "financialRecords": {
                "debt": "$47,359"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Jack Perez",
            "id": 123456912
        }, {
            "contact": {
                "email": "nicole.thompson@email.com",
                "phoneNumber": "+1 732 334 833"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 8,
                    "day": 8
                },
                "sex": "female",
                "parentName": "Nathan Thompson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/56.jpg"
            },
            "financialRecords": {
                "debt": "$29,708"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "finance"
            },
            "isOnline": false,
            "studentName": "Nicole Thompson",
            "id": 123456913
        }, {
            "contact": {
                "email": "john.mitchell@email.com",
                "phoneNumber": "+1 856 762 7732"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 10,
                    "day": 25
                },
                "sex": "male",
                "parentName": "Linda Mitchell",
                "profilePhoto": "https://randomuser.me/api/portraits/men/57.jpg"
            },
            "financialRecords": {
                "debt": "$13,832"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "John Mitchell",
            "id": 123456914
        }, {
            "contact": {
                "email": "jennifer.walker@email.com",
                "phoneNumber": "+1 732 660 578"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 2,
                    "day": 8
                },
                "sex": "female",
                "parentName": "Brian Walker",
                "profilePhoto": "https://randomuser.me/api/portraits/women/57.jpg"
            },
            "financialRecords": {
                "debt": "$37,575"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "Jennifer Walker",
            "id": 123456915
        }, {
            "contact": {
                "email": "kevin.allen@email.com",
                "phoneNumber": "+1 609 124 1095"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 8,
                    "day": 14
                },
                "sex": "male",
                "parentName": "Megan Allen",
                "profilePhoto": "https://randomuser.me/api/portraits/men/58.jpg"
            },
            "financialRecords": {
                "debt": "$63,732"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "nursing"
            },
            "isOnline": true,
            "studentName": "Kevin Allen",
            "id": 123456916
        }, {
            "contact": {
                "email": "michelle.ali@email.com",
                "phoneNumber": "+1 609 253 1032"
            },
            "bio": {
                "dob": {
                    "year": 2003,
                    "month": 4,
                    "day": 15
                },
                "sex": "female",
                "parentName": "Zachary Ali",
                "profilePhoto": "https://randomuser.me/api/portraits/women/58.jpg"
            },
            "financialRecords": {
                "debt": "$82,816"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": true,
            "studentName": "Michelle Ali",
            "id": 123456917
        }, {
            "contact": {
                "email": "anthony.zhang@email.com",
                "phoneNumber": "+1 732 6 1528"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 3,
                    "day": 10
                },
                "sex": "male",
                "parentName": "Alexis Zhang",
                "profilePhoto": "https://randomuser.me/api/portraits/men/59.jpg"
            },
            "financialRecords": {
                "debt": "$89,413"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Anthony Zhang",
            "id": 123456918
        }, {
            "contact": {
                "email": "karen.thompson@email.com",
                "phoneNumber": "+1 609 640 1355"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 12,
                    "day": 19
                },
                "sex": "female",
                "parentName": "Austin Thompson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/59.jpg"
            },
            "financialRecords": {
                "debt": "$44,999"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "childhood education"
            },
            "isOnline": false,
            "studentName": "Karen Thompson",
            "id": 123456919
        }, {
            "contact": {
                "email": "joseph.gonzalez@email.com",
                "phoneNumber": "+1 856 834 3213"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 8,
                    "day": 28
                },
                "sex": "male",
                "parentName": "Samantha Gonzalez",
                "profilePhoto": "https://randomuser.me/api/portraits/men/60.jpg"
            },
            "financialRecords": {
                "debt": "$37,429"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "economics"
            },
            "isOnline": true,
            "studentName": "Joseph Gonzalez",
            "id": 123456920
        }, {
            "contact": {
                "email": "kayla.thompson@email.com",
                "phoneNumber": "+1 732 184 8701"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 10,
                    "day": 30
                },
                "sex": "female",
                "parentName": "Brian Thompson",
                "profilePhoto": "https://randomuser.me/api/portraits/women/60.jpg"
            },
            "financialRecords": {
                "debt": "$76,536"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "civil engineering"
            },
            "isOnline": false,
            "studentName": "Kayla Thompson",
            "id": 123456921
        }, {
            "contact": {
                "email": "christopher.zhang@email.com",
                "phoneNumber": "+1 609 593 9299"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 4,
                    "day": 1
                },
                "sex": "male",
                "parentName": "Nicole Zhang",
                "profilePhoto": "https://randomuser.me/api/portraits/men/61.jpg"
            },
            "financialRecords": {
                "debt": "$46,912"
            },
            "academicRecords": {
                "class": "VII A",
                "major": "architectural engineering"
            },
            "isOnline": true,
            "studentName": "Christopher Zhang",
            "id": 123456922
        }, {
            "contact": {
                "email": "susan.lee@email.com",
                "phoneNumber": "+1 908 628 5596"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 1,
                    "day": 27
                },
                "sex": "female",
                "parentName": "Michael Lee",
                "profilePhoto": "https://randomuser.me/api/portraits/women/61.jpg"
            },
            "financialRecords": {
                "debt": "$93,673"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "chemical engineering"
            },
            "isOnline": true,
            "studentName": "Susan Lee",
            "id": 123456923
        }, {
            "contact": {
                "email": "andrew.lewis@email.com",
                "phoneNumber": "+1 856 444 4898"
            },
            "bio": {
                "dob": {
                    "year": 2002,
                    "month": 8,
                    "day": 4
                },
                "sex": "male",
                "parentName": "Emily Lewis",
                "profilePhoto": "https://randomuser.me/api/portraits/men/62.jpg"
            },
            "financialRecords": {
                "debt": "$77,246"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "civil engineering"
            },
            "isOnline": true,
            "studentName": "Andrew Lewis",
            "id": 123456924
        }, {
            "contact": {
                "email": "karen.adams@email.com",
                "phoneNumber": "+1 732 718 5845"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 2,
                    "day": 19
                },
                "sex": "female",
                "parentName": "Justin Adams",
                "profilePhoto": "https://randomuser.me/api/portraits/women/62.jpg"
            },
            "financialRecords": {
                "debt": "$35,434"
            },
            "academicRecords": {
                "class": "VII B"
            },
            "isOnline": false,
            "studentName": "Karen Adams",
            "id": 123456925
        }, {
            "contact": {
                "email": "david.hill@email.com",
                "phoneNumber": "+1 201 364 3541"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 4,
                    "day": 17
                },
                "sex": "male",
                "parentName": "Lisa Hill",
                "profilePhoto": "https://randomuser.me/api/portraits/men/63.jpg"
            },
            "financialRecords": {
                "debt": "$75,258"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "mechanical engineering"
            },
            "isOnline": true,
            "studentName": "David Hill",
            "id": 123456926
        }, {
            "contact": {
                "email": "abigail.lavigne@email.com",
                "phoneNumber": "+1 908 483 1548"
            },
            "bio": {
                "dob": {
                    "year": 1999,
                    "month": 6,
                    "day": 28
                },
                "sex": "female",
                "parentName": "Mark Lavigne",
                "profilePhoto": "https://randomuser.me/api/portraits/women/63.jpg"
            },
            "financialRecords": {
                "debt": "$63,249"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "finance"
            },
            "isOnline": true,
            "studentName": "Abigail Lavigne",
            "id": 123456927
        }, {
            "contact": {
                "email": "jacob.scott@email.com",
                "phoneNumber": "+1 732 958 1876"
            },
            "bio": {
                "dob": {
                    "year": 2001,
                    "month": 7,
                    "day": 23
                },
                "sex": "male",
                "parentName": "Stephanie Scott",
                "profilePhoto": "https://randomuser.me/api/portraits/men/64.jpg"
            },
            "financialRecords": {
                "debt": "$3,961"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "Jacob Scott",
            "id": 123456928
        }, {
            "contact": {
                "email": "hannah.garnier@email.com",
                "phoneNumber": "+1 609 973 2453"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 9,
                    "day": 16
                },
                "sex": "female",
                "parentName": "Jacob Garnier",
                "profilePhoto": "https://randomuser.me/api/portraits/women/64.jpg"
            },
            "financialRecords": {
                "debt": "$47,783"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "biology"
            },
            "isOnline": true,
            "studentName": "Hannah Garnier",
            "id": 123456929
        }, {
            "contact": {
                "email": "james.zimmerman@email.com",
                "phoneNumber": "+1 856 99 2801"
            },
            "bio": {
                "dob": {
                    "year": 2000,
                    "month": 5,
                    "day": 1
                },
                "sex": "male",
                "parentName": "Karen Zimmerman",
                "profilePhoto": "https://randomuser.me/api/portraits/men/65.jpg"
            },
            "financialRecords": {
                "debt": "$47,988"
            },
            "academicRecords": {
                "class": "VII C",
                "major": "biology"
            },
            "isOnline": false,
            "studentName": "James Zimmerman",
            "id": 123456930
        }, {
            "contact": {
                "email": "susan.wright@email.com",
                "phoneNumber": "+1 908 795 7860"
            },
            "bio": {
                "dob": {
                    "year": 1998,
                    "month": 5,
                    "day": 6
                },
                "sex": "female",
                "parentName": "James Wright",
                "profilePhoto": "https://randomuser.me/api/portraits/women/65.jpg"
            },
            "financialRecords": {
                "debt": "$69,711"
            },
            "academicRecords": {
                "class": "VII B",
                "major": "business"
            },
            "isOnline": false,
            "studentName": "Susan Wright",
            "id": 123456931
        }],
        messages: [{
            "profilePhoto": "https://randomuser.me/api/portraits/women/32.jpg",
            "studentName": "Abigail Flores",
            'incomingMessages' :['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum curabitur vitae nunc sed velit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque.']
        }, {
            "profilePhoto": "https://randomuser.me/api/portraits/men/33.jpg",
            "studentName": "Christian Nguyen",
            'incomingMessages' :['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia quis vel eros donec ac.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra diam sit amet nisl. Purus in mollis nunc sed id semper risus in.']
        }, {
            "profilePhoto": "https://randomuser.me/api/portraits/men/34.jpg",
            "studentName": "Thomas White",
            'incomingMessages' :['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum ut tristique et egestas.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi etiam dignissim diam quis enim lobortis. Interdum posuere lorem ipsum dolor sit.']
        }, {
            "profilePhoto": "https://randomuser.me/api/portraits/women/37.jpg",
            "studentName": "Alexis Müller",
            'incomingMessages' :['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum ut tristique et egestas.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi etiam dignissim diam quis enim lobortis. Interdum posuere lorem ipsum dolor sit.']
        }, {
            "profilePhoto": "https://randomuser.me/api/portraits/men/36.jpg",
            "studentName": "Nathan Edwards",
            'incomingMessages' :['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At auctor urna nunc id cursus metus aliquam eleifend mi.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi non arcu risus quis varius quam. Enim diam vulputate ut pharetra.']
        }, {
            "profilePhoto": "https://randomuser.me/api/portraits/men/37.jpg",
            "studentName": "Ryan White",
            'incomingMessages' :['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum curabitur vitae nunc sed velit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque.']
        }, {
            "profilePhoto": "https://randomuser.me/api/portraits/women/39.jpg",
            "studentName": "Megan Schmidt",
            'incomingMessages' :['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia quis vel eros donec ac.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra diam sit amet nisl. Purus in mollis nunc sed id semper risus in.']
        }, {
            "profilePhoto": "https://randomuser.me/api/portraits/women/40.jpg",
            "studentName": "Emma Toussaint",
            'incomingMessages' :['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum ut tristique et egestas.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi etiam dignissim diam quis enim lobortis. Interdum posuere lorem ipsum dolor sit.']
        }, {
            "profilePhoto": "https://randomuser.me/api/portraits/men/41.jpg",
            "studentName": "Robert Adams",
            'incomingMessages' :['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio tempor orci dapibus ultrices in iaculis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque.']
        }, {
            "profilePhoto": "https://randomuser.me/api/portraits/men/42.jpg",
            "studentName": "Jacob Young",
            'incomingMessages' :['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At auctor urna nunc id cursus metus aliquam eleifend mi.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi non arcu risus quis varius quam. Enim diam vulputate ut pharetra.']
        }, {
            "profilePhoto": "https://randomuser.me/api/portraits/men/43.jpg",
            "studentName": "Mark Thompson",
            'incomingMessages' :['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum curabitur vitae nunc sed velit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque.']
        }, {
            "profilePhoto": "https://randomuser.me/api/portraits/women/43.jpg",
            "studentName": "Karen Campbell",
            'incomingMessages' :['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia quis vel eros donec ac.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra diam sit amet nisl. Purus in mollis nunc sed id semper risus in.']
        }, {
            "profilePhoto": "https://randomuser.me/api/portraits/men/44.jpg",
            "studentName": "Samuel Green",
            'incomingMessages' :['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum ut tristique et egestas.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi etiam dignissim diam quis enim lobortis. Interdum posuere lorem ipsum dolor sit.']
        }, {
            "profilePhoto": "https://randomuser.me/api/portraits/women/44.jpg",
            "studentName": "Michelle Jones",
            'incomingMessages' :['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio tempor orci dapibus ultrices in iaculis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque.']
        }, {
            "profilePhoto": "https://randomuser.me/api/portraits/men/45.jpg",
            "studentName": "James Brown",
            'incomingMessages' :['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At auctor urna nunc id cursus metus aliquam eleifend mi.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi non arcu risus quis varius quam. Enim diam vulputate ut pharetra.']
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