import React from 'react';
interface IProps {
    Nama: String;
    Kelas: String;
    Pagi: String;
}

class Segment extends React.Component<IProps> {
    render() {
        return (
            <div>
                <h3>Nama: {this.props.Nama}</h3>
                <p>Kelas: {this.props.Kelas}</p>
                <p>Pagi: {this.props.Pagi}</p>
            </div>
        )
    }
}

export default Segment;