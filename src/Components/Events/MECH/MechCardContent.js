import {
    paperpresentation,
    projecpresentation,
    cad_master,
    fun,
    mr_mechanic,
    quiz,
} from "../../../assets/index.js";

const MechCardContent = [{
        id: 1,
        img: projecpresentation,
        coordinator: "Mr.P.Varadhraj,AP/Mech",
        studentCoordinator: "Mr.S. Dharun 3rd Mech,Mr.C. Kishore 3rd Mech",
        mobile: "9943659947",
        stdmobile: "8870829410",
        email: "infest2k26mech@gmail.com",
        eventTitle: "Paper Presentation",
        eventDesc: "Paper presentation is an event where the participants are required to make a paper about a certain topic and then present it in front of a jury. ",
        rules: [
            "Maximum 4 members per team",
            "The paper topics can be chosen by your own.",
            "Abstract should be sent 1 week before infest2k26mech@gmail.com)",
            "Abstract should not exceed more than 250 words",
            "Abstract should be in the following format :",
            "Title- theme of the paper",
            "Names of the students and their E-mail ID’S.",
            "Name of the Institute & City.",
            "Each team is allocated a total presentation time of 10-15 minutes.",
            "Submissions must be in the form of a POWER POINT PRESENTATION(max 10 slides)",
            "Students should submit the PPT before 2 days via mail(infest2k26mech@gmail.com)"
        ],
        criteria: [
            "Problem identification and solutions to real time problems.",
            "Whether technically adoptable",
            "Delivery(Confidence, Body Language, Dynamism )"
        ]
    },
    {
        id: 2,
        img: paperpresentation,
        coordinator: "Mr. K. Silambarasan,AP/Mech",
        studentCoordinator: "N.Dharshan 3rd Mech,R. Jeyasingh 3rd Mech",
        mobile: "9942943975",
        stdmobile: "9791643520",
        email: "infest2k26mech@gmail.com",
        eventTitle: "Project Presentation",
        eventDesc: "Project Presentation is an event where the participants are required to make a project about a certain topic and present infront of a jury.",
        rules: [
            " Maximum 4 members per team",
            "The Project topics shall be chosen by their own",
            "Presentation should not exceed more than 10 slides",
            'A team should present the project upto 8 minutes.'
        ],
        criteria: [
            "Whether your projects satisfy the needs of society",
            "Students Involvement and their Innovative ideas"
        ]
    },
    {
        id: 3,
        img: cad_master,
        coordinator: "Mr.S.Dhivakaran AP/Mech",
        studentCoordinator: "P.Mouneesh, S.Dharun",
        mobile: "9786071886",
        email: "infest2k26mech@gmail.com",
        stdmobile: "8610546242",
        eventTitle: "CAD Master",
        eventDesc: "For this CAD master students will be provided computer with autocad software installed and they should perform the assigned task.",
        rules: [
            "Maximum 2 students are allowed to participate for modelling",
            "30 Mts duration will be provided for completing the assigned task",
            "Prelims stages may be considered if more number participants is registered",
            " Usage of Phone is restricted"
        ],
        criteria: [
            " Maximum Completion of task within the duration"
        ]
    },
    {
        id: 4,
        img: fun,
        coordinator: "Mr.S.Imthiyas AP/Mech",
        studentCoordinator: "Mr.S.R.Yeshwanth",
        mobile: "9042867737",
        stdmobile: "9345534829",
        email: "infest2k26mech@gmail.com",
        eventTitle: "Connections",
        eventDesc: 'In this event, participants will be shown a set of two or more images simultaneously. Your goal is to identify the hidden connection, phrase, compound word, or concept that ties all the images together. ',
        rules: [
            "Open to all registered participants",
            "The event can be played in teams (e.g., 2  members per team).",
            "The images will be displayed via [e.g., PowerPoint, Projector]. ",
            " Usage of Phone is restricted"
        ],
        criteria: [
            " 1.	The team scoring the highest points at the end of the final round will be declared the winner of the event."
        ]
    },
    {
        id: 5,
        img: quiz,
        coordinator: "Mr.S.Imithiyas AP/Mech",
        studentCoordinator: "Mr.K.Athesh",
        mobile: "9042867737",
        stdmobile: "6379830086",
        email: "infest2k26mech@gmail.com",
        eventTitle: "Techniacal Quiz",
        eventDesc: "Water rocketry is a technical event in which students can use their ideas effectively and produce a pressurized water rocket.",
        rules: [
            "Accessories kit should be carried by their own",
            "Manually operated pump will be provided",
            'Only two persons are allowed.'
        ],
        criteria: [
            "Maximum the distance will decide the winner."
        ]
    },
    {
        id: 6,
        img: mr_mechanic,
        coordinator: "Mr.P.Sathish Kumar AP/Mech",
        studentCoordinator: "Mr.S.Perarasu",
        mobile: "9698175302",
        stdmobile: "824810617",
        email: "infest2k26mech@gmail.com",
        eventTitle: "Mr.Mechanic",
        eventDesc: "This event is completely based on technical. Students are asked to identify mechanical components or to assemble the components.",
        rules: [
            "Maximum 2 students are allowed to participate.",
            "Time duration of 15 mts will be provided.",
            "Usage of Phone is restricted."
        ],
        criteria: [
            "The more you scores on identifying or assembling the components will be decided the winner."
        ]
    },
];

export default MechCardContent;