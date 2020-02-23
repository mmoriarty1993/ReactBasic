import React from "react";
import {connect} from "react-redux";

import {decrementCreator, incrementCreator,incrementAsyncCreator} from "../redux/actions";
import Counter from '../components/counter'

export default connect(
    state => ({count:state}),
    {increment:incrementCreator,decrement:decrementCreator,incrementAsync:incrementAsyncCreator}
)(Counter)