import React from 'react';
import './style.css'
import PageHeader from '../../components/pageHeader';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes São os Proffy disponiveis.">
            <form id="search-teachers">
                    <div className="inpunt-block">
                        <label htmlFor="subject">
                            Matéria
                        </label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="inpunt-block">
                        <label htmlFor="week_day">
                            dia da semana
                        </label>
                        <input type="text" id="week_day"/>
                    </div>

                    <div className="inpunt-block">
                        <label htmlFor="time">
                            Hora
                        </label>
                        <input type="text" id="time"/>
                    </div>
                    
                </form>
            </PageHeader>
        </div>
    )
}

export default TeacherList