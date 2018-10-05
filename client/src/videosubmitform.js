import React from 'react';

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

            fetch('http://localhost:5000/videoupload', {
            method: 'POST', 
            body: videoFormData, 
            
        })

            // .then(response => {
            //     return response.json()
            // })
            
        }

        return <div>
            <form className="videosubmit-form" onSubmit={(event) => {
                event.preventDefault();
                addVideo()}}>

                <input 
                    type="text" 
                    className="river-input" 
                    placeholder="River or Section Raced"
                    value={this.state.river}
                    onChange={ (event)  => {
                        this.setState({ river: event.target.value })}}
                />
                <input 
                    type="text" 
                    className="level-input" 
                    placeholder="Level (or correlating guage)"
                    value={this.state.riverlevel}
                    onChange={ (event)  => {
                        this.setState({ riverlevel: event.target.value })}}
                />
                <input 
                    type="text" 
                    className="time-input" 
                    placeholder="Race Time (will be confirmed)"
                    value={this.state.racetime}
                    onChange={ (event)  => {
                        this.setState({ racetime: event.target.value })}}
                />
                <input 
                    type="text" 
                    className="class-input" 
                    placeholder="Class (Men, Women, Junior, Transgender, etc.) (K1 Short, K1 Long, OC1, SUP, BELLY YAK, TRASH CAN, etc.)"
                    value={this.state.classvalue}
                    onChange={ (event)  => {
                        this.setState({ classvalue: event.target.value })}}
                />
                <input 
                    type="file" 
                    className="videofile-input" 
                    placeholder="Select video to upload"
                    onChange={ (event)  => {
                        this.setState({ video: event.target.files[0] })}}
                />
                <button 
                            className='signup-form-submit' 
                            type='submit'>Submit video
                        </button>
            </form>


        </div>
    }
}

export default VideoSubmit;
