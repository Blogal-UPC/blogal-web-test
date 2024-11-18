import { inject, Injectable } from '@angular/core';
import { Follower } from '../../shared/models/follower.model';


@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  private subReceptors : Follower[] = [
    {
      id:1,
      owner_id:1,
      receptor_id:[2],
    }
  ]
  private subEmitters : Follower[] = [
    {
      id:1,
      owner_id:2,
      receptor_id:[1],
    }
  ]
  private nextSubEmitterId = this.subEmitters.length + 1;
  private nextSubReceptorId = this.subReceptors.length + 1;

  getSubEmitterById(id:number):Follower|null{
    const sub=this.subEmitters.find(s=>s.owner_id===id);
    if(sub){
      return sub;
    }
    else{
      return null;
    }
  }
  getSubReceptorById(id:number):Follower|null{
    const sub = this.subReceptors.find(s=>s.owner_id===id);
    if(sub){
      return sub;
    }
    else{
      return null;
    }
  }
  addSubscription(emitter_id:number,receptor_id:number){
    
    const subreceptor=this.subReceptors.find(s=>s.owner_id===receptor_id);
    const subemitter=this.subEmitters.find(s=>s.owner_id===emitter_id);
    if(subreceptor){
      subreceptor.receptor_id.push(emitter_id);
    }
    else{
      const subR: Follower={id:this.nextSubReceptorId++,owner_id:receptor_id,receptor_id:[emitter_id]}
      this.subReceptors.push(subR)
    }
    if(subemitter){
      subemitter.receptor_id.push(receptor_id);
    }
    else{
      const subE: Follower={id:this.nextSubEmitterId++,owner_id:emitter_id,receptor_id:[receptor_id]}
      this.subEmitters.push(subE)
    }
  }
  deleteSubscription(emitter_id:number,receptor_id:number){
    const subreceptor = this.subReceptors.find(s => s.owner_id === receptor_id);
    if (subreceptor) {
      // Filtrar para eliminar el emisor
      subreceptor.receptor_id = subreceptor.receptor_id.filter(id => id !== emitter_id);
    }

    const subemitter = this.subEmitters.find(s => s.owner_id === emitter_id);
    if (subemitter) {
      // Filtrar para eliminar el receptor
      subemitter.receptor_id = subemitter.receptor_id.filter(id => id !== receptor_id);
    }
  }
  constructor() { }
}
