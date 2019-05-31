import { ConfirmedList } from './confirmedList.model';

export class Event {
    public title: string;
    public location: string;
    public date: string;
    public time: string;
    public confirmed: ConfirmedList[];
}