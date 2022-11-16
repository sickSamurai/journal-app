import { AnyAction, ThunkAction } from '@reduxjs/toolkit'

import { StoreState } from './StoreState'

export type VoidThunkAction = ThunkAction<void, StoreState, unknown, AnyAction>
