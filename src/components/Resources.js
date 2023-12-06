import React, { useEffect } from "react";
import "./Resources.scss";

const Resources = () => {
  useEffect(() => {
    const handleCardClick = (event) => {
      const $cell = event.currentTarget.closest('.card');
      const $allCells = document.querySelectorAll('.card');

      if ($cell.classList.contains('is-collapsed')) {
        $allCells.forEach((cell) => {
          cell.classList.add('is-inactive');
        });

        $cell.classList.remove('is-collapsed');
        $cell.classList.remove('is-inactive');
        $cell.classList.add('is-expanded');
      } else {
        $cell.classList.remove('is-expanded');
        $cell.classList.add('is-collapsed');
        $allCells.forEach((cell) => {
          cell.classList.remove('is-inactive');
        });
      }
    };

    const $cards = document.querySelectorAll('.card');

    $cards.forEach((card) => {
      const expander = card.querySelector('.js-expander');

      expander.addEventListener('click', handleCardClick);
    });

    return () => {
      // Remove event listeners when the component is unmounted
      $cards.forEach((card) => {
        const expander = card.querySelector('.js-expander');
        expander.removeEventListener('click', handleCardClick);
      });
    };
  }, []);

  return (
    <body className="resourcebody">
      <div class="slider-thumb">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="Rwrapper">
          <p><span></span></p>
          <p><span></span></p>
        </div>
        <div className="wrapper">
          <div className="cards">

            <div className=" card [ is-collapsed ] ">
              <div className="card__inner [ js-expander ]">
                <span className="vaultname">CS104</span>
                <i className="fa fa-folder-o"></i>
              </div>
              <div className="card__expander">
                <i className="fa fa-close [ js-collapser ]"></i>
                To be added. . .
              </div>
            </div>

            <div className=" card [ is-collapsed ] ">
              <div className="card__inner [ js-expander ]">
                <span className="vaultname">CS230</span>
                <i className="fa fa-folder-o"></i>
              </div>
              <div className="card__expander">
                <i className="fa fa-close [ js-collapser ]"></i>
                To be added. . .
              </div>
            </div>

            <div className=" card [ is-collapsed ] ">
              <div className="card__inner [ js-expander ]">
                <span className="vaultname">Linear Algebra</span>
                <i className="fa fa-folder-o"></i>
              </div>
              <div className="card__expander">
                <i className="fa fa-close [ js-collapser ]"></i>
                To be added. . .
              </div>
            </div>

            <div className=" card [ is-collapsed ] ">
              <div className="card__inner [ js-expander ]">
                <span className="vaultname">Diffrential Equations</span>
                <i className="fa fa-folder-o"></i>
              </div>
              <div className="card__expander">
                <i className="fa fa-close [ js-collapser ]"></i>
                To be added. . .
              </div>
            </div>

            <div className=" card [ is-collapsed ] ">
              <div className="card__inner [ js-expander ]">
                <span className="vaultname">Calculus I</span>
                <i className="fa fa-folder-o"></i>
              </div>
              <div className="card__expander">
                <i className="fa fa-close [ js-collapser ]"></i>
                To be added. . .
              </div>
            </div>

            <div className=" card [ is-collapsed ] ">
              <div className="card__inner [ js-expander ]">
                <span className="vaultname">Calculus II</span>
                <i className="fa fa-folder-o"></i>
              </div>
              <div className="card__expander">
                <i className="fa fa-close [ js-collapser ]"></i>
                To be added. . .
              </div>
            </div>

            <div className=" card [ is-collapsed ] ">
              <div className="card__inner [ js-expander ]">
                <span className="vaultname">Misc.</span>
                <i className="fa fa-folder-o"></i>
              </div>
              <div className="card__expander">
                <i className="fa fa-close [ js-collapser ]"></i>
                To be added. . .
              </div>
            </div>

            <div className=" card [ is-collapsed ] ">
              <div className="card__inner [ js-expander ]">
                <span className="vaultname">Not There Yet</span>
                <i className="fa fa-folder-o"></i>
              </div>
              <div className="card__expander">
                <i className="fa fa-close [ js-collapser ]"></i>
                To be added. . .
              </div>
            </div>

            <div className=" card [ is-collapsed ] ">
              <div className="card__inner [ js-expander ]">
                <span className="vaultname">Not There Yet</span>
                <i className="fa fa-folder-o"></i>
              </div>
              <div className="card__expander">
                <i className="fa fa-close [ js-collapser ]"></i>
                To be added. . .
              </div>
            </div>
          </div>
        </div>

      </div>
    </body>
  );
};

export default Resources;