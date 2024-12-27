import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { PluginListenerHandle } from '@capacitor/core';
import { ConnectionStatus, Network } from '@capacitor/network';

@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss'],
})
export class NetworkPage implements OnInit, OnDestroy {

  networkListener!: PluginListenerHandle;
  // status!: ConnectionStatus;
  status!: string;

  constructor(private ngZone: NgZone) { }

  async ngOnInit() {
    this.networkListener = await Network.addListener('networkStatusChange', status => {
      console.log('Network status changed', status);
      this.ngZone.run(() => {
        // this.status = status;
        this.changeStatus(status);
      });
    });
    const status = await Network.getStatus();
    this.changeStatus(status);
    console.log('Network status:', this.status);
  }

  changeStatus(status: ConnectionStatus) {
    this.status = status.connected ? 'Online' : 'Offline'; 
  }

  ngOnDestroy(): void {
    if(this.networkListener) this.networkListener.remove();
  }
}
