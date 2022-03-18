import { LightningElement } from 'lwc';

export default class NetZeroTabs extends LightningElement {

  handleSetActiveSectionStationary() {
    const accordion = this.template.querySelector('.nzc-tabs');

    accordion.activeSectionName = 'Stationary';
  }
}