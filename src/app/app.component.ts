import { Component, OnInit } from '@angular/core';
import binanceApiNode from 'binance-api-node';
import { CoinpaprikaService } from './service/coinpaprika.service';

const data = [
  {
    "id": "eth-ethereum",
    "name": "Ethereum",
    "symbol": "ETH",
    "rank": 2,
    "total_supply": 120232214,
    "max_supply": 0,
    "beta_value": 1.12504,
    "first_data_at": "2015-08-07T00:00:00Z",
    "last_updated": "2024-09-26T11:28:35Z",
    "quotes": {
      "USD": {
        "price": 2625.5058978540874,
        "volume_24h": 13204900711.347322,
        "volume_24h_change_24h": -4.21,
        "market_cap": 316013167768,
        "market_cap_change_24h": 0.01,
        "percent_change_15m": -0.08,
        "percent_change_30m": -0.12,
        "percent_change_1h": -0.45,
        "percent_change_6h": 0.56,
        "percent_change_12h": 2.04,
        "percent_change_24h": 0.01,
        "percent_change_7d": 7.7,
        "percent_change_30d": 4.15,
        "percent_change_1y": 61.19,
        "ath_price": 4864.113196614236,
        "ath_date": "2021-11-10T16:05:00Z",
        "percent_from_price_ath": -46.01
      }
    },
    "logo": "https://static.coinpaprika.com/coin/eth-ethereum/logo.png"
  },
  {
    "id": "bnb-binance-coin",
    "name": "Binance Coin",
    "symbol": "BNB",
    "rank": 4,
    "total_supply": 148930232,
    "max_supply": 200000000,
    "beta_value": 0.821592,
    "first_data_at": "2017-07-25T00:00:00Z",
    "last_updated": "2024-09-26T11:30:36Z",
    "quotes": {
      "USD": {
        "price": 595.4918039880648,
        "volume_24h": 1223388657.6803727,
        "volume_24h_change_24h": -3.66,
        "market_cap": 86902078124,
        "market_cap_change_24h": -0.15,
        "percent_change_15m": -0.17,
        "percent_change_30m": -0.16,
        "percent_change_1h": -0.42,
        "percent_change_6h": 0.89,
        "percent_change_12h": 1.72,
        "percent_change_24h": -0.15,
        "percent_change_7d": 5.41,
        "percent_change_30d": 9.95,
        "percent_change_1y": 179.7,
        "ath_price": 719.5064907014024,
        "ath_date": "2024-06-06T14:01:08Z",
        "percent_from_price_ath": -17.23
      }
    },
    "logo": "https://static.coinpaprika.com/coin/bnb-binance-coin/logo.png"
  },
  {
    "id": "doge-dogecoin",
    "name": "Dogecoin",
    "symbol": "DOGE",
    "rank": 9,
    "total_supply": 146115886384,
    "max_supply": 0,
    "beta_value": 1.36424,
    "first_data_at": "2013-12-15T00:00:00Z",
    "last_updated": "2024-09-26T11:28:35Z",
    "quotes": {
      "USD": {
        "price": 0.11438346712789464,
        "volume_24h": 1038898502.0400988,
        "volume_24h_change_24h": 36.76,
        "market_cap": 16713259988,
        "market_cap_change_24h": 4.48,
        "percent_change_15m": 0.08,
        "percent_change_30m": -0.33,
        "percent_change_1h": -0.48,
        "percent_change_6h": 4.13,
        "percent_change_12h": 5.68,
        "percent_change_24h": 4.47,
        "percent_change_7d": 9.31,
        "percent_change_30d": 13.84,
        "percent_change_1y": 88.01,
        "ath_price": 0.75287027,
        "ath_date": "2021-05-08T05:00:00Z",
        "percent_from_price_ath": -84.79
      }
    },
    "logo": "https://static.coinpaprika.com/coin/doge-dogecoin/logo.png"
  },
  {
    "id": "toncoin-the-open-network",
    "name": "Toncoin",
    "symbol": "TON",
    "rank": 10,
    "total_supply": 5112336601,
    "max_supply": 0,
    "beta_value": 0.815309,
    "first_data_at": "2021-09-17T00:00:00Z",
    "last_updated": "2024-09-26T11:30:38Z",
    "quotes": {
      "USD": {
        "price": 5.836430643134499,
        "volume_24h": 274984284.58413553,
        "volume_24h_change_24h": -14.9,
        "market_cap": 14800123260,
        "market_cap_change_24h": 2.5,
        "percent_change_15m": 0.09,
        "percent_change_30m": 0.12,
        "percent_change_1h": -0.03,
        "percent_change_6h": 1.33,
        "percent_change_12h": 2.48,
        "percent_change_24h": 2.49,
        "percent_change_7d": 1.07,
        "percent_change_30d": 6.32,
        "percent_change_1y": 165.6,
        "ath_price": 8.279611839760841,
        "ath_date": "2024-06-15T00:36:22Z",
        "percent_from_price_ath": -29.5
      }
    },
    "logo": "https://static.coinpaprika.com/coin/ton-toncoin/logo.png"
  },
  {
    "id": "btc-bitcoin",
    "name": "Bitcoin",
    "symbol": "BTC",
    "rank": 1,
    "total_supply": 19759181,
    "max_supply": 21000000,
    "beta_value": 0.979831,
    "first_data_at": "2010-07-17T00:00:00Z",
    "last_updated": "2024-09-26T11:30:36Z",
    "quotes": {
      "USD": {
        "price": 64328.84002173725,
        "volume_24h": 27391778522.31514,
        "volume_24h_change_24h": -10.08,
        "market_cap": 1271085643811,
        "market_cap_change_24h": 0.83,
        "percent_change_15m": -0.15,
        "percent_change_30m": 0,
        "percent_change_1h": -0.03,
        "percent_change_6h": 1.1,
        "percent_change_12h": 2.15,
        "percent_change_24h": 0.83,
        "percent_change_7d": 2.28,
        "percent_change_30d": 7.6,
        "percent_change_1y": 142.36,
        "ath_price": 73686.92856165291,
        "ath_date": "2024-03-14T07:07:09Z",
        "percent_from_price_ath": -12.69
      }
    },
    "logo": "https://static.coinpaprika.com/coin/btc-bitcoin/logo.png"
  },
  {
    "id": "steth-lido-staked-ether",
    "name": "Lido Staked Ether",
    "symbol": "STETH",
    "rank": 8,
    "total_supply": 9785853,
    "max_supply": 0,
    "beta_value": 1.12893,
    "first_data_at": "2021-08-12T00:00:00Z",
    "last_updated": "2024-09-26T11:30:37Z",
    "quotes": {
      "USD": {
        "price": 2623.5680395058594,
        "volume_24h": 24139480.48954087,
        "volume_24h_change_24h": -37.75,
        "market_cap": 25696272183,
        "market_cap_change_24h": 0,
        "percent_change_15m": -0.09,
        "percent_change_30m": -0.07,
        "percent_change_1h": -0.42,
        "percent_change_6h": 0.45,
        "percent_change_12h": 2,
        "percent_change_24h": 0,
        "percent_change_7d": 7.68,
        "percent_change_30d": 4.19,
        "percent_change_1y": 61.17,
        "ath_price": 4824.292564201527,
        "ath_date": "2021-11-10T16:05:00Z",
        "percent_from_price_ath": -45.6
      }
    },
    "logo": "https://static.coinpaprika.com/coin/steth-lido-staked-ether/logo.png"
  },
  {
    "id": "sol-solana",
    "name": "Solana",
    "symbol": "SOL",
    "rank": 5,
    "total_supply": 585385681,
    "max_supply": 0,
    "beta_value": 1.33276,
    "first_data_at": "2020-08-26T00:00:00Z",
    "last_updated": "2024-09-26T11:30:37Z",
    "quotes": {
      "USD": {
        "price": 152.53317636027168,
        "volume_24h": 2355294451.9162474,
        "volume_24h_change_24h": -24.13,
        "market_cap": 71514106666,
        "market_cap_change_24h": 1.56,
        "percent_change_15m": -0.22,
        "percent_change_30m": 0.11,
        "percent_change_1h": 0.25,
        "percent_change_6h": 1.73,
        "percent_change_12h": 3.37,
        "percent_change_24h": 1.54,
        "percent_change_7d": 8.94,
        "percent_change_30d": 3.98,
        "percent_change_1y": 693.47,
        "ath_price": 259.7046020809965,
        "ath_date": "2021-11-06T21:50:00Z",
        "percent_from_price_ath": -41.25
      }
    },
    "logo": "https://static.coinpaprika.com/coin/sol-solana/logo.png"
  },
  {
    "id": "usdt-tether",
    "name": "Tether",
    "symbol": "USDT",
    "rank": 3,
    "total_supply": 124615644810,
    "max_supply": 0,
    "beta_value": -0.000923425,
    "first_data_at": "2015-02-25T00:00:00Z",
    "last_updated": "2024-09-26T11:30:36Z",
    "quotes": {
      "USD": {
        "price": 0.9999466442875925,
        "volume_24h": 53197171163.93347,
        "volume_24h_change_24h": -2.42,
        "market_cap": 119274942964,
        "market_cap_change_24h": 0,
        "percent_change_15m": 0.06,
        "percent_change_30m": -0.01,
        "percent_change_1h": 0.01,
        "percent_change_6h": 0.02,
        "percent_change_12h": -0.02,
        "percent_change_24h": -0.04,
        "percent_change_7d": -0.01,
        "percent_change_30d": -0.08,
        "percent_change_1y": 0.04,
        "ath_price": 1.21549,
        "ath_date": "2015-02-25T17:04:00Z",
        "percent_from_price_ath": -17.74
      }
    },
    "logo": "https://static.coinpaprika.com/coin/usdt-tether/logo.png"
  },
  {
    "id": "xrp-xrp",
    "name": "XRP",
    "symbol": "XRP",
    "rank": 7,
    "total_supply": 99987181934,
    "max_supply": 100000000000,
    "beta_value": 0.839827,
    "first_data_at": "2013-08-04T00:00:00Z",
    "last_updated": "2024-09-26T11:30:36Z",
    "quotes": {
      "USD": {
        "price": 0.5898114710290147,
        "volume_24h": 1084872201.5263326,
        "volume_24h_change_24h": -2.36,
        "market_cap": 33327685233,
        "market_cap_change_24h": -0.09,
        "percent_change_15m": 0.05,
        "percent_change_30m": -0.01,
        "percent_change_1h": -0.11,
        "percent_change_6h": 0.97,
        "percent_change_12h": 1.18,
        "percent_change_24h": -0.22,
        "percent_change_7d": 0.29,
        "percent_change_30d": 2.07,
        "percent_change_1y": 17.43,
        "ath_price": 3.84194,
        "ath_date": "2018-01-04T07:14:00Z",
        "percent_from_price_ath": -84.65
      }
    },
    "logo": "https://static.coinpaprika.com/coin/xrp-xrp/logo.png"
  },
  {
    "id": "usdc-usd-coin",
    "name": "USDC",
    "symbol": "USDC",
    "rank": 6,
    "total_supply": 36105516134,
    "max_supply": 0,
    "beta_value": -0.00362338,
    "first_data_at": "2018-10-09T00:00:00Z",
    "last_updated": "2024-09-26T11:28:36Z",
    "quotes": {
      "USD": {
        "price": 1.0001368326019808,
        "volume_24h": 5996497188.985047,
        "volume_24h_change_24h": -2.69,
        "market_cap": 36109636192,
        "market_cap_change_24h": 0.24,
        "percent_change_15m": 0.02,
        "percent_change_30m": 0,
        "percent_change_1h": -0.04,
        "percent_change_6h": -0.02,
        "percent_change_12h": 0,
        "percent_change_24h": -0.02,
        "percent_change_7d": 0.05,
        "percent_change_30d": -0.07,
        "percent_change_1y": -0.05,
        "ath_price": 1.90619801,
        "ath_date": "2018-10-11T06:35:00Z",
        "percent_from_price_ath": -47.52
      }
    },
    "logo": "https://static.coinpaprika.com/coin/usdc-usdc/logo.png"
  }
]


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  client = binanceApiNode()
  listCoin: any[] = []
  listHighlight: any[] = []
  listNewListing: any[] = []
  listTopGainer: any[] = []
  listTopVolume: any[] = []

  constructor(private coinMarket: CoinpaprikaService) { }

  ngOnInit(): void {
    this.getAllSymbols()
  }

  getAllSymbols() {
    this.coinMarket.getAllCoins().subscribe(data => {
      const listShow = data
      const listIds = listShow.slice(0, 10).map((coin: any) => coin.id)
      listIds.forEach((_id: string) => {
        this.coinMarket.getCoinMarketData(_id).subscribe(coin => {
          this.coinMarket.getCoinDetails(_id).subscribe(_coin => {
            this.listCoin.push({ ...coin, logo: _coin.logo })
            this.getListCoin()
          })

        })
      });

    }
    )
  }

  getListCoin() {
    this.listHighlight = this.listCoin.slice(0, 3)
    this.listTopGainer = this.listCoin.sort((a, b) => b.quotes.USD.percent_change_24h - a.quotes.USD.percent_change_24h)
      .slice(0, 3)
    this.listTopVolume = this.listCoin.sort((a, b) => b.quotes.USD.volume_24h - a.quotes.USD.volume_24h).slice(0, 3)
    this.listNewListing = this.listCoin.sort((a, b) => (new Date(b.first_data_at).getTime() - new Date(a.first_data_at).getTime())).slice(0, 3)
  }




}
