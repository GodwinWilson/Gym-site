import './Plans.css'
import {plansData} from "../../data/plansData"
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className='plans-container'>
        <div className='blur plans-blur-1'></div>
        <div className='blur plans-blur-2'></div>
        <div className='programs-header'>
            <span className='stroke-text'>ready to start</span>
            <span>your journey</span>
            <span className='stroke-text'>with us</span>
        </div>

        {/*Plans Card*/}
        <div className='plans'>
            {plansData.map((plan, i, j)=> {
                return (
                    <div className='plan' key={plan.Id}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>${plan.price}</span>

                        <div className='features' key={i}>
                            {plan.features.map((feature) => {
                                return(
                                    <div className='feature'>
                                        <img src={whiteTick} alt="" />
                                        <span >{feature}</span>
                                    </div>

                                )
                            })}
                        </div>
                        <div><span>See More Benefits -></span></div>
                        <button className='btn'>Join Now</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Plans