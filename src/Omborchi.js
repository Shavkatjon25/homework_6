import { createSlice } from "@reduxjs/toolkit"


const Omborchi=createSlice({
    name:'ombor',
    initialState:{
        namer:0,
        metod: 1,
        fileSoni:[{id:0,fileName: 'New folder', metod:'Get', metodId:1},],
        urlApi:[],        
    },
    reducers:{
        FileNam:(state, action)=>{
            state.fileSoni[state.namer].fileName=action.payload
        },
        metodd:(state, {payload})=>{
            state.fileSoni[state.namer].metodId=payload;
        },
        Metd:(state, {payload})=>{
            state.fileSoni[state.namer].metod=payload
        },
        New:(state)=>{
            state.fileSoni.push({
                id:state.fileSoni.length,
                fileName: 'New folder',
                metod:'Get',
                metodId:1
            }),
            state.namer=state.fileSoni.length-1
        },
        Namr:(state, {payload})=>{
            state.namer=payload
        },
        Ap:(state, {payload})=>{
            state.urlApi=payload
        }
    }

})

export default Omborchi