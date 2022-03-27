/*Matrice contenant tout le tableau périodique 
*pour un atome de numéro atomique i : 
*[i][0]: Nom
*[i][1]: Période 
*[i][2]: Groupe 
*[i][3]: Famille
*[i][4]: Masse Molaire 
*[i][5]: Configuration Electronique
*[i][6]: symbole
*/
const tableauPeriodique =
[[],
["Hydrogène", "1", "1", "non-métal", "1,01", "1s1", "H"] , 
["Helium", "1", "18", "gaz noble", "4", "1s2", "He"] , 
["Lithium", "2", "1", "métal alcalin", "6,94", "2s1", "Li"] , 
["Béryllium", "2", "2", "métal alcalino-terreux", "9,01", "2s2", "Be"] , 
["Bore", "2", "13", "métalloïde", "10,81", "2s2 2p1", "B"] , 
["Carbone", "2", "14", "non-métal", "12,01", "2s2 2p2", "C"] , 
["Azote", "2", "15", "non-métal", "14,01", "2s2 2p3", "N"] , 
["Oxygène", "2", "16", "non-métal", "16", "2s2 2p4", "O"] , 
["Fluor", "2", "17", "halogène", "19", "2s2 2p5", "F"] , 
["Néon", "2", "18", "gaz noble", "20,18", "2s2 2p6", "Ne"] , 
["Sodium", "3", "1", "métal alcalin", "23", "3s1", "Na"] , 
["Magnésium", "3", "2", "métal alcalino-terreux", "43,31", "3s2", "Mg"] , 
["Aluminium", "3", "13", "métal pauvre", "27", "3s2 3p1", "Al"] , 
["Silicium", "3", "14", "métalloïde", "28,09", "3s2 3p2", "Si"] , 
["Phosphore", "3", "15", "non-métal", "31", "3s2 3p3", "P"] , 
["Soufre", "3", "16", "non-métal", "32,07", "3s2 3p4", "S"] , 
["Chlore", "3", "17", "halogène", "35,45", "3s2 3p5", "Cl"] , 
["Argon", "3", "18", "gaz noble", "39,95", "3s2 3p6", "Ar"] , 
["Potassium", "4", "1", "métal alcalin", "39,1", "4s1", "K"] , 
["Calcium", "4", "2", "métal alcalino-terreux", "40,08", "4s2", "Ca"] , 
["Scandium", "4", "3", "métal de transition", "44,96", "3d1 4s2", "Sc"] , 
["Titane", "4", "4", "métal de transition", "47,9", "3d2 4s2", "Ti"] , 
["Vanadium", "4", "5", "métal de transition", "50,94", "3d3 4s2", "V"] , 
["Chrome", "4", "6", "métal de transition", "52", "3d5 4s1", "Cr"] , 
["Manganèse", "4", "7", "métal de transition", "54,94", "3d5 4s2", "Mn"] , 
["Fer", "4", "8", "métal de transition", "55,85", "4s2 3d6", "Fe"] , 
["Cobalt", "4", "9", "métal de transition", "58,93", "3d7 4s2", "Co"] , 
["Nickel", "4", "10", "métal de transition", "58,7", "3d8 4s2 ou 3d9 4s1", "Ni"] , 
["Cuivre", "4", "11", "métal de transition", "63,55", "3d10 4s1", "Cu"] , 
["Zinc", "4", "12", "métal pauvre", "65,41", "3d10 4s2", "Zn"] , 
["Gallium", "4", "13", "métal pauvre", "69,72", "4s2 3d10 4p1", "Ga"] , 
["Germanium", "4", "14", "métalloïde", "72,64", "3d10 4s2 4p2", "Ge"] , 
["Arsenic", "4", "15", "métalloïde", "74,92", "3d10 4s2 4p3", "As"] , 
["Sélénium", "4", "16", "non-métal", "78,97", "3d10 4s2 4p4", "Se"] , 
["Brome", "4", "17", "halogène", "79,9", "3d10 4s2 4p5", "Br"] , 
["Krypton", "4", "18", "gaz noble", "83,8", "4s2 3d10 4p6", "Kr"] , 
["Rubidium", "5", "1", "métal alcalin", "85,47", "5s1", "Rb"] , 
["Strontium", "5", "2", "métal alcalino-terreux", "87,62", "5s2", "Sr"] , 
["Yttrium", "5", "3", "métal de transition", "88,91", "4d1 5s2", "Y"] , 
["Zirconium", "5", "4", "métal de transition", "91,22", "4d2 5s2", "Zr"] , 
["Niobium", "5", "5", "métal de transition", "92,91", "4d4 5s1", "Nb"] , 
["Molybdène", "5", "6", "métal de transition", "95,95", "4d5 5s1", "Mo"] , 
["Technétium", "5", "7", "métal de transition", "98", "4d5 5s2", "Tc"] , 
["Ruthénium", "5", "8", "métal de transition", "101,07", "4d7 5s1", "Ru"] , 
["Rhodium", "5", "9", "métal de transition", "102,91", "4d8 5s1", "Rh"] , 
["Palladium", "5", "10", "métal de transition", "106,42", "4d10", "Pd"] , 
["Argent", "5", "11", "métal de transition", "107,87", "4d10 5s1", "Ag"] , 
["Cadmium", "5", "12", "métal pauvre", "112,41", "4d10 5s2", "Cd"] , 
["Indium", "5", "13", "métal pauvre", "114,82", "4d10 5s2 5p1", "In"] , 
["Etain", "5", "14", "métal pauvre", "118,71", "4d10 5s2 5p2", "Sn"] , 
["Antimoine", "5", "15", "métalloïde", "121,76", "4d10 5s2 5p3", "Sb"] , 
["Tellure", "5", "16", "métalloïde", "127,6", "4d10 5s2 5p4", "Te"] , 
["Iode", "5", "17", "halogène", "126,9", "4d10 5s2 5p5", "I"] , 
["Xénon", "5", "18", "gaz noble", "131,29", "4d10 5d2 5p6", "Xe"] , 
["Césium", "6", "1", "métal alcalin", "132,91", "6s1", "Cs"] , 
["Baryum", "6", "2", "métal alcalino-terreux", "137,33", "6s2", "Ba"] , 
["Lanthane", "6", "-", "lanthanide", "138,91", "5d1 6s2", "La"] , 
["Cérium", "6", "-", "lanthanide", "140,12", "4f1 5d1 6s2", "Ce"] , 
["Praséodyme", "6", "-", "lanthanide", "140,91", "4f3 6s2", "Pr"] , 
["Néodyme", "6", "-", "lanthanide", "144,24", "4f4 6s2", "Nd"] , 
["Prométhium", "6", "-", "lanthanide", "145", "4f5 6s2", "Pm"] , 
["Samarium", "6", "-", "lanthanide", "150,36", "4f6 6s2", "Sm"] , 
["Europium", "6", "-", "lanthanide", "151,96", "6s2 4f7", "Eu"] , 
["Gadolinium", "6", "-", "lanthanide", "157,25", "4f7 5d1 6s2", "Gd"] , 
["Terbium", "6", "-", "lanthanide", "158,93", "4f9 6s2", "Tb"] , 
["Dysprosium", "6", "-", "lanthanide", "162,5", "4f10 6s2", "Dy"] , 
["Holmium", "6", "-", "lanthanide", "164,93", "4f11 6s2", "Ho"] , 
["Erbium", "6", "-", "lanthanide", "167,26", "4f12 6s2", "Er"] , 
["Thulium", "6", "-", "lanthanide", "168,93", "4f13 6s2", "Tm"] , 
["Ytterbium", "6", "-", "lanthanide", "173,04", "4f14 6s2", "Yb"] , 
["Lutécium", "6", "-", "lanthanide", "174,97", "4f14 5d1 6s2", "Lu"] , 
["Hafnium", "6", "4", "métal de transition", "178,49", "4f14 5d2 6s2", "Hf"] , 
["Tantale", "6", "5", "métal de transition", "180,95", "4f14 5d3 6s2", "Ta"] , 
["Tungstène", "6", "6", "métal de transition", "183,84", "6s2 4f14 5d4", "W"] , 
["Rhénium", "6", "7", "métal de transition", "186,21", "4f14 5d5 6s2", "Re"] , 
["Osmium", "6", "8", "métal de transition", "190,23", "4f14 5d6 6s2", "Os"] , 
["Iridium", "6", "9", "métal de transition", "192,22", "4f14 5d7 6s2", "Ir"] , 
["Platine", "6", "10", "métal de transition", "195,08", "4f14 5d9 6s1", "Pt"] , 
["Or", "6", "11", "métal de transition", "196,97", "4f14 5d10 6s1", "Au"] , 
["Mercure", "6", "12", "métal pauvre", "200,59", "4f14 5d10 6s2", "Hg"] , 
["Thallium", "6", "13", "métal pauvre", "204,38", "4f14 5d10 6s2 6p1", "Ti"] , 
["Plomb", "6", "14", "métal pauvre", "207,2", "4f14 5d10 6s2 6p2", "Pb"] , 
["Bismuth", "6", "15", "métal pauvre", "208,98", "4f14 5d10 6s2 6p3", "Bi"] , 
["Polonium", "6", "16", "métal pauvre", "209", "4f14 5d10 6s2 6p4", "Po"] , 
["Astate", "6", "17", "métalloïde", "210", "4f14 5d10 6s2 6p5", "At"] , 
["Radon", "6", "18", "gaz noble", "222", "4f14 5d10 6s2 6p6", "Rn"] , 
["Francium", "7", "1", "métal alcalin", "223", "7s1", "Fr"] , 
["Radium", "7", "2", "métal alcalino-terreux", "226", "7s2", "Ra"] , 
["Actinium", "7", "-", "actinide", "227", "6d1 7s2", "Ac"] , 
["Thorium", "7", "-", "actinide", "232", "6d2 7s2", "Th"] , 
["Protactinium", "7", "-", "actinide", "231", "5f2 6d1 7s2", "Pa"] , 
["Uranium", "7", "-", "actinide", "238", "7s2 5f3 6d1", "U"] , 
["Neptunium", "7", "-", "actinide", "237", "5f4 6d1 7s2", "Np"] , 
["Plutonium", "7", "-", "actinide", "244", "5f6 7s2", "Pu"] , 
["Américium", "7", "-", "actinide", "241", "5f7 7s2", "Am"] , 
["Curium", "7", "-", "actinide", "247", "5f7 6d1 7s2", "Cm"] , 
["Berkélium", "7", "-", "actinide", "247", "5f9 7s2", "Bk"] , 
["Californium", "7", "-", "actinide", "251", "5f10 7s2", "Cf"] , 
["Einsteinium", "7", "-", "actinide", "252", "5f11 7s2", "Es"] , 
["Fermium", "7", "-", "actinide", "257", "5f12 7s2", "Fm"] , 
["Mendélévium", "7", "-", "actinide", "258", "5f13 7s2", "Md"] , 
["Nobélium", "7", "-", "actinide", "259", "5f14 7s2", "No"] , 
["Lawrencium", "7", "-", "actinide", "266", "5f14 6d 7s2 7p", "Lr"] , 
["Rutherfordium", "7", "4", "métal de transition", "267", "5f14 6d2 7s2", "Rf"] , 
["Dubnium", "7", "5", "métal de transition", "268", "5f14 6d3 7s2", "Db"] , 
["Seaborgium", "7", "6", "métal de transition", "269", "5f14 6d4 7s2", "Sg"] , 
["Bohrium", "7", "7", "métal de transition", "270", "5f14 6d5 7s2", "Bh"] , 
["Hassium", "7", "8", "métal de transition", "277", "5f14 6d6 7s2", "Hs"] , 
["Meitnérium", "7", "9", "non classé", "278", "5f14 6d7 7s2", "Mt"] , 
["Darmstadtium", "7", "10", "non classé", "281", "5f14 6d8 7s2", "Ds"] , 
["Roentgenium", "7", "11", "non classé", "282", "5f14 6d9 7s2", "Rg"] , 
["Copernicium", "7", "12", "métal de transition", "285", "5f14 6d10 7s2", "Cn"] , 
["Nihonium", "7", "13", "non classé", "286", "5f14 6d10 7s2 7p1", "Nh"] , 
["Flérovium", "7", "14", "non classé", "289", "5f14 6d10 7s2 7p2", "Fl"] , 
["Moscovium", "7", "15", "non classé", "289", "5f14 6d10 7s2 7p3", "Mc"] , 
["Livermorium", "7", "16", "non classé", "293", "5f14 6d10 7s2 7p4", "Lv"] , 
["Tennesse", "7", "17", "non classé", "294", "5f14 6d10 7s2 7p5", "Ts"] , 
["Oganesson", "7", "18", "non classé", "294", "5f14 6d10 7s2 7p6", "Og"] , 
["Ununennium", "8", "1", "non classé", "-", "8s1", "Uue"] , 
["Unbinilium", "8", "2", "non classé", "-", "8s2", "Ubn"] , 
["Unbiunium", "8", "-", "superactinide", "-", "8s2 8p1", "Ubu"] , 
["Unbibiom", "8", "-", "superactinide", "-", "8s2 8p1 7d1", "Ubb"] , 
["Unbitrium", "8", "-", "superactinide", "-", "8s2 8p1 7d1 6f1", "Ubt"] , 
["Unbiquadium", "8", "-", "superactinide", "-", "8s2 6p1 6f3", "Ubq"] , 
["Unbipentium", "8", "-", "superactinide", "-", "8s2 6p1 6f3 5g1", "Ubp"] , 
["Unbihexium", "8", "-", "superactinide", "-", "8s2 8p1 7d1 6f2 5g2", "Ubh"] , 
["Unbiseptium", "8", "-", "superactinide", "-", "8s2 8p2 6f2 5g3", "Ubs"] , 
["Unbioctium", "8", "-", "superactinide", "-", "8s2 8p2 6f2 5g4", "Ubo"] , 
["Unbiennium", "8", "-", "superactinide", "-", "8s2 8p2 6f2 5g5", "Ube"] , 
["Untrinilium", "8", "-", "superactinide", "-", "8s2 8p2 6f2 5g6", "Utn"] , 
["Untriunium", "8", "-", "superactinide", "-", "8s2 8p2 6f2 5g7", "Utu"] , 
["Untribium", "8", "-", "superactinide", "-", "8s2 8p2 6f2 5g8", "Utb"] , 
["Untritrium", "8", "-", "superactinide", "-", "8s2 8p2 6f3 5g8", "Utt"] , 
["Untriquadium", "8", "-", "superactinide", "-", "8s2 8p2 6f4 5g8", "Utq"] , 
["Untripentium", "8", "-", "superactinide", "-", "8s2 8p2 6f4 5g9", "Utp"] , 
["Untrihexium", "8", "-", "superactinide", "-", "8s2 8p2 6f4 5g10", "Uth"] , 
["Untriseptium", "8", "-", "superactinide", "-", "8s2 8p2 7d1 6f3 5g11", "Uts"] , 
["Untrioctium", "8", "-", "superactinide", "-", "8s2 8p2 7d1 6f3 5g12", "Uto"] , 
["Untriennium", "8", "-", "superactinide", "-", "8s2 8p2 7d2 6f2 5g13", "Ute"] , 
["Unquadnilium", "8", "-", "superactinide", "-", "8s2 8p2 7d1 6f3 5g14", "Uqn"] , 
["Unquadunium", "8", "-", "superactinide", "-", "8s2 8p2 7d2 6f2 5g15", "Uqu"] , 
["Unquadbium", "8", "-", "superactinide", "-", "8s2 8p2 7d2 6f2 5g16", "Uqb"] ]

