import {useEffect, useState} from "react";
import {ShowAllNeedHelpChildren} from "../../app/store/UserThunks.js";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ButtonShowDetails from "../ButtonShowDetails/ButtonShowDetails.jsx";
import {useDispatch} from "react-redux";

const ShowChildrenWhoNeedHelp = () => {
    const [children, setChildren] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch= useDispatch()
    useEffect(() => {
        console.log(children, "CHILDREN FROM EFFECT")
        const fetchData = async () => {
            try {
                const {payload} = await dispatch(ShowAllNeedHelpChildren());
                setChildren(payload);
                setLoading(false);
            } catch (error) {
                console.error('Ошибка при загрузке данных о детях:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [ dispatch]);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    }

    console.log(children, "CHILDREN")


    return (
        <div>
            {children.length ? (
                children.map(child => (
                    <div key={child.id}>
                        <Card variant="outlined" style={{ marginBottom: '20px' }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {child.firstName} {child.lastName}
                                </Typography>
                                <Typography variant="body2">
                                    Возраст: {child.age}
                                </Typography>
                            </CardContent>
                            <ButtonShowDetails child={child} />
                        </Card>
                    </div>
                ))
            ) : (
                <div>Дети, нуждающиеся в помощи, отсутствуют.</div>
            )}

        </div>
    );
};
export default ShowChildrenWhoNeedHelp;