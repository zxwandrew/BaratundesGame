import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SentenceService {
    randomSentences: any[] = []
    realSentences: any[] = []
    apiKey: string = ""

    sentences: any[] =
        [{ "headline": "Police called on Black man opening his own business", "caller": "Neighbor", "target": "Black Man", "activity": "Opening His Business", "link": "https://www.cnn.com/2018/07/23/us/san-francisco-lemonade-gourmonade/index.html" }, { "headline": "Outrage over neighbor calling police on grass-cutting kids helps 12-year-old's summer business", "caller": "White Neighbor", "target": "Black Children", "activity": "Mowing Small Section of Neighbor's Yard", "link": "https://www.usatoday.com/story/news/nation-now/2018/07/02/grass-cutting-police-called-maple-heights-ohio/750760002/" }, { "headline": "Woman calls cops on black Oregon lawmaker campaigning in her district", "caller": "White Woman", "target": "Black State Legislator", "activity": "Canvassing", "link": "https://abcnews.go.com/US/woman-calls-cops-black-oregon-lawmaker-campaigning-district/story?id=56380571" }, { "headline": "Woman called cops on me for standing in doorway during rain", "caller": "White Woman", "target": "Black Woman", "activity": "Waiting For An Uber", "link": "https://www.ebony.com/news/white-woman-calls-cops-black-woman-uber-video/" }, { "headline": "A White Man Called Police On A Black Woman Who Was Using A Neighborhood Pool", "caller": "White Man", "target": "Black Woman", "activity": "Using Swimming Pool", "link": "https://www.buzzfeednews.com/article/jimdalrympleii/black-woman-police-pool-access-idadam#.aiq9JOxaE" }, { "headline": "Catholic University librarian calls police on student trying to study", "caller": "Catholic University Law Library Attendant", "target": "Black Student", "activity": "\"Becoming Argumentative\"", "link": "https://thegrio.com/2018/10/24/catholic-university-librarian-calls-police-on-student-trying-to-study/" }, { "headline": "Woman fired after calling the police on a black man for wearing socks in community pool", "caller": "White Woman", "target": "Black Man", "activity": "Wearing Socks In Community Pool", "link": "https://www.usatoday.com/story/news/nation-now/2018/07/08/woman-fired-called-cops-black-man-socks-pool/766467002/" }, { "headline": "Cleveland man alleges racial profiling after bank refuses to cash check, calls 9-1-1", "caller": "Bank Teller", "target": "Black Man", "activity": "Attempting To Cash Check", "link": "https://www.cleveland19.com/2018/12/18/cleveland-man-alleges-racial-profiling-after-bank-refuses-cash-check-calls/" }, { "headline": "Woman Calls Police On Man Trying To Get Into His Own Car", "caller": "White Woman", "target": "Black Man", "activity": "Getting Into His Car", "link": "https://www.wisn.com/article/woman-calls-police-on-man-trying-to-get-into-his-own-car/22750956" }, { "headline": "Black women surrounded by police because neighbours thought they were burgling Airbnb", "caller": "Elderly White Woman", "target": "Three Black Women", "activity": "Packing Their Cars", "link": "https://metro.co.uk/2018/05/08/black-women-surrounded-police-neighbours-thought-burgling-airbnb-7530406/" }, { "headline": "Guest says Hilton 'racially profiled' him by calling police over lobby phone call", "caller": "White Hotel Security Guard", "target": "Black Man", "activity": "Speaking On Phone To His Mother", "link": "https://www.usatoday.com/story/travel/news/2018/12/26/guest-hilton-racially-profiled-him-called-police-over-phone-call/2417679002/" }, { "headline": "White woman calls police on black man after his dog 'assaults' hers", "caller": "White Woman", "target": "Black Man", "activity": "Not Stopping His Dog From Humping Her Dog", "link": "https://www.nbcnews.com/news/us-news/white-woman-calls-police-black-man-after-his-dog-assaults-n978056" }, { "headline": "How ‘Gardening While Black’ Almost Landed This Detroit Man in Jail", "caller": "White Woman", "target": "Black Man", "activity": "Operating Community Garden", "link": "https://www.nytimes.com/2018/10/26/us/white-women-calling-police-black-men.html" }, { "headline": "Parking Patrol Paula Calls Cops on Black Man Who Was Trying To Get Into His Own Car", "caller": "White Woman", "target": "Black Man", "activity": "Getting Into His Car", "link": "https://www.theroot.com/parking-patrol-paula-calls-cops-on-black-man-who-was-tr-1828416500" }, { "headline": "Cops Arrest Two Black Men Sitting In Starbucks For ‘Trespassing’", "caller": "White Employee", "target": "Two Black Men", "activity": "Sitting In Starbucks", "link": "https://www.huffingtonpost.com/entry/starbucks-philadelphia-black-men-arrests_us_5ad22073e4b077c89ce91c74" }, { "headline": "Woman Calls Police on Black Family for BBQing at a Lake in Oakland", "caller": "White Woman", "target": "Black Family", "activity": "Using Wrong Type Of BBQ Grill", "link": "https://www.huffingtonpost.com/entry/woman-calls-police-oakland-barbecue_us_5af50125e4b00d7e4c18f741" }, { "headline": "Anonymous tip sent to UMPD about claims of an ‘agitated Black male;’ University employee was walking to work", "caller": "Anonymous", "target": "Black Man", "activity": "Being \"Agitated\" While Walking To Work", "link": "https://dailycollegian.com/2018/09/anonymous-tip-sent-to-umpd-about-claims-of-an-agitated-black-male-university-employee-was-walking-to-work/" }, { "headline": "Georgia woman calls police on black man baby-sitting 2 white kids", "caller": "White Woman", "target": "Black Man", "activity": "Babysitting Two White Children", "link": "https://www.nbcnews.com/news/us-news/georgia-woman-calls-police-black-man-babysitting-2-white-kids-n918476" }, { "headline": "Dunkin' employee calls police on student speaking Somali with her family", "caller": "White Dunkin Donuts Employee", "target": "Somali Woman", "activity": "Speaking Somali With Her Family", "link": "https://www.nbcnews.com/news/us-news/dunkin-employee-calls-police-student-speaking-somali-her-family-n922046" }, { "headline": "Report: SC woman hit black teen and told him to leave pool because 'he didn't belong'", "caller": "White Woman", "target": "Black Teen", "activity": "Using Swimming Pool", "link": "https://abc11.com/report-sc-woman-hit-black-teen-told-him-he-didnt-belong-at-pool/3662114/" }, { "headline": "Man claims he was racially profiled in Long Beach", "caller": "White Woman", "target": "Black Man", "activity": "Listening to Yoga CD in His Car", "link": "https://www.foxla.com/news/local-news/man-claims-he-was-racially-profiled-in-long-beach" }, { "headline": "Black Yale student reported to police for sleeping in her dorm", "caller": "White PhD Student", "target": "Black Yale Student", "activity": "Napping", "link": "https://www.usatoday.com/story/news/nation/2018/05/09/yale-black-graduate-student-police/597101002/" }, { "headline": "White Woman Calls Police on 8-Year-Old Black Girl Selling Water, Says She Was Tired of the Noise ", "caller": "White Woman", "target": "8-Year-Old Black Girl", "activity": "Selling Water", "link": "https://www.theroot.com/permitpatty-white-woman-calls-police-on-8-year-old-gi-1827075905" }, { "headline": "California Safeway calls cops on woman donating food to homeless man", "caller": "Safeway Employees", "target": "Black Woman", "activity": "Donating Food To Homeless", "link": "https://www.foxnews.com/food-drink/california-safeway-calls-cops-on-woman-donating-food-to-homeless-man" }, { "headline": "Sen. Jesse Hamilton says Trump supporter called cops on him in Brooklyn", "caller": "White Woman", "target": "Black State Senator", "activity": "Canvassing", "link": "https://www.amny.com/news/trump-supporter-calls-cops-hamilton-1.20385090" }, { "headline": "Subway Employee Calls 911 on Black Family Because She Thought They Would Rob Her", "caller": "Subway Employee", "target": "Black Family of Seven", "activity": "\"Going Back and Forth to the Bathrooms\"", "link": "https://www.theroot.com/eatingoutwhileblack-subway-employee-calls-911-on-blac-1827358215" }, { "headline": "Smith College Employee Called Police On Black Student Eating Lunch", "caller": "White Employee", "target": "Black Student", "activity": "Eating Lunch", "link": "https://www.huffingtonpost.com/entry/smith-college-student-police_us_5b630b98e4b0fd5c73d6ee6d" }, { "headline": "CVS manager calls police on black woman over coupon", "caller": "White Manager", "target": "Black Woman", "activity": "Using A Coupon", "link": "https://abcnews.go.com/News/cvs-manager-calls-police-black-woman-coupon/story?id=56603903" }, { "headline": "Woman falsely accuses boy of groping, appears to call 911 in racially-charged viral video", "caller": "White Woman", "target": "9-Year-Old Black Boy", "activity": "Letting His Backpack Brush Against Her", "link": "https://www.usatoday.com/story/news/nation-now/2018/10/13/cornerstore-caroline-accuses-crying-child-groping-viral-video/1620691002/" }, { "headline": "A white woman called the cops on a black real estate investor. Police defended him.", "caller": "White Woman", "target": "Black Man", "activity": "Inspecting House He Was Buying", "link": "https://www.vox.com/identities/2018/5/15/17358360/white-woman-police-black-real-estate-investor-racial-profiling-memphis-michael-hayes" }, { "headline": "Golf club twice called police after black women told they were playing too slow", "caller": "Club Management", "target": "Five Black Women", "activity": "Playing Golf Too Slowly", "link": "https://www.usatoday.com/story/news/nation-now/2018/04/28/golf-club-twice-called-police-after-black-women-told-they-were-playing-too-slow/561206002/" }, { "headline": "Actor Ving Rhames said neighbor called 911 to report him as 'a large black man' breaking in", "caller": "White Woman", "target": "Black Man", "activity": "Watching Television In His Home", "link": "https://www.nbcnews.com/news/us-news/actor-ving-rhames-said-neighbor-called-911-report-him-large-n895611" }];
    sentenceLength: number = this.sentences.length;

    fakeSentence: any[] =
        [{
            "headline": "Gym Manager Calls Cops on Black Man Doing Cardio",
            "caller": "Gym Manager",
            "target": "Black Man",
            "activity": "Doing Cardio",
        },
        {
            "headline": "Apartment Resident Reports Black Pizza Delivery Man to Police for 'Loitering'",
            "caller": "Apartment Resident",
            "target": "Reports Black Pizza Delivery Man",
            "activity": "'Loitering'",
        },
        {
            "headline": "Black Study Group Questioned by Police for Assembling Without Permit in Library",
            "caller": "Anonymous",
            "target": "Black Study Group",
            "activity": "Assembling Without Permit in Library",
        },
        {
            "headline": "White Neighbor Summons Police for Group of Black Yogis 'Behaving Suspiciously'",
            "caller": "White Neighbor",
            "target": "Group of Black Yogis",
            "activity": "Behaving Suspiciously",
        },
        {
            "headline": "Police Called on African Delegation Visiting Senator’s Office",
            "caller": "Man",
            "target": "African Delegation",
            "activity": "Visiting Senator’s Office"
        },
        {
            "headline": "White Woman Calls Cops on Black Woman Docking Bikeshare Bike",
            "caller": "White Woman",
            "target": "Black Woman",
            "activity": "Docking Bikeshare Bike"
        },
        {
            "headline": "White Woman Calls Cops on Black Taxi Driver, Alleges He 'Took Money from Innocent People Just Sitting in the Back Seat'",
            "caller": "White Woman",
            "target": "Black Taxi Driver",
            "activity": "Took Money from Innocent People Just Sitting in the Back Seat"
        },
        {
            "headline": "Elderly White Man Calls Cops on Black Police Officer for Impersonating Police Officer",
            "caller": "Elderly White Man",
            "target": "Black Police Officer",
            "activity": "Impersonating Police Officer"
        },
        {
            "headline": "White Woman Calls Police on President Barack Obama for “Trespassing” at John Mccain’s Memorial Service",
            "caller": "White Woman",
            "target": "President Barack Obama",
            "activity": "Trespassing at John Mccain’s Memorial Service"
        },
        {
            "headline": "Woman Calls Cops on Black President Delivering State of the Union to Join Session of Congress",
            "caller": "Woman",
            "target": "Black President",
            "activity": "Delivering State of the Union to Join Session of Congress"
        },
        {
            "headline": "Black Meditation Circle Questioned by Police for Breathing Suspiciously",
            "caller": "Woman",
            "target": "Black Meditation Circle",
            "activity": "Breathing Suspiciously"
        },
        {
            "headline": "Police Called on Black Woman Reading Book in Park",
            "caller": "Man",
            "target": "Black Woman",
            "activity": "Readin book in Park"
        },
        {
            "headline": "Five Police Cars Surround Black Children Practicing Ahead of Fortnite Dance Competition",
            "caller": "Woman",
            "target": "Black Children",
            "activity": "Practicing Ahead of Fortnite Dance Competition"
        },
        {
            "headline": "SWAT Team Descends on Group of Black Children Trick-Or-Treating",
            "caller": "Man",
            "target": "Group of Black Children",
            "activity": "Trick-Or-Treating"
        }];
    fakeSentenceLength: number = this.fakeSentence.length;

    constructor() {
        // this.getSentencesAsync()
        this.generateRandomSentences(10)
    }
    async getSentencesAsync() {
        return await fetch("https://api.airtable.com/v0/appV76ut1BlB8UCJO/Incident%20Headlines?api_key=" + this.apiKey)
            .then(res => res.json())
            .then(incidents => {
                const allrecords = incidents.records.map(async incident => {
                    let callerID = incident.fields.Caller ? incident.fields.Caller[0] : undefined;
                    let targetID = incident.fields.Targets ? incident.fields.Targets[0] : undefined;
                    let activityID = incident.fields.Activity ? incident.fields.Activity[0] : undefined;
                    let headline = incident.fields["Incident Headline"];
                    let link = incident.fields["Article URL"];

                    let caller = callerID ? await fetch("https://api.airtable.com/v0/appV76ut1BlB8UCJO/Callers/" + callerID + "?api_key=" + this.apiKey)
                        .then(res => res.json()).then(res => { return res.fields.Name }) : undefined
                    let target = targetID ? await fetch("https://api.airtable.com/v0/appV76ut1BlB8UCJO/Targets/" + targetID + "?api_key=" + this.apiKey)
                        .then(res => res.json()).then(res => { return res.fields.Name }) : undefined
                    let activity = activityID ? await fetch("https://api.airtable.com/v0/appV76ut1BlB8UCJO/Activities/" + activityID + "?api_key=" + this.apiKey)
                        .then(res => res.json()).then(res => { return res.fields.Name }) : undefined

                    if(caller && target && activity){
                        let record = { headline, caller, target, activity, link };
                        return record
                    }
                })

                return Promise.all(allrecords).then(res => {
                    let filtered = res.filter((val)=>{
                        return !!val
                    })
                    return filtered
                })
            })
    }
    getSentences() {
        return this.sentences
    }
    generateRandomSentences(totalNumber: number) {
        let start = Math.ceil(totalNumber / 2) - 1;
        let numTrue = Math.ceil(Math.random() * (totalNumber / 2)) + start;
        let numFalse = totalNumber - numTrue;

        let realPos = {}
        let fakePos = {}
        //gen true sentences
        for (let i = 0; i < numTrue; i++) {
            let pos = Math.floor(Math.random() * this.sentenceLength);
            while (realPos[pos]) {
                pos = Math.floor(Math.random() * this.sentenceLength);
            }
            realPos[pos] = true;
            this.randomSentences.push({ ...this.sentences[pos], real: true });
            this.realSentences.push({ ...this.sentences[pos], real: true });
        }
        //gen false sentences
        for (let i = 0; i < numFalse; i++) {
            let pos = Math.floor(Math.random() * this.fakeSentenceLength);
            while (fakePos[pos]) {
                pos = Math.floor(Math.random() * this.fakeSentenceLength);
            }
            fakePos[pos] = true;
            this.randomSentences.push({ ...this.fakeSentence[pos], real: false });
        }
        for (let i = 0; i < totalNumber; i++) {
            let j = Math.floor(Math.random() * totalNumber);
            [this.randomSentences[i], this.randomSentences[j]] = [this.randomSentences[j], this.randomSentences[i]]
        }
        return this.randomSentences;
    }
    getRandomSentences() {
        return this.randomSentences;
    }
    getRealSentences() {
        return this.realSentences;
    }
    updateSentenceAnswer(pos, correct) {
        this.randomSentences[pos].correct = correct
    }
}
