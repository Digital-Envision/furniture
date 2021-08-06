import coffeeBackground from './images/Backgrounds/Coffee/Bases.jpeg';
import diningBackground from './images/Backgrounds/Dining/Bases.jpeg';

import an0071pBaseChair from './images/Chairs/AN0071P Upholstered dining chair/Preview.png';
import an0071pLeftChair from './images/Chairs/AN0071P Upholstered dining chair/Left.png';
import an0071pRightChair from './images/Chairs/AN0071P Upholstered dining chair/Right.png';
import an0071pLeftSideChair from './images/Chairs/AN0071P Upholstered dining chair/LeftSide.png';
import an0071pRightSideChair from './images/Chairs/AN0071P Upholstered dining chair/RightSide.png';

import an0078pBaseChair from './images/Chairs/AN0078P Velvet cushion accent chair/Preview.png';
import an0078pLeftChair from './images/Chairs/AN0078P Velvet cushion accent chair/Left.png';
import an0078pRightChair from './images/Chairs/AN0078P Velvet cushion accent chair/Right.png';
import an0078pLeftSideChair from './images/Chairs/AN0078P Velvet cushion accent chair/LeftSide.png';
import an0078pRightSideChair from './images/Chairs/AN0078P Velvet cushion accent chair/RightSide.png';

import an0083pBaseChair from './images/Chairs/AN0083P Upholstered armchair for dining room/Preview.png';
import an0083pLeftChair from './images/Chairs/AN0083P Upholstered armchair for dining room/Left.png';
import an0083pRightChair from './images/Chairs/AN0083P Upholstered armchair for dining room/Right.png';
import an0083pLeftSideChair from './images/Chairs/AN0083P Upholstered armchair for dining room/LeftSide.png';
import an0083pRightSideChair from './images/Chairs/AN0083P Upholstered armchair for dining room/RightSide.png';

import an0008pBaseChair from './images/Chairs/AN0088P Fantastic furniture dining chairs Item/Preview.png';
import an0008pLeftChair from './images/Chairs/AN0088P Fantastic furniture dining chairs Item/Left.png';
import an0008pRightChair from './images/Chairs/AN0088P Fantastic furniture dining chairs Item/Right.png';
import an0008pLeftSideChair from './images/Chairs/AN0088P Fantastic furniture dining chairs Item/LeftSide.png';
import an0008pRightSideChair from './images/Chairs/AN0088P Fantastic furniture dining chairs Item/RightSide.png';

import an0057pTable from './images/CoffeeTables/AN0057P Light luxury minimalist italian sintered stone coffee table/Tables.png';
import an0062pTable from './images/CoffeeTables/AN0062P Modern minimalist 2-piece ceramic coffee table living room set/Tables.png';
import an0068pTable from './images/CoffeeTables/AN0068P Modern design round sintered stone nesting coffee tables/Tables.png';

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
      LEFT: an0071pLeftChair,
      RIGHT: an0071pRightChair,
      LEFTSIDE: an0071pLeftSideChair,
      RIGHTSIDE: an0071pRightSideChair,
    },
  },
  AN0078P: {
    LABEL: 'AN0078P Velvet cushion accent chair',
    IMAGES: {
      BASE: an0078pBaseChair,
      LEFT: an0078pLeftChair,
      RIGHT: an0078pRightChair,
      LEFTSIDE: an0078pLeftSideChair,
      RIGHTSIDE: an0078pRightSideChair,
    },
  },
  AN0083P: {
    LABEL: 'AN0083P Upholstered armchair for dining room',
    IMAGES: {
      BASE: an0083pBaseChair,
      LEFT: an0083pLeftChair,
      RIGHT: an0083pRightChair,
      LEFTSIDE: an0083pLeftSideChair,
      RIGHTSIDE: an0083pRightSideChair,
    },
  },
  AN008P: {
    LABEL: 'AN0088P Fantastic furniture dining chairs Item',
    IMAGES: {
      BASE: an0008pBaseChair,
      LEFT: an0008pLeftChair,
      RIGHT: an0008pRightChair,
      LEFTSIDE: an0008pLeftSideChair,
      RIGHTSIDE: an0008pRightSideChair,
    },
  },
};

export const COFFEE_TABLE = {
  AN0057P: {
    LABEL:
      'AN0057P Light luxury minimalist italian sintered stone coffee table',
    IMAGES: {
      BASE: an0057pTable,
    },
  },
  AN0062P: {
    LABEL:
      'AN0062P Modern minimalist 2-piece ceramic coffee table living room set',
    IMAGES: {
      BASE: an0062pTable,
    },
  },
  AN0068P: {
    LABEL: 'AN0068P Modern design round sintered stone nesting coffee tables',
    IMAGES: {
      BASE: an0068pTable,
    },
  },
};

export const DINING_TABLE = {
  1: {
    LABEL:
      'Industrial factory with metal base marble countertop round ceramic dining table',
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
