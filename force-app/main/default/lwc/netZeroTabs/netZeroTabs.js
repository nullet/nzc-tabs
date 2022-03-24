import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NetZeroTabs extends NavigationMixin(LightningElement) {

  handleSetActiveSectionStationary() {
    const accordion = this.template.querySelector('.nzc-tabs');

    accordion.activeSectionName = 'Stationary';  
  }

// --------------------  STATIONARY ASSETS NAV FUNCTIONS--------------------
  navToStnryAssetEnvrSrc() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'StnryAssetEnvrSrc',
        actionName: 'home'
      }
    })
  };
  navToStnryAssetCrbnFtprnt() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'StnryAssetCrbnFtprnt',
        actionName: 'home'
      }
    })
  };
  navToStnryAssetEnrgyUse() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'StnryAssetEnrgyUse',
        actionName: 'home'
      }
    })
  };

// --------------------  VEHICLE ASSETS NAV FUNCTIONS--------------------
  navToVehicleAssetEmssnSrc() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'VehicleAssetEmssnSrc',
        actionName: 'home'
      }
    })
  };
  navToVehicleAssetCrbnFtprnt() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'VehicleAssetCrbnFtprnt',
        actionName: 'home'
      }
    })
  };
  navToVehicleAssetEnrgyUse() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'VehicleAssetEnrgyUse',
        actionName: 'home'
      }
    })
  };

// --------------------  ANALYTICS NAV FUNCTIONS--------------------

  navToAnalytics() {
    this[NavigationMixin.Navigate]({
      type: 'standard__namedPage',
      attributes: {
        pageName: 'analytics',
      }
    })
  };

// --------------------  SCOPE 3 NAV FUNCTIONS--------------------

  navToScope3EmssnSrc() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'Scope3EmssnSrc',
        actionName: 'home'
      }
    })
  };  
  navToScope3Hub() {
    this[NavigationMixin.Navigate]({
      type: 'standard__directCmpReference',
      attributes: {
        name: 'runtime_industries_sustainability:supplyChainControlPanel',
      }
    })
  };
  navToSupplier() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'Supplier',
        actionName: 'home'
      }
    })
  };

// VALUE CHAIN

  navToScope3PcmtSummary() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'Scope3PcmtSummary',
        actionName: 'home'
      }
    })
  };
  navToScope3PcmtItem() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'Scope3PcmtItem',
        actionName: 'home'
      }
    })
  };
  navToSustainabilityScorecard() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'SustainabilityScorecard',
        actionName: 'home'
      }
    })
  };
  navToFrgtHaulingEnrgyUse() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'FrgtHaulingEnrgyUse',
        actionName: 'home'
      }
    })
  };

// BUSINESS TRAVEL

  navToAirTravelEnrgyUse() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'AirTravelEnrgyUse',
        actionName: 'home'
      }
    })
  };
  navToGroundTravelEnrgyUse() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'GroundTravelEnrgyUse',
        actionName: 'home'
      }
    })
  };
  navToHotelStayEnrgyUse() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'HotelStayEnrgyUse',
        actionName: 'home'
      }
    })
  };
  navToRentalCarEnrgyUse() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'RentalCarEnrgyUse',
        actionName: 'home'
      }
    })
  };

// WASTE

  navToWasteFootprint() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'WasteFootprint',
        actionName: 'home'
      }
    })
  };
  navToGeneratedWaste() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'GeneratedWaste',
        actionName: 'home'
      }
    })
  };

// --------------------  EMISSIONS FACTOR NAV FUNCTIONS --------------------
// SCOPE 1 AND 2

  navToElectricityEmssnFctrSet() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'ElectricityEmssnFctrSet',
        actionName: 'home'
      }
    })
  };
  navToOtherEmssnFctrSet() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'OtherEmssnFctrSet',
        actionName: 'home'
      }
    })
  };
  navToOtherEmssnFctrSetItem() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'OtherEmssnFctrSetItem',
        actionName: 'home'
      }
    })
  };
  navToRefrigerantEmssnFctr() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'RefrigerantEmssnFctr',
        actionName: 'home'
      }
    })
  };

// SCOPE 3

  navToPcmtEmssnFctrSet() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'PcmtEmssnFctrSet',
        actionName: 'home'
      }
    })
  };
  navToPcmtEmssnFctrSetItem() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'PcmtEmssnFctrSetItem',
        actionName: 'home'
      }
    })
  };
  navToFrgtHaulingEmssnFctr() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'FrgtHaulingEmssnFctr',
        actionName: 'home'
      }
    })
  };
  navToAirTravelEmssnFctr() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'AirTravelEmssnFctr',
        actionName: 'home'
      }
    })
  };
  navToGroundTravelEmssnFctr() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'GroundTravelEmssnFctr',
        actionName: 'home'
      }
    })
  };
  navToHotelStayEmssnFctr() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'HotelStayEmssnFctr',
        actionName: 'home'
      }
    })
  };
  navToRentalCarEmssnFctr() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'RentalCarEmssnFctr',
        actionName: 'home'
      }
    })
  };
  navToWstDispoEmssnFctrSetItm() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'WstDispoEmssnFctrSetItm',
        actionName: 'home'
      }
    })
  };
  navToWstDispoEmssnFctrSet() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'WstDispoEmssnFctrSet',
        actionName: 'home'
      }
    })
  };

// --------------------  BUILDING ENERGY INTENSITY NAV FUNCTIONS -------------------

navToBldgEnrgyIntensity() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'BldgEnrgyIntensity',
        actionName: 'home'
      }
    })
  };
  navToBldgEnrgyIntensityVal() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'BldgEnrgyIntensityVal',
        actionName: 'home'
      }
    })
  };

// -------------------- FORECASTING NAV FUNCTIONS ------------------

navToEmissionsActivity() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'EmissionsActivity',
        actionName: 'home'
      }
    })
  };
  navToEmissionsForecastFact() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'EmissionsForecastFact',
        actionName: 'home'
      }
    })
  };

// -------------------- SETUP NAV FUNCTIONS ------------------

navToCrbnEmssnScopeAllocVal() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'CrbnEmssnScopeAllocVal',
        actionName: 'home'
      }
    })
  };
  navToCrbnEmssnScopeAlloc() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'CrbnEmssnScopeAlloc',
        actionName: 'home'
      }
    })
  };
  navToInflationRate() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'InflationRate',
        actionName: 'home'
      }
    })
  };
  navToStnryAssetCrbnFtprntItm() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'StnryAssetCrbnFtprntItm',
        actionName: 'home'
      }
    })
  };
  navToWasteFootprintItem() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'WasteFootprintItem',
        actionName: 'home'
      }
    })
  };
  navToBldgSizeCategory() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'BldgSizeCategory',
        actionName: 'home'
      }
    })
  };



}