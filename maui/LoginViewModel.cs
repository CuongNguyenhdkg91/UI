using System.ComponentModel;

namespace maui
{
    public class LoginViewModel: INotifyPropertyChanged
    {
        private string _password;
        public string Password
        {
            get => _password;
            set
            {
                _password = value;
                OnPropertyChanged(nameof(Password));
            }
        }

        // public LoginViewModel()
        // {
        //     Password = string.Empty;
        // }

        public event PropertyChangedEventHandler PropertyChanged;

        protected virtual void OnPropertyChanged(string propertyName)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}