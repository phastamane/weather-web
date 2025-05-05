import React from 'react';

type CityPageProps = {
  response: any;
};

const CityPage: React.FC<CityPageProps> = ({ response }) => {
  return (
    <div className="city-window">
      <h1>{response.city.name}</h1>
      <div className="times">
        {[...Array(9)].map((_, i: number) => (
          <div
            className="child-times"
            key={i}
            style={{
              animation: 'fadeIn 0.6s ease forwards',
              animationDelay: `${i * 0.2}s`,
              opacity: 0,
              transform: 'translateY(20px)',
            }}
          >
            <h3>
              {response.list[i].dt_txt.slice(8, 10) +
                '.' +
                response.list[i].dt_txt.slice(5, 7)}
            </h3>
            <h3>{response.list[i].dt_txt.slice(11, 16)}</h3>
            <p>
              {Math.round(response.list[i].main.temp)}
              <strong>°С</strong>
            </p>
            <p>
              <strong>Облачность:<br /></strong>
              {response.list[i].clouds.all}%
            </p>

            {response.list[i].rain ? (
              (() => {
                const rainAmount = Number(response.list[i].rain['3h']);
                if (rainAmount < 3) {
                  return (
                    <p id="rain">
                      <strong>Небольшой дождь</strong>
                    </p>
                  );
                } else if (rainAmount >= 14 && rainAmount < 49) {
                  return (
                    <p id="rain">
                      <strong>Дождь</strong>
                    </p>
                  );
                } else if (rainAmount >= 49 && rainAmount <= 50) {
                  return (
                    <p id="rain">
                      <strong>Сильный дождь</strong>
                    </p>
                  );
                } else if (rainAmount > 50) {
                  return (
                    <p id="rain">
                      <strong>Ливни</strong>
                    </p>
                  );
                }
                return null;
              })()
            ) : (
              <p id="rain">
                <strong>Осадков нет</strong>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(CityPage);
