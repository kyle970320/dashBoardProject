import React, { useState } from 'react';
import trendData from '../../store/trend-data-set.json'
import { useRecoilState } from 'recoil';
import { chooseEndDate, chooseStartDate, mainLode } from '../../recoil/atoms';
import { useEffect } from 'react';
import { compareCalc, dataCalc } from '../../hooks/dataCalc';
import Loading from '../../components/Loading';
import style from '../../style/mainData.module.css'

const MainData = () => {
  const [startDate, setStartDate] = useRecoilState(chooseStartDate);
  const [endDate, setEndDate] = useRecoilState(chooseEndDate);
  const [mainLoading, setMainLoding] = useRecoilState(mainLode);
  const [stateError, setError] = useState({
    overThreeDay: false,
    overRangeOfDate: false,
    sameStartDateAndEndDate: false,
    isEndDateSmallThenStartDate : false
  })
  const defaultStartDate = new Date('2022/02/01');
  const defaultEndDate = new Date('2022/04/20');
  const trendDailyData = trendData.report.daily;
  // console.log(trendDailyData)

  const getValueOfChange = (data, property, start, end, divide, fixed)=>{
    return ((dataCalc(data,property,start,end)-
    compareCalc(data,property,start,end))/divide).toFixed(fixed)
  }

  useEffect(() => {
    if ((endDate - startDate) > 259200000) {        
      setError(prev => ({ ...prev, overThreeDay: true }));
    } else {
      setError(prev => ({ ...prev, overThreeDay: false }));
    }
    if (((startDate - defaultStartDate) < 0) || ((endDate - defaultEndDate) > 0)) {
      setError(prev => ({ ...prev, overRangeOfDate: true }));
    } else {
      setError(prev => ({ ...prev, overRangeOfDate: false }));
    }
    if (String(startDate) == String(endDate)) {
      setError(prev => ({ ...prev, sameStartDateAndEndDate: true }));
    } else {
      setError(prev => ({ ...prev, sameStartDateAndEndDate: false }));
    }
    if ((endDate - startDate)< 0) {
      setError(prev => ({ ...prev, isEndDateSmallThenStartDate: true }));
    } else {
      setError(prev => ({ ...prev, isEndDateSmallThenStartDate: false }));
    }
  }, [endDate, startDate]);

  return (
    <>
      {mainLoading&& <Loading/>}
      {
        (!mainLoading&&stateError.overThreeDay) && <div>3??? ????????? ????????? ???????????? ??? ????????????</div>
      }
      {
        (!mainLoading&&stateError.overRangeOfDate) && <div>???????????? ??? ?????? ???????????????</div>
      }
      {
        (!mainLoading&&stateError.sameStartDateAndEndDate) && <div>?????? ????????? ???????????? ??? ????????????</div>
      }
       {
        (!mainLoading&&stateError.isEndDateSmallThenStartDate) && <div>?????? ????????? ?????? ??? ??? ????????????</div>
      }
      {
        ( !mainLoading&&
          !stateError.overThreeDay&&
          !stateError.overRangeOfDate&&
          !stateError.sameStartDateAndEndDate&&
          !stateError.isEndDateSmallThenStartDate) &&
        <div className={style.maindata}>
          <div>
            <ul>
              <li>
                <span>roas</span>
                <span>{(dataCalc(trendDailyData,'roas',startDate,endDate)).toFixed(0)}%</span>
              </li>
              <li className={getValueOfChange(trendDailyData,'roas',startDate,endDate,1,0) > 0 ? style.red : style.blue}>
                {compareCalc(trendDailyData,'roas',startDate,endDate)&&
                (
                  getValueOfChange(trendDailyData,'roas',startDate,endDate,1,0)
                )
                }%
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <span>?????????</span>
                <span>{(dataCalc(trendDailyData,'cost',startDate,endDate)/10000).toFixed(0)}??????</span>
              </li>
              <li className={getValueOfChange(trendDailyData,'cost',startDate,endDate,1,0) > 0 ? style.red : style.blue}>
              {compareCalc(trendDailyData,'cost',startDate,endDate)&&
                (
                  getValueOfChange(trendDailyData,'cost',startDate,endDate,10000,0)
                )
                }??????
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <span>?????????</span>
                <span>{(dataCalc(trendDailyData,'imp',startDate,endDate)/10000).toFixed(0)}??? ???</span>
              </li>
              <li className={getValueOfChange(trendDailyData,'imp',startDate,endDate,1,0) > 0 ? style.red : style.blue}>
              {compareCalc(trendDailyData,'imp',startDate,endDate)&&
                (
                  getValueOfChange(trendDailyData,'imp',startDate,endDate,10000,1)
                )
                }??? ???
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <span>?????????</span>
                <span>{dataCalc(trendDailyData,'click',startDate,endDate)}???</span>
              </li>
              <li className={getValueOfChange(trendDailyData,'click',startDate,endDate,1,0) > 0 ? style.red : style.blue}>
              {compareCalc(trendDailyData,'click',startDate,endDate)&&
                (
                  getValueOfChange(trendDailyData,'click',startDate,endDate,1,0)
                )
                }???
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <span>?????? ???</span>
                <span>{(dataCalc(trendDailyData,'cvr',startDate,endDate)).toFixed(0)}???</span>
              </li>
              <li className={getValueOfChange(trendDailyData,'cvr',startDate,endDate,1,0) > 0 ? style.red : style.blue}>
              {compareCalc(trendDailyData,'cvr',startDate,endDate)&&
                (
                  getValueOfChange(trendDailyData,'cvr',startDate,endDate,1,0)
                )
                }???
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>

                <span>??????</span>
                <span>{(dataCalc(trendDailyData,'convValue',startDate,endDate)/10000).toFixed(0)}??????</span>
              </li>
              <li className={getValueOfChange(trendDailyData,'convValue',startDate,endDate,1,0) > 0 ? style.red : style.blue}>
              {compareCalc(trendDailyData,'convValue',startDate,endDate)&&
                (
                  getValueOfChange(trendDailyData,'convValue',startDate,endDate,10000,1)
                )
                }??????
              </li>
            </ul>
          </div>
        </div>
      }
    </>
  );
};

export default MainData;