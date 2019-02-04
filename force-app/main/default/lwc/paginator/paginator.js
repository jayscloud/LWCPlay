import { LightningElement } from 'lwc';

export default class Paginator extends LightningElement {

handleNext(){
    //Create the custom event
    const nextEvent=new CustomEvent('next');
    //Fire the event
    this.dispatchEvent(nextEvent);
}

handlePrevious(){
    //Create the custom event
    const prevEvent=new CustomEvent('previous');
    //Fire the event
    this.dispatchEvent(prevEvent);

}

}