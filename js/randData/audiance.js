let globalVar = {}, environment = 'cold', gifMode = false;
const randAudiance = [
    { "name": "user0", "like": 21, "comment": 20 },
    { "name": "user1", "like": 19, "comment": 7 },
    { "name": "user2", "like": 27, "comment": 18 },
    { "name": "user3", "like": 12, "comment": 9 },
    { "name": "user4", "like": 25, "comment": 7 },
    { "name": "user5", "like": 29, "comment": 15 },
    { "name": "user6", "like": 17, "comment": 19 },
    { "name": "user7", "like": 20, "comment": 9 },
    { "name": "user8", "like": 21, "comment": 18 },
    { "name": "user9", "like": 21, "comment": 15 },
    { "name": "user10", "like": 35, "comment": 15 },
    { "name": "user11", "like": 11, "comment": 14 },
    { "name": "user12", "like": 41, "comment": 15 },
    { "name": "user13", "like": 39, "comment": 18 },
    { "name": "user14", "like": 24, "comment": 7 },
    { "name": "user15", "like": 40, "comment": 7 },
    { "name": "user16", "like": 36, "comment": 10 },
    { "name": "user17", "like": 26, "comment": 11 },
    { "name": "user18", "like": 11, "comment": 6 },
    { "name": "user19", "like": 49, "comment": 6 },
    { "name": "user20", "like": 19, "comment": 18 },
    { "name": "user21", "like": 20, "comment": 12 },
    { "name": "user22", "like": 29, "comment": 17 },
    { "name": "user23", "like": 38, "comment": 14 },
    { "name": "user24", "like": 20, "comment": 14 },
    { "name": "user25", "like": 40, "comment": 9 },
    { "name": "user26", "like": 36, "comment": 20 },
    { "name": "user27", "like": 22, "comment": 17 },
    { "name": "user28", "like": 30, "comment": 19 },
    { "name": "user29", "like": 24, "comment": 6 },
    { "name": "user30", "like": 27, "comment": 19 },
    { "name": "user31", "like": 11, "comment": 18 },
    { "name": "user32", "like": 46, "comment": 8 },
    { "name": "user33", "like": 32, "comment": 6 },
    { "name": "user34", "like": 22, "comment": 6 },
    { "name": "user35", "like": 27, "comment": 10 },
    { "name": "user36", "like": 49, "comment": 6 },
    { "name": "user37", "like": 11, "comment": 12 },
    { "name": "user38", "like": 28, "comment": 19 },
    { "name": "user39", "like": 16, "comment": 15 },
    { "name": "user40", "like": 15, "comment": 20 },
    { "name": "user41", "like": 15, "comment": 13 },
    { "name": "user42", "like": 16, "comment": 17 },
    { "name": "user43", "like": 40, "comment": 13 },
    { "name": "user44", "like": 30, "comment": 13 },
    { "name": "user45", "like": 48, "comment": 16 },
    { "name": "user46", "like": 49, "comment": 9 },
    { "name": "user47", "like": 47, "comment": 8 },
    { "name": "user48", "like": 37, "comment": 9 },
    { "name": "user49", "like": 23, "comment": 10 },
    { "name": "user50", "like": 14, "comment": 6 },
    { "name": "user51", "like": 37, "comment": 19 },
    { "name": "user52", "like": 26, "comment": 13 },
    { "name": "user53", "like": 49, "comment": 10 },
    { "name": "user54", "like": 15, "comment": 19 },
    { "name": "user55", "like": 12, "comment": 19 },
    { "name": "user56", "like": 18, "comment": 17 },
    { "name": "user57", "like": 40, "comment": 7 },
    { "name": "user58", "like": 48, "comment": 16 },
    { "name": "user59", "like": 34, "comment": 8 },
    { "name": "user60", "like": 19, "comment": 17 },
    { "name": "user61", "like": 32, "comment": 11 },
    { "name": "user62", "like": 45, "comment": 8 },
    { "name": "user63", "like": 19, "comment": 16 },
    { "name": "user64", "like": 27, "comment": 17 },
    { "name": "user65", "like": 34, "comment": 19 },
    { "name": "user66", "like": 40, "comment": 6 },
    { "name": "user67", "like": 15, "comment": 9 },
    { "name": "user68", "like": 38, "comment": 14 },
    { "name": "user69", "like": 23, "comment": 13 },
    { "name": "user70", "like": 50, "comment": 8 },
    { "name": "user71", "like": 33, "comment": 16 },
    { "name": "user72", "like": 32, "comment": 19 },
    { "name": "user73", "like": 50, "comment": 10 },
    { "name": "user74", "like": 33, "comment": 18 },
    { "name": "user75", "like": 43, "comment": 17 },
    { "name": "user76", "like": 21, "comment": 7 },
    { "name": "user77", "like": 31, "comment": 13 },
    { "name": "user78", "like": 40, "comment": 17 },
    { "name": "user79", "like": 30, "comment": 17 },
    { "name": "user80", "like": 25, "comment": 15 },
    // { "name": "user81", "like": 30, "comment": 19 },
    // { "name": "user82", "like": 19, "comment": 8 },
    // { "name": "user83", "like": 49, "comment": 7 },
    // { "name": "user84", "like": 25, "comment": 6 },
    // { "name": "user85", "like": 48, "comment": 13 },
    // { "name": "user86", "like": 46, "comment": 18 },
    // { "name": "user87", "like": 45, "comment": 6 },
    // { "name": "user88", "like": 45, "comment": 6 },
    // { "name": "user89", "like": 36, "comment": 12 },
    // { "name": "user90", "like": 45, "comment": 14 },
    // { "name": "user91", "like": 29, "comment": 10 },
    // { "name": "user92", "like": 21, "comment": 16 },
    // { "name": "user93", "like": 35, "comment": 18 },
    // { "name": "user94", "like": 48, "comment": 20 },
    // { "name": "user95", "like": 25, "comment": 13 },
    // { "name": "user96", "like": 47, "comment": 10 },
    // { "name": "user97", "like": 38, "comment": 19 },
    // { "name": "user98", "like": 35, "comment": 17 },
    // { "name": "user99", "like": 38, "comment": 10 },
    // { "name": "user100", "like": 31, "comment": 11 },
    // { "name": "user101", "like": 48, "comment": 16 },
    // { "name": "user102", "like": 20, "comment": 9 },
    // { "name": "user103", "like": 44, "comment": 16 },
    // { "name": "user104", "like": 37, "comment": 19 },
    // { "name": "user105", "like": 45, "comment": 6 },
    // { "name": "user106", "like": 44, "comment": 18 },
    // { "name": "user107", "like": 35, "comment": 12 },
    // { "name": "user108", "like": 44, "comment": 16 },
    // { "name": "user109", "like": 40, "comment": 8 },
    // { "name": "user110", "like": 17, "comment": 18 },
    // { "name": "user111", "like": 20, "comment": 13 },
    // { "name": "user112", "like": 43, "comment": 19 },
    // { "name": "user113", "like": 36, "comment": 19 },
    // { "name": "user114", "like": 18, "comment": 11 },
    // { "name": "user115", "like": 33, "comment": 15 },
    // { "name": "user116", "like": 48, "comment": 19 },
    // { "name": "user117", "like": 46, "comment": 13 },
    // { "name": "user118", "like": 41, "comment": 12 },
    // { "name": "user119", "like": 18, "comment": 15 },
    // { "name": "user120", "like": 24, "comment": 9 },
    // { "name": "user121", "like": 41, "comment": 13 },
    // { "name": "user122", "like": 22, "comment": 8 },
    // { "name": "user123", "like": 18, "comment": 19 },
    // { "name": "user124", "like": 21, "comment": 9 },
    // { "name": "user125", "like": 29, "comment": 7 },
    // { "name": "user126", "like": 42, "comment": 9 },
    // { "name": "user127", "like": 35, "comment": 16 },
    // { "name": "user128", "like": 28, "comment": 11 },
    // { "name": "user129", "like": 24, "comment": 19 },
    // { "name": "user130", "like": 50, "comment": 14 },
    // { "name": "user131", "like": 35, "comment": 12 },
    // { "name": "user132", "like": 37, "comment": 13 },
    // { "name": "user133", "like": 45, "comment": 18 },
    // { "name": "user134", "like": 49, "comment": 7 },
    // { "name": "user135", "like": 45, "comment": 18 },
    // { "name": "user136", "like": 27, "comment": 16 },
    // { "name": "user137", "like": 42, "comment": 15 },
    // { "name": "user138", "like": 29, "comment": 17 },
    // { "name": "user139", "like": 49, "comment": 10 },
    // { "name": "user140", "like": 14, "comment": 8 },
    // { "name": "user141", "like": 40, "comment": 13 },
    // { "name": "user142", "like": 29, "comment": 13 },
    // { "name": "user143", "like": 45, "comment": 19 },
    // { "name": "user144", "like": 46, "comment": 12 },
    // { "name": "user145", "like": 44, "comment": 14 },
    // { "name": "user146", "like": 14, "comment": 12 },
    // { "name": "user147", "like": 38, "comment": 15 },
    // { "name": "user148", "like": 12, "comment": 13 },
    // { "name": "user149", "like": 18, "comment": 12 },
    // { "name": "user150", "like": 11, "comment": 20 },
    // { "name": "user151", "like": 45, "comment": 19 },
    // { "name": "user152", "like": 45, "comment": 8 },
    // { "name": "user153", "like": 22, "comment": 16 },
    // { "name": "user154", "like": 20, "comment": 10 },
    // { "name": "user155", "like": 38, "comment": 16 },
    // { "name": "user156", "like": 17, "comment": 17 },
    // { "name": "user157", "like": 23, "comment": 10 },
    // { "name": "user158", "like": 28, "comment": 8 },
    // { "name": "user159", "like": 47, "comment": 6 },
    // { "name": "user160", "like": 23, "comment": 17 },
    // { "name": "user161", "like": 18, "comment": 17 },
    // { "name": "user162", "like": 50, "comment": 9 },
    // { "name": "user163", "like": 36, "comment": 19 },
    // { "name": "user164", "like": 24, "comment": 10 },
    // { "name": "user165", "like": 15, "comment": 18 },
    // { "name": "user166", "like": 30, "comment": 9 },
    // { "name": "user167", "like": 31, "comment": 17 },
    // { "name": "user168", "like": 22, "comment": 17 },
    // { "name": "user169", "like": 14, "comment": 7 },
    // { "name": "user170", "like": 26, "comment": 15 },
    // { "name": "user171", "like": 22, "comment": 13 },
    // { "name": "user172", "like": 40, "comment": 17 },
    // { "name": "user173", "like": 49, "comment": 10 },
    // { "name": "user174", "like": 14, "comment": 16 },
    // { "name": "user175", "like": 39, "comment": 17 },
    // { "name": "user176", "like": 12, "comment": 12 },
    // { "name": "user177", "like": 15, "comment": 8 },
    // { "name": "user178", "like": 13, "comment": 19 },
    // { "name": "user179", "like": 17, "comment": 7 },
    // { "name": "user180", "like": 44, "comment": 11 },
    // { "name": "user181", "like": 45, "comment": 19 },
    // { "name": "user182", "like": 33, "comment": 20 },
    // { "name": "user183", "like": 49, "comment": 18 },
    // { "name": "user184", "like": 45, "comment": 12 },
    // { "name": "user185", "like": 24, "comment": 7 },
    // { "name": "user186", "like": 42, "comment": 11 },
    // { "name": "user187", "like": 33, "comment": 7 },
    // { "name": "user188", "like": 19, "comment": 11 },
    // { "name": "user189", "like": 40, "comment": 6 },
    // { "name": "user190", "like": 27, "comment": 15 },
    // { "name": "user191", "like": 48, "comment": 18 },
    // { "name": "user192", "like": 34, "comment": 6 },
    // { "name": "user193", "like": 40, "comment": 8 },
    // { "name": "user194", "like": 25, "comment": 15 },
    // { "name": "user195", "like": 50, "comment": 11 },
    // { "name": "user196", "like": 11, "comment": 15 },
    // { "name": "user197", "like": 45, "comment": 19 },
    // { "name": "user198", "like": 21, "comment": 17 },
    // { "name": "user199", "like": 36, "comment": 7 },
    // { "name": "user200", "like": 12, "comment": 14 }
];