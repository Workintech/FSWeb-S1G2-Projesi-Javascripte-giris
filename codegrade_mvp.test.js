import functions from './index';

describe('saFunction', ()=>{
    it('sa as döner', ()=>{
        expect(functions.sa()).toBe('as');
    })
});

describe('carpmaFunction', ()=>{
    it('a * b', ()=>{
        expect(functions.carpma(5, 7)).toBe(35);
    })
});

describe('kopeginYasiFunction', ()=>{
    it('sonuç insanYasi * 7', ()=>{
        expect(functions.kopeginYasi(5)).toBe(35);
    })
});

describe('oyunFunction', ()=>{
    it('sonuç Kazandın!, Kaybettin! veya Beraberlik', ()=>{
        expect(functions.oyun('Taş', 'Makas')).toBe('Kazandın!');
    })
    it('sonuç Kazandın!, Kaybettin! veya Beraberlik', ()=>{
        expect(functions.oyun('Taş', 'Kağıt')).toBe('Kaybettin!');
    })
    it('sonuç Kazandın!, Kaybettin! veya Beraberlik', ()=>{
        expect(functions.oyun('Taş', 'Taş')).toBe(`Beraberlik`);
    })
    it('sonuç Kazandın!, Kaybettin! veya Beraberlik', ()=>{
        expect(functions.oyun('Kağıt', 'Taş')).toBe(`Kazandın!`);
    })
    it('sonuç Kazandın!, Kaybettin! veya Beraberlik', ()=>{
        expect(functions.oyun('Kağıt', 'Makas')).toBe(`Kaybettin!`);
    })
    it('sonuç Kazandın!, Kaybettin! veya Beraberlik', ()=>{
        expect(functions.oyun('Kağıt', 'Kağıt')).toBe(`Beraberlik`);
    })
    it('sonuç Kazandın!, Kaybettin! veya Beraberlik', ()=>{
        expect(functions.oyun('Makas', 'Kağıt')).toBe(`Kazandın!`);
    })
    it('sonuç Kazandın!, Kaybettin! veya Beraberlik', ()=>{
        expect(functions.oyun('Makas', 'Taş')).toBe(`Kaybettin!`);
    })
});

describe('milDonusturucuFunction', ()=>{
    it('sonuç km * 0.621371', ()=>{
        expect(functions.milDonusturucu(10)).toBe(6.21371);
    })
});

describe('feetDonusturucuFunction', ()=>{
    it('sonuç cm / 30.48', ()=>{
        expect(functions.feetDonusturucu(160)).toBe(5.2493438320209975);
    })
});

describe('cocukSarkisiFunction', ()=>{
    it('girilen değere göre geri sayım yapan bir string döner', ()=>{
        expect(functions.cocukSarkisi(5)).toBe(`${5} küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!`);
    })
});

describe('notHesaplaFunction', ()=>{
    it('A olmalıydı', ()=>{
        expect(functions.notHesapla(90)).toBe('A aldın');
    })
    it('A olmalıydı', ()=>{
      expect(functions.notHesapla(95)).toBe('A aldın');
  })
    it('B olmalıydı', ()=>{
        expect(functions.notHesapla(80)).toBe('B aldın');
    })
    it('B olmalıydı', ()=>{
      expect(functions.notHesapla(85)).toBe('B aldın');
  })
    it('C olmalıydı', ()=>{
        expect(functions.notHesapla(70)).toBe('C aldın');
    })
    it('C olmalıydı', ()=>{
      expect(functions.notHesapla(75)).toBe('C aldın');
  })
    it('D olmalıydı', ()=>{
        expect(functions.notHesapla(60)).toBe('D aldın');
    })
    it('D olmalıydı', ()=>{
      expect(functions.notHesapla(65)).toBe('D aldın');
  })
    it('F olmalıydı', ()=>{
        expect(functions.notHesapla(59)).toBe('F aldın');
    })
    it('F olmalıydı', ()=>{
      expect(functions.notHesapla(20)).toBe('F aldın');
  })
});