const listeFamille= ["métal alcalin", "métal alcalino-terreux", "métal alcalin", "métal alcalino-terreux", "lanthanide", "actinide", "métal de transition", "métal pauvre", "métalloïde", "non-métal", "halogène", "gaz noble", "non classé"];

const atomeCommun= [5, 15, 1, 2, 6, 7, 8, 9, 11, 13, 16, 17, 19, 20, 24, 26, 29, 30, 47, 53, 79,80,82,88, 10, 36, 54,86, 92, 94];


function afficherTableau(){
    /*RAPPEL
    pour un atome de numéro atomique i : 
*[i][0]: Nom
*[i][1]: Période 
*[i][2]: Groupe 
*[i][3]: Famille
*[i][4]: Masse Molaire 
*[i][5]: Configuration Electronique
*[i][6]: symbole
*/
    let result = "<table class=\"tableau\" cellspacing=\"10\" cellpadding=\"10\"> <tr>";
    for (let i = 1; i <= 2; i++) {
        if(i==2){
            result+= "<td class=\"vide\" colspan=\"17\"></td>"
        }
        result+= "<td class=\""+tableauPeriodique[i][3]+"\"><table><tr><td class=\"hovernon\">"+i+"</td> <td colspan=\"2\" class=\"hovernon\"> </td></tr><tr><th> </th><th style=\"text-align: center;\">"+tableauPeriodique[i][6]+"</th></tr></table><span class=\"tooltiptext\">"+tableauPeriodique[i][0]+"<br>groupe: "+tableauPeriodique[i][2]+"<br>Période: "+tableauPeriodique[i][1]+"<br>Famille d'élément: "+tableauPeriodique[i][3]+"<br>Configuration électronique: "+tableauPeriodique[i][5]+"<br>masse molaire: "+tableauPeriodique[i][4]+" g.mol<sup>-1</sup><br></span></td>";
      }
    result+= "</tr><tr>";
    for (let i = 3; i <= 10; i++) {
        if(i==5){
            result+= "<td class=\"vide\" colspan=\"11\"></td>"
        }
        result+= "<td class=\""+tableauPeriodique[i][3]+"\"><table><tr><td class=\"hovernon\">"+i+"</td> <td colspan=\"2\" class=\"hovernon\"> </td></tr><tr><th> </th><th style=\"text-align: center;\">"+tableauPeriodique[i][6]+"</th></tr></table><span class=\"tooltiptext\">"+tableauPeriodique[i][0]+"<br>groupe: "+tableauPeriodique[i][2]+"<br>Période: "+tableauPeriodique[i][1]+"<br>Famille d'élément: "+tableauPeriodique[i][3]+"<br>Configuration électronique: "+tableauPeriodique[i][5]+"<br>masse molaire: "+tableauPeriodique[i][4]+" g.mol<sup>-1</sup><br></span></td>";
      }
      result+= "</tr><tr>";

      for (let i = 11; i <= 18; i++) {
        if(i==13){
            result+= "<td class=\"vide\" colspan=\"11\"></td>"
        }
        result+= "<td class=\""+tableauPeriodique[i][3]+"\"><table><tr><td class=\"hovernon\">"+i+"</td> <td colspan=\"2\" class=\"hovernon\"> </td></tr><tr><th> </th><th style=\"text-align: center;\">"+tableauPeriodique[i][6]+"</th></tr></table><span class=\"tooltiptext\">"+tableauPeriodique[i][0]+"<br>groupe: "+tableauPeriodique[i][2]+"<br>Période: "+tableauPeriodique[i][1]+"<br>Famille d'élément: "+tableauPeriodique[i][3]+"<br>Configuration électronique: "+tableauPeriodique[i][5]+"<br>masse molaire: "+tableauPeriodique[i][4]+" g.mol<sup>-1</sup><br></span></td>";
      }
      result+= "</tr><tr>";
      for (let i = 19; i <= 36; i++) {
        if(i==21){
            result+= "<td> </td>"
        }
        result+= "<td class=\""+tableauPeriodique[i][3]+"\"><table><tr><td class=\"hovernon\">"+i+"</td> <td colspan=\"2\" class=\"hovernon\"> </td></tr><tr><th> </th><th style=\"text-align: center;\">"+tableauPeriodique[i][6]+"</th></tr></table><span class=\"tooltiptext\">"+tableauPeriodique[i][0]+"<br>groupe: "+tableauPeriodique[i][2]+"<br>Période: "+tableauPeriodique[i][1]+"<br>Famille d'élément: "+tableauPeriodique[i][3]+"<br>Configuration électronique: "+tableauPeriodique[i][5]+"<br>masse molaire: "+tableauPeriodique[i][4]+" g.mol<sup>-1</sup><br></span></td>";
      }
      result+= "</tr><tr>";
      for (let i = 37; i <= 54; i++) {
        if(i==39){
            result+= "<td> </td>"
        }
        result+= "<td class=\""+tableauPeriodique[i][3]+"\"><table><tr><td class=\"hovernon\">"+i+"</td> <td colspan=\"2\" class=\"hovernon\"> </td></tr><tr><th> </th><th style=\"text-align: center;\">"+tableauPeriodique[i][6]+"</th></tr></table><span class=\"tooltiptext\">"+tableauPeriodique[i][0]+"<br>groupe: "+tableauPeriodique[i][2]+"<br>Période: "+tableauPeriodique[i][1]+"<br>Famille d'élément: "+tableauPeriodique[i][3]+"<br>Configuration électronique: "+tableauPeriodique[i][5]+"<br>masse molaire: "+tableauPeriodique[i][4]+" g.mol<sup>-1</sup><br></span></td>";
      }
      result+= "</tr><tr>";
      for (let i = 55; i <= 56; i++) {
        result+= "<td class=\""+tableauPeriodique[i][3]+"\"><table><tr><td class=\"hovernon\">"+i+"</td> <td colspan=\"2\" class=\"hovernon\"> </td></tr><tr><th> </th><th style=\"text-align: center;\">"+tableauPeriodique[i][6]+"</th></tr></table><span class=\"tooltiptext\">"+tableauPeriodique[i][0]+"<br>groupe: "+tableauPeriodique[i][2]+"<br>Période: "+tableauPeriodique[i][1]+"<br>Famille d'élément: "+tableauPeriodique[i][3]+"<br>Configuration électronique: "+tableauPeriodique[i][5]+"<br>masse molaire: "+tableauPeriodique[i][4]+" g.mol<sup>-1</sup><br></span></td>";
      }
      result+= "<td class=\"lanthanide\" style=\"font-weight: bold;\" colspan=\"2\">57-71<span class=\"tooltiptext\">lanthanide</span></td>"
      for (let i = 72; i <= 86; i++) {
        result+= "<td class=\""+tableauPeriodique[i][3]+"\"><table><tr><td class=\"hovernon\">"+i+"</td> <td colspan=\"2\" class=\"hovernon\"> </td></tr><tr><th> </th><th style=\"text-align: center;\">"+tableauPeriodique[i][6]+"</th></tr></table><span class=\"tooltiptext\">"+tableauPeriodique[i][0]+"<br>groupe: "+tableauPeriodique[i][2]+"<br>Période: "+tableauPeriodique[i][1]+"<br>Famille d'élément: "+tableauPeriodique[i][3]+"<br>Configuration électronique: "+tableauPeriodique[i][5]+"<br>masse molaire: "+tableauPeriodique[i][4]+" g.mol<sup>-1</sup><br></span></td>";
      }

      result+= "</tr><tr>";
      for (let i = 87; i <= 88; i++) {
        result+= "<td class=\""+tableauPeriodique[i][3]+"\"><table><tr><td class=\"hovernon\">"+i+"</td> <td colspan=\"2\" class=\"hovernon\"> </td></tr><tr><th> </th><th style=\"text-align: center;\">"+tableauPeriodique[i][6]+"</th></tr></table><span class=\"tooltiptext\">"+tableauPeriodique[i][0]+"<br>groupe: "+tableauPeriodique[i][2]+"<br>Période: "+tableauPeriodique[i][1]+"<br>Famille d'élément: "+tableauPeriodique[i][3]+"<br>Configuration électronique: "+tableauPeriodique[i][5]+"<br>masse molaire: "+tableauPeriodique[i][4]+" g.mol<sup>-1</sup><br></span></td>";
      }
      result+= "<td class=\"actinide\" style=\"font-weight: bold;\" colspan=\"2\">89-103<span class=\"tooltiptext\">actinide</span></td>"
      for (let i = 104; i <= 118; i++) {
        result+= "<td class=\""+tableauPeriodique[i][3]+"\"><table><tr><td class=\"hovernon\">"+i+"</td> <td colspan=\"2\" class=\"hovernon\"> </td></tr><tr><th> </th><th style=\"text-align: center;\">"+tableauPeriodique[i][6]+"</th></tr></table><span class=\"tooltiptext\">"+tableauPeriodique[i][0]+"<br>groupe: "+tableauPeriodique[i][2]+"<br>Période: "+tableauPeriodique[i][1]+"<br>Famille d'élément: "+tableauPeriodique[i][3]+"<br>Configuration électronique: "+tableauPeriodique[i][5]+"<br>masse molaire: "+tableauPeriodique[i][4]+" g.mol<sup>-1</sup><br></span></td>";
      }
      result +="</tr> </table><br><table class=\"tableau\" cellspacing=\"10\" cellpadding=\"10\"><tr>";
      result+= "<td class=\"vide\" colspan=\"2\"></td>";
      for (let i = 57; i <= 71; i++) {
        result+= "<td class=\""+tableauPeriodique[i][3]+"\"><table><tr><td class=\"hovernon\">"+i+"</td> <td colspan=\"2\" class=\"hovernon\"> </td></tr><tr><th> </th><th style=\"text-align: center;\">"+tableauPeriodique[i][6]+"</th></tr></table><span class=\"tooltiptext\">"+tableauPeriodique[i][0]+"<br>groupe: "+tableauPeriodique[i][2]+"<br>Période: "+tableauPeriodique[i][1]+"<br>Famille d'élément: "+tableauPeriodique[i][3]+"<br>Configuration électronique: "+tableauPeriodique[i][5]+"<br>masse molaire: "+tableauPeriodique[i][4]+" g.mol<sup>-1</sup><br></span></td>";
      }result+= "<td class=\"vide\" colspan=\"2\"></td>";
      result+= "</tr><tr>";result+= "<td class=\"vide\" colspan=\"2\"></td>";
      for (let i = 89; i <= 103; i++) {
        result+= "<td class=\""+tableauPeriodique[i][3]+"\"><table><tr><td class=\"hovernon\">"+i+"</td> <td colspan=\"2\" class=\"hovernon\"> </td></tr><tr><th> </th><th style=\"text-align: center;\">"+tableauPeriodique[i][6]+"</th></tr></table><span class=\"tooltiptext\">"+tableauPeriodique[i][0]+"<br>groupe: "+tableauPeriodique[i][2]+"<br>Période: "+tableauPeriodique[i][1]+"<br>Famille d'élément: "+tableauPeriodique[i][3]+"<br>Configuration électronique: "+tableauPeriodique[i][5]+"<br>masse molaire: "+tableauPeriodique[i][4]+" g.mol<sup>-1</sup><br></span></td>";
      }result+= "<td class=\"vide\" colspan=\"2\"></td>";
      result+= "</tr><table>";


      result +="<br><table id=\"etendue\" class=\"tableau\" cellspacing=\"10\" cellpadding=\"10\"><tr>";
      result+= "<td class=\"vide\" colspan=\"3\"></td>";
      for (let i = 119; i <= 130; i++) {
        result+= "<td class=\""+tableauPeriodique[i][3]+"\"><table><tr><td class=\"hovernon\">"+i+"</td> <td colspan=\"2\" class=\"hovernon\"> </td></tr><tr><th> </th><th style=\"text-align: center;\">"+tableauPeriodique[i][6]+"</th></tr></table><span class=\"tooltiptext\">"+tableauPeriodique[i][0]+"<br>groupe: "+tableauPeriodique[i][2]+"<br>Période: "+tableauPeriodique[i][1]+"<br>Famille d'élément: "+tableauPeriodique[i][3]+"<br>Configuration électronique: "+tableauPeriodique[i][5]+"<br>masse molaire: "+tableauPeriodique[i][4]+" g.mol<sup>-1</sup><br></span></td>";
      }result+= "<td class=\"vide\" colspan=\"3\"></td>";
      result+= "</tr><tr>";
      result+= "<td class=\"vide\" colspan=\"3\"></td>";
      for (let i = 131; i <= 142; i++) {
        result+= "<td class=\""+tableauPeriodique[i][3]+"\"><table><tr><td class=\"hovernon\">"+i+"</td> <td colspan=\"2\" class=\"hovernon\"> </td></tr><tr><th> </th><th style=\"text-align: center;\">"+tableauPeriodique[i][6]+"</th></tr></table><span class=\"tooltiptext\">"+tableauPeriodique[i][0]+"<br>groupe: "+tableauPeriodique[i][2]+"<br>Période: "+tableauPeriodique[i][1]+"<br>Famille d'élément: "+tableauPeriodique[i][3]+"<br>Configuration électronique: "+tableauPeriodique[i][5]+"<br>masse molaire: "+tableauPeriodique[i][4]+" g.mol<sup>-1</sup><br></span></td>";
      }
      result+= "<td class=\"vide\" colspan=\"3\"></td>";
      result+= "</tr><table>";

      document.getElementById("tableau").innerHTML= result;

}

function atomeRandom(){
  return Math.floor(Math.random() *119);
}

function atomeCommunRandom(){
  return atomeCommun[Math.floor(Math.random() *31)];
}

function famille(){
  return listeFamille[Math.floor(Math.random() *13)];
}

function twitterTweet(score){
  return "<a href=\"https://twitter.com/intent/tweet?text=J'ai%20eu%20"+score+"%20au%20quiz%20de%20Ludication%20Pouvez-vous%20faire%20mieux%20https%3A%2F%2Fwww.ludication.live%2F\"><button class=\"tweet\">partager votre score</button></a>"
}


function atomeQuestionnaireCommun(){
  let tab=[];
for (let i = 0; i <= 9; i++) {
  tab[i]=tableauPeriodique[atomeCommunRandom()];
}
return tab;
}

function atomeQuestionnaire(){
  let tab=[];
for (let i = 0; i <= 9; i++) {
  tab[i]=tableauPeriodique[atomeRandom()];
}
return tab;
}

