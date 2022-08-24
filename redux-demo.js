const redux=require('redux')
const counterReducer=(state={counter:0},action)=>
{
    if(action.type==='increment'){
        return{
            counter:state.counter+5
          }
    }
   if(action.type==='decrement')
   {
    return{
        counter:state.counter-5
    }
   }
}
const store=redux.createStore(counterReducer);
console.log(store.getState())
const counterSubscriber=()=>
{
   const a= store.getState()
   console.log(a)
}
store.subscribe(counterSubscriber)
store.dispatch({type:'increment'})
store.dispatch({type:'decrement'})

