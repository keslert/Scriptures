import theme from '../../styles/theme';

export const defaultStyles = {
  overlay : {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 300,
  },
  content : {
    position: 'initial',
    width: 500,
    minHeight: 380,
    padding: 0,
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 80px, rgb(248, 249, 250) 80px, rgb(248, 249, 250) 160px)`,
  }
}