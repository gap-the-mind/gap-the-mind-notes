export interface RenderingModel {
  id: string
  name: string
  lanes: LaneModel[]
}

export interface LaneModel {
  id: string
  filter: string
}

export interface RenderingState {
  rendering: RenderingModel[]
}
