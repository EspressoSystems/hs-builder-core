(function() {var implementors = {
"hs_builder_core":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"hs_builder_core/builder_state/enum.TransactionSource.html\" title=\"enum hs_builder_core::builder_state::TransactionSource\">TransactionSource</a>",1,["hs_builder_core::builder_state::TransactionSource"]],["impl&lt;TYPES&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"hs_builder_core/builder_state/struct.TransactionMessage.html\" title=\"struct hs_builder_core::builder_state::TransactionMessage\">TransactionMessage</a>&lt;TYPES&gt;<div class=\"where\">where\n    &lt;TYPES as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.Transaction\" title=\"type hs_builder_core::testing::basic_test::NodeType::Transaction\">Transaction</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</div>",1,["hs_builder_core::builder_state::TransactionMessage"]],["impl&lt;TYPES&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"hs_builder_core/builder_state/struct.DecideMessage.html\" title=\"struct hs_builder_core::builder_state::DecideMessage\">DecideMessage</a>&lt;TYPES&gt;",1,["hs_builder_core::builder_state::DecideMessage"]],["impl&lt;TYPES&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"hs_builder_core/builder_state/struct.DAProposalMessage.html\" title=\"struct hs_builder_core::builder_state::DAProposalMessage\">DAProposalMessage</a>&lt;TYPES&gt;<div class=\"where\">where\n    TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;&lt;TYPES as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.BlockPayload\" title=\"type hs_builder_core::testing::basic_test::NodeType::BlockPayload\">BlockPayload</a> as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.BlockPayload.html\" title=\"trait hs_builder_core::testing::basic_test::BlockPayload\">BlockPayload</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.BlockPayload.html#associatedtype.Metadata\" title=\"type hs_builder_core::testing::basic_test::BlockPayload::Metadata\">Metadata</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;&lt;TYPES as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hs_builder_core::testing::basic_test::NodeType::SignatureKey\">SignatureKey</a> as SignatureKey&gt;::PureAssembledSignatureType: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;TYPES as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hs_builder_core::testing::basic_test::NodeType::SignatureKey\">SignatureKey</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;TYPES as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.Time\" title=\"type hs_builder_core::testing::basic_test::NodeType::Time\">Time</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</div>",1,["hs_builder_core::builder_state::DAProposalMessage"]],["impl&lt;TYPES&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"hs_builder_core/builder_state/struct.QCMessage.html\" title=\"struct hs_builder_core::builder_state::QCMessage\">QCMessage</a>&lt;TYPES&gt;<div class=\"where\">where\n    TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;TYPES as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.BlockHeader\" title=\"type hs_builder_core::testing::basic_test::NodeType::BlockHeader\">BlockHeader</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;&lt;TYPES as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hs_builder_core::testing::basic_test::NodeType::SignatureKey\">SignatureKey</a> as SignatureKey&gt;::PureAssembledSignatureType: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;&lt;TYPES as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hs_builder_core::testing::basic_test::NodeType::SignatureKey\">SignatureKey</a> as SignatureKey&gt;::QCType: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;TYPES as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hs_builder_core::testing::basic_test::NodeType::SignatureKey\">SignatureKey</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;TYPES as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.Time\" title=\"type hs_builder_core::testing::basic_test::NodeType::Time\">Time</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</div>",1,["hs_builder_core::builder_state::QCMessage"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"hs_builder_core/builder_state/struct.RequestMessage.html\" title=\"struct hs_builder_core::builder_state::RequestMessage\">RequestMessage</a>",1,["hs_builder_core::builder_state::RequestMessage"]],["impl&lt;TYPES&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"hs_builder_core/builder_state/struct.BuildBlockInfo.html\" title=\"struct hs_builder_core::builder_state::BuildBlockInfo\">BuildBlockInfo</a>&lt;TYPES&gt;<div class=\"where\">where\n    &lt;TYPES as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.BlockPayload\" title=\"type hs_builder_core::testing::basic_test::NodeType::BlockPayload\">BlockPayload</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;&lt;TYPES as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.BlockPayload\" title=\"type hs_builder_core::testing::basic_test::NodeType::BlockPayload\">BlockPayload</a> as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.BlockPayload.html\" title=\"trait hs_builder_core::testing::basic_test::BlockPayload\">BlockPayload</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.BlockPayload.html#associatedtype.Metadata\" title=\"type hs_builder_core::testing::basic_test::BlockPayload::Metadata\">Metadata</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</div>",1,["hs_builder_core::builder_state::BuildBlockInfo"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"hs_builder_core/builder_state/struct.ResponseMessage.html\" title=\"struct hs_builder_core::builder_state::ResponseMessage\">ResponseMessage</a>",1,["hs_builder_core::builder_state::ResponseMessage"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"hs_builder_core/builder_state/enum.Status.html\" title=\"enum hs_builder_core::builder_state::Status\">Status</a>",1,["hs_builder_core::builder_state::Status"]],["impl&lt;TYPES&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"hs_builder_core/builder_state/struct.BuilderState.html\" title=\"struct hs_builder_core::builder_state::BuilderState\">BuilderState</a>&lt;TYPES&gt;<div class=\"where\">where\n    TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;TYPES as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.BlockHeader\" title=\"type hs_builder_core::testing::basic_test::NodeType::BlockHeader\">BlockHeader</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;TYPES as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.BlockPayload\" title=\"type hs_builder_core::testing::basic_test::NodeType::BlockPayload\">BlockPayload</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;&lt;TYPES as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.BlockPayload\" title=\"type hs_builder_core::testing::basic_test::NodeType::BlockPayload\">BlockPayload</a> as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.BlockPayload.html\" title=\"trait hs_builder_core::testing::basic_test::BlockPayload\">BlockPayload</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.BlockPayload.html#associatedtype.Metadata\" title=\"type hs_builder_core::testing::basic_test::BlockPayload::Metadata\">Metadata</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;&lt;TYPES as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hs_builder_core::testing::basic_test::NodeType::SignatureKey\">SignatureKey</a> as SignatureKey&gt;::QCType: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;TYPES as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hs_builder_core::testing::basic_test::NodeType::SignatureKey\">SignatureKey</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;TYPES as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.Time\" title=\"type hs_builder_core::testing::basic_test::NodeType::Time\">Time</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;TYPES as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.Transaction\" title=\"type hs_builder_core::testing::basic_test::NodeType::Transaction\">Transaction</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</div>",1,["hs_builder_core::builder_state::BuilderState"]],["impl&lt;TYPES&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"enum\" href=\"hs_builder_core/builder_state/enum.MessageType.html\" title=\"enum hs_builder_core::builder_state::MessageType\">MessageType</a>&lt;TYPES&gt;<div class=\"where\">where\n    TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;TYPES as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.BlockHeader\" title=\"type hs_builder_core::testing::basic_test::NodeType::BlockHeader\">BlockHeader</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;&lt;TYPES as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.BlockPayload\" title=\"type hs_builder_core::testing::basic_test::NodeType::BlockPayload\">BlockPayload</a> as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.BlockPayload.html\" title=\"trait hs_builder_core::testing::basic_test::BlockPayload\">BlockPayload</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.BlockPayload.html#associatedtype.Metadata\" title=\"type hs_builder_core::testing::basic_test::BlockPayload::Metadata\">Metadata</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;&lt;TYPES as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hs_builder_core::testing::basic_test::NodeType::SignatureKey\">SignatureKey</a> as SignatureKey&gt;::PureAssembledSignatureType: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;&lt;TYPES as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hs_builder_core::testing::basic_test::NodeType::SignatureKey\">SignatureKey</a> as SignatureKey&gt;::QCType: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;TYPES as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hs_builder_core::testing::basic_test::NodeType::SignatureKey\">SignatureKey</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;TYPES as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.Time\" title=\"type hs_builder_core::testing::basic_test::NodeType::Time\">Time</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;TYPES as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.Transaction\" title=\"type hs_builder_core::testing::basic_test::NodeType::Transaction\">Transaction</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</div>",1,["hs_builder_core::builder_state::MessageType"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"hs_builder_core/service/struct.Options.html\" title=\"struct hs_builder_core::service::Options\">Options</a>",1,["hs_builder_core::service::Options"]],["impl&lt;Types&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"hs_builder_core/service/struct.GlobalState.html\" title=\"struct hs_builder_core::service::GlobalState\">GlobalState</a>&lt;Types&gt;<div class=\"where\">where\n    &lt;Types as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.BlockPayload\" title=\"type hs_builder_core::testing::basic_test::NodeType::BlockPayload\">BlockPayload</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;&lt;Types as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.BlockPayload\" title=\"type hs_builder_core::testing::basic_test::NodeType::BlockPayload\">BlockPayload</a> as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.BlockPayload.html\" title=\"trait hs_builder_core::testing::basic_test::BlockPayload\">BlockPayload</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.BlockPayload.html#associatedtype.Metadata\" title=\"type hs_builder_core::testing::basic_test::BlockPayload::Metadata\">Metadata</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;&lt;Types as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hs_builder_core::testing::basic_test::NodeType::SignatureKey\">SignatureKey</a> as SignatureKey&gt;::PrivateKey: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    &lt;Types as <a class=\"trait\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html\" title=\"trait hs_builder_core::testing::basic_test::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hs_builder_core/testing/basic_test/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hs_builder_core::testing::basic_test::NodeType::SignatureKey\">SignatureKey</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,</div>",1,["hs_builder_core::service::GlobalState"]],["impl&lt;Types&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> for <a class=\"struct\" href=\"hs_builder_core/service/struct.GlobalStateTxnSubmitter.html\" title=\"struct hs_builder_core::service::GlobalStateTxnSubmitter\">GlobalStateTxnSubmitter</a>&lt;Types&gt;",1,["hs_builder_core::service::GlobalStateTxnSubmitter"]]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()