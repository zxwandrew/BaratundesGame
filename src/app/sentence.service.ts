import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SentenceService {
  apiKey:string = ""
  sentences:any[] = 
  [
    {
        "headline": "Police called on Black man opening his own business",
        "caller": "Neighbor",
        "target": "Black Man",
        "activity": "Opening His Business"
    },
    {
        "headline": "Outrage over neighbor calling police on grass-cutting kids helps 12-year-old's summer business",
        "caller": "White Neighbor",
        "target": "Black Children",
        "activity": "Mowing Small Section of Neighbor's Yard"
    },
    {
        "headline": "‘First day of paper route and we are pulled over by police’",
        "caller": "",
        "target": "Black Teen",
        "activity": "Removing Newspapers From Wrong Addresses"
    },
    {
        "headline": "Woman calls cops on black Oregon lawmaker campaigning in her district",
        "caller": "White Woman",
        "target": "Black State Legislator",
        "activity": "Canvassing"
    },
    {
        "headline": "Woman called cops on me for standing in doorway during rain",
        "caller": "White Woman",
        "target": "Black Woman",
        "activity": "Waiting For An Uber"
    },
    {
        "headline": "A White Man Called Police On A Black Woman Who Was Using A Neighborhood Pool",
        "caller": "White Man",
        "target": "Black Woman",
        "activity": "Using Swimming Pool"
    },
    {
        "headline": "Catholic University librarian calls police on student trying to study",
        "caller": "Catholic University Law Library Attendant",
        "target": "Black Student",
        "activity": "\"Becoming Argumentative\""
    },
    {
        "headline": "Woman fired after calling the police on a black man for wearing socks in community pool",
        "caller": "White Woman",
        "target": "Black Man",
        "activity": "Wearing Socks In Community Pool"
    },
    {
        "headline": "Cleveland man alleges racial profiling after bank refuses to cash check, calls 9-1-1",
        "caller": "Bank Teller",
        "target": "Black Man",
        "activity": "Attempting To Cash Check"
    },
    {
        "headline": "Woman Calls Police On Man Trying To Get Into His Own Car",
        "caller": "White Woman",
        "target": "Black Man",
        "activity": "Getting Into His Car"
    },
    {
        "headline": "Black women surrounded by police because neighbours thought they were burgling Airbnb",
        "caller": "Elderly White Woman",
        "target": "Three Black Women",
        "activity": "Packing Their Cars"
    },
    {
        "headline": "Guest says Hilton 'racially profiled' him by calling police over lobby phone call",
        "caller": "White Hotel Security Guard",
        "target": "Black Man",
        "activity": "Speaking On Phone To His Mother"
    },
    {
        "headline": "White woman calls police on black man after his dog 'assaults' hers",
        "caller": "White Woman",
        "target": "Black Man",
        "activity": "Not Stopping His Dog From Humping Her Dog"
    },
    {
        "headline": "How ‘Gardening While Black’ Almost Landed This Detroit Man in Jail",
        "caller": "White Woman",
        "target": "Black Man",
        "activity": "Operating Community Garden"
    },
    {
        "headline": "Parking Patrol Paula Calls Cops on Black Man Who Was Trying To Get Into His Own Car",
        "caller": "White Woman",
        "target": "Black Man",
        "activity": "Getting Into His Car"
    },
    {
        "headline": "Cops Arrest Two Black Men Sitting In Starbucks For ‘Trespassing’",
        "caller": "White Employee",
        "target": "Two Black Men",
        "activity": "Sitting In Starbucks"
    },
    {
        "headline": "Woman Calls Police on Black Family for BBQing at a Lake in Oakland",
        "caller": "White Woman",
        "target": "Black Family",
        "activity": "Using Wrong Type Of BBQ Grill"
    },
    {
        "headline": "Anonymous tip sent to UMPD about claims of an ‘agitated Black male;’ University employee was walking to work",
        "caller": "Anonymous",
        "target": "Black Man",
        "activity": "Being \"Agitated\" While Walking To Work"
    },
    {
        "headline": "Georgia woman calls police on black man baby-sitting 2 white kids",
        "caller": "White Woman",
        "target": "Black Man",
        "activity": "Babysitting Two White Children"
    },
    {
        "headline": "Canadian cops called on black man reading C.S. Lewis in his car",
        "caller": "",
        "target": "Black Man",
        "activity": "Reading C.S. Lewis In His Car"
    },
    {
        "headline": "Dunkin' employee calls police on student speaking Somali with her family",
        "caller": "White Dunkin Donuts Employee",
        "target": "Somali Woman",
        "activity": "Speaking Somali With Her Family"
    },
    {
        "headline": "Report: SC woman hit black teen and told him to leave pool because 'he didn't belong'",
        "caller": "White Woman",
        "target": "Black Teen",
        "activity": "Using Swimming Pool"
    },
    {
        "headline": "Man claims he was racially profiled in Long Beach",
        "caller": "White Woman",
        "target": "Black Man",
        "activity": "Listening to Yoga CD in His Car"
    },
    {
        "headline": "Black Yale student reported to police for sleeping in her dorm",
        "caller": "White PhD Student",
        "target": "Black Yale Student",
        "activity": "Napping"
    },
    {
        "headline": "White Woman Calls Police on 8-Year-Old Black Girl Selling Water, Says She Was Tired of the Noise ",
        "caller": "White Woman",
        "target": "8-Year-Old Black Girl",
        "activity": "Selling Water"
    },
    {
        "headline": "California Safeway calls cops on woman donating food to homeless man",
        "caller": "Safeway Employees",
        "target": "Black Woman",
        "activity": "Donating Food To Homeless"
    },
    {
        "headline": "Sen. Jesse Hamilton says Trump supporter called cops on him in Brooklyn",
        "caller": "White Woman",
        "target": "Black State Senator",
        "activity": "Canvassing"
    },
    {
        "headline": "Subway Employee Calls 911 on Black Family Because She Thought They Would Rob Her",
        "caller": "Subway Employee",
        "target": "Black Family of Seven",
        "activity": "\"Going Back and Forth to the Bathrooms\""
    },
    {
        "headline": "Smith College Employee Called Police On Black Student Eating Lunch",
        "caller": "White Employee",
        "target": "Black Student",
        "activity": "Eating Lunch"
    },
    {
        "headline": "CVS manager calls police on black woman over coupon",
        "caller": "White Manager",
        "target": "Black Woman",
        "activity": "Using A Coupon"
    },
    {
        "headline": "Woman falsely accuses boy of groping, appears to call 911 in racially-charged viral video",
        "caller": "White Woman",
        "target": "9-Year-Old Black Boy",
        "activity": "Letting His Backpack Brush Against Her"
    },
    {
        "headline": "A white woman called the cops on a black real estate investor. Police defended him.",
        "caller": "White Woman",
        "target": "Black Man",
        "activity": "Inspecting House He Was Buying"
    },
    {
        "headline": "Golf club twice called police after black women told they were playing too slow",
        "caller": "Club Management",
        "target": "Five Black Women",
        "activity": "Playing Golf Too Slowly"
    },
    {
        "headline": "Actor Ving Rhames said neighbor called 911 to report him as 'a large black man' breaking in",
        "caller": "White Woman",
        "target": "Black Man",
        "activity": "Watching Television In His Home"
    }
  ]
  constructor() {
    
  }
  async getSentencesAsync(){
    return await fetch("https://api.airtable.com/v0/appV76ut1BlB8UCJO/Incident%20Headlines?api_key="+this.apiKey)
    .then(res=>res.json())
    .then(incidents=>{
      const allrecords = incidents.records.map(async incident=>{
        let callerID = incident.fields.Caller ? incident.fields.Caller[0] : undefined
        let targetID = incident.fields.Targets ? incident.fields.Targets[0] : undefined
        let activityID = incident.fields.Activity ? incident.fields.Activity[0] : undefined
        let headline = incident.fields["Incident Headline"]

        let caller = callerID ? await fetch("https://api.airtable.com/v0/appV76ut1BlB8UCJO/Callers/"+callerID+"?api_key="+this.apiKey)
          .then(res=>res.json()).then(res=>{return res.fields.Name}) : ""
        let target = targetID ? await fetch("https://api.airtable.com/v0/appV76ut1BlB8UCJO/Targets/"+targetID+"?api_key="+this.apiKey)
          .then(res=>res.json()).then(res=>{return res.fields.Name}) : ""
        let activity = activityID ? await fetch("https://api.airtable.com/v0/appV76ut1BlB8UCJO/Activities/"+activityID+"?api_key="+this.apiKey)
          .then(res=>res.json()).then(res=>{return res.fields.Name}) : ""
        
        let record = {headline, caller, target, activity};
        // console.log("hi", record)
        return record
      })

      return Promise.all(allrecords).then(res=>{return res})
    })
  }
  getSentences(){
    return this.sentences
  }
}
