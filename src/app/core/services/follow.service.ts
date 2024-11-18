import { Injectable } from '@angular/core';
import { Follower } from '../../shared/models/follower.model';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor() { }
  
  private followEmitters : Follower[] = [
    {
      id:1,
      owner_id:2,
      receptor_id:[1],
    }
  ]
  private nextFollowEmitterId = this.followEmitters.length + 1;
  

  getFollowEmitterById(id:number):Follower|null{
    const sub=this.followEmitters.find(s=>s.owner_id===id);
    if(sub){
      return sub;
    }
    else{
      return null;
    }
  }
  
  addFollow(emitter_id:number,receptor_id:number){
    
    const followEmitter=this.followEmitters.find(s=>s.owner_id===emitter_id);
    if(followEmitter){
      followEmitter.receptor_id.push(receptor_id);
    }
    else{
      const subE: Follower={id:this.nextFollowEmitterId++,owner_id:emitter_id,receptor_id:[receptor_id]}
      this.followEmitters.push(subE)
    }
  }
  deleteFollow(emitter_id:number,receptor_id:number){

    const subemitter = this.followEmitters.find(s => s.owner_id === emitter_id);
    if (subemitter) {
      // Filtrar para eliminar el receptor
      subemitter.receptor_id = subemitter.receptor_id.filter(id => id !== receptor_id);
    }
  }
  
}
