function FridgeIcon({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="48"
      height="49"
      fill="none"
      viewBox="0 0 48 49"
      {...props}
    >
      <mask
        id="mask0_221_1239"
        style={{ maskType: "alpha" }}
        width="48"
        height="49"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="url(#pattern0)" d="M0 0.333H48V48.333H0z"></path>
      </mask>
      <g mask="url(#mask0_221_1239)">
        <path fill="#fff" d="M0 0.333H48V48.333H0z"></path>
      </g>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.00195)" xlinkHref="#image0_221_1239"></use>
        </pattern>
        <image
          id="image0_221_1239"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAIABJREFUeJzt3XeYJVWd//F3D8MMMBLFAIIwigFEQDGsShAEFVZcETFnFBVZA7sm1ojLypqzEnZFF9mfoGIWEJAkYEAlKUmCIHGIM8MEJvz+OH13mrG7b92qU3Wq6rxfz/N9Roe5Vd+q233rcyucM4Zi2xY4CHgOsDmwdtp2JJW0ArgN+D3wv+O1PGlHUkRjqRvokZnAJ4BDgBmJe5EU38XAS4CrUjcixWAAiGMM+AbwutSNSKrVPOCZGALUA35TjePVePCXcrAx8E388qQe8Ic4jsuBx6VuQlJjngOckboJqQrPAFT3WDz4S7nZJ3UDUlUGgOq2TN2ApMbNTd2AVJUBoLo5qRuQ1Dh/79V5BgBJkjJkAJAkKUMGAEmSMmQAkCQpQwYASZIyZACQJClDBgBJkjJkAJAkKUMGAEmSMmQAkCQpQwYASZIyZACQJClDBgBJkjJkAJAkKUMGAEmSMmQAkCQpQwYASZIyZACQJClDBgBJkjJkAJAkKUMGAEmSMmQAkCQpQwYASZIyZACQJClDBgBJkjJkAJAkKUMGAEmSMmQAkCQpQwYASZIyZACQJClDBgBJkjJkAJAkKUMGAEmSMmQAkCQpQwYASZIyNDN1A2qFXwInAX8CFgKbALsBrwI2StiXJEmttS+wsqN1LbDzNNu2PvDfLejTstpWv0DqOM8A5OtKYCfg9mn+zT3AG4G7gXc30ZQkqRneA5Cn+wlnLqY7+E/0HuCi+tqRJDXNAJCn4wjX+4taDhxeUy+SpAQMAHk6scRrfk44cyBJ6gEDQJ4uL/GaBcAtsRuRJKVhAMjTvSVfd0/ULiRJyRgAJEnKkAFAkqQMGQAkScqQAUCSpAwZACRJypABQJKkDBkAJEnKkAFAkqQMGQAkScqQAUCSpAwZACRJypABQJKkDBkAJEnKkAFAkqQMGQAkScqQAUCSpAwZACRJypABQJKkDBkAJEnKkAFAkqQMGQAkScqQAUCSpAwZACRJypABQJKkDBkAJEnK0MzUDUhSYvcAS4H54/9/MbBoyGuuqrUjqQEGAEl9tAK4GbgOuH68rgNuAe4E7pjw57IkHUqJGQAkddlKwoH9EuAy4GLgUuBKwrd6SVMwAEjqkruB84ELxv/8NXBv0o6kjjIASGqze4EzgFOAs4E/E771S6rIACCpTVYCFxIO+KcQvuV7jV6qgQFAUhv8CTgROA64OnEvUhYMAJJS+TVwPPB94MbEvUjZMQBIatJdhG/6XwP+mLgXKWsGAEl1Wwn8Ajga+BE+nie1ggFAUl2WACcAnyQ8my+pRQwAkmK7BTgS+DIwL3EvkqZgAJAUyw3AZwgH/8WJe5E0hAFAUlUe+KUOMgBIKusW4OPAfxGu93fJGPBgYOPxPx8ErDf+39YG1prwb5cA943/7wXjdcd4zQOWN9CvFJ0BQNKoFgGfA45g1RS6bTMTeCzwGGDueG05/ucmhIP+WKR13c2qmQcHdS1wDWGCIs+KqJUMAJKKWkkYuOdQ4K+Je5loHeCpwJOA7YDtgScAsxta/wbjtfUk/205cBVhlsKLxusCwtkDKSkDgKQifg+8DfhN6kaAhwA7AzsBzwB2BNZM2tHU1gAeP14vHf+7lcDlwHnAuePl8MdqnAFA0nTuAw4j3OSXalKeGYRv93sA+xAO+jMS9RLDGOFswdbAAeN/dy1hsKTTCJMgOcWx1AH7EhJ9l+rBJbf1khb0bjVXPwG2II01gb2BY4Hbp+ivr7UI+BnwBmDDivtRUo0MAFbfah7wMpq3BrAnYcjgO0bot8+1BPgx8Gpg3fK7VlIdDABWn+pU4BE0a1PgfYTT4Km3v821iDC08h7ldrOk2AwAVh9qIfB24j0aN8wM4IWEywzLatqmPtdFwMGsGrtAUgIGAKvr9TvgcTRjHcLTBFfVvE251N2EyZY2G+VNkBSHAcDqch1JM8/LP5TwNEFuN/Q1VUuBbxHGQZDUEAOA1cVaBLyJ+m0EfBS4p8Fty7lWEG4a3KHAe6PMdflZWknlXA08HTimxnWsS7ix7y/AR/BadVPGgBcAFxJuGGzq0o46yAAg5eUU4CmEoWnrsCbwTsJ4+EcQhshV82YA+wOXAl8lTHokPYABQMrHMYSR9O6pafl7EIYM/jzh1L/Sm8mqmy7fR3PzI6gDDABS/y0H3g28Gbi/huU/hjBy3S+AbWtYvqrbgHBG5o84joDGGQCkflsI7Ef4Vh7bTMLp/j8Ae9WwfMX3eEJQOwEvC2TPACD1112EoXV/WMOytwfOJwSLOTUsX/XaH7gMeG3qRpSOAUDqp1uAXQkH6ZhmEU4lX0i4mVDd9VDgm8BJhCmWlRkDgNQ/fwV2IYzbENPjCYHifYSJe9QPLyI8LfCPqRtRswwAUr9cAexEuOs7ptcShgx+cuTlqh0eShhA6EjCcM3KgAFA6o8rgd2AGyIuc33gB4RTxV7r77cx4EDgXGBu4l7UAAOA1A9/BZ4H3BxxmYNT/v8UcZlqvycRHhf0fe85A4DUfTcSvvlfF3GZrySc8t864jLVHesRbg48Ao8TveUbK3XbHYSBXa6JtLw1gM8C38ZT/rkbI9zw+V28L6CXDABSdy0inKa9ItLy5gDfI4waKA3sC5wJPCxxH4rMACB103Lg1cCvIi1vE8KHvNd9NZmnAhcA26RuRPEYAKRu+mfg+5GW9QTgNziwj6a3JeEJgZ0T96FIDABS93wZ+FqkZe1I+Oa/WaTlqd82BE4mPHGijjMASN1yOvGu0e8CnIGTwkx0MeHsyg6EUPREwrPxsS619ME6hPklvFyk7O0LrOxYPbjktl7Sgt5zrquBjYa+S8XsBdzXgm1qSy0H3sP0Qxy/DJjfgl7bUkuBl0+zv6TeMwBYTdRCwrfRGPYAFrdgm9pUbym4756GwWliLQNeUnDfqWVmpm5AUiEHE2dyn2cQhvadHWFZbXAG8B3CvpkPbEoYFOkNFH9s7STCGPhF/AY4hOL3YCwjPEf/I8JQzfcDjwaeT3iKo+vP169BGDNiEfDTxL1IjfMMgFV3HVvgvSliB+CuFmxPjLoN2HOabZ0DfKngsp5UfBcC4aB3VYHlXkwYTnkqmwCnFuyx7bUI2L34LpT6wQBg1VmXEudb4lbArS3Ynhh1B/DYgtv97iHLurbgclb3iSHLPRtYt8ByZhLODqTepzFqPvD0IjtP6gsDgFVXLQa2L/TOTG8jwmiBqbcnVu0/4va/a5pllT1t/Ypplnk28KARlrU+4YxG6v0ao27FmQQ7w8cApfb6EHBRxWXMIgwYVPQbc9tdRrimPorPM/Wjk3eW7GPeFH9/DrA3sGCEZd0DfK5kH23zUEKo2jB1IxrOACC105nAZyouYww4Gti1cjft8UPCN81RTRUCyixrqteVOfgP/KBkH220NSF0zkrdiKZnAJDaZz7wemBFxeW8D3ht5W7apcrER9OdCaiqysEfwk2FVd/vNnk28UarVE0MAFL7HApcX3EZewD/HqGXtrm/4uvrCAFVD/4QBiJaHqed1ngjxcdXUAIGAKldzgO+WnEZmwPHM/2odl31yAjLiBkCYhz8IYxfsGb1dlrnC/hkQGsZAKT2WAK8mWqngmcTbpJ7SJSO2ifWJDQxQkCsgz/0d3Kdwc/jQ1M3ItXBxwCtWBXjlP0XWrAdddYK4k5bXHZ++0cy2qN+05lBGO8h9b6ts07FL5zqIQOAFaP+Shi9rornEg6Qqbel7voTsF7FfdUmh5F+nzZRh8TaYVJbGACsGDXq4Dar2xi4qQXb0VSdCqxdcZ+1wYHkEdpWEga22iHOblMMnpKR0jsDOLHiMo4mjC2fiz0JYwJ0OQQcCHydMF5DDmYTJg7q8nvWKwYAKa0VwL9UXMbrgRdVb6VzuhwCcjv4D2xDmEdB6gUvAVhV6lsjvQN/b2Pg9hZsR8o6i+r3TzTpAMIz/6n3W6paDjyz8l5UZZ4BkNJZCny04jK+QggBOdsF+BndCAEHAEeR92fvDOBIHCo4uZx/CKXUvgpcU+H1+wAvjdRL1+0CnES7LwccSLhXw89d2BZ4b+ompKq8BGCVqYXAw0bb/Q8wh/DoYOrtaFu19emAnO72L1qL6c8slZ1kEpXS+Dph7vSyPkAY8lcPtCdwMu26HHAAYWKc3G74G2Y21We8lJLyDIA1ai0ijP1e1uaEMwipt6PN1ZYbA3O/4a9IPb/03lUlngGQmnckYdCesj4FrBOpl75qwz0BXvMv5jPAzNRN5MgfTKlZy4DPVXj9TnjjX1EpxwnI9Tn/MrYB3pq6iRwZAKRmnQhcX+H1h+NBZRQp7gnwmv/oPky8yZVUkKddpGZV+fb/XMKp7RzdDPwcuI5wYJ0L7EWxJykGlwP+iXD/RZ1G+eY/n/DUwmWEMSEeQbgePre27trrIcBBwCdTNyKNwpsAraJ19ui7/AEuaME2NF13E75RT/ZlZU3gLcC9BZdV9yOCRR/1WwJ8BFh3kmWMAS8jPCGSet83XbdPsU+k1jIAWEXr5aPv8v/zghb033TdDDy+wL7ZBrih4DLrCgFFD/7zgH8osLwtgKsKLK9v9cEC+0ZqDQOAVaRupdrQp79twTY0WcsJNzwWtRXpQkDRg/+dwJNGWO6jgLsKLLdPdSfeC6AOMQBYReqIEvt74Nkt6L/pOqHEfkoRAooe/O8Gnlpi+f9SYNl9q3eU2E9SEl0MAJuV3NarW9B7F2s54dtcWT9uwTY0XS8sua+aDAFFD/73UOy0/2Q2JNwgmPr9aLKuAdYoub+kRnUxADyrxHaugaPPla1fltjfA1uT5xjym1TYZ6OEgC+UXMdTKPa+zGe0SxmTuajAevpWjnXRAMcByNPeJV7zLBx9rqzjKrz2EPJ8nvyeCq+9GtgNuLHAv92w5Do2YPj7ch/h5s1zS65j4M6Kr++if0ndQA4MAHl6K7DRiK95dx2NZGAx8L2Sr90AeGXEXrrkIRVfP0oIqMMiwmWMsyIs6+ERltE1TwN2TN1E3xkA8rQR8A2KX2d7OfCi+trptZ8QbgAr49Xke9al6mlzSBcCFhMuDZ4eYVmbAY+LsJwuelPqBvrOAJCvFxK+mW4w5N+9hhAWVM7/q/DaN0frontibXvTIWAp8BLglEjLewd5XgKCcParDTM6SlPq4k2AE+t24EPAE1h1RmB9wjf+X7Sgvy7XfZT/AHt6C/pPXa8oue8mM9WNgd8qubw9JlnWUsJww7E8kzBqYOr3IWW9ofJelGrU9QAwsZYDC1rQR1/qJMo7ugX9p66FlHtiZSqThYBYAeB+YL8IPQ5sB9xBc/u6rXVO1R2pqXkJQBPNwFNuMZW9+W8W8OKYjXTUOoRT6btFWt7VwM6ECYViWg68jvLv9+q2I9w/MOqNun30LMKwyKqBswFK9VgO/LTka59Lfz/8byXcGX8T4VLTDkw/PO4cwkBI/0icO+qvI0wR/EvKD4g10eDgf3yEZcGqg//GQ/7dFYTJoe4ijOz5TODRkXpokzHCmZXPpm5EmkyfLgFY8eo8yvufFvQfu64G9mfys47bEkblm+71C4h3JgBWXQ6ocglgOfD6WA0RDv63M/1+OJdwf8hkdgF+N+T1XawLRtqLUoMMANZk9RHKWYswCE7q/mPWyYRv+9OZAXx6yHIWEg68sWwF/EfJ1+5O3MfUihz8jyFMgTydtQjzKKR+z2PWCmDLIjtRapoBwJqsyo79/sIW9B6zLme0Od4PH7K8+wiXSGIpO+Z8zLHqixz8v0rxxwHXAi4csryu1SEFt11qlAHAWr3upPwB4ust6D9mlRlA6j+GLHMR8PwSy22j2Af/gd2HLLNrdeqI2y81wgBgrV4/orzrWtB/rLqD8kHosCHLXkL5GQPbosjB/yjKP6117ZBld6kWAw8quR80BR8DlOIr++zyE2jHI0/3EqZkvb3ici4g3ChXxoeBT0zz32cRrnXvU3L5qRW52/9rwFsI18DLOL/k6wbuIwTSWyr0EMtsYNfEPfSOAUCKr2wA2CtqF6NZCnyZ8Fje+oRHyh4KPIowUmSZ+QyqzmJ3KNOHgNnAd4k7+l4Tihz8vw68nfDtt6w7SrxmJXAiYbyE9YC5hKmZHw4cBPy1Qj9V9eWyj3rESwDWxFrI8Du1p3JKop5vJMxvP53NgN+OuNyy4yCsbtg9AUvpzsBJRU77f4044/9/e8h6Vq8FhM+z6TwI+P6Iy41Vfy69J6SaGACsiVV27vc1CKfem+53PvDEgj2uO759RZd9O/Huli8SAl4SaV11afLgD+Eyzig/BzsXXO6awBkjLDtWrWD4AElSowwA1sT6AuU8KVG/7x+xz1FDQMwb9YaFgPuBl0VcX0xNH/x3HbKuiTXKwX/gUYTQ1fTPa1fv+VBPGQCsifVayjk4Qa9LCNd5RzVKCLiMuPNLFAkBMWcRjKHpg/8s4DdD1jeoMgf/gRMLriNmHVGyV6kWBgBrYm1LOccn6PXskr3CaCHg+8Sdd2RYCFgGvDri+qpo+uA/BnxjyPoGVeXgD3BgwfXELGcHjMjJgOJYSbhB5RzCjVJXECY7mU/4MFI+ytwtD+VHDqzixgqvnU94auHnDJ+yd1/CDWmvIs7vw6Hjf35giv++BnDs+J/fjLC+sore7X8Q4TOkqjHgSIrNT7AA2JtqB9QbKry2rB0J72vZx0ulqDYizMYllbU+4Qanpr9NfT9C76OcCfgOzZ4JWA68IeL6RpHim/9RQ9YX65v/wIsLri92PT5C75LUCjuR5oP08kj9tz0ExJy0p4gcDv4AHyy4zti1f6T+JSm5wSngFFX2noXVtTkErCCMqNeEXA7+Y8AfCq43dn0s0jZIUnJHki4AnBRxO9oeAt4WcX2TyeXgD7BfwfXWUTEuXUlSK4zyXH0d9c6I29L2EHBwxPVNlNPBfyvCMMOpfl6viLgtkpTUTaQNALG/Hc8Bfllw3SdSfujkyXx8yPpWAO+KuD4odvA/mnhzr4wBXxmyvkEtAJ4dab0QJqsaZYTBOmoxzmMjqQfWIs0TADmHgJWsepSwKg/+aWrTiNslSUk8nvQfprmGgH+ruA4P/ulq2NgTktR6zyf9h+nEWg4cEHH72nxPwErKB54taf6af9GbRWNf858LXF9w3U3VqyJunyQl8RbSf5jmHAK+VXK5ewxZrgf/eivWJRxJSuZDpP8wnaxyuRxQRwDwtH/99bmI2ylJSXye9B+mOYeA2AHAg38zVfZ9k6TWOI70H6Y5h4CYAcCDf3P104jbm61Y16i0yjrAKwk3d21BmCxI/fdywkyQo/o54WcllRsJM+edBfwNWDLJv1kBXBdxnWsDmxT8tzcRnvuOZS4P/NxbANxWYjmTbcO1hINTDLOAzQr+2/mEGxJj2RhYb5K/nwU8HHga8BriDSNdxq9JM4OmNKV9CB+iqdOx1Xw9hXJ+k7DnzxICqzSqGcDbCYExxc/uVfVvolTcGwh3T6c+EFlpamvKuTRRv+8p2a800QtI87n3tyY2TiriycBS0h+ErHT1SMq5MkGvJ5bsVZrMJ2n+Z3heI1smFXAq6Q9AVtp6MOU0/Yz1CuBRJXuVJrMBsJBmf47vbWTLes4JFap7OPCc1E0ouYUlXzcrahfD/Zpwh7cUy93AaQ2vc3bD6+slA0B12+B+zN0yyt+p3vQH2aUNr095uLzh9a2JT7FV5oGruvVTN6DklqduYARd6lXdsazh9Xnwj8AAIFVX5TT+0mhdFDO34fUpD1s0vL77CfcCqAIDgFTdGOVHrGs6AOxCmJxHimUGzd8HNdmAVRqRAUCKo+xZgKYDwFrAOxpep/rtlYSboZtkAIjAACDFUfZmvhQfZB8AdkiwXvXPw4D/TLDepoNzLxkApDjKngFYFLWLYuYQJlN5UoJ1qz82IcxlsWmCdcecHyJbBgApjskmTynizqhdFLcpcB5wOPCIRD2omzYEDgYuJl2ITPV70yszUzcg9UTZkQDviNrFaNYCDgXeT5hc5SYmf0zwHOCwiOs9gDB74jDzgLcC90Ra73bAp3jgF5/TKHcK+8mTvO7DwPnlWvs7awNfpdiMgDcCBxHvbNIzmPz9nkG41r8VzQ9gtbqUvzfS/9mX9MPQWunrBZTzpRb0Pl2dS9ynBg6g2OQxdwI7RlzvdoQpc1dfz7dKLm+PSZa1ANi1cqerbMmqKYaH1VmESzuxvIswbHTqn7+p6tsRtzVbXgKQ4ujiGYBhfgXsRZhvPoYDgKMY/rlzF7AncGGk9W4HnE6Y575Og3srYoWA64Ddxv8cZhfgZ8QLAZ8HDiEcbNuozb83nWEAkOIoGwDaOqvZOcDziXfwPxA4muGfOfMIB72uHfwH5gA/IpxGj+E6Qhi6scC/3QU4iXD5IIZBCGgjA0AEBgApjrIHmBuidhHHOcDehFPaMRwIfJ3hw7fOI5xavyjSeosc/Ms+hjnd69YDTiZeCLiaEIqKhIA9gR8SNwS8O9KyYmrj740y5D0A1krgm5SzfQt6n1h9v+Y/sf5AtTMDHx+yfO8JqK92j7htUmkGAGsl4QO3jPVa0Pugcjv4l71sM5EhIE09KuJ2SaUZAKyVwPWUd2cL+s/p4P974hz8BwwBzdYyys+9IUVlALBWUu1D6XeJe/8V8KCSvU/mQIodJG4nHLBjKXLw/zWwQcR1DvzHkPXeQ7x7AiA8i3/DkHUO6lTi3RMAq54OSFVVwrYUlQHAGlTZ05LHJez5r8BDSvY9mTYf/M8H1o+4ztXlFAKOKrjeOurUiNshVWIAsAZVdkrU9ybs+TUle55Mmw/+v6L8cM2jyCUEbEgYryHFz+xnIm2DVJkBwBpU2Wl290rU7z3EG9K1zdf8Y9/fMEwu9wSkOgvw+kj9S5UZAKxBHUU5mybq95SS/a6uzd/8zyLu/Q1F5XAm4DUF1xe7nhKhdykKA4A1qAsob9iBrI46rkK/A20++P+SuHfAj6rvIeB5BdcVs5YD61TsW4rGAGANaj7lR9c8OUG/Py7Z60CbD/6n0Y4DRZ9DwMsKridmXVqhXyk6A4A1sR5NOR9K0OtNDB+edypFr/kvJYxRH0uRg/8pxL3jvaqm7wnYmhAsivwMVLkn4NMF1xGzvl6yV6kWBgBrYu1HObsn6rfMkwtFv/mvJBz8Yily8D8ZWCviOmNp+kzAvw5Z38QqcyZgFuF5/KZ/Xl83Yp9SrQwA1sQq+4jSHOD+BP3+ltGeBBjl4H8/8UbcK3Lw/yntPPgPNBkC1gEWDlnfxBo1BLxnhGXHrMeMthukehkArIl1PuWlGhHwWGBmgf4OZrRhYH9Vai/8vSIH/x8DsyOtr05NhoCfDVnX6vULio2VsDfh0k7TP6e3Uv6SlVQLA4A1sZZQ/lvopxL2fQaw7RR9bUoICaMu839L7oeJihz8f0C88Qya0FQI+OqQ9UxWfyJMPTyZdYF/Jwx7neJn9DsV94dWUyT1SypuFuE55XNLvPbnhGu3KewGXEQ4g3EO4aC7HvA0wv0JZb5dV/182Q44nemn7D0JeDnhG2lXHDr+5wem+O/rEe5leD7VziiVmZtia0IYvHj8zxsIl6e2JTz2V+dQysPEGrdCisYzANbq9V7KmUV4lDB1/7HqopL7AYp98z+Rbs8KV/eZgLOHLL9LtQJ4RIV9IdWi6wFgBeHmqTcBzwK2J3zzOAK4pQX9dbFOprwftKD/mD9bZSZIKnLw/w79OINZVwh4GGluKq2rLi6xD6TadTkAXMn0w2rOAb7Sgj67VvdR/jn0t7ag/5h17IjbX+Tgfzz9OPgP1BECvjBkmV2rT424/VIjuhoALiXM6FXEsA8o6+/reQX37eo2pdgAO12qVxfc9u0ZfvA/Dlij4PKGGQP2LPnarYHNIvUBxULAMwsuax/69zO0U8FtlxrVxQCwBHjsCNs4g/C8eOq+u1SfHWH/ru6sFvQfs5YBH2P6Gwn3Y/jodd8k7sH/SOBbJV+/B3AFsEmkfmB4CLiPMBPeVI/CzQAOIvx+p37PY9aNlB9iW6pVFwNAmVnrXtyCvrtUfyqxjwcOakH/ddQNwGHAswkBdEfCwEJFblb7b+IdBAYH/5VUCwCD9/lhkfqCYmfbLgTeCfwDYejpZxCeHrmkwGu7WJ+vtEelGnUxAJQ5Pb0O/ftmUXdtWWI/QzigpHrWuo11NPUc/FdSPQCsJBx4HxKlu8BLbg+sZ1XbnZqKp1XydGWJ19xHeCpAxb2k5OtuBc6M2EeXHcWq4YerGiNMJnNghGVNtC1hFL1Ywx4fCnwi0rK67gbgvNRN9JUBIE/3Nvy6XO1f4bXHxmqiw77Lqqciqqrr4D+wPWE8/aI31g5zKOFO/tz9D3Hef03CACDV56nAFiVf+z3groi9dM3twBvpxsF/4MmE0epijZZ3CNVGAuy6lYR7P1QTA4BUnzHKXwZYRPj2k6svEUZFrKqpg//AUwlDOq8bYVkrgH+LsJyu+iXwl9RN9JkBQKpXlcsAx0Tront+GmEZTR/8B55BmInvQRGWdRbhbEiOcv75b4QBQKrX04DHlXztJeR7A1TVb36pDv4DOxGmKF6n4nJWAFdXb6dz5hEmelKNDABSvcYI17LL+lysRjIyBnyZdAf/gWcDP6T8sNADUw3802dfBRanbkIapovjAJR9XKmvA43UXbdQfta6NQjfhlNvQ9P15JL7a/Xn/Ker+ZQfYnZdwpTPRdZzMuWmU4bwJe22guvpSy0i7uBKmoJnAKT6PQx4QcnXLifPswD/WOI1o5z2XwDsTTiIlzEf2Av4VYF/+zzCUx2zSqxnV+IOMtQFxxHGwpBazzMAVpH6SYn9PTAHuKMF29Bk3cZod9KP+s1/5xGWPZ1RzgT8gNHOBM0g3AOS+r1oslYQJlqSOsEAYBWpZZQfEwDgIy3YhqbrRIpd/0518B8YJQR8l+JTGX++4DL7VN8vuG+kVjAAWEXrM6Pv8v+zPvmdBVh40irqAAAQlUlEQVRJCAHrTbNfNiDcLV5kWXUc/AdGCQFnAZtPs6y1gf8quKw+1XJgu+l3s9QuBgCraN3D9AezYT7Qgm1IUbcDHyUMsrMR4ef3acDHKR6K6jz4D4wSAhYR7nTfHXg44ediO+C9hOlvU+/zFPWd0Xe5lJYBwBql3j3yXl9lDuHmqNTb0LVaQHgkrwlzCCPYpd7mrtVy4Ikl9rcq8CkAqVnvIDzaV8ZC4D8j9pKDBYS79c9saH0LgRdS7OkArXI84QuGGmQAkJq1JbBfhdd/hTxHhitj8KjfOQ2vd5RHBBWmGj80dRM5MgBIzfsw5X/3lgDvidhLXy0E9qH5g//AfMLz/2cmWn+XfBK4IXUTOTIASM17AtUmCfoBYe55TW4hYeClM+2j9W4EPp26iVwZAKQ0Pkz5ewEgnAVYHqmXPmn6mv8w3hMwvfcT9pESMABIaWwDvLTC6y8Gvhipl75Ifdp/Kl4OmNyZhJv/pM7yMUCrbF1O8VHhJjMHuLYF29GGauI5/6pGGSeg73UfsFW13amqPAMgpfM4qk1ZuxB4W6Reuqyt3/xX55mAVT6GT7OoBzwDYFWpOwij21VxXAu2I1U1OchPLLkPFnQR5afHVkSeAZDS2ojqz0C/C7g5Qi9d07Yb/orK+cbAJcDrgPtTNyIDgNQG/ww8psLr5xE+VFfGaacTunLafyq5Xg74N+CPqZtQYACQ0ptFGAylil+Qz1MBS+nH8/WDMwF/SN1IQ04DPpe6CSkm7wGwYtULi78Vk1qLPN6jKhMqra7sWAxVxnBY3RaEMJB6v9ZZ84BNY+0wxeEZAKk9vkx4VKysxcAr6PfAKjcQ5kOIYS7hbvQydgUOiNTH9cDXIi2rjVYArwduStyHVmMAkNpjc+Dwisu4lGqPFrbdSYRLAFXNJVxCeGTJ188AjiJeCPhOpOW00eHAT1I3ob9nAJDa5e3AMyou43jgSxF6aaMYN5BtAZxO+YP/wAzgaOKMxXAR4VR535xG+bMsqpkBQGqXGcDXCTcGVvGvwHnV22mdqpc35gJnj/8Zwxjh0k3VMwFLiXNmo02uBV6Gc1a0lgFAap/tgI9XXMZSwoyDfZtmdZMKr6162n8qMS4HPBiYHaedVpgPvAi4M3UjmpoBQGqnfyXcaFbFTYRn5edXb6c1nl3ydXUd/AeqhoDdIvaS2jLCRFcXp25E0zMASO00A/gmsH7F5VxEOA27rHJH7bA3o5++n+7gv3bJPtaZ5O+qhIC3l+yjjd4OnJy6CQ1nAJDaawvC9eWqfg68M8Jy2mAW4ZG5os/hD/vmv1nJPrac4u/LhIDX0r35DKbyn4Ttl7LgQEBW3fWaIm9OAYe1YFti1bcYfs38ScBfhyxnKbBBwf030c+GLHc54TLOMPsBi4Ysqyv1X4SbIqVsGACsumsh8MQC708RX2zB9sSqSwgH0LVW28bNCd9E7yu4nPeOuA+3I1xSKbLsU4Gd+fuzrdsTZnFc0fA+q6v+H3FHR5Q6wQBgNVFXUv1+AAjf0I5twfbErAXAhYRT/VeWeP1dwKML7r+1gd+UWMc8wmOZ5wJ/a8E+i1k/wul9lSkDgNVUnUScU6wzgRNasD1tqj8T7rmYznoMP/WfW53C35+BUUd4E6DUHS8C3hdhOcsIcwZ8I8Ky+uLxwO8Io/rNWe2/zQZeSRiFcK+G+2qzHxImsFqcuhEpFc8AWE3WcuCfhr1RBY0Bn2/BNrWtFgLnAN8ljBp4bwt6alsdj6f9JQOA1XgtAJ485L0axcdasE1Wd+povOGvF7wEIHXPHMLsaptHWt5HgDcB90danvrri4TZJh3fvwcMAFI3bUIY4CfGkwEQnuHeG7g70vLUL8uAtxIGlFqZuBdFYgCQuusJhHnkq84cOHAa4Zn16yMtT/1wD/B84MjUjSguA4DUbc8Dvk28a7KXAk8Hzoq0PHXbFcAzgNNTN6L4DABS970E+G/i/T7fCjyHMJqep3vz9WPgHwhjJKiHDABSP7wW+ELE5S0H3k8Ye8D7AvKynPBkiO99zxkApP44GDg88jJ/RPgWeGHk5aqd/gbsCXyUME+BeswAIPXLocBXiPu7fQUhBHwMH//qs5MIkxT9MnUjaoYBQOqfgwjT5c6MuMxlhG+FOwPXRFyu0lsEvAt4MXBH4l7UIAOA1E+vIjwiODvycs8HdiSMBucNgt13JuFbf8z7R9QRBgCpv15MuJN7vcjLvZswGtxuhMsD6p67gTcDuwNXJe5FiRgApH7bE/gVw6e6LeMsYAfCjYdLa1i+6vE9YBvgGDyLkzUDgNR/2xKmut2phmUvBj5IGJXwxBqWr3iuIAz3/BLg5sS9qAUMAFIeNiYM9fvKmpZ/NfBSwgBCF9e0DpVzF+Emv20J80dIgAFAysls4DjC43x1/e6fQbhJ8G3AjTWtQ8XcB3wG2Ipwk9+ytO1I/bMv6efnHrUeXHJbL2lB71acOgN4GPWaRbhZ8G+JtzW3WkKYuGfT4W+RcuYZAClPuwG/JUz8U5elwFHAY4D34HXnui0Gvkb4xv8W4Ka07ajtDABSvjYHziYMITxW43ruAz4NbAm8kTDjoOKZBxxGeNLjIOCGtO1I+fASgNWH+gn1XxIYGAP2Ak4lDC2cetu7Wn8mHPDXGW33S4rFAGD1pW4jzADXpM2A9wHXV+w9l1oMnADsQb1nbSQVYACw+lbHAOvSrJmE8PF9wtj0qfdBm2oFcB7hUs0GZXewpPgMAFYf60bCUMIprAPsQ/imu2SaHvtelxEmYNqq0t6UVBsDgNXnOgHYhHQ2BF4OfBO4hfT7o85aSLgX4+3A3Bg7T1K9DABW3+tuwsA+qZ8amgE8hTD08C+A+aTfN1XqfuDXhMF6ngusFW9XScN5E0l1+xKuW3bJxpSb9/sSwnCiytNvgUOAc1M3Mm4mYSrbnYBnAU8mfHNOHVSmcjPwR8KUyucCvyF865eSMABUZwBQbr5HuHP/L6kbmcSDCBMTbQ9sR7h+PpfwjPzsBta/jHD/xLWE/XMp4ffmIsr9zkm1mZm6AUmdsx/hJr0vEaYCvittOw+wgHBa/der/f0MwtC4c4FHEC6DDWrj8T/XIAxfPGf8NesSLjNAeDJhMeHU/R0Tat74n7cQDvo34Jj7Uja8B8DKue4FjiDcrCepQ9p6rUxSN6zLqoF8DAJShxgAJMUwCALXEMalf3jadiQNYwCQFNMGwIcIZwROAJ6Wth1JUzEASKrDLGB/ws14pwMvJNxkJ6klDACS6rY78EPCHfJfwEdJpVYwAEhqyibAO4CLgbOB19H8pEOSxhkAJDVtDNgZOBa4Hfgx8Fpg/YQ9SdkxAEhKaTbwAsJkP7cSwsAbCYP1SKqRIwFKaotBGHjB+P+/BjhtvE5m1ah8kiIwAEhqq0cBB47XIsLkOecRJtM5nzAMr6SSDACSumBtYNfxGrgSuIAwRPUlwGWEiXgkFWAAkNRVjx2vie4izMB3OWEwousm1M3Aisa6k1rOACCpTzYkPGGw8yT/bSlwG3AnD5zN7x5WzWi4FFg4/r/nM/XMfrcSHmWUOssAICkXs4DNxquq04A9IyxHSsbHACVJypABQJKkDBkAJEnKkAFAkqQMGQAkScqQAUCSpAwZACRJypABQJKkDBkAJEnKkAFAkqQMGQAkScqQAUCSpAwZACRJypABQJKkDBkAJEnKkAFAkqQMGQAkScqQAUCjGEvdgCQpDgNAnjZs+HWSpJYxAORp6xKvWQ94aOxGJElpGADytH+J1+wNzIzdiCQpDQNAnl4BbDPCv18DeH9NvUiSEjAA5GkmcALhtH4RHwW2r60bSVLjDAD5egJwDvDoaf7NGsDHgQ820pEkqTEGgLxtB1wGfBF4FjCH8DOxGfBG4A948JekXvKmLs0G/nm8AFbi8/6S1HueAdDqPPhLUgYMAJIkZcgAIElShgwAkiRlyAAgSVKGDACSJGXIACBJUoYMAJIkZcgAIElShgwAkiRlyAAgSVKGDACSJGXIACBJUoYMAJIkZcgAIElShgwAkiRlyAAgSVKGDACSJGXIACBJUoYMAJIkZcgAIElShgwAkiRlyAAgSVKGDACSJGXIACBJUoYMAJIkZcgAIElShgwAkiRlyAAgSVKGDACSJGXIACBJUoYMAJIkZcgAIElShgwAkiRlyAAgSVKGDACSJGXIACBJUoYMAJIkZcgAIElShgwAkiRlyAAgSVKGDACSJGXIACBJUoYMAJIkZcgAIElShgwAkiRlyAAgSVKGDACSJGXIACBJUoYMAJIkZcgAIElShgwAkiRlyAAgSVKGDACSJGXIACBJUoYMAJIkZcgAIElShgwAkiRlyAAgSVKGDACSJGXIACBJUoYMAJIkZcgAIElShgwAkiRlyAAgSVKGDACSJGXIACBJUoYMAJIkZcgAIElShgwAkiRlyAAgSVKGDACSJGXIACBJUoYMAJIkZcgAIElShgwAkiRlyAAgSVKGDACSJGXIACBJUoYMAJIkZcgAIElShgwAkiRlyAAgSVKGDACSJGXIACBJUoYMAJIkZcgAIElShgwAkiRlyAAgSVKGDACSJGXIACBJUoYMAJIkZcgAIElShgwAkiRlyAAgSVKGDACSJGXIACBJUoYMAJIkZcgAIElShgwAkiRlyAAgSVKGDACSJGXIACBJUoYMAJIkZcgAIElShgwAkiRlyAAgSVKGDACSJGXIACBJUoYMAJIkZcgAIElShgwAkiRlyAAgSVKGDACSJGXIACBJUoYMAJIkZcgAIElShgwAkiRlyAAgSVKGDACSJGXIACBJUoYMAJIkZcgAIElShgwAkiRlyAAgSVKGDACSJGXIACBJUoYMAJIkZcgAIElShgwAkiRlyAAgSVKGDACSJGXIACBJUoYMAJIkZcgAIElShgwAkiRlyAAgSVKGDACSJGXIACBJUoYMAJIkZcgAIElShgwAkiRlyAAgSVKGDADVLUndgKTGLU3dgFSVAaC6v6VuQFLjbkjdgFSVAaC6S4CbUzchqVGnpm5AqsoAUN0K4Iupm5DUmL8AP03dhFTVWOoGemI2cAbwzNSNSKrVEmBP4JzUjUhVeQYgjiXAPsBpqRuRVJs7gRfhwV89sUbqBnpkEfBt4GrgEcCmeIZF6oObgWOAVwF/TNyLFI0HqPqsD2wGrNXwetcEzm94nWWcBrw/dRNiR+DI1E0U8Fng+IbXuRK4Fbhp/H9LvTIzdQM9ds94NW1WgnWWcRdwYeomxLqpGyjoRvx5kaLyHgBJkjJkAJAkKUMGAEmSMmQAkCQpQwYASZIyZACQJClDBgBJkjJkAJAkKUMGAEmSMmQAkCQpQwYASZIyZACQJClDBgBJkjJkAJDy1pVpbrvSp9QZBoD+WQosTN1EAXembkAA3J26gYL8eZEiMwD00xWpGyigCz3m4Brg/tRNFHBl6gakvjEA9NMPUzcwxArgx6mbEADzgTNSNzHETcBvUzchSV3wYMKp3ZUtrW/Xt+kqYRdCKEv9czFVHVzfpktS/7wYWE76D+/V6zpCQFG7fJL0PxuT1c/xTKUkjeylhFO8qT/EB/V74JG1brHKGgMOp12h8TvA2nVutCT12SbAEcClhKcDmv4Qvw04HXgjMLPmbVV1OwDHANcCS2j2Z2UZ8DfgROC5dW+olLv/D7gZpmmslBkLAAAAAElFTkSuQmCC"
        ></image>
      </defs>
    </svg>
  );
}

export default FridgeIcon;