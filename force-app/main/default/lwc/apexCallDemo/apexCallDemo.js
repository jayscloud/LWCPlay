import { LightningElement, track, wire } from 'lwc';
import mapData from '@salesforce/apex/LWCApexPlay.getMapData';
import listData from '@salesforce/apex/LWCApexPlay.getListData';

export default class ApexCallDemo extends LightningElement {
@track maprecords;
@track maperror;
@track listrecords;
@track listerror;


@wire(listData)
wireData({error,data}){

    if(data){
        //To print on console write bewlow line be fore using consol.log()
        /* eslint-disable no-console */
        console.log(data);
     this.listrecords=data;
    }
    if(error){
        this.listerror=error;
    }
}
 clickhandler(){
      /* eslint-disable no-console */
      console.log('click handler has been called');
    mapData().then(results=>{
         const options=[];
         for (let key in results) {
             if(key){
                options.push({key:key,value:results[key]})
             }
         }
         this.maprecords=options;
     }).catch(error=>{
        this.maperror=error;
     });
 }



}