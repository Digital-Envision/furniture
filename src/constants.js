import coffeeBackground from './images/Backgrounds/Coffee/Bases.jpeg';
import diningBackground from './images/Backgrounds/Dining/Bases.jpeg';

import an0071pBaseChair from './images/Chairs/AN0071P Upholstered dining chair/Bases.jpeg';
import an0071pCenterChair from './images/Chairs/AN0071P Upholstered dining chair/Center.png';
import an0071pLeftChair from './images/Chairs/AN0071P Upholstered dining chair/LeftSide.png';
import an0071pRightChair from './images/Chairs/AN0071P Upholstered dining chair/RightSide.png';

import otherBaseChair from './images/Chairs/Other Chairs/Bases.jpeg';
import otherCenterChair from './images/Chairs/Other Chairs/Center.png';
import otherLeftChair from './images/Chairs/Other Chairs/LeftSide.png';
import otherRightChair from './images/Chairs/Other Chairs/RightSide.png';

import an0057pTable from './images/CoffeeTables/AN0057P Light luxury minimalist italian sintered stone coffee table/Tables.png';

import diningTable1 from './images/DiningTables/Industrial factory with metal base marble countertop round ceramic dining table/Tables.png';
import diningTable2 from './images/DiningTables/Modern contemporary sintered stone table ceramic countertop/Tables.png';

export const BACKGROUND = {
  COFFEE: coffeeBackground,
  DINING: diningBackground,
};

export const CHAIR = {
  AN0071P: {
    LABEL: 'AN0071P Upholstered dining chair',
    IMAGES: {
      BASE: an0071pBaseChair,
      CENTER: an0071pCenterChair,
      LEFT: an0071pLeftChair,
      RIGHT: an0071pRightChair,
    },
  },
  OTHER: {
    LABEL: 'Other Chairs',
    IMAGES: {
      BASE: otherBaseChair,
      CENTER: otherCenterChair,
      LEFT: otherLeftChair,
      RIGHT: otherRightChair,
    },
  },
};

export const COFFEE_TABLE = {
  AN0057P: {
    LABEL: 'AN0057P Light luxury minimalist italian sintered stone coffee table',
    IMAGES: {
      BASE: an0057pTable,
    },
  },
};

export const DINING_TABLE = {
  1: {
    LABEL: 'Industrial factory with metal base marble countertop round ceramic dining table',
    IMAGES: {
      BASE: diningTable1,
    },
  },
  2: {
    LABEL: 'Modern contemporary sintered stone table ceramic countertop',
    IMAGES: {
      BASE: diningTable2,
    },
  },
};

export const MODAL_MODE = {
  CHAIR: 'chair',
  COFFEE_TABLE: 'coffee-table',
  DINING_TABLE: 'dining-table',
};
