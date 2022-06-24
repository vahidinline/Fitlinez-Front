import React from 'react';

const Result = ({ result }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm">
          {result && (
            <div className="container mt-5">
              <div className="notice notice-success h5">
                <strong>کالری تقریبی متابولیسم پایه </strong>
                <span className="float-left badge badge-primary">
                  {Math.round(result.BMR)}
                </span>
              </div>
              <div className="notice notice-info h5">
                <strong>کالری تقریبی تثبیت وزن</strong>
                <span className="float-left badge badge-primary">
                  {Math.round(result.goals['maintain weight'])}
                </span>
              </div>

              <div className="notice notice-warning h5">
                <strong>کالری تقریبی برای کاهش ۲۵۰ گرم در هفته</strong>

                <span className="float-left badge badge-primary">
                  {Math.round(result.goals['Mild weight loss']['calory'])}
                </span>
              </div>

              <div className="notice notice-sm h5">
                <strong>نکته:</strong> برای محاسبه دقیقتر به متخصص تغدیه مراجعه
                کنید
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Result;
