//! Builder Phase 1
//! It mainly provides two API services to external users:
//! 1. Serves a proposer(leader)'s request to provide blocks information
//! 2. Serves a proposer(leader)'s request to provide the full blocks information
//! 3. Serves a request to submit a transaction externally i.e outside the HotShot network

//! To support the above two services, it uses the following core services:
//! 1. To facilitate the acceptance of the transactions i.e. private and public mempool
//! 2. Actions to be taken on hearning of:
//!     a. DA Proposal
//!     b. Quorum Proposal
//!     c. Decide Event
//! 

// Used by the third API service i.e. to submit a transaction externally (priavate mempool)
fn process_external_transaction(){

}

// fn process_hotshot_transaction(){

// }
// use hotshot_task::{
//     boxed_sync,
//     event_stream::ChannelStream,
//     task::{FilterEvent, HandleEvent, HandleMessage, HotShotTaskCompleted, HotShotTaskTypes},
//     task_impls::TaskBuilder,
//     task_launcher::TaskRunner,
//     GeneratedStream, Merge,
// };
use hotshot_types::traits::node_implementation::{NodeImplementation, NodeType};


// process the hotshot transaction event 
pub async fn process_hotshot_transaction<Types: NodeType, I: NodeImplementation<TYPES>>(
    event_stream: ChannelStream<HotShotEvent<Types>>,
    handle: SystemContextHandle<Types, I>,
) -> TaskRunner
{
    let transactions_event_handler = HandleEvent(Arc::new(
        move |event, mut state: TransactionTaskState<TYPES, I, HotShotConsensusApi<TYPES, I>>| {
            async move {
                let completion_status = state.handle_event(event).await;
                (completion_status, state)
            }
            .boxed()
        },
    ));
}