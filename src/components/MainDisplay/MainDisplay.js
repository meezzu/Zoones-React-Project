import React from "react";
import { useSelector } from "react-redux";
import "./MainDisplay.scss"
import dayEllipse from '../Assets/day-ellipse.svg'
import midnight from "../Assets/Mid-Night (1).svg"
import morning from "../Assets/morning.svg"
import afternoon from "../Assets/afternoon.svg"
import night from "../Assets/Night.svg"

const MainDisplay = (props) => {

    const filter = useSelector((state) => state.periodFilter.data) || '6';

    return (
        <div className="main-display-container">
            <div className='main-display'>
                {filter === '6' && <table className='non-hourly'>
                    <thead>
                        <tr>
                            <th colSpan="2" className='day-div'><h2>Sunday</h2><div><img src={dayEllipse} alt='' /></div></th>
                            <th colSpan="2" className='day-div new-day'><h2>Monday</h2><div><img src={dayEllipse} alt='' /></div></th>
                        </tr>
                        <tr className="time-images">
                            <th><img src={midnight} alt='midnight' /></th>
                            <th><img src={morning} alt='morning' /></th>
                            <th><img src={afternoon} alt='afternoon' /></th>
                            <th> <img src={night} alt='night' /></th>
                        </tr>
                        <tr className="time">
                            <th>12:00 am</th>
                            <th>6:00 am</th>
                            <th>12:00 pm</th>
                            <th>6:00 pm</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="users">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>}

                {filter === '3' && <table class='non-hourly'>
                    <thead>
                        <tr>
                            <th colSpan="4" className='day-div'><h2>Sunday</h2><div><img src={dayEllipse} alt='' /></div></th>
                            <th colSpan="4" className='day-div new-day'><h2>Monday</h2><div><img src={dayEllipse} alt='' /></div></th>
                        </tr>
                        <tr className="time-images">
                            <th colSpan="2"><img src={midnight} alt='' /></th>
                            <th colSpan="2"><img src={morning} alt='' /></th>
                            <th colSpan="2"><img src={afternoon} alt='' /></th>
                            <th colSpan="2"> <img src={night} alt='' /></th>
                        </tr>
                        <tr className="time">
                            <th>12:00 am</th>
                            <th>3:00 am</th>
                            <th>6:00 am</th>
                            <th>9:00 am</th>
                            <th>12:00 pm</th>
                            <th>3:00 pm</th>
                            <th>6:00 pm</th>
                            <th>9:00 pm</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='users'>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>}

                {filter === '1' && <table className="hourly-period">
                    <thead>
                        <tr>
                            <th colSpan="16" className='day-div'><h2>Sunday</h2><div><img src={dayEllipse} alt='' /></div></th>
                            <th colSpan="16" className='day-div new-day'><h2>Monday</h2><div><img src={dayEllipse} alt='' /></div></th>
                        </tr>
                        <tr className="time-images">
                            <th colSpan="6"><img src={midnight} alt='' /></th>
                            <th colSpan="6"><img src={morning} alt='' /></th>
                            <th colSpan="6"><img src={afternoon} alt='' /></th>
                            <th colSpan="6"> <img src={night} alt='' /></th>
                        </tr>
                        <tr className="time">
                            <th>12:00 am</th>
                            <th>1:00 am</th>
                            <th>2:00 am</th>
                            <th>3:00 am</th>
                            <th>4:00 am</th>
                            <th>5:00 am</th>
                            <th>6:00 am</th>
                            <th>7:00 am</th>
                            <th>8:00 am</th>
                            <th>9:00 am</th>
                            <th>10:00 am</th>
                            <th>11:00 am</th>
                            <th>12:00 pm</th>
                            <th>1:00 pm</th>
                            <th>2:00 pm</th>
                            <th>3:00 pm</th>
                            <th>4:00 pm</th>
                            <th>5:00 pm</th>
                            <th>6:00 pm</th>
                            <th>7:00 pm</th>
                            <th>8:00 pm</th>
                            <th>9:00 pm</th>
                            <th>10:00 pm</th>
                            <th>11:00 pm</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="users">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>}
            </div>
        </div>
    )
};



export default MainDisplay;