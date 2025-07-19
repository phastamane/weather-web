import {Theme} from "@nivo/theming"
import { create } from "zustand"





export const myTheme: Partial<Theme> = {
  background: 'transparent',
  text: {
    fontFamily: 'SFPro',
    fontSize: 16,
    fill: '#fff',
    outlineWidth: 0,
    outlineColor: 'transparent',
    outlineOpacity: 1
  },
  axis: {
    domain: {
      line: {
        stroke: '#fff',
        strokeWidth: 1
      }
    },
    ticks: {
      line: {
        stroke: '#fff',
        strokeWidth: 1
      },
      text: {
        fontFamily: 'SFPro',
        fontSize: 16,
        fill: '#fff',
        outlineWidth: 0,
        outlineColor: 'transparent',
        outlineOpacity: 1
      }
    },
    legend: {
      text: {
        fontFamily: 'SFPro',
        fontSize: 16,
        fill: '#fff',
        outlineWidth: 0,
        outlineColor: 'transparent',
        outlineOpacity: 1
      }
    }
  },
  grid: {
    line: {
      stroke: '#fff',
      strokeWidth: 1
    }
  },
  legends: {
    text: {
      fontFamily: 'SFPro',
      fontSize: 16,
      fill: '#fff',
      outlineWidth: 0,
      outlineColor: 'transparent',
      outlineOpacity: 1
    },
    title: {
      text: {
        fontFamily: 'SFPro',
        fontSize: 16,
        fill: '#fff',
        outlineWidth: 0,
        outlineColor: 'transparent',
        outlineOpacity: 1
      }
    },
    ticks: {
      line: {
        stroke: '#fff',
        strokeWidth: 1
      },
      text: {
        fontFamily: 'SFPro',
        fontSize: 16,
        fill: '#fff',
        outlineWidth: 0,
        outlineColor: 'transparent',
        outlineOpacity: 1
      }
    },
    hidden: {
      symbol: {
        fill: '#fff',
        opacity: 0.5
      },
      text: {
        fontFamily: 'SFPro',
        fontSize: 16,
        fill: '#fff',
        outlineWidth: 0,
        outlineColor: 'transparent',
        outlineOpacity: 1
      }
    }
  },
  labels: {
    text: {
      fontFamily: 'SFPro',
      fontSize: 16,
      fill: '#fff',
      outlineWidth: 0,
      outlineColor: 'transparent',
      outlineOpacity: 1
    }
  },
  dots: {
    text: {
      fontFamily: 'SFPro',
      fontSize: 16,
      fill: '#fff',
      outlineWidth: 0,
      outlineColor: 'transparent',
      outlineOpacity: 1
    }
  },
  tooltip: {
    container: {
      fontFamily: 'SFPro',
      fontSize: 16,
      color: '#fff',
      background: '#000',
      border: '1px solid #fff',
      padding: '8px'
    },
    basic: {},
    chip: {},
    table: {},
    tableCell: {},
    tableCellValue: {}
  }
}


export const data = [
  {
    id: "japan",
    "data": [
      {
        "x": "1",
        "y": 248
      },
      {
        "x": "helicopter",
        "y": 109
      },
      {
        "x": "boat",
        "y": 291
      },
      {
        "x": "train",
        "y": 184
      },
      {
        "x": "subway",
        "y": 233
      },
      {
        "x": "bus",
        "y": 215
      },
      {
        "x": "car",
        "y": 198
      },
      {
        "x": "moto",
        "y": 29
      },
      {
        "x": "bicycle",
        "y": 153
      },
      {
        "x": "horse",
        "y": 58
      },
      {
        "x": "skateboard",
        "y": 24
      },
      {
        "x": "others",
        "y": 129
      }
    ]
  }
]