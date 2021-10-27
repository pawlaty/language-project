import PropTypes from 'prop-types';


const EndGame = ({message}:any)=>{


    const styll={
        EndTitle:{
            opacity:.5,
            fontSize:"3rem",
            fontFamily:"monospace",
            width:"min-content",
            height:"auto",
            padding:'.2rem',
            alignText:'center',
            letterSpacing:"2rem",
            top:"50%",
            left:"50%",

        }
    };

    return(
        <div className="flex-center column fixed-center" style={styll.EndTitle}>
            {message}
        </div>
    );
}

EndGame.defaultProps = {
    message : "Game Over",
}

EndGame.propTypes ={
    message:PropTypes.string,
}

export default EndGame;