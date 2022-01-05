
import { ScheduleComponent , Inject ,
Week, ViewsDirective, ViewDirective, DragAndDrop , Resize,
Day, WorkWeek, Month
} from '@syncfusion/ej2-react-schedule';


export const Calender = ()=>{

   const localData = {

    dataSource: [
        {   Id: 1,
            End: new Date(2019, 0 , 11 , 6, 30),
            Start: new Date(2019, 0, 11, 4, 0),
            Summary: ''
        },
        {   Id: 2,
            End: new Date(2019, 0 , 10 , 7, 30),
            Start: new Date(2019, 0, 10, 5, 0),
            Summary: 'Developers Meetings'
        },
        {   Id: 3,
            End: new Date(2019, 0 , 7, 9, 30),
            Start: new Date(2019, 0, 7, 8, 0),
            Summary: 'Senior Staff meetings'
        }
    ],
    fields : {

        endTime : { name : 'End'},
        startTime: { name : 'Start'},
        subject: { name : 'Summary', default: 'No title is provided' }
    }
   } 

    return (
        <ScheduleComponent currentView='Week'
        height='570px' 
        selectedDate={new Date(2019, 0, 11)}
          eventSettings={localData} >
          <ViewsDirective>
              <ViewDirective option='Week' ></ViewDirective>
              <ViewDirective option='Day' ></ViewDirective>
              <ViewDirective option='WorkWeek' ></ViewDirective>
              <ViewDirective option='Month' ></ViewDirective>

          </ViewsDirective>
        <Inject  services={[Week, DragAndDrop , Resize, 
        Day, WorkWeek, Month
        ]}  />
        </ScheduleComponent>
    )

}