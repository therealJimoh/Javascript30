        const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
    
        function makeGreen() {
          const p = document.querySelector('p');
          p.style.color = '#BADA55';
          p.style.fontSize = '50px';
        }
    
        // Regular

        console.log('hello');
    
        // Interpolated
        
        console.log(`I am ${}`);

        // Styled

        console.log('% I am some great text', 'font-size: 20px');
    
        // warning!
        console.warning('careful here');

        // Error :|
        console.error('yeh');

        // Info:
        console.info('human need 8hrs sleep a day');

        // Testing
        console.assert(2 === 2, 'you are wrong');

        // clearing
        // console.clear();
    
        // Viewing DOM Elements
        console.dir(p);
        
        // Grouping together
        dogs.forEach(dog => {
            console.group(`${dog.name}`)
            console.log(`This is ${dog.name}`);
            console.log(` ${dog.name} is ${dog.age}`);
            console.log(`${dog.name} is ${gog.age * 7}`);
            console.groupEnd(`${dog.name}`);
        });

        // counting
        console.count('BOT');

        // timing
        console.time('fetching data');
            fetch('https://api.github.com/users/wesbos')
                .then(data => data.json())
                .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });
