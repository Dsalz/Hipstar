import React , { Component } from 'react';
// import { Redirect } from 'react-router-dom';

//Components
import Navbar from '../LayoutComponents/Navbar';

//CSS
import '../../css/MovieComponents/MovieDetails.css';


class AddMovie extends Component{
    state = {
        title: '',
        bgImage: '',
        bgImageUrl: '',
        smImage: '',
        smImageUrl: '',
        releaseDate: '',
        description: '',
        cast: []
    }

    renderImage = (file, field) => {
        let readmon = new FileReader();
        readmon.onload = (e) => {
            this.setState({
                [field]: e.target.result
            })
        }
        readmon.readAsDataURL(file);
    }

    showImgInput = (e) => {
        let inputId = e.target.alt + 'Input';
        document.getElementById(inputId).dispatchEvent(new MouseEvent('click'));
    }

    newCast = (e) => {
        this.setState({
            cast: [...this.state.cast, {movieName: '', realName: '', pageUrl: '', ind:this.state.cast.length}]
        })
    }

    handleCastChange = (e) => {
        let castMemberField = e.target.name.split('-')[0];
        let castMemberIndex = e.target.name.split('-')[1];
        let newCastObj = {...this.state.cast[castMemberIndex],
        [castMemberField]: e.target.value}
        let currStateCast = this.state.cast.filter((val, i) => i !== Number(castMemberIndex));
        let newStateCast = [ ...currStateCast, newCastObj]
        this.setState({
            cast: newStateCast.sort((a,b) => a.ind - b.ind)
        })
    }

    deleteCastMember = (index) => {
        if(prompt('Delete Cast Member?')){
            this.setState({
                cast: this.state.cast.filter((val, i) => i !== index)
            })
        }
    }
    handleChange = (e) => {
        let field = e.target.name;
        if(field.indexOf('Image') > -1){
            this.setState({
                [field]: e.target.files[0]
            })
        }
        else{
            this.setState({
                [field]: e.target.value
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        const {title, bgImage, bgImageUrl, smImage, smImageUrl, releaseDate, description, cast} = this.state;
        const isSuperUser = localStorage.HipstarUserName === 'Dsalz';
        if(bgImage){
            this.renderImage(bgImage, 'bgImageUrl')
        }
        if(smImage){
            this.renderImage(smImage, 'smImageUrl')
        }
        return(
            <section className="movie-details-section black-bg">
                <Navbar type='trans'/>
                <form onSubmit={this.handleSubmit}>
                    <section className='movie-details-section-top'>
                    {bgImageUrl && <img src={bgImageUrl} alt="" className='movie-details-section-top-bg'/>}
                    {!bgImageUrl && (
                    <React.Fragment>
                        <img src= 'https://placehold.it/600' onClick={this.showImgInput} alt="bgImage" className='movie-details-section-top-bg'/>
                        <input type="file" id="bgImageInput" name="bgImage" style={{display: 'none'}} onChange={this.handleChange}/>
                    </React.Fragment>
                    )}
                        <div className='movie-details-section-top-demo'>
                        </div>
                        <section className='movie-details-section-top-info'>
                            {smImageUrl && <img src={smImageUrl} alt="" className='movie-details-section-top-poster'/>}
                            {!smImageUrl && (
                            <React.Fragment>
                                <img src= 'https://placehold.it/600' onClick={this.showImgInput} alt="smImage" className='movie-details-section-top-poster'/>
                                <input type="file" id="smImageInput" name="smImage" style={{display: 'none'}} onChange={this.handleChange}/>
                            </React.Fragment>
                            )}
                            <div className="movie-details-section-top-info-deets">
                                <input className="bar-input lightskin-input" type="text" name="title" onChange={this.handleChange} value={title} required/>
                            </div>
                            <div className="movie-details-section-top-info-btns">
                                <button className="red-cta-btn" type="submit">Save Movie</button> 
                            </div>
                        </section>
                    </section>
                    <section className='movie-details-section-mid'>
                        <h4>Release Date</h4>
                        <hr className='movie-details-section-red-line'/>
                        <input className="bar-input lightskin-input add-movie-releaseDate" type="text" name="releaseDate" onChange={this.handleChange} value={releaseDate} required/>
                        <h4>Description</h4>
                        <hr className='movie-details-section-red-line'/>
                        <section className="movie-details-new-review-box add-movie-description">
                            <textarea onChange = {this.handleChange} name="description" value={description} required></textarea>
                        </section>
                        <h4>Cast</h4>
                        <hr className='movie-details-section-red-line'/>
                        {cast.map((castMember, i) => (
                            <div className="add-movie-cast-item" key={i} onDoubleClick={() => {this.deleteCastMember(i)}}>
                                <input type="text" name={`movieName-${i}`} value={castMember.movieName} placeholder="Movie Name" onChange={this.handleCastChange} required/> 
                                <input type="text" name={`realName-${i}`} value={castMember.realName} placeholder="Real Name" onChange={this.handleCastChange} required/> <br />
                                <input type="text" name={`pageUrl-${i}`} value={castMember.pageUrl} placeholder="Page Url" onChange={this.handleCastChange} required/> 
                            </div>
                        ))}
                        <button className="red-cta-btn add-movie-cast-btn" onClick={this.newCast}>
                            +
                        </button>
                    </section>
                </form>
           </section>
        )
    }
}

export default AddMovie;