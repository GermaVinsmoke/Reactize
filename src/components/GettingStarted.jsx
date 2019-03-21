import React from 'react';
import Header from './Headings/Header';
import SecondHeader from './Headings/SecondHeader';
import ThirdHeader from './Headings/ThirdHeader';
import MarkupCode from './code/MarkupCode';
import BashCode from './code/BashCode';

const GettingStarted = () => {
    return (
        <div style={styles.SpacingLeft}>
            <header>
                <Header headerText="Getting started" />
            </header>
            <main>
                <div className="row">
                    <div className="col s12 m9">
                    <SecondHeader
                    secondHeader="Download"
                    id="Download"
                    desc="Materialize comes in two different forms. You can select which version you want depending
                            on your preference and expertise.To start using Materialize, all you have to do is download
                            one of the options below."
                />
                <ThirdHeader 
                    thirdHeader="CDN"
                    desc="You can find all the versions of the CDN at cdnjs."
                />
                <MarkupCode
                    markupCode={
                        `<!-- Compiled and minified CSS -->\n<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">\n<!-- Compiled and minified JavaScript -->\n<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>`}
                />
                <ThirdHeader 
                    thirdHeader="NPM"
                    desc="You can also get the latest release using NPM. This release contains source files as well as the compiled CSS and JavaScript files."              
                />
                <BashCode bashCode={`npm install materialize-css@next\nnpm install react\nnpm install redux\nnpm install react-redux\nnpm install redux-logger`} />
                <SecondHeader
                    secondHeader="Setup"
                    id="Setup"
                />
                <ThirdHeader
                    thirdHeader="Project Structure"
                    desc="After downloading, extract the files into the directory where your website is located. Your directory will look something like this."
                />
                <MarkupCode
                markupCode={
                    `public/\n|--index.html\nsrc/\n|--actions/\n\t|--autoComplete.js\n\t|--types.js\n|--reducers/\n\t|--index.js\n\t|--red.js\n|--Autocomplete.js\n|--index.js\n--package.json`
                }
            />
                    </div>
                </div>
            </main>
        </div>
    );
}


const styles = {
    SpacingInAside: {
        marginTop: 120
    },
    SpacingLeft: {
        paddingLeft: '5%'
    }
}

export default GettingStarted;