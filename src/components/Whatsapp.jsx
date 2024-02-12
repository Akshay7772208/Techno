import React,{useState} from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsApp = () => {
  const [hovered, setHovered] = useState(false);
  const iconStyle = {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    backgroundColor: '#25D366',
    color: '#fff',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const iconHoverStyle = {
    backgroundColor: '#128C7E',
  };

  return (
    <div
      style={{ ...iconStyle, ...(hovered ? iconHoverStyle : null) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAY1BMVEVMr1D////6+vpJrk1FrUn+/P77/ftAq0U9qkJQsVRjuWdbtV+/4MDW69f3/PdZtFzq9evk8eS03LWY0Jp6w35xv3SOypGr16y43brK5suk1Kbu9e51wHhpu22CxYXD4cQ1qTvrQ6HcAAAExUlEQVRoga2a67aqIBCAwQHvqGial7ad93/KQ1opA5pS82evtVd+jQNzj9DP4hdSlNWljpMoSuL6UpVCFv6BB8mnD2Rd2cQQBgwAiBL1hwUhxE3ZZd/BfdHEEWMTVRdgLIobsa//Hlxe49AGXr4gjK/SCV5UcbBDfvKDuCpOw2VjtYbVPs2W9nZ41kbsCHkWFrX2s7XCRQ2HtH5rD7U4CM/6z7Y28EFvUd6ED5cTFlmEXYbP8C53Yit63n2Cp+S0SV4CUboPb93Zik7aPXgffsGejnUb3gbfoB8StFvwL+z91p2kdnj3Pftxqp0NPuQ/YCt6PpjwzM13TGGXzID3FjacCzEveo/hwrgoAFGe5y74QOjwrEYQYGPbSZWY4/N0qDMN3mJ21A58kqvDUUC7hstIhwMR1JuF4nc6Ao/kCt4g9Vj5Yns8Dc+rzpoFXiA2NJn3hg8OVieseMMrHQ655N5Cd7E6q15wiXRjI/VWcOHguhDLJ/yK7niwVlzRRwfVg+sM95Hi8OdpwoXDkULsT3D8LGs8JC4hLRQTHN/D4IrYvHRIIo/bSGiGr1qQcgSXicuRZgreRfg7O45VrxyOVGUNQkv8IJhwHHqOiPJy4mOTk+BuwJ38qPFJYXi3eaDYyw4JxAWRxnNsxHAXL1J0SUwPgWjQ4b1bORMKYrnDoX6ipWNVEJTEcsvgsg6KwrWcYRW5WB6NxEKnDg700pHYshjrV/DatZ6BmthuGSRL0HU3C8Qksf1fRZ3VZXG1S0JwZJklXKzOhz9HerQBh9uwMsyxdtcC3/Bs1n8ZWsjDLLcNrbTY6BJyHwc6bsGTYjGMU32trqIRcV+yTqW8uJ2PL8qJbHX5LMHKlfgwmnQIdk9auf9O8g3vu3Q2XndHMipwddtFCeSrGMOzXm8EVNjn3tButwcq5Er7RZ/pybr2oul6LMBmT+BZe9kwjkoWw179zW6ZFn0v7w4b3pGTD/f6ny1AqTSHS1xEH4c1nbd/TzVXxY1qP7rRnCw9ErTRsWD6Wnd1J8u/xxkGjV6rep3hL4/Sgop8D64wOl1ZIQZoBlyVZdgCU1GEi1yDPuoVtcdpVlBc2qj2BnUQUzlnFKKGZWppoEzhnY6ZC1GjhDbpiVHgWeCoLHyW0P5WYFxeEVL/E57rBngV/zT9GPKAGCeIZdBVfLUttDjQxzK4Z3t41JYtDZd1YmFRXpp3ZIHr2WppFak8lAogr6S3gVd5Vn/RYrs936Az1gtuw3OpVwjr9pwebnpY0nQU8zkVuiPqgwV6P8aepv2sEsOKz7nsUVTURyLUP5OBGRmv3UDneQwX1xjPJdAwh8pTCRhYlNz6thNpX+dGrsBjKErPFj7TRmfa8BgvZgzQ6P3rUeuLbRn92ZoAF7ENLYcfjSyt49bvB9Az2zoo/pFVrCNul7mEKRvDeWO64MS2rxUytwYcsTcWIkX0vVU2VzkucybM3lxCaXlOOfYv12fForhKCCok3X64+HvfFQjzplSBPkvjE4baX1lOd0XpzMb0tRUv+h8tW1VVAIz8NXft+4vq7zP+85q4DcOkEubXy/b29YLbbzZX7L5s4ggsCeH4an73E1nXVrdcpZznrwp+96OCpwyyK/vmUscnfw7xH4D7PX3tCQWNAAAAAElFTkSuQmCC" style={{ width: '40px', height: '40px' }} /> */}
        <FaWhatsapp style={{width:'40px',height:'40px'}}/>
    </div>
  );
};

export default WhatsApp;
