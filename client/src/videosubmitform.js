import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import './stylesheets/vid_form.css';

class VideoSubmit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            river: '',
            riverlevel: '',
            racetime: '',
            classvalue: '',
            video: null
        }
    }

    render() {
        
        let addVideo = () => {
            let videoFormData = new FormData()
            videoFormData.append('river', this.state.river)
            videoFormData.append('riverlevel', this.state.riverlevel)
            videoFormData.append('racetime', this.state.racetime)
            videoFormData.append('classvalue', this.state.classvalue)
            videoFormData.append('video', this.state.video)

            fetch(`${process.env.REACT_APP_FETCHREQ}/users/${this.props.currentUser.id}/videos`, {
            method: 'POST', 
            body: videoFormData, 
            })
        }

        return <div className="vid-form">
                    <h1 className="vidform-submit">Submit Your Race Video</h1>
                    <form className="videosubmit-form" onSubmit={(event) => {
                        event.preventDefault();
                        addVideo()}}>

                        <input 
                            type="text" 
                            className="vidinfo river" 
                            placeholder="River or Section Raced"
                            value={this.state.river}
                            onChange={ (event)  => {
                                this.setState({ river: event.target.value })}}
                        />
                        <input 
                            type="text" 
                            className="vidinfo level" 
                            placeholder="Level (or correlating guage)"
                            value={this.state.riverlevel}
                            onChange={ (event)  => {
                                this.setState({ riverlevel: event.target.value })}}
                        />
                        <input 
                            type="text" 
                            className="vidinfo time" 
                            placeholder="Race Time (will be confirmed)"
                            value={this.state.racetime}
                            onChange={ (event)  => {
                                this.setState({ racetime: event.target.value })}}
                        />
                        <input 
                            type="text" 
                            className="vidinfo class" 
                            placeholder="Class (Men, Women, Junior, Transgender, etc.) (K1 Short, K1 Long, OC1, SUP, BELLY YAK, TRASH CAN, etc.)"
                            value={this.state.classvalue}
                            onChange={ (event)  => {
                                this.setState({ classvalue: event.target.value })}}
                        />
                        <input 
                            type="file" 
                            className="vidinfo videofile" 
                            placeholder="Select video to upload"
                            onChange={ (event)  => {
                                this.setState({ video: event.target.files[0] })}}
                        />
                        <button 
                            className='videosubmit-btn' 
                            type='submit'>Submit video
                        </button>
                    </form>
                    <NavLink to={`/users/${this.props.currentUser.id}`}>
                        <button className="videoscrbtn">Back to My Profile</button>
                    </NavLink>
                </div>
    }
}

export default connect(state => state)(VideoSubmit)
